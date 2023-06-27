import { View, Text, Button } from 'react-native';
import {Auth} from 'aws-amplify';



const SettingsScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Button 
          onPress={() => Auth.signOut()}
          title=" Sign out" />
    </View>
  );
}

export default SettingsScreen;
