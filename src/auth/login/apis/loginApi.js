/**
 * Function to call the login API.
 * - Sends user credentials to the backend.
 * - Returns the response data upon success or throws an error.
 * 
 * @param {Object} data - User credentials (email and password).
 * @returns {Object} Response data containing tokens and user details.
 */
export const loginApi = async (data) => {
  const response = await fetch("http://localhost:5000/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Failed to log in");
  }

  return response.json();
};
