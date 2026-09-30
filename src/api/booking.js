const API_BASE = import.meta.env.VITE_API_URL || '';

export async function submitBooking(payload) {
  const entry = {
    ...payload,
    createdAt: new Date().toISOString(),
  };

  if (API_BASE) {
    const response = await fetch(`${API_BASE}/bookings`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(entry),
    });

    if (!response.ok) {
      throw new Error('Unable to send your request. Please try again.');
    }

    return response.json();
  }

  await new Promise((resolve) => setTimeout(resolve, 700));
  const existing = JSON.parse(localStorage.getItem('astrochakrra.bookings') || '[]');
  const saved = { id: crypto.randomUUID(), ...entry };
  existing.push(saved);
  localStorage.setItem('astrochakrra.bookings', JSON.stringify(existing));
  return { ok: true, data: saved };
}
