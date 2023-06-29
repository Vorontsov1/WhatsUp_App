import React, { useCallback, useState, useEffect } from "react";
import { View, Text } from 'react-native';
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { styles } from "./styles";
import Icon from "react-native-vector-icons/Ionicons";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import {Auth } from 'aws-amplify';
dayjs.extend(relativeTime);




const Message = ({ message }) => {
  const [isMe, setIsMe] = useState(false);

  useEffect(() => {
      const isMyMessage = async () => {
        const authUser = await Auth.currentAuthenticatedUser();
        setIsMe(message.userID === authUser.attributes.sub);
      };
      isMyMessage();
    }, []);
  

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
      <View
        style={[
          styles.container,
          {
            backgroundColor: isMe ? "#34B7F1" : "#25D366",
            alignSelf: isMe ? "flex-end" : "flex-start",
          },
        ]}
        onLayout={onLayoutRootView}
      >
        <Text style={styles.text}>{message.text}</Text>
        <Text style={styles.time}>{dayjs(message.createdAt).fromNow()}</Text>
        <Icon
          style={styles.cloudIcon}
          name="cloud"
          size={26}
          color={isMe ? "#34B7F1" : "#25D366"}
        />
      </View>
    );
  }


export default Message; 

