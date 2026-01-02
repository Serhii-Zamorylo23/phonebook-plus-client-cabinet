import styled from "styled-components";
import { useDispatch } from "react-redux"
import {AddContactThunk} from "../thunks/addContactThunk"
import { useSelector } from "react-redux";
const Form = styled.form`
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
`;

const Label = styled.p`
  margin: 0;
  font-weight: 500;
  color: #333;
`;

const Input = styled.input`
  padding: 6px 8px;
  border-radius: 6px;
  border: 1px solid #bbb;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #666;
  }
`;

const ButtonForm = styled.button`
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

  &:active {
    transform: scale(0.97);
  }
`;
const NewContact=()=>{
  const dispatch=useDispatch()
  const contacts=useSelector(state => state.items)
  const token = useSelector(state => state.token)
  const addNewContact = (event) => {
    event.preventDefault();
    const name=event.target.elements.userName.value;
    const contact=event.target.elements.number.value
    const isDuplicate = contacts.some((contact) => contact.name == name);
    if (isDuplicate) {
      alert("A contact with this name already exists!");
      return;
    } 
    dispatch(AddContactThunk({token,name,contact}))

  };
  return(
    <Form onSubmit={addNewContact}>
        <Label>Name</Label>
        <Input name="userName" type="text"></Input>
        <Label>Number</Label>
        <Input
          type="tel"
          name="number"
          pattern="^\+[1-9][0-9]{7,14}$"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <ButtonForm>Add contact</ButtonForm>
      </Form>
  )
  };
export default NewContact;
