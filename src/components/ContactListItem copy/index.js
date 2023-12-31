import { useCallback } from "react";
import { View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";


import { styles } from "./styles";

dayjs.extend(relativeTime);


const ChatListItem = ({ chat }) => {
  const navigation = useNavigation();

  const [fontsLoaded] = useFonts({
    "Mulish-Bold": require("../../../assets/fonts/Mulish-Bold.ttf"),
    "Mulish-Medium": require("../../../assets/fonts/Mulish-Medium.ttf"),
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
    <Pressable
      onPress={() => navigation.navigate("Chat", { id: chat.id, name: chat.user.name })}
      style={styles.container} onLayout={onLayoutRootView}>
      <Image
        source={{
          uri: chat.user.image,
        }}
        style={styles.avatar}
      />
      <View style={styles.content}>
        <View style={styles.row}>
          <Text style={styles.name} numberOfLines={1}>
            {chat.user.name}
          </Text>
          <Text
            style={styles.subTitle}>
              {dayjs(chat.lastMessage.createdAt).fromNow(true)}</Text>
        </View>
        <Text style={styles.subTitle} numberOfLines={2}>
          {chat.lastMessage.text}
        </Text>
      </View>
    </Pressable>
  );
};

export default ChatListItem;
