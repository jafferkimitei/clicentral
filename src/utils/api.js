// src/utils/api.js
const BASE_URL = 'https://api.example.com'; // Replace with your API base URL

const fetchAPI = async (endpoint, options = {}) => {
  const response = await fetch(`${BASE_URL}/${endpoint}`, options);
  if (!response.ok) {
    throw new Error(`Failed to fetch data from API: ${response.statusText}`);
  }
  return await response.json();
};

export { fetchAPI };
