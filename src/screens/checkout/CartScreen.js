import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import {IMG_INSTRUCTION} from '../../assets/images';
import CartItem from '../../components/CartItem';
import Header from '../../components/Header';
import COLORS from '../../constants/colors';

import {IMG_FISH, IMG_Product_3} from '../../assets/images';
import LargeButton from '../../components/LargeButton';
import SCREEN_NAME from '../../constants/screens';

const CartScreen = props => {
  const {navigation} = props;

  const data = [
    {
      image: IMG_FISH,
      name: 'Veggie tomato mix',
      price: '#1,900',
    },
    {
      image: IMG_Product_3,
      name: 'Fishwith mix orange....',
      price: '#1,900',
    },
    {
      image: IMG_Product_3,
      name: 'Fishwith mix orange....',
      price: '#1,900',
    },
    {
      image: IMG_Product_3,
      name: 'Fishwith mix orange....',
      price: '#1,900',
    },
    {
      image: IMG_Product_3,
      name: 'Fishwith mix orange....',
      price: '#1,900',
    },
  ];

  return (
    <ScrollView>
      <View style={styles.container}>
        <Header style={styles.header} navigation={navigation} />
        <View style={styles.instruction}>
          <Image source={IMG_INSTRUCTION} />
          <Text style={styles.instructionText}>swipe on an item to delete</Text>
        </View>
        <View style={styles.itemList}>
          {data.map(info => (
            <CartItem {...info} />
          ))}
        </View>
        <LargeButton
          style={styles.completeButton}
          onPress={() => navigation.navigate(SCREEN_NAME.DELIVERY)}
          label="secondary"
          text="Complete order"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.Concrete,
    minHeight: Dimensions.get('window').height,
    position: 'relative',
  },
  header: {
    marginTop: 66,
    marginHorizontal: 50,
  },
  instruction: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 59,
  },
  instructionText: {
    color: COLORS.Black,
    marginLeft: 7.5,
  },
  itemList: {
    marginTop: 22,
    marginHorizontal: 50,
    marginBottom: 150,
  },
  completeButton: {
    position: 'absolute',
    bottom: 0,
  },
});

export default CartScreen;
