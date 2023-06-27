import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ChatsScreen from '../screens/ChatsScreen';
import NotImplementedScreen from '../screens/NotImplementedScreen';
import { Ionicons, Entypo } from "@expo/vector-icons";



const Tab = createBottomTabNavigator();

const MainTabNavigator = () => { 
    return (
      <Tab.Navigator
        initialRouteName="Chats"
        screenOptions={{
          tabBarStyle: { backgroundColor: "#34B7F1" },
          headerStyle: { backgroundColor: "#34B7F1" },
        }}
      >
        <Tab.Screen
          name="Status"
          component={NotImplementedScreen}
          options={{
            tabBarIcon: ({ focused, size }) => (
              <Ionicons
                name="logo-whatsapp"
                size={size}
                color={focused ? "black" : "#ffffff"}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Calls"
          component={NotImplementedScreen}
          options={{
            tabBarIcon: ({ focused, size }) => (
              <Ionicons
                name="call-outline"
                size={size}
                color={focused ? "black" : "#ffffff"}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Camera"
          component={NotImplementedScreen}
          options={{
            tabBarIcon: ({ focused, size }) => (
              <Ionicons
                name="camera-outline"
                size={size}
                color={focused ? "black" : "#ffffff"}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Chats"
          component={ChatsScreen}
          options={({navigation}) => ({
            tabBarIcon: ({ focused, size }) => (
              <Ionicons
                name="ios-chatbubbles-sharp"
                size={size}
                color={focused ? "black" : "#ffffff"}
              />
            ),
            headerRight: () => (
              <Entypo
                onPress={() => navigation.navigate("Contacts")}
                name="new-message"
                size={20}
                color="white"
                style={{ marginRight: 10 }} 
              />
            ),
          })}
        />
        <Tab.Screen
          name="Settings"
          component={NotImplementedScreen}
          options={{
            tabBarIcon: ({ focused, size }) => (
              <Ionicons
                name="settings-outline"
                size={size}
                color={focused ? "black" : "#ffffff"}
              />
            ),
          }}
        />
      </Tab.Navigator>
    );

}

export default MainTabNavigator;