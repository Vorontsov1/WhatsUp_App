import {useState, useEffect} from 'react';
import { FlatList } from 'react-native';
// import chats from "../../assets/data/chats.json";
import ContactListItem from "../components/ContactListItem";
import { API, graphqlOperation } from 'aws-amplify';
import {listUsers} from "../graphql/queries";



const ContactsScreen = () => {
  const [users, setUsers] = useState([]);
  
  useEffect(() => { 
    API.graphql(graphqlOperation(listUsers)).then((result) => {
      console.log(result);
      setUsers(result.data?.listUsers?.items);
    })
  }, [])


  return (
    <FlatList
      style={{ paddingHorizontal: 12, backgroundColor: "#128C7E" }}
      data={users}
      renderItem={({ item }) => <ContactListItem user={item} />}
    />
  );
}

export default ContactsScreen;
