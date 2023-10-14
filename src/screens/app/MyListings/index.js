import React from 'react';
import {FlatList} from 'react-native';
import {SafeAreaView, View} from 'react-native-safe-area-context';
import {products} from '../../../data/products';
import FavoriteItem from '../../../components/FavoriteItem';
import Header from '../../../components/Header';
import {styles} from './styles';

const MyListings = ({navigation}) => {
  const renderItem = ({item}) => {
    const onProductPress = () => {
      navigation.navigate('ProductDetails', {product: item});
    };
    return (
      <FavoriteItem
        icon={require('../../../assets/trashcan.png')}
        onPress={onProductPress}
        {...item}
      />
    );
  };

  const goBack = () => navigation.goBack();

  return (
    <SafeAreaView style={styles.container}>
      <Header title="My Listings" showBack onBackPress={goBack} />

      <FlatList
        style={styles.list}
        data={products}
        renderItem={renderItem}
        keyExtractor={item => String(item?.id)}
      />
    </SafeAreaView>
  );
};

export default React.memo(MyListings);
