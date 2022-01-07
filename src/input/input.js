// import styled from "styled-components";
import { AddButton, Form, Fields, InputField } from "../styledComponents/styledComponents";

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
