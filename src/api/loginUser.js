import axios from "axios"
const loginUserAPI = async({email,password,navigate}) => {
    const response = await axios.post("https://api.hellper.dev/auth/login",{login: email,password: password,navigate})
    navigate("/contacts")
    return response.data;
}
export default loginUserAPI