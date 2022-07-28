import {Text, View, StyleSheet, Image, Dimensions} from 'react-native';
import React from 'react';
import CUSTOM_COLOR from '../../../constants/color';
import scale from '../../../../responsive';

const Custom_FoodBoardSmall = (props) => {
  const {category} = props;
  return (
    <View style={styles.viewContainer(props, category)}>
      <View style={styles.viewInside}>
        <View style={styles.viewCircle}>
          <Image
            source={category.img}
            style={{width: '100%', height: '100%'}}
          />
        </View>
        <Text style={styles.textName}>{category.foodName}</Text>
        <Text style={styles.textPrice}>N{category.foodPrice}</Text>
      </View>
    </View>
  );
};

const cWidth = (Dimensions.get('window').width - 2 * scale(156)) / 3;

export default Custom_FoodBoardSmall;

const styles = StyleSheet.create({
  viewContainer: (props, category) => ({
    width: scale(156),
    height: scale(252),
    flexDirection: 'column-reverse',
    marginLeft: cWidth,
    marginTop: category.key % 2 === 0 ? scale(46) : 0,
    ...props.style,
  }),
  viewInside: {
    width: scale(156),
    height: scale(212),
    backgroundColor: CUSTOM_COLOR.White,
    borderRadius: scale(30),
    alignItems: 'center',
  },
  viewCircle: {
    backgroundColor: 'transparent',
    height: scale(128),
    width: scale(128),
    borderRadius: 360,
    top: scale(-41),
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  textName: {
    fontSize: scale(22),
    color: CUSTOM_COLOR.Black,
    fontWeight: '600',
    textAlign: 'center',
    width: scale(200),
    top: scale(-10),
  },
  textPrice: {
    fontSize: scale(17),
    color: CUSTOM_COLOR.Vermilion,
    fontWeight: '700',
    textAlign: 'center',
    width: scale(200),
  },
});
