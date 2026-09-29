import type en from './locales/en';

// en.ts is the reference shape. Other locales must provide the same keys,
// with any string values (literal types are widened).
type Widen<T> = T extends string
  ? string
  : T extends boolean
    ? boolean
    : T extends readonly (infer U)[]
      ? readonly Widen<U>[]
      : T extends object
        ? { readonly [K in keyof T]: Widen<T[K]> }
        : T;

export type Site = Widen<typeof en>;
