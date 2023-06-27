import { FlatList} from 'react-native';
import chats from "../../assets/data/chats.json";
import ContactListItem from "../components/ContactListItem";




const ContactsScreen = () => {
  return (
    <FlatList
      style={{ paddingHorizontal: 12, backgroundColor: "#128C7E" }}
      data={chats}
      renderItem={({ item }) => <ContactListItem user={item.user} />}
    />
  );
}

export default ContactsScreen;
