import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import ChatsScreen from './src/screens/ChatsScreen';

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#128C7E",
        justifyContent: "center",
        paddingVertical: 50,
      }}
    >
      <ChatsScreen />
      <StatusBar style="auto" />
    </View>
  );
}

