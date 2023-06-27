import { useCallback } from "react";
import { View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import { styles } from "./styles";

dayjs.extend(relativeTime);

const ContactListItem = ({ user  }) => {
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
        onPress={() => {}}
        style={styles.container}
        onLayout={onLayoutRootView}
      >
        <Image
          source={{
            uri: user.image,
          }}
          style={styles.avatar}
        />
        <View style={styles.content}>
          <Text style={styles.name} numberOfLines={1}>
            {user.name}
          </Text>
          <Text style={styles.subTitle} numberOfLines={2}>
            {user.status}
          </Text>
        </View>
      </Pressable>
    );
};

export default ContactListItem;
