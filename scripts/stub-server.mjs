// Local stand-in for the form backend. Logs each request and answers with
// STUB_STATUS (default 200). Usage:
//   npm run stub                  -> http://localhost:8787/lead returns 200
//   STUB_STATUS=500 npm run stub  -> simulates a server error
//   STUB_DELAY=3000 npm run stub  -> slow response (loading state)
import { createServer } from 'node:http';

const port = Number(process.env.STUB_PORT ?? 8787);
const status = Number(process.env.STUB_STATUS ?? 200);
const delay = Number(process.env.STUB_DELAY ?? 300);
const cors = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

createServer((req, res) => {
  if (req.method === 'OPTIONS') {
    res.writeHead(204, cors).end();
    return;
  }
  let body = '';
  req.on('data', (c) => (body += c));
  req.on('end', () => {
    let parsed = body;
    try { parsed = JSON.parse(body); } catch { /* keep raw */ }
    console.log(new Date().toISOString(), req.method, req.url, JSON.stringify(parsed));
    setTimeout(() => {
      res.writeHead(status, { ...cors, 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ ok: status < 300 }));
    }, delay);
  });
}).listen(port, () => console.log(`Form stub on http://localhost:${port} (status ${status})`));
