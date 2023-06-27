import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import Navigator from "./src/navigation";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#34B7F1",
        justifyContent: "center",
      }}
    >
      <Navigator />
      <StatusBar style="auto" />
    </View>
  );
}
