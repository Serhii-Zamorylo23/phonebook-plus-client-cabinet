import { createAsyncThunk } from "@reduxjs/toolkit";
import registrationUser from "../api/registrationUser";

const registrationUserThunk = createAsyncThunk("phonebook/user/registration",({email,password,navigate})=>{
    return registrationUser({email,password,navigate})
})
export default registrationUserThunk