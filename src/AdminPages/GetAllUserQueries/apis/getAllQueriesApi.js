// src/apis/getAllQueriesApi.js
export const getAllQueriesApi = async () => {
  const response = await fetch('http://localhost:5000/api/get-user-queries', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch queries');
  }

  return response.json();
};
