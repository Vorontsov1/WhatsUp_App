import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import Navigator from "./src/navigation";
import { withAuthenticator } from "aws-amplify-react-native";
import { Amplify, Auth, API, graphqlOperation } from "aws-amplify";
import awsconfig from "./src/aws-exports";
import { getUser } from "./src/graphql/queries";
import {createUser} from "./src/graphql/mutations";




Amplify.configure({
  ...awsconfig,
  Analytics: {
    disabled: true,
  },
});

function App() {

  useEffect(() => {
    const syncUser = async () => {
      try {
        //get Auth userSelect:
        const authUser = await Auth.currentAuthenticatedUser({
          bypassCache: true,
        });
        console.log(authUser);
        // query the database using Auth user id(sub)
        const userData = await API.graphql(
          graphqlOperation(getUser, { id: authUser.attributes.sub })
        );
        console.log(userData);

        if (userData.data.getUser) {
          console.log("user already exist in DB");
          return;
        }

        // if there is no users in db, create one
        const newUser = {
          id: authUser.attributes.sub,
          name: authUser.attributes.phone_number,
          status: "Hey, i am using What`sapp",
        };

        const newUserResponse = await API.graphql(
          graphqlOperation(createUser, { input: newUser })
        );
        console.log(newUserResponse);
      } catch (error) {
        console.error("Error syncing user:", error);
      }
    };
    syncUser();
  }, []);


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
