import { useCallback, useState } from "react";
import { View, TextInput } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import {SafeAreaView} from 'react-native-safe-area-context';
import { styles } from "./styles";

const InputBox = () => {
  const [newMessage, setNewMessage] = useState("");

  const onSend = () => {
    console.warn("onSend new message", newMessage);

    setNewMessage("");
  };

  const [fontsLoaded] = useFonts({
    "Mulish-Bold": require("../../../assets/fonts/Mulish-Bold.ttf"),
    "Mulish-ExtraBold": require("../../../assets/fonts/Mulish-ExtraBold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView
    edges={['bottom']} 
      style={styles.container} onLayout={onLayoutRootView}>
      {/* icon */}
      <AntDesign name="plus" size={20} color="#075E54" />

      {/* Text Input */}
      <TextInput
        value={newMessage}
        onChangeText={setNewMessage}
        style={styles.input} placeholder="Type  your message..." />
      {/* icon */}
      <MaterialIcons
        onPress={onSend}
        style={styles.send}
        name="send"
        size={16}
        color="white"
      />
    </SafeAreaView>
  );
};

export default InputBox;
