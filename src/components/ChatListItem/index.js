import { useCallback } from "react";
import { View, Text, Image } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { styles } from "./styles";

const ChatListItem = ({chat}) => {
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
    <View style={styles.container} onLayout={onLayoutRootView}>
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
                  <Text style={styles.subTitle}>{chat.lastMessage.createdAt}</Text>
        </View>
        <Text style={styles.subTitle} numberOfLines={2}>
          {chat.lastMessage.text}
        </Text>
      </View>
    </View>
  );
};

export default ChatListItem;
