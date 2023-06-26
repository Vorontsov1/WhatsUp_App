import React, { useCallback } from "react";
import { View, Text } from 'react-native';
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { styles } from "./styles";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);




const Message = ({ message }) => {

 const isMyMessage = () => {
   return message.user.id === "u1";
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
    <View
      style={[
        styles.container,
        {
          backgroundColor: isMyMessage() ? "#34B7F1" : "#25D366",
          alignSelf: isMyMessage() ? "flex-end" : "flex-start",
        },
      ]}
      onLayout={onLayoutRootView}
    >
      <Text style={styles.text}>{message.text}</Text>
      <Text style={styles.time}>{dayjs(message.createdAt).fromNow()}</Text>
    </View>
  );
}

export default Message; 

