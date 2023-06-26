import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import ChatListItem from './src/components/ChatListItem';

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ChatListItem />
      <StatusBar style="auto" />
    </View>
  );
}

