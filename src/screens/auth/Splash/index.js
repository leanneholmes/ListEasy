import React from 'react';
import {Text, Image, View, Pressable} from 'react-native';
import {styles} from './styles';
import Button from '../../../components/Button';

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
        <Text style={styles.title}>Easily Find </Text>
        <Text style={[styles.title, styles.innerTitle]}>All you need</Text>
        <Text style={styles.title}> Here!</Text>
      </View>

      <Button onPress={onSignin} title="Sign In" />

      <Pressable onPress={onSignup} hitSlop={8}>
        <Text style={styles.footerText}>Sign Up</Text>
      </Pressable>
    </View>
  );
};

export default React.memo(Splash);
