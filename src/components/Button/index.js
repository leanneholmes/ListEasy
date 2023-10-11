import React from 'react';
import {Pressable, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';

const Button = ({title}) => {
  const handlePress = () => {};

  return (
    <Pressable onPress={handlePress} style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};

export default React.memo(Button);
