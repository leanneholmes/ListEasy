import React, {useContext} from 'react';
import {ScrollView, Text, Image, View, Pressable, Linking} from 'react-native';
import {styles} from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import Button from '../../../components/Button';
import ImageCarousel from '../../../components/ImageCarousel';
import {updateService} from '../../../utils/backendCalls';
import {ServicesContext} from '../../../../App';

const ProductDetails = ({route, navigation}) => {
  const params = route?.params || {};
  const {services, setServices} = useContext(ServicesContext);
  const product = services?.find(
    service => service?._id === params?.product?._id,
  );

  const onBackPress = () => {
    navigation.goBack();
  };

  const onContact = () => {
    Linking.openURL(`mailto:supoort@mail.com`);
  };

  const onBookmark = async () => {
    if (!product?.liked) {
      const data = await updateService(product?._id, {liked: true});
      setServices(data);
    } else {
      const data = await updateService(product?._id, {liked: false});
      setServices(data);
    }
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView style={styles.container}>
        {product?.images?.length ? (
          <ImageCarousel images={product?.images} />
        ) : (
          <Image
            style={styles.image}
            source={{
              uri: `${'https://listicle.deegeehub.com/api'}/${
                product?.image?.path
              }`,
            }}
          />
        )}
        <View style={styles.content}>
          <Text style={styles.title}>{product?.title}</Text>
          <Text style={styles.price}>{product?.price}</Text>
          <Text style={styles.description}>{product?.description}</Text>
        </View>

        <Pressable onPress={onBackPress} style={styles.backContainer}>
          <Image
            style={styles.backIcon}
            source={require('../../../assets/back.png')}
          />
        </Pressable>
      </ScrollView>

      <View style={styles.footer}>
        <Pressable onPress={onBookmark} style={styles.bookmarkContainer}>
          <Image
            style={styles.bookmarkIcon}
            source={
              product?.liked
                ? require('../../../assets/bookmark_blue_filled.png')
                : require('../../../assets/bookmark_blue.png')
            }
          />
        </Pressable>
        <Button
          onPress={onContact}
          style={{width: '50%'}}
          title="Contact Seller"
        />
      </View>
    </SafeAreaView>
  );
};

export default React.memo(ProductDetails);
