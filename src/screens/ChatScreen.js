import React from 'react';
import { View, Text, StyleSheet, ImageBackground, FlatList } from 'react-native';
import Message from '../components/Message';
import messages from '../../assets/data/messages.json';   
import bg from '../../assets/images/BG.png';


const ChatScreen = () => {
  return (
    <ImageBackground source={bg} style={styles.bg}>
      <FlatList
        data={messages}
        style={styles.list}
        renderItem={({ item }) => <Message message={item} />}
        inverted
      />
    </ImageBackground>
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
