import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  View,
  Dimensions,
} from 'react-native';
import React, {Component} from 'react';
import FONT_FAMILY from '../../constants/fonts';
import CUSTOM_COLOR from '../../constants/color';
import {IMG_FOOD1} from '../../assets/images';
import scale from '../../../responsive';
import Custom_ButtonOne from '../../components/Custom_ButtonOne';

const FoodInfoScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.viewCircle}>
        <Image source={IMG_FOOD1} />
      </View>
      <Text style={styles.foodName}> Veggie tomato mix </Text>
      <Text style={styles.price}> N1,900</Text>

      <Text style={styles.headers}>Delivery Info</Text>
      <Text style={styles.description}>
        Delivered between monday aug and thursday 20 from 8pm to 91:32 pm
      </Text>
      <Text style={styles.headers}>Return Policy</Text>
      <Text style={styles.description}>
        All our foods are double checked before leaving our stores so by any
        case you found a broken food please contact our hotline immediately.
      </Text>

      <Custom_ButtonOne
        text="Add to cart"
        fontSize={17}
        color={CUSTOM_COLOR.SunsetOrange}
        textColor={CUSTOM_COLOR.White}
      />
    </View>
  );
};

export default FoodInfoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.AthensGray,
  },

  viewCircle: {
    backgroundColor: 'transparent',
    height: scale(241.21),
    width: scale(241.21),
    borderRadius: 360,
    top: scale(94),
    left: scale(82.26),
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  Img: {
    backgroundColor: 'transparent',
    position: 'absolute',
    height: scale(241.21),
    width: scale(241.21),
    borderRadius: 360,
    top: scale(94),
    left: scale(25),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  foodName: {
    color: CUSTOM_COLOR.Black,
    fontSize: scale(28),
    fontFamily: FONT_FAMILY.SF_Pro_Rounded,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    top: scale(100),
  },
  price: {
    color: CUSTOM_COLOR.Vermilion,
    fontSize: scale(28),
    fontFamily: FONT_FAMILY.SF_Pro_Rounded,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    top: scale(100),
  },
  headers: {
    top: 100,
    left: scale(53),
    fontSize: scale(17),
    fontFamily: FONT_FAMILY.SF_Pro_Rounded,
    color: CUSTOM_COLOR.Black,
  },
  description: {
    top: 100,
    left: scale(53),
    fontSize: scale(15),
    opacity: scale(0.5),
    color: CUSTOM_COLOR.Black,
    width: scale(297),
  
  },
});
