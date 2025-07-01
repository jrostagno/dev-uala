export async function handler() {
  const response = await fetch(
    "https://uala-dev-challenge.s3.us-east-1.amazonaws.com/transactions.json"
  );

  const data = await response.json();

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*", // 🔓 Permitir CORS desde cualquier origen
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
}
