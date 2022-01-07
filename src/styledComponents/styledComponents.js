import styled from "styled-components";

export const Form = styled.form`
width: 300px;
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

export const DelButton = styled.button`
  border-radius: 3px;
  color: #FFF;
  background-color: rgb(10, 151, 85);
  height: 30px;
`;

export const AddButton = styled(DelButton)`
width: 50px;
margin: 25px 0px 0px 25px;
`;

export const Fields = styled.div`
display: flex;
flex-direction: column;
`;

export const InputFieldFilter = styled(InputField)`
  margin: 0px;
`;

export const Card = styled.li`
  margin: 7px;
  padding: 3px 15px 3px 25px;
  box-shadow: 1px 1px 5px;
  width: 400px;
  line-height: 2em;
  color: rgb(3, 29, 17);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const List = styled.ul`
  margin: 0px;
  padding: 0px;
  list-style: none;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 20px;

`;