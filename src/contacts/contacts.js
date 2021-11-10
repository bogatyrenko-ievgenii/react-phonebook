import styled from "styled-components";


const Card = styled.li`
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

export const Button = styled.button`
  border-radius: 3px;
  color: #FFF;
  background-color: rgb(10, 151, 85);
  height: 30px;
`;


const List = styled.ul`
  margin: 0px;
  padding: 0px;
  list-style: none;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 20px;

`;

const Contacts = ({filter, deleteFn}) => {
  const CreateContact = () => {
    return filter().map((contact) => {
      return (
        <Card key={contact.id}>
          <span>{contact.name} : {contact.number}</span>
          <Button id={contact.id} onClick={deleteFn}>delete</Button>
        </Card>
      );
    });
  };



  return (
      <List>
        <CreateContact/>
      </List>
  );
};

export default Contacts;
