import {View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {IMG_FOOD1, IMG_FOOD2} from '../assets/images';
import CUSTOM_FoodBoard from './CUSTOM_FoodBoard';
import scale from '../../responsive';

const CUSTOM_FoodScrollView = props => {
  const [foodBoard, setFoodBoard] = useState([
    {
      img: IMG_FOOD1,
      key: '1',
      foodName: 'Veggie \ntomato mix',
      foodPrice: '1,900',
    },
    {
      img: IMG_FOOD1,
      key: '2',
      foodName: 'Veggie \ntomato mix',
      foodPrice: '1,900',
    },
    {
      img: IMG_FOOD2,
      key: '3',
      foodName: 'Spicy fish \nsauce',
      foodPrice: '2,300.99',
    },
  ]);
  return (
    <ScrollView horizontal={true} style={{...props.style}}>
      <View
        style={styles.viewContainer}>
        {foodBoard.map(item => (
          <TouchableOpacity key={item.key} style={styles.touchContainer}>
            <CUSTOM_FoodBoard
              img={item.img}
              foodName={item.foodName}
              foodPrice={item.foodPrice}
            />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default CUSTOM_FoodScrollView;

const styles = StyleSheet.create({
  viewContainer: {
    height: scale(293),
    flexDirection: 'row',
  },
  touchContainer: {marginHorizontal: 30}
})
