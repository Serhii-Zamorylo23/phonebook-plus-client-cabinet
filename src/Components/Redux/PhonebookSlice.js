import { createSlice } from "@reduxjs/toolkit";
import { AddContactThunk } from "../../thunks/addContactThunk";
import { toast } from "react-toastify";
import { deleteContactThunk } from "../../thunks/deleteContactThunk";
import {fetchContactsThunk} from "../../thunks/fetchContactsThunk";
import loginUserThunk from "../../thunks/loginUserThunk";
import registrationUserThunk from "../../thunks/registrationUserThunk";
const initialState = {
  items: [],
  error: null,
  filter: "",
  // isLoged: false,
  token: "",
  user: {}
};
const Reducer = createSlice({
  name: "Phonebook",
  initialState,
  reducers: {
    filter: (state, action) => {
      state.filter = action.payload;
    },
    logOut: (state, action) => {
      state.token = ""
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(AddContactThunk.fulfilled, (state, action) => {
        console.log(action.payload)
        state.items.push(action.payload);
        toast.success("Контакт записано!");
      })
      .addCase(AddContactThunk.rejected, (state, action) => {
        state.error = "Упс..Помилка.Контакт не записано";
        toast.error(`${state.error}`);
      })
      .addCase(deleteContactThunk.fulfilled, (state, action) => {
        state.items = state.items.filter( (contact) => contact.id !== action.payload);
        toast.success("Контакт видалено");
        fetchContactsThunk()
      })
      .addCase(deleteContactThunk.rejected, (state, action) => {
        state.error = "Упс..Помилка.Контакт не записано";
        toast.error(`${state.error}`);
      })
      .addCase(fetchContactsThunk.fulfilled,(state,action)=>{
        state.items = action.payload
      })
      .addCase(loginUserThunk.fulfilled,(state,action)=>{
        state.user = action.payload.user;
        // state.isLoged = true;
        state.token = action.payload.token;
      })
      .addCase(loginUserThunk.rejected,(state,action)=>{
        if (action.error.message == "Request failed with status code 400") {
          toast.error("incorrect password/email or you need registration")
      }
      })
      .addCase(registrationUserThunk.fulfilled,(state,action)=>{
        state.user = action.payload.user;
        // state.isLoged = true;
        state.token = action.payload.token
      })
      .addCase(registrationUserThunk.rejected,(state,action)=>{
        console.log(action)
         if(action.error.message == "Request failed with status code 400"){
          toast.error("error creat account.Try again")
       }
       if(action.error.message == "Request failed with status code 500"){
          toast.error("error site.Try again later.Sorry")
        }
      })
  },
});
export default Reducer.reducer;
export const { filter,logOut } = Reducer.actions;
