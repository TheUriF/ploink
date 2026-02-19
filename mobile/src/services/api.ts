const API_BASE_URL = process.env.EXPO_PUBLIC_API_BASE_URL?.replace(/\/$/, '') ?? '';

const getUrl = (path: string) => {
  if (!API_BASE_URL) {
    throw new Error('EXPO_PUBLIC_API_BASE_URL is not configured.');
  }
  return `${API_BASE_URL}${path}`;
};

export async function submitForm(path: '/api/application' | '/api/contact' | '/api/gethelp', payload: Record<string, unknown>) {
  const response = await fetch(getUrl(path), {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || 'Request failed');
  }
}
