import { createAsyncThunk } from "@reduxjs/toolkit";
import { AddContact } from "../api/addContact";

export const AddContactThunk=createAsyncThunk("phonebook/add",({token,name,contact})=>{
    return AddContact({token,name,contact})
})