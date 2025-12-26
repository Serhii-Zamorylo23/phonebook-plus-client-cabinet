import styled from "styled-components"
import loginUserThunk from "../thunks/loginUserThunk";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const LogInStyled = styled.button`
    background: #3c82f6;
    color: white;
    font-weight: 500;
    border: none;
    border-radius: 6px;
    padding: 8px 0;
    margin-top: 10px;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
        background: #2a65cc;
        transform: scale(1.03);
    }
`
const LogInFormStyle = styled.form`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 260px;
    margin: 30px auto;
    padding: 16px;
    border: 2px solid #ddd;
    border-radius: 10px;
    background: #fafafa;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.05);
`
const InputLoginFormStyle = styled.input`
  padding: 6px 8px;
  border-radius: 6px;
  border: 1px solid #bbb;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #666;
  }
`;
const FontStyle = styled.h1`
    text-align: center;
`
const LoginPage = () =>{
    const dispach = useDispatch()
    const navigate = useNavigate()
    const getUserInformation = (e) =>{
        e.preventDefault()
        let emailValue = e.target.elements.emailInput.value
        let passwordValue = e.target.elements.passwordInput.value
        dispach(loginUserThunk({email:emailValue,password:passwordValue,navigate:navigate}))
    }
    return(
        <>
            <FontStyle>Welcome back!</FontStyle>
            <LogInFormStyle onSubmit={getUserInformation}>
                <InputLoginFormStyle type="email" placeholder="Write your email" name="emailInput"/>
                <InputLoginFormStyle type="password" placeholder="Write your password" name="passwordInput"/>
                <LogInStyled >Log in</LogInStyled>
            </LogInFormStyle>
        </>
    )
}
export default LoginPage