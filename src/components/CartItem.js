import React from 'react';
import {Text, StyleSheet, Image, View} from 'react-native';
import COLORS from '../constants/colors';
import QuantityButton from './QuantityButton';

const CartItem = props => {
  const {image, name, price, style, ...rest} = props;

  return (
    <View style={[styles.container, style]} {...rest}>
      <Image style={styles.image} source={image} />
      <View>
        <Text style={styles.nameText}>{name}</Text>
        <Text style={styles.priceText}>{price}</Text>
      </View>
      <QuantityButton style={styles.quantityButton} initialValue={1} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.White,
    marginBottom: 14,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 20,
  },
  image: {
    //  backgroundColor: 'red',
    marginLeft: -15,
    width: 110,
    resizeMode: 'contain',
  },
  nameText: {
    color: COLORS.Black,
    marginBottom: 9,
  },
  priceText: {
    color: COLORS.SunsetOrange,
  },
  quantityButton: {
    position: 'absolute',
    right: 24,
    bottom: 17,
  },
});

export default CartItem;
