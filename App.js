import React, {useEffect, useState} from 'react';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import Config from 'react-native-config';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Routes from './Routes';

export const UserContext = React.createContext();

const App = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId:
        '', // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    });
  }, []);

  return (
    <SafeAreaProvider>
      <UserContext.Provider value={{user, setUser}}>
        <Routes />
      </UserContext.Provider>
    </SafeAreaProvider>
  );
};

export default App;
