import { Card, DelButton, List } from '../styledComponents/styledComponents';


const Contacts = ({filter, deleteFn}) => {
  const CreateContact = () => {
    return filter().map((contact) => {
      return (
        <Card key={contact.id}>
          <span>{contact.name} : {contact.number}</span>
          <DelButton id={contact.id} onClick={deleteFn}>delete</DelButton>
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
