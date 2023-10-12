import React, {useState} from 'react';
import {Pressable, Text, View, Image} from 'react-native';
import {styles} from './styles';
import Input from '../Input';

const FavoriteItem = ({title, image, onPress, price}) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Image style={styles.image} source={{uri: image}}></Image>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>{price}</Text>
      </View>

      <Image style={styles.icon} source={require('../../assets/close.png')} />
    </Pressable>
  );
};

export default React.memo(FavoriteItem);
