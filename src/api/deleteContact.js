import axios from "axios"

export const deleteContact= async({token,id}) =>{
    console.log(id)
    const response = await axios.delete(`https://api.hellper.dev/contacts/${id}`,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    )
    return response.data
}