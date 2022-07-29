import {StyleSheet, Text, TouchableOpacity, Image, View} from 'react-native';
import React, {useState} from 'react';
import scale from '../../../constants/responsive';
import CUSTOM_COLOR from '../../../constants/colors';
import FONT_FAMILY from '../../../constants/fonts';
// import Swipeable from 'react-native-gesture-handler/Swipeable';

const CustomOrderedItem = props => {
  const [countItem, setCountItem] = useState(1);

  function decrementCount() {
    return setCountItem(countItem => countItem - 1);
  }

  function incrementCount() {
    return setCountItem(countItem => countItem + 1);
  }

  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.imgSection}>
        <Image style={styles.img} source={props.img} resizeMode="contain" />
      </View>
      <View style={styles.infoSection}>
        <Text style={styles.foodName}>{props.text}</Text>
        <Text style={styles.price}>#{props.price}</Text>
        <View style={styles.quatitySection}>
          <View style={styles.quatity}>
            <TouchableOpacity
              onPress={countItem < 0 ? setCountItem(0) : decrementCount}
              hitSlop={{top: 5, bottom: 5, left: 10, right: 10}}>
              <Text style={styles.whiteText}>{'-'}</Text>
            </TouchableOpacity>

            <Text style={styles.whiteText}>{countItem}</Text>
            <TouchableOpacity
              onPress={incrementCount}
              hitSlop={{top: 5, bottom: 5, left: 10, right: 10}}>
              <Text style={styles.whiteText}>{'+'}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CustomOrderedItem;

const styles = StyleSheet.create({
  container: {
    height: scale(102),
    width: scale(305),
    backgroundColor: CUSTOM_COLOR.White,
    borderRadius: 30,
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: scale(14),
  },
  imgSection: {
    height: '90%',
    width: '40%',
    alignItems: 'center',
    borderRadius: 20,
  },
  img: {
    height: '100%',
    width: '70%',
    borderRadius: 40,
  },

  infoSection: {
    height: '90%',
    width: '55%',
    justifyContent: 'center',
  },

  foodName: {
    fontFamily: FONT_FAMILY.Bold,
    fontSize: scale(17),
  },

  price: {
    fontFamily: FONT_FAMILY.Bold,
    color: CUSTOM_COLOR.Vermilion,
    fontSize: scale(15),
  },
  quatitySection: {
    height: '30%',
    alignItems: 'flex-end',
  },
  quatity: {
    height: '75%',
    width: '50%',
    backgroundColor: CUSTOM_COLOR.Vermilion,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 20,
  },
  whiteText: {
    color: CUSTOM_COLOR.White,
    fontFamily: FONT_FAMILY.Bold,
    fontSize: scale(15),
  },
});
