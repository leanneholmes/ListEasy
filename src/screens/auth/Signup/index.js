import React, {useState} from 'react';
import {Text, Image, View, Pressable, ScrollView} from 'react-native';
import {styles} from './styles';
import Button from '../../../components/Button';
import AuthHeader from '../../../components/AuthHeader';
import Input from '../../../components/Input';
import Checkbox from '../../../components/Checkbox';
import Separator from '../../../components/Separator';
import GoogleLogin from '../../../components/GoogleLogin';

const Signup = () => {
  const [checked, setChecked] = useState(false);
  return (
    <ScrollView style={styles.container}>
      <AuthHeader title="Sign Up" />
      <Input label="Name" placeholder="Full Name" />
      <Input
        label="E-mail"
        placeholder="
      example@mail.com"
      />
      <Input label="Password" placeholder="******" isPassword={true} />
      <View style={styles.agreeRow}>
        <Checkbox checked={checked} onCheck={setChecked} />
        <Text style={styles.agreeText}>
          I agree to the{' '}
          <Text style={styles.agreeTextBold}>Terms and Conditions</Text>
        </Text>
      </View>
      <View style={styles.button}>
        <Button title="Sign Up"></Button>
      </View>
      <Separator text="Or sign up with" />

      <GoogleLogin />

      <Text style={styles.footerText}>
        Already have an account? <Text style={styles.footerLink}> Sign In</Text>
      </Text>
    </ScrollView>
  );
};

export default React.memo(Signup);
