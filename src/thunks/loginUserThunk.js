import { createAsyncThunk } from "@reduxjs/toolkit";
import loginUserAPI from "../api/loginUser";

const loginUserThunk = createAsyncThunk("phonebook/user/login",({email,password,navigate})=>{
    return loginUserAPI({email,password,navigate})
})
export default loginUserThunk