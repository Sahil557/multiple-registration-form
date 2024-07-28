import axios from 'axios';

const API_URL = "https://loanmanagementsystem-nrfq.onrender.com/api/v1/customer";

const registerCustomer = async (formData: any) => {
  try {
    const response = await axios.post(`${API_URL}/register`, formData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export default registerCustomer;