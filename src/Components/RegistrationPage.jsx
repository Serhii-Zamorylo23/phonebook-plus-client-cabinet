import styled from "styled-components"
import registrationUserThunk from "../thunks/registrationUserThunk";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const RegistrationFormStyled = styled.form`
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
const InputRegisterFormStyle = styled.input`
  padding: 6px 8px;
  border-radius: 6px;
  border: 1px solid #bbb;
  transition: border-color 0.3s ease;
  margin-bottom:10px;
  &:focus {
    outline: none;
    border-color: #666;
  }
`;
const RegistrationBtnStyle = styled.button`
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
const RegistrationPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const registrationValue = (e)=>{
        e.preventDefault()
        const nameValue = e.target.elements.name.value
        const emailValue = e.target.elements.email.value
        const passwordValue = e.target.elements.password.value
        dispatch(registrationUserThunk({email:emailValue,password:passwordValue,navigate:navigate}))
    }
    return (

        <RegistrationFormStyled onSubmit={registrationValue}>
            <InputRegisterFormStyle type="text" placeholder="Write your name" name="name"/>
            <InputRegisterFormStyle type="email" placeholder="Write your email" name="email"/>
            <InputRegisterFormStyle type="password" placeholder="Write your password" name="password"/>
            <RegistrationBtnStyle>Sign up</RegistrationBtnStyle>
        </RegistrationFormStyled>
    )
}
export default RegistrationPage