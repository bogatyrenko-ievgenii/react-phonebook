import { InputFieldFilter } from "../styledComponents/styledComponents";

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