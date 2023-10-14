import React, {useState} from 'react';
import {Linking, ScrollView, Pressable, Image, Text, View} from 'react-native';
import {styles} from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../../components/Header';
import ListItem from '../../../components/ListItem';
import Button from '../../../components/Button';
import EditableBox from '../../../components/EditableBox';

const Settings = ({navigation}) => {
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
  const [values, setValues] = useState({
    name: 'Leanne Holmes',
    email: 'sample@email.com',
  });
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.header}>
        <Header showBack onBackPress={onBackPress} title="Settings" />
      </View>
      <View style={styles.container}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Personal Info</Text>
          <Pressable onPress={onEditPress}>
            <Image
              style={styles.icon}
              source={require('../../../assets/edit.png')}
            />
          </Pressable>
        </View>

        <EditableBox
          onChangeText={v => onChange('name', v)}
          value={values.name}
          label="Name"
          editable={false}
        />
        <EditableBox
          onChangeText={v => onChange('email', v)}
          value={values.email}
          label="E-mail"
          editable={true}
          style={{marginBottom: 40}}
        />
        {editing ? (
          <View style={styles.buttonContainer}>
            <Button onPress={onSave} title="Save" />
          </View>
        ) : null}
        <Text style={styles.sectionTitle}>Help Center</Text>
        <ListItem onPress={onItemPress} style={styles.item} title="FAQ" />
        <ListItem
          onPress={onItemPress}
          style={styles.item}
          title="Contact Us"
        />
        <ListItem
          onPress={onItemPress}
          style={styles.item}
          title="Privacy & Terms"
        />
      </View>
    </SafeAreaView>
  );
};

export default React.memo(Settings);
