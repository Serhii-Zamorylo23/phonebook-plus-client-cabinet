import axios from "axios"
const registrationUser = async ({email,password,navigate}) =>{
    const response = await axios.post("https://api.hellper.dev/auth/register",{login: email,password: password})
    navigate("/contacts")
    return response.data
}
export default registrationUser