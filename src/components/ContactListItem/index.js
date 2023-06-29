import { useCallback } from "react";
import { View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { API, graphqlOperation, Auth } from 'aws-amplify';
import { createChatRoom, createUserChatRoom } from "../../graphql/mutations";
import { getCommonChatRoomWithUser } from "../../services/chatRoomService";

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

  const onPress = async () => {
    // Check if we already have a ChatRoom with user;
    const existingChatRoom = await getCommonChatRoomWithUser(user.id);

    if (existingChatRoom) {
      navigation.navigate("Chat", { id: existingChatRoom.id });
      return;
    }

      // Create a new Chatroom
      const newChatRoomData = await API.graphql(
        graphqlOperation(createChatRoom, { input: {} })
      );
      console.log(newChatRoomData);
      if (!newChatRoomData.data?.createChatRoom) {
        console.log("Error creating the chat error");
      }
      const newChatRoom = newChatRoomData.data?.createChatRoom;

      // Add the clicked user to the ChatRoom
      await API.graphql(
        graphqlOperation(createUserChatRoom, {
          input: { chatRoomId: newChatRoom.id, userId: user.id },
        })
      );

      // Add the auth user to the ChatRoom
      const authUser = await Auth.currentAuthenticatedUser();
      await API.graphql(
        graphqlOperation(createUserChatRoom, {
          input: { chatRoomId: newChatRoom.id, userId: authUser.attributes.sub },
        })
      );

      // navigate to the newly created ChatRoom
      navigation.navigate("Chat", { id: newChatRoom.id });
    };
  


  

    return (
      <Pressable
        onPress={onPress}
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
