// apis/getAllComments.js
export const getAllComments = async () => {
    const response = await fetch('http://localhost:5000/api/get-elmech-comments');  // Replace with your actual API endpoint
    if (!response.ok) {
      throw new Error('Failed to fetch comments');
    }
    return response.json();
  };