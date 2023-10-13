import React from 'react';
import {Image, Text, View, Pressable} from 'react-native';
import {styles} from './styles';

const ListItem = ({title, subtitle, onPress}) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        {!!subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
      </View>

      <Image style={styles.icon} source={require('../../assets/arrow.png')} />
    </Pressable>
  );
};

export default React.memo(ListItem);
