export async function onRequest() {
  return new Response(JSON.stringify({
    status: 'healthy',
    service: 'BrainSAIT API',
    timestamp: new Date().toISOString()
  }), {
    headers: { 'Content-Type': 'application/json' }
  });
}
