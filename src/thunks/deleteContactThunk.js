import { createAsyncThunk } from "@reduxjs/toolkit";
import { deleteContact } from "../api/deleteContact";

export const deleteContactThunk = createAsyncThunk("phonebook/delete", ({token,id}) => {
  return deleteContact({token,id});
});
