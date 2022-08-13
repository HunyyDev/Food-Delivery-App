import React from 'react';
import {Alert, Image, Text, TouchableOpacity, View} from 'react-native';
import SCREEN_NAME from '../constants/screens';
import styles from '../screens/home/styles';

const ButtonProduct = props => {
  const {navigation} = props;

  const ButtonAlert = (title, announce) => {
    Alert.alert(title, announce, [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'OK',
      },
    ]);
  };

  return (
    <>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate(SCREEN_NAME.DETAIL_PRODUCT, {
            title: props.title,
            price: props.price,
            images: props.source,
          })
        }>
        <View style={styles.productItem}>
          <Image
            style={styles.imageWrapper}
            source={props.source[0]}
            resizeMode="cover"
          />
          <View style={styles.productInfo}>
            <Text style={styles.titleText}>{props.title}</Text>
            <Text style={styles.priceText}>{props.price}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default React.memo(ButtonProduct);
