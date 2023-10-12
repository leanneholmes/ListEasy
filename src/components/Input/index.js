import React, {useState} from 'react';
import {Image, Text, TextInput, Pressable, View} from 'react-native';
import {styles} from './styles';

const Input = ({label, placeholder, isPassword, value, onChangeText}) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const onEyePress = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={isPassword && !isPasswordVisible}
          placeholder={placeholder}
          style={styles.input}
        />
        {isPassword ? (
          <Pressable onPress={onEyePress}>
            <Image
              style={styles.eye}
              source={
                isPasswordVisible
                  ? require('../../assets/eye.png')
                  : require('../../assets/eyeClosed.png')
              }
            />
          </Pressable>
        ) : null}
      </View>
    </View>
  );
};

export default React.memo(Input);
