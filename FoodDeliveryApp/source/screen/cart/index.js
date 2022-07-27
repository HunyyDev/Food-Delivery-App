import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import CUSTOM_COLOR from '../../constants/color';
import AddToCartItem from './components/AddToCartItem';
import FONT_FAMILY from '../../constants/fonts';
import scale from '../../../responsive';
import {IMG_FOOD1} from '../../assets/images';
import Custom_ButtonOne from '../../components/Custom_ButtonOne';
import {IC_GoBack, IC_SwipeHand} from '../../assets/icons';

const CartScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Cart</Text>
      <View style={styles.goBackContainer}>
        <TouchableOpacity
          hitSlop={{
            top: scale(10),
            left: scale(10),
            right: scale(10),
            bottom: scale(10),
          }}>
          <IC_GoBack />
        </TouchableOpacity>
      </View>

      <View style={styles.swipeNotice}>
        <IC_SwipeHand />
        <Text style={styles.swipeText}>swipe on an item to delete</Text>
      </View>
      <AddToCartItem img={IMG_FOOD1} />
      <Custom_ButtonOne
        color={CUSTOM_COLOR.Vermilion}
        textColor={CUSTOM_COLOR.White}
        text={'Complete Order'}
      />
    </SafeAreaView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.Concreate,
  },
  title: {
    position: 'absolute',
    left: scale(188),
    top: scale(61),
    fontFamily: FONT_FAMILY.SF_Pro_Rounded,
    fontSize: 18,
    lineHeight: 21,
    color: CUSTOM_COLOR.Black,
  },
  goBackContainer: {
    position: 'absolute',
    top: scale(61),
    left: scale(50),
  },
  swipeNotice: {
    top: scale(139),
    left: scale(133),
    flexDirection: 'row',
    position: 'absolute',
  },
  swipeText: {
    color: CUSTOM_COLOR.Black,
    fontSize: scale(10),
  },
});
