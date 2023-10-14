import React, {useState} from 'react';
import {Pressable, Text, View, Image} from 'react-native';
import {styles} from './styles';
import Input from '../Input';

const FavoriteItem = ({title, image, icon, onPress, price}) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Image style={styles.image} source={{uri: image}}></Image>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>{price}</Text>
      </View>

      <Image
        source={icon || require('../../assets/close.png')}
        style={styles.icon}
      />
    </Pressable>
  );
};

export default React.memo(FavoriteItem);
