import {View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import {IMG_FOOD1, IMG_FOOD2} from '../assets/images';
import CUSTOM_FoodBoard from './CUSTOM_FoodBoard';
import scale from '../../responsive';

export default class CUSTOM_CategoryScrollView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foodBoard: [
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
      ],
    };
  }

  render() {
    return (
      <ScrollView horizontal={true} style={{...this.props.style}}>
        <View style={styles.viewContainer}>
          {this.state.foodBoard.map(item => (
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
  }
}

const styles = StyleSheet.create({
  viewContainer: {
    height: scale(293),
    flexDirection: 'row',
  },
  touchContainer: {marginHorizontal: 30},
});
