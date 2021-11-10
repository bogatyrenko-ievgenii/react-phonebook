import styled from "styled-components";
import { Button } from "../contacts/contacts";


const Form = styled.form`
  max-width: 300px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  line-height: 12px;
  margin-bottom: 20px;
`;

export const InputField = styled.input`
  width: 200px;
  height: 25px;
  font-size: 20px;
  font-weight: 600;
  margin-left: 100px;
  border-radius: 3px;
`;

const AddButton = styled(Button)`
  width: 50px;
  margin: 25px 0px 0px 25px;
`;

const Fields = styled.div`
  display: flex;
  flex-direction: column;
`;


const Input = (props) => {
  return (
    <Form>
      <Fields>
      <InputField
        autoComplete="off"
        placeholder="name"
        type="text"
        name="name"
        value={props.value.name}
        onChange={props.onHandleInput}
      />
      <br />
      <InputField
        autoComplete="off"
        placeholder="number"
        type="tel"
        name="number"
        value={props.value.number}
        onChange={props.onHandleInput}
      />
      </Fields>
      <AddButton type="submit" onClick={props.onHandleAdd}>
        Add
      </AddButton>
    </Form>
  );
};

export default Input;
