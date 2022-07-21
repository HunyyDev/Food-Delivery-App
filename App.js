import {View, Text, SafeAreaView, StyleSheet, Image} from 'react-native';
import React from 'react';
import FONT_FAMILY from './src/constants/fonts';
import CUSTOM_COLOR from './src/constants/colors';
import {IC_Vector, IC_ShoppingCart} from './src/assets/icons';

const App = () => {
  return (
    // Background
    <SafeAreaView style={styles.backgroundContainer}>
      {/* Bar */}
      <View style={styles.vectorContainer}>
        <Image
          source={IC_Vector}
          style={styles.vector}
          resizeMode={'contain'}
        />
      </View>
      {/* ShoppingCart */}
      <View style={styles.shoppingCartContainer}>
        <Image
          source={IC_ShoppingCart}
          style={styles.shoppingCart}
          resizeMode={'contain'}
        />
      </View>
      {/* FoodText */}
      <View style={styles.foodTextContainer}>
        <Text style={styles.foodText}>Delicious food for you</Text>
      </View>
      {/* Rectangle */}
      <View style={styles.rectangleContainer}>
        <Image source={IC_Search} resizeMode={'contain'} />
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.Silver,
  },
  foodTextContainer: {
    position: 'absolute',
    width: 230,
    height: 90,
    left: 50,
    top: 132,
    backgroundColor: 'green',
  },
  foodText: {
    fontFamily: FONT_FAMILY.Regular,
    fontWeight: '700',
    fontStyle: 'normal',
    fontSize: 34,
    lineHeight: 40.57,
    color: CUSTOM_COLOR.Black,
  },
  vectorContainer: {
    position: 'absolute',
    width: 22,
    height: 14.67,
    left: 54.6,
    top: 74,
    backgroundColor: 'blue',
  },
  vector: {
    borderCenterWidth: 2,
    borderStyle: 'solid',
    borderColor: CUSTOM_COLOR.Black,
  },
  shoppingCartContainer: {
    position: 'absolute',
    width: 24,
    height: 24,
    top: 65,
    left: 350,
    backgroundColor: 'cyan',
  },
  shoppingCart: {
    opacity: 0.3,
  },
  rectangleContainer: {
    position: 'absolute',
    width: 314,
    height: 60,
    left: 50,
    top: 242,
    backgroundColor: CUSTOM_COLOR.Gallery,
    borderColor: CUSTOM_COLOR.Gallery,
    borderRadius: 30,
  },
});
