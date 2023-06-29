import { useState, useEffect } from "react";
import { FlatList } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import ChatListItem from "../../components/ChatListItem"; 
import { API, graphqlOperation, Auth } from 'aws-amplify';
import { listChatRooms } from "./queries";




const ChatsScreen = () => {
    const [chatRoom, setChatRooms] = useState([]);

    useEffect(() => {
        const fetchChatrooms = async () => {
        const authUser = await Auth.currentAuthenticatedUser();

        const response = await API.graphql(
          graphqlOperation(listChatRooms, { id: authUser.attributes.sub })
        );
            setChatRooms(response.data.getUser.ChatRooms.items);
        };
        fetchChatrooms();
     }, []);

    return (
      <FlatList
        style={{ paddingHorizontal: 12, backgroundColor: "#128C7E" }}
        data={chatRoom}
        renderItem={({ item }) => <ChatListItem chat={item.chatRoom} />}
      />
    );
};

export default ChatsScreen;
