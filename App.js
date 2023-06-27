import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import Navigator from "./src/navigation";
import {withAuthenticator} from 'aws-amplify-react-native';
import { Amplify } from 'aws-amplify';
import awsconfig from './src/aws-exports';


Amplify.configure({
  ...awsconfig,
  Analytics: {
    disabled: true,
  },
});

function App () {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#34B7F1",
        justifyContent: "center",
      }}
    >
      <Navigator />
      <StatusBar style="auto" />
    </View>
  );
}

export default withAuthenticator(App);   
