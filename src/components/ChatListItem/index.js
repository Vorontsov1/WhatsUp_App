import { useCallback } from "react";
import { View, Text, Image } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { styles } from "./styles";

const ChatListItem = () => {
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
          uri: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
        }}
        style={styles.avatar}
      />
      <View style={styles.content}>
        <View style={styles.row}>
          <Text style={styles.name} numberOfLines={1}>Laura</Text>
          <Text style={styles.subTitle}>4:26</Text>
        </View>
        <Text style={styles.subTitle} numberOfLines={2}>Hello Laura</Text>
      </View>
    </View>
  );
};

export default ChatListItem;
