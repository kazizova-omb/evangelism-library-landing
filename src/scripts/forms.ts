// Small helpers shared by the registration form (landing) and the sign-in form (portal).
import { isValidEmail, suggestEmail } from '../lib/email';

/** Marks a .field as invalid and links its error message for screen readers. */
export function setInvalid(field: HTMLElement, input: HTMLElement | null, invalid: boolean) {
  field.classList.toggle('is-invalid', invalid);
  const el = input ?? field.querySelector('input, select, textarea');
  const err = field.querySelector<HTMLElement>('.err');
  if (!el || !err) return;
  if (invalid) {
    el.setAttribute('aria-invalid', 'true');
    el.setAttribute('aria-describedby', err.id);
  } else {
    el.removeAttribute('aria-invalid');
    el.removeAttribute('aria-describedby');
  }
}

/** Checks every [required] input in `scope`; focuses the first bad one. */
export function validate(scope: HTMLElement): boolean {
  let firstBad: HTMLElement | null = null;
  scope.querySelectorAll<HTMLInputElement>('[required]').forEach((inp) => {
    const v = inp.value.trim();
    const ok = inp.type === 'checkbox' ? inp.checked : inp.type === 'email' ? isValidEmail(v) : v !== '';
    setInvalid(inp.closest('.field')!, inp, !ok);
    if (!ok && !firstBad) firstBad = inp;
  });
  (firstBad as HTMLElement | null)?.focus();
  return !firstBad;
}

/** Clears a field's error as soon as the visitor edits it. */
export function clearOnEdit(scope: HTMLElement) {
  scope.querySelectorAll<HTMLElement>('input, select, textarea').forEach((inp) => {
    const clear = () => {
      const field = inp.closest<HTMLElement>('.field');
      if (field?.classList.contains('is-invalid')) setInvalid(field, inp, false);
    };
    inp.addEventListener('input', clear);
    inp.addEventListener('change', clear);
  });
}

/** Email field: checked on blur, with a one-click fix for common typos ("gmial.con"). */
export function emailHelp(input: HTMLInputElement, box: HTMLElement) {
  const show = () => {
    const fix = suggestEmail(input.value);
    if (!fix) { box.hidden = true; box.textContent = ''; return; }
    const [before, after] = (box.dataset.template ?? '{email}').split('{email}');
    const b = document.createElement('button');
    b.type = 'button';
    b.textContent = fix;
    b.addEventListener('click', () => {
      input.value = fix;
      box.hidden = true;
      setInvalid(input.closest('.field')!, input, false);
      input.focus();
    });
    box.replaceChildren(document.createTextNode(before ?? ''), b, document.createTextNode(after ?? ''));
    box.hidden = false;
  };
  input.addEventListener('blur', () => {
    const v = input.value.trim();
    if (v && !isValidEmail(v)) setInvalid(input.closest('.field')!, input, true);
    show();
  });
  input.addEventListener('input', () => { if (!box.hidden) box.hidden = true; });
}

/** "Name@Gmail.COM" -> "Name@gmail.com" */
export const normalizeEmail = (v: string) => v.trim().replace(/@(.+)$/, (_, d: string) => '@' + d.toLowerCase());

export function setLoading(btn: HTMLButtonElement, on: boolean) {
  btn.classList.toggle('is-loading', on);
  btn.setAttribute('aria-busy', String(on));
  btn.disabled = on;
  btn.textContent = (on ? btn.dataset.sending : btn.dataset.label) ?? '';
}
