import React, {useContext, useEffect} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {styles} from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../../components/Header';
import ListItem from '../../../components/ListItem';
import Button from '../../../components/Button';
import {getProfile} from '../../../utils/backendCalls';
import {ProfileContext} from '../../../../App';

const Profile = ({navigation}) => {
  const num = 3;
  const {profile, setProfile} = useContext(ProfileContext);

  useEffect(() => {
    (async () => {
      const data = await getProfile();
      setProfile(data);
    })();
  }, []);
  onLogout = () => {
    console.log('Clicked logout');
  };

  const onSettingsPress = () => {
    navigation.navigate('Settings');
  };

  const onListingPress = () => {
    navigation.navigate('MyListings');
  };

  const onNewListingPress = () => {
    navigation.navigate('CreateListing');
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.header}>
        <Header title="Profile" showLogout onLogout={onLogout} />
      </View>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.name}>{profile?.fullName}</Text>
          <Text style={styles.email}>{profile?.email}</Text>

          <ListItem
            onPress={onListingPress}
            title="My Listings"
            subtitle={`You have ${num} listings`}
          />
          <ListItem
            onPress={onSettingsPress}
            title="Settings"
            subtitle="Account settings"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button onPress={onNewListingPress} title="Add New Listing" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default React.memo(Profile);
