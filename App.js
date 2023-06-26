import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import ChatListItem from './src/components/ChatListItem';

const chat = {
  id: "1",
  user: {
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
    name: "Laura Palmer",
  },
  lastMessage: {
    text: "How are you doing?",
    createdAt: '5:15',
  
  }
};

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#128C7E",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ChatListItem
        chat={chat}
      />
      <StatusBar style="auto" />
    </View>
  );
}

