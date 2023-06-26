import React from 'react';
import {
  StyleSheet,
  ImageBackground,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Message from '../components/Message';
import InputBox from '../components/InputBox';
import messages from '../../assets/data/messages.json';   
import bg from '../../assets/images/BG.png';


const ChatScreen = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.bg}
    >
      <ImageBackground source={bg} style={styles.bg}>
        <FlatList
          data={messages}
          style={styles.list}
          renderItem={({ item }) => <Message message={item} />}
          inverted
        />
        <InputBox />
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}
 

const styles = StyleSheet.create({
    bg: {
      flex: 1,
  },
  list: {
    padding: 15,
  },
});
export default ChatScreen;
