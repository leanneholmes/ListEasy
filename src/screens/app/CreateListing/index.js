import React, {useState} from 'react';
import {
  Linking,
  ScrollView,
  Pressable,
  Image,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../../components/Header';
import Button from '../../../components/Button';
import {styles} from '../Settings/styles';
import {launchImageLibrary} from 'react-native-image-picker';

const CreateListing = ({navigation}) => {
  const [images, setImages] = useState([]);

  const uploadNewImage = async () => {
    const result = await launchImageLibrary();

    if (result?.assets?.length) {
      setImages(list => [...list, ...result?.assets]);
    }
  };

  const onBackPress = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View showBack={true} onBackPress={onBackPress} style={styles.header}>
        <Header showBack title="Create a new Listing" />
      </View>
      <View style={styles.container}>
        <Text style={styles.sectionTitle}>Upload Photos</Text>
        <View style={styles.uploadContainer}>
          <TouchableOpacity
            style={styles.uploadContainer}
            onPress={uploadNewImage}>
            <View style={styles.uploadCircle}>
              <Text style={styles.uploadPlus}>+</Text>
            </View>
          </TouchableOpacity>
        </View>
        {images?.map(image => (
          <View style={styles.imageCont} key={image?.fileName}>
            <Image style={styles.image} source={{uri: image?.uri}} />
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default React.memo(CreateListing);
