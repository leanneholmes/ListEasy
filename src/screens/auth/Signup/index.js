import React, {useState, useContext} from 'react';
import {Text, View, ScrollView, Alert} from 'react-native';
import {styles} from './styles';
import Button from '../../../components/Button';
import AuthHeader from '../../../components/AuthHeader';
import Input from '../../../components/Input';
import Checkbox from '../../../components/Checkbox';
import Separator from '../../../components/Separator';
import GoogleLogin from '../../../components/GoogleLogin';
import {signup} from '../../../utils/backendCalls';
import {UserContext} from '../../../../App';

const Signup = ({navigation}) => {
  const [checked, setChecked] = useState(false);
  const [values, setValues] = useState({});
  const {setUser} = useContext(UserContext);

  const onSignIn = () => {
    navigation.navigate('Signin');
  };

  const onBackPress = () => {
    navigation.goBack();
  };

  const onChange = (key, value) => {
    setValues(v => ({...v, [key]: value}));
  };

  const onSubmit = async () => {
    try {
      if (
        !values?.fullName ||
        !values?.email ||
        !values?.password ||
        !values?.confirmPassword
      ) {
        Alert.alert('All fields are required');
        return;
      }

      if (values?.password !== values?.confirmPassword) {
        Alert.alert('Passwords do not match');
        return;
      }

      if (!checked) {
        Alert.alert('Please agree to the terms');
        return;
      }

      const token = signup(values);
      setUser({token});
    } catch (error) {
      console.log('error: ', error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <AuthHeader onBackPress={onBackPress} title="Sign Up" />
      <Input
        onChangeText={v => onChange('fullName', v)}
        label="Name"
        placeholder="Full Name"
        value={values.fullName}
      />
      <Input
        onChangeText={v => onChange('email', v)}
        label="E-mail"
        placeholder="
      example@mail.com"
        value={values.email}
      />
      <Input
        label="Password"
        onChangeText={v => onChange('password', v)}
        placeholder="******"
        isPassword={true}
        value={values.password}
      />
      <Input
        label="Confirm Password"
        onChangeText={v => onChange('confirmPassword', v)}
        placeholder="******"
        isPassword={true}
        value={values.confirmPassword}
      />
      <View style={styles.agreeRow}>
        <Checkbox checked={checked} onCheck={setChecked} />
        <Text style={styles.agreeText}>
          I agree to the{' '}
          <Text style={styles.agreeTextBold}>Terms and Conditions</Text>
        </Text>
      </View>
      <View style={styles.button}>
        <Button onPress={onSubmit} title="Sign Up"></Button>
      </View>
      <Separator text="Or sign up with" />

      <GoogleLogin />

      <Text style={styles.footerText}>
        Already have an account?
        <Text onPress={onSignIn} style={styles.footerLink}>
          {' '}
          Sign In
        </Text>
      </Text>
    </ScrollView>
  );
};

export default React.memo(Signup);
