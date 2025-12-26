import styled from "styled-components"
import { BsFillTelephoneFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import logOutUserThunk from "../thunks/logOutUserThunk";
import { logOut } from "./Redux/PhonebookSlice";
const HeaderStyle = styled.header`
    display: flex;
    width: 100%;
    min-width: 320px;
    height: 100px;
    box-shadow: 0 5px 10px -5px rgba(0, 0, 0, 0.3);
    justify-content: space-between;

`
const IconContainer = styled.div`
    display: flex;
    width: 200px; 
    align-items: center;
    column-gap: 10px;
    margin-left: 10px;
`
const AuthorizationStyle = styled.div`
    display: flex;
    align-items: center;
    column-gap: 10px;
    margin-right: 10px;
`
const AuthorizationBtnStyled = styled.button`
    width: 70px;
    height: 30px;
    border-radius: 15px;
    transition-duration: 0.5s;
    border:none;
    background: none;
    &:hover{
        background: blue;
        color: white;
        transition-duration: 0.8s;
    }
`
const Header = () => {
    let loginRoute = useNavigate()
    let registrationRoute = useNavigate()
    let logOutRoute = useNavigate()
    const dispatch = useDispatch()
    
    const routeLogin = () =>{
        loginRoute("/login")
    }
    const routeRegistration = () =>{
        registrationRoute("/register")
    }
    const token = useSelector(state => state.token)
    const logoutFunction = () => {
        dispatch(logOut())
        logOutRoute("/")
    }
    return(
        <HeaderStyle>
            <IconContainer>
                <BsFillTelephoneFill/>
                <h1>Phonebook</h1>
            </IconContainer>
            <AuthorizationStyle >
            {token ? (
                    <AuthorizationBtnStyled onClick={logoutFunction}>Log out</AuthorizationBtnStyled>
                ) : (
                    <>
                    <AuthorizationBtnStyled onClick={routeLogin}>Sign in</AuthorizationBtnStyled>
                    <AuthorizationBtnStyled onClick={routeRegistration}>Sign up</AuthorizationBtnStyled>
                    </>
                )
            }
            </AuthorizationStyle>
        </HeaderStyle>
    )
}
export default Header