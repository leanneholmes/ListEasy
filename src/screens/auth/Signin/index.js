import React, {useContext, useState} from 'react';
import {Text, Image, View, Pressable, ScrollView} from 'react-native';
import {styles} from './styles';
import Button from '../../../components/Button';
import AuthHeader from '../../../components/AuthHeader';
import Input from '../../../components/Input';
import Separator from '../../../components/Separator';
import GoogleLogin from '../../../components/GoogleLogin';
import {login} from '../../../utils/backendCalls';
import {UserContext} from '../../../../App';

const Signin = ({navigation}) => {
  const [values, setValues] = useState({});
  const {setUser} = useContext(UserContext);

  const onSignUp = () => {
    navigation.navigate('Signup');
  };

  const onBackPress = () => {
    navigation.goBack();
  };

  const onChange = (key, value) => {
    setValues(v => ({...v, [key]: value}));
  };

  const onSubmit = async () => {
    const token = await login(values);
    setUser({token});
  };

  return (
    <ScrollView style={styles.container}>
      <AuthHeader onBackPress={onBackPress} title="Sign In" />
      <Input
        value={values.email}
        onChangeText={v => onChange('email', v)}
        label="E-mail"
        placeholder="
      example@mail.com"
      />
      <Input
        onChangeText={v => onChange('password', v)}
        value={values.password}
        label="Password"
        placeholder="******"
        isPassword={true}
      />
      <View style={styles.button}>
        <Button onPress={onSubmit} title="Sign In"></Button>
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
