-- Requests for the kit, personal download links, downloads and sent emails.
CREATE TABLE IF NOT EXISTS leads (
  id            INTEGER PRIMARY KEY AUTOINCREMENT,
  email         TEXT NOT NULL UNIQUE,         -- stored lowercase
  name          TEXT NOT NULL,
  country       TEXT NOT NULL,
  organization  TEXT NOT NULL,
  division      TEXT,
  conference    TEXT,
  comment       TEXT,
  lang          TEXT NOT NULL DEFAULT 'en',
  source        TEXT,
  utm_source    TEXT, utm_medium TEXT, utm_campaign TEXT, utm_content TEXT, utm_term TEXT,
  submissions   INTEGER NOT NULL DEFAULT 1,  -- how many times the form was sent with this email
  created_at    TEXT NOT NULL,
  updated_at    TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS tokens (
  token       TEXT PRIMARY KEY,               -- random, 32 bytes, base64url
  lead_id     INTEGER NOT NULL REFERENCES leads(id),
  created_at  TEXT NOT NULL,
  expires_at  TEXT                            -- NULL = never expires
);
CREATE INDEX IF NOT EXISTS tokens_lead ON tokens(lead_id);

CREATE TABLE IF NOT EXISTS downloads (
  id       INTEGER PRIMARY KEY AUTOINCREMENT,
  token    TEXT NOT NULL,
  file_id  TEXT NOT NULL,
  at       TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS emails (
  id          TEXT PRIMARY KEY,
  lead_id     INTEGER NOT NULL,
  to_email    TEXT NOT NULL,
  subject     TEXT NOT NULL,
  html        TEXT NOT NULL,
  text        TEXT NOT NULL,
  mode        TEXT NOT NULL,                  -- 'test' (stored only) or 'live' (sent)
  status      TEXT NOT NULL,                  -- 'stored', 'sent', 'failed: ...'
  created_at  TEXT NOT NULL
);

-- simple rate limiting by IP
CREATE TABLE IF NOT EXISTS attempts (
  ip  TEXT NOT NULL,
  at  TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS attempts_ip ON attempts(ip, at);
