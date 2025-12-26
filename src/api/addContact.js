import axios from "axios"

export const AddContact=async({token,name,contact})=>{
    const response = await axios.post("https://api.hellper.dev/contacts",
    {name: name,phoneNumber: contact},
    {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

)
    return response.data
}