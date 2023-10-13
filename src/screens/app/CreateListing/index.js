import React, {useState} from 'react';
import {Linking, ScrollView, Pressable, Image, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../../components/Header';
import ListItem from '../../../components/ListItem';
import Button from '../../../components/Button';
import EditableBox from '../../../components/EditableBox';
import {styles} from '../Settings/styles';

const CreateListing = ({navigation}) => {
  const onItemPress = () => {
    Linking.openURL('https://google.com');
  };

  const onEditPress = () => {
    setEditing(true);
  };

  const onSave = () => {
    setEditing(false);
  };

  const onChange = (key, value) => {
    setValues(v => ({...v, [key]: value}));
  };

  const onBackPress = () => {
    navigation.goBack();
  };

  const [editing, setEditing] = useState(false);
  const [values, setValues] = useState({name: 'Leanne', email: 'myEmailhere'});
  console.log('values :', values);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View showBack={true} onBackPress={onBackPress} style={styles.header}>
        <Header showBack title="Create a new Listing" />
      </View>
      <View style={styles.container}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Upload Photos</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default React.memo(CreateListing);
