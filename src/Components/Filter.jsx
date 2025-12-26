import { useDispatch } from "react-redux";
import { filter } from "./Redux/PhonebookSlice";
import styled from "styled-components";

const FilterBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 25px;
`;

const Label = styled.p`
  font-weight: 500;
  color: #333;
  margin-bottom: 8px;
`;

const Input = styled.input`
  padding: 6px 10px;
  border-radius: 6px;
  border: 1px solid #bbb;
  width: 220px;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #888;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
  }
`;

const Filter = () => {
    const dispatch=useDispatch()
  const filterValue = (event) => {
    dispatch(filter(event.target.value))
  };
  return (
    <>
      <FilterBox>
        <Label>Find contacts by name</Label>
        <Input type="text" onChange={filterValue} />
      </FilterBox>
    </>
  );
};
export default Filter;
