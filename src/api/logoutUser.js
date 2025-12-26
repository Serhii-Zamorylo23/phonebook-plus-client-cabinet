import axios from "axios"

const logoutUser = async ({token,navigate}) => {
    console.log(token)
    const response = await axios.post(
        "https://connections-api.goit.global/users/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
    );  
    return response.data
}
export default logoutUser
