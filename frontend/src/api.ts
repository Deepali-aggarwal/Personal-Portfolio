const API_BASE = process.env.API_URL || 'http://localhost:5000';

export async function submitContact(data: { name: string; email: string; subject: string; message: string }) {
  const res = await fetch(`${API_BASE}/api/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  const json = await res.json();
  if (!res.ok) throw json;
  return json;
}

export async function healthCheck() {
  const res = await fetch(`${API_BASE}/api/health`);
  return res.json();
}
