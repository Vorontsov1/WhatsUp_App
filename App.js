import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import ChatsScreen from './src/screens/ChatsScreen';
import ChatScreen from './src/screens/ChatScreen';

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#34B7F1",
        justifyContent: "center",
        paddingVertical: 50,
      }}
    >
      {/* <ChatsScreen /> */}
      <ChatScreen />
      <StatusBar style="auto" />
    </View>
  );
}

