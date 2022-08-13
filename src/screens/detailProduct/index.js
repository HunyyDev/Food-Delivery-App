import React from 'react';
import {Text, View, ScrollView, Image} from 'react-native';
import BackButton from '../../components/BackButton';
import LargeButton from '../../components/LargeButton';

import styles from './styles';

import {ICON_heart} from '../../assets/icons';
import SCREEN_NAME from '../../constants/screens';

const DetailProduct = ({navigation, route}) => {
  const addToCart = () => {
    navigation.navigate(SCREEN_NAME.HOME);
  };

  const {title = '', images = [], price = 0} = route?.params;

  return (
    <View style={styles.outer}>
      <View style={styles.header}>
        <BackButton navigation={navigation}></BackButton>
        <Image source={ICON_heart} />
      </View>
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.scrollViewContainer}>
            <ScrollView style={styles.scrollView} horizontal pagingEnabled>
              {images.map(image => (
                <Image source={image} style={styles.image} />
              ))}
            </ScrollView>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoTitle}>{title}</Text>
            <Text style={styles.infoPrice}>{price}</Text>
          </View>
          <View style={styles.descriptionContainer}>
            <View style={styles.description}>
              <Text style={styles.descriptionTitle}>Delivery info</Text>
              <Text style={styles.descriptionContent}>
                Delivered between monday aug and thursday 20 from 8pm to 91:32
                pm
              </Text>
            </View>
            <View style={styles.description}>
              <Text style={styles.descriptionTitle}>Delivery info</Text>
              <Text style={styles.descriptionContent}>
                All our foods are double checked before leaving our stores so by
                any case you found a broken food please contact our hotline
                immediately.
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
      <LargeButton
        label="secondary"
        text="Add to cart"
        style={styles.addToCartButton}
        onPress={addToCart}></LargeButton>
    </View>
  );
};

export default DetailProduct;
