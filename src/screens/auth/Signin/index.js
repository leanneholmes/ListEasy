import React from 'react';
import {Text, Image, View, Pressable, ScrollView} from 'react-native';
import {styles} from './styles';
import Button from '../../../components/Button';
import AuthHeader from '../../../components/AuthHeader';
import Input from '../../../components/Input';
import Separator from '../../../components/Separator';
import GoogleLogin from '../../../components/GoogleLogin';

const Signin = ({navigation}) => {
  const onSignUp = () => {
    navigation.navigate('Signup');
  };

  const onBackPress = () => {
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container}>
      <AuthHeader onBackPress={onBackPress} title="Sign In" />
      <Input
        label="E-mail"
        placeholder="
      example@mail.com"
      />
      <Input label="Password" placeholder="******" isPassword={true} />
      <View style={styles.button}>
        <Button title="Sign In"></Button>
      </View>
      <Separator text="Or sign in with" />

      <GoogleLogin />

      <Text style={styles.footerText}>
        Don't have an account?
        <Text onPress={onSignUp} style={styles.footerLink}>
          {' '}
          Sign Up
        </Text>
      </Text>
    </ScrollView>
  );
};

export default React.memo(Signin);
