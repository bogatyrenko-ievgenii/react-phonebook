import { InputField } from "../input/input";
import styled from "styled-components";


const InputFieldFilter = styled(InputField)`
  margin: 0px;
`;

const Filter = ({value, onHandleInput}) => {
    return (
      <InputFieldFilter
        type="filter"
        autoComplete="off"
        placeholder="filter"
        name="filter"
        value={value.filter}
        onChange={onHandleInput}
      />
    );
  };


  export default Filter;