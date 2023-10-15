import React from 'react';
import {Text, Image, View, Pressable} from 'react-native';
import {styles} from './styles';
import Button from '../../../components/Button';
import {UserContext} from '../../../../App';

const Splash = ({navigation}) => {
  const onSignup = () => {
    navigation.navigate('Signup');
  };

  const onSignin = () => {
    navigation.navigate('Signin');
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={require('../../../assets/splashImage.png')}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Easily Find</Text>
        <Text style={[styles.title, styles.innerTitle]}>Home items</Text>
        <Text style={styles.title}>& more!</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button onPress={onSignin} title="Sign In" />
      </View>

      <Pressable onPress={onSignup} hitSlop={8}>
        <Text style={styles.footerText}>Sign Up</Text>
      </Pressable>
    </View>
  );
};

export default React.memo(Splash);
