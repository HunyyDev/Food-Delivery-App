import React from 'react';
import {Text, View} from 'react-native';
import LargeButton from '../../components/LargeButton';

const DetailProduct = (
  navigation,
  {
    route: {
      params: {title, images, price},
    },
  },
) => {
  const addToCart = () => {};

  return (
    <View>
      <View></View>
      <View></View>
      <LargeButton
        label="secondary"
        text="Add to cart"
        onPress={addToCart}></LargeButton>
    </View>
  );
};

export default DetailProduct;
