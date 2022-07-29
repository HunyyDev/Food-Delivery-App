import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import CUSTOM_COLOR from '../../../constants/color';
import scale from '../../../../responsive';
import {PanGestureHandler} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';


const AddToCartItem = props => {
  const translateX = useSharedValue(0);

  const panGesture = useAnimatedGestureHandler({
    onActive: event => {
      translateX.value = event.translationX;
    },
  });
  const rStyle = useAnimatedStyle(() => ({
    transform: [{translateX: translateX.value}]
  }))

  const [count, setCount] = useState(1);
  return (
    <PanGestureHandler onGestureEvent={panGesture}>
      <Animated.View style={[styles.container, rStyle]}>
        {/*Food Image*/}
        <View style={styles.imgContainer}>
          <Image source={props.img} style={styles.image} />
        </View>
        {/*Food Name*/}
        <Text style={styles.text}>Vergie Tomato mix</Text>
        {/*Food Price*/}
        <Text style={styles.price}>#1900</Text>
        {/*Food Price*/}
        <View style={styles.countBox}>
          <TouchableOpacity
            onPress={() => setCount(count + 1)}
            hitSlop={{
              top: scale(10),
              left: scale(10),
              right: scale(10),
              bottom: scale(10),
            }}>
            <Text style={styles.plus}>+</Text>
          </TouchableOpacity>
          <Text style={styles.count}>{count}</Text>
          <TouchableOpacity
            onPress={() => setCount(count - 1)}
            hitSlop={{
              top: scale(10),
              left: scale(10),
              right: scale(10),
              bottom: scale(10),
            }}>
            <Text style={styles.minus}>-</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </PanGestureHandler>
  );
};

export default AddToCartItem;

const styles = StyleSheet.create({
  swipe: {
    //position: 'absolute',
  },
  container: {
    //flex: 1,
    //flexDirection: 'row',
    //position: 'absolute',
    width: scale(315),
    height: scale(102),
    left: scale(50),
    top: scale(178),
    backgroundColor: CUSTOM_COLOR.White,
    borderRadius: 20,
    //justifyContent: 'center',
  },
  imgContainer: {
    borderRadius: 360,
    backgroundColor: 'black',
    position: 'absolute',
    width: scale(69),
    height: scale(69),
    top: scale(16),
    left: scale(17),
    overflow: 'hidden',
  },
  image: {
    width: scale(75),
    height: scale(75),
    alignSelf: 'center',
  },
  text: {
    color: CUSTOM_COLOR.Black,
    position: 'absolute',
    top: scale(27),
    left: scale(102),
    fontWeight: '600',
    fontSize: scale(17),
    alignSelf: 'center',
  },
  price: {
    color: CUSTOM_COLOR.Vermilion,
    position: 'absolute',
    top: scale(58),
    left: scale(103),
    fontWeight: '600',
    fontSize: scale(15),
    alignSelf: 'center',
  },
  countBox: {
    position: 'absolute',
    width: scale(52),
    height: scale(20),
    left: scale(239),
    top: scale(64),
    backgroundColor: CUSTOM_COLOR.Vermilion,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row-reverse',
  },
  plus: {
    left: scale(8),
    top: scale(-2),
    width: scale(5),
    height: scale(12),
    fontWeight: '600',
    fontSize: scale(10),
  },
  count: {
    fontWeight: '600',
    fontSize: scale(13),
  },
  minus: {
    top: scale(-1),
    right: scale(8),
    width: scale(5),
    height: scale(15),
    fontWeight: '600',
    fontSize: scale(10),
  },
});
