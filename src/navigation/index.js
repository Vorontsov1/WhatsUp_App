import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import ChatScreen from '../screens/ChatScreen';
import ContactsScreen from '../screens/ContactsScreen';
import MainTabNavigator from './MainTabNavigation';



const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#34B7F1" },
          headerTintColor: "black",
          cardStyle: { backgroundColor: "#34B7F1" },
        }}
      >
        <Stack.Screen
          name="Home"
          component={MainTabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Chat" component={ChatScreen} />
        <Stack.Screen name="Contacts" component={ContactsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;