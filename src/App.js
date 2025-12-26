import './App.css';
import Contacts from './Components/Contacts';
import { ToastContainer } from 'react-toastify';
import Header from './Components/Header';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './Components/LoginPage';
import RegistrationPage from './Components/RegistrationPage';
import styled from 'styled-components';
import PrivateRoute from './Components/PrivateRoute';
const TitleInfo = styled.h1`
  text-align: center;
`
const App=()=>{
  return(
    <>
      <Header/>  
      <ToastContainer/>
      <Routes>
        <Route element = {<PrivateRoute/>}>
        <Route path='/contacts' element={<Contacts/>}/>
        </Route>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegistrationPage/>}/>
        <Route path='*' element={<TitleInfo>Please log in or sign up</TitleInfo>}/>
      </Routes>
    </>
  )
}

export default App;

