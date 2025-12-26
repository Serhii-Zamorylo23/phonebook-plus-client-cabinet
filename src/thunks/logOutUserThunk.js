import { createAsyncThunk } from "@reduxjs/toolkit";
import logoutUser from "../api/logoutUser";

const logOutUserThunk = createAsyncThunk("phonebook/users/logout",({token,navigate})=>{
    logoutUser({token})
})
export default logOutUserThunk