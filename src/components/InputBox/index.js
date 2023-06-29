import { useCallback, useState } from "react";
import { View, TextInput } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import {SafeAreaView} from 'react-native-safe-area-context';
import { styles } from "./styles";
import { API, graphqlOperation, Auth } from 'aws-amplify';
import { createMessage, updateChatRoom } from "../../graphql/mutations";




const InputBox = ({chatroom}) => {
  const [text, setText] = useState("");

  const onSend = async () => {
    console.warn("onSend new message", text);

const authUser = await Auth.currentAuthenticatedUser();

    const newMessage = {
      chatroomID: chatroom.id,
      userID: authUser.attributes.sub,
      text,
    };

   const newMessageData = await API.graphql(graphqlOperation(createMessage, { input: newMessage }));

    setText("");


    // set the new message as last message og the chatroom
    await API.graphql(
      graphqlOperation(updateChatRoom, {
        _version: chatroom._version,
        chatRoomLastMessageId: newMessageData.data.createMessage.id,
        id: chatroom.id ,
      })
    );
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
        value={text}
        onChangeText={setText}
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
