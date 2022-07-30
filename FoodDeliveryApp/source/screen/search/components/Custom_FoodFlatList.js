import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { useEffect } from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {IMG_FOOD1} from '../../../assets/images';
import Custom_FoodBoardSmall from './Custom_FoodBoardSmall';
import scale from '../../../../responsive';

const Custom_FoodFlatList = props => {
  const foods = [
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
      img: IMG_FOOD1,
      key: '3',
      foodName: 'Spicy fish \nsauce',
      foodPrice: '2,300.99',
    },
    {
      img: IMG_FOOD1,
      key: '4',
      foodName: 'Spicy fish \nsauce',
      foodPrice: '2,300.99',
    },
    {
      img: IMG_FOOD1,
      key: '5',
      foodName: 'Spicy fish \nsauce',
      foodPrice: '2,300.99',
    },
    {
      img: IMG_FOOD1,
      key: '6',
      foodName: 'Spicy fish \nsauce',
      foodPrice: '2,300.99',
    },
    {
      img: IMG_FOOD1,
      key: '7',
      foodName: 'Spicy fish \nsauce',
      foodPrice: '2,300.99',
    },
    {
      img: IMG_FOOD1,
      key: '8',
      foodName: 'Spicy fish \nsauce',
      foodPrice: '2,300.99',
    },
  ];
  const hasItem = number => {
    if (number === 0) {
      return false;
    }
    return true;
  };

  const foodNums = foods.length;

  useEffect(() => props.countFoodNum(foodNums));
  
  if (hasItem(foodNums)) {
    return (
      <FlatList
        style={styles.container}
        horizontal={false}
        data={foods}
        renderItem={({item}) => (
          <TouchableOpacity onPress={props.onPress}>
            <Custom_FoodBoardSmall category={item} />
          </TouchableOpacity>
        )}
        keyExtractor={item => `${item.key}`}
        numColumns={2}
        columnWrapperStyle={styles.wrapper}
      />
    );
  }
  return null;
};

export default Custom_FoodFlatList;

const styles = StyleSheet.create({
  container: {
    marginTop: scale(105.54),
  },
  wrapper: {
    marginBottom: scale(23.93),
  },
});
