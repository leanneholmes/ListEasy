import React from 'react';
import {FlatList, View} from 'react-native';
import {styles} from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../../components/Header';
import {categories} from '../../../data/categories';
import {products} from '../../../data/products';
import CategoryBox from '../../../components/CategoryBox';
import ProductHomeItem from '../../../components/ProductHomeItem';

const Home = () => {
  const renderCategoryItem = ({item, index}) => {
    return <CategoryBox title={item?.title} image={item?.image} />;
  };

  const renderProductItem = ({item}) => {
    return <ProductHomeItem {...item} />;
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Header showSearch title="Home" />
        <FlatList
          style={styles.list}
          horizontal
          data={categories}
          renderItem={renderCategoryItem}
          keyExtractor={(item, index) => String(index)}
        />

        <FlatList
          style={styles.productsList}
          numColumns={2}
          data={products}
          renderItem={renderProductItem}
          keyExtractor={item => String(item.id)}
          ListFooterComponent={<View style={{height: 390}} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default React.memo(Home);
