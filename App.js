import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import Splash from './src/screens/auth/Splash';
import Signup from './src/screens/auth/Signup';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import Config from 'react-native-config';

const App = () => {
  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId: Config.clientId, // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
      profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
    });
  }, []);
  return (
    <SafeAreaView>
      <Signup />
    </SafeAreaView>
  );
};

export default App;
