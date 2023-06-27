import { useCallback } from "react";
import { View, Text, FlatList, ImageBackground } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import ChatListItem from "../components/ChatListItem";
import chats from "../../assets/data/chats.json";
import backGroundImage from "../../assets/images/BG.png";



const ChatsScreen = () => {
    const [fontsLoaded] = useFonts({
        "Mulish-Bold": require("../../assets/fonts/Mulish-Bold.ttf"),
        "Mulish-ExtraBold": require("../../assets/fonts/Mulish-ExtraBold.ttf"),
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
      <FlatList
        style={{ paddingHorizontal: 12, backgroundColor: "#128C7E" }}
        onLayout={onLayoutRootView}
        data={chats}
        renderItem={({ item }) => <ChatListItem chat={item} />}
      />
    );
};

export default ChatsScreen;
