import { useDispatch } from "react-redux";
import styled from "styled-components";
import { deleteContactThunk } from "../thunks/deleteContactThunk";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import {fetchContactsThunk} from "../thunks/fetchContactsThunk";
import Filter from "./Filter";
import NewContact from "./NewContact";
const List = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  list-style: none;
  padding: 0;
  margin: 20px auto;
  max-width: 500px;
`;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f8f9fa;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px 14px;
  transition: all 0.3s ease;

  &:hover {
    background: #f1f3f5;
    transform: translateY(-2px);
  }
`;

const Button = styled.button`
  background: #d64b4b;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #a02c2c;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.97);
  }
`;
const Title = styled.h2`
  text-align: center;
`;
const Contacts = () => {
  const dispatch = useDispatch();

  const contacts = useSelector((state) => state.items);

  const filter = useSelector((state) => state.filter);
  
  const token = useSelector(state => state.token)
  useEffect(() => {
    dispatch(fetchContactsThunk(token));
  }, []);
  const visibleContacts = contacts.filter((contact) =>contact.name.toLowerCase().includes(filter.toLowerCase()));
  const contactId = (event) => {
    dispatch(deleteContactThunk({
      token,
      id: event.target.id}));
    dispatch(fetchContactsThunk(token));
  };
  return (
    <>
      <NewContact/>
      <Title>Contacts</Title>
      <Filter/>
      <List>
        {visibleContacts.map((contact) => (
          <ListItem id={contact.id}>
            {contact.name} : {contact.phoneNumber}
            <Button id={contact.id} onClick={contactId}>
              Delete
            </Button>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default Contacts;
