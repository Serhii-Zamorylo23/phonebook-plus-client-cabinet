import axios from "axios"
export const fetchContacts = async (token) => {
    const response = await axios.get(
      "https://api.hellper.dev/contacts",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  
    return response.data;
  };