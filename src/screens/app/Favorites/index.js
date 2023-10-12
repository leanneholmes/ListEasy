import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {styles} from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {products} from '../../../data/products';
import FavoriteItem from '../../../components/FavoriteItem';
import Header from '../../../components/Header';

const Favorites = () => {
  const renderItem = ({item}) => {
    return <FavoriteItem {...item} />;
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Header title="Favorites" />
        <FlatList
          style={styles.list}
          data={products}
          renderItem={renderItem}
          keyExtractor={item => String(item?.id)}
        />
      </View>
    </SafeAreaView>
  );
};

export default React.memo(Favorites);
