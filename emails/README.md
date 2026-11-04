# Email templates

HTML emails for the download portal, sent by the backend through Resend. One folder per site language.

| File | When | Subject |
|---|---|---|
| `registered.html` | right after registration | in the `<!-- Subject: -->` comment at the top |
| `code.html` | when a visitor asks for a sign-in code | same |

Placeholders (replace before sending):

| Placeholder | Value |
|---|---|
| `{{first_name}}` | first name from the registration form |
| `{{portal_url}}` | `https://<site>/downloads` (`/es/downloads` for Spanish) |
| `{{code}}` | the 6-digit sign-in code |
| `{{site_url}}` | site origin without a trailing slash; the logo is at `{{site_url}}/email/all-things-new.png` |
| `{{license_url}}` | `https://<site>/license` (`/es/license`) |

Inline styles only, table layout, no web fonts required: safe in Gmail, Outlook and Apple Mail.
