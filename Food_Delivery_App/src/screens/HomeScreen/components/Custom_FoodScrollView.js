import {View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import {IMG_VEGETABLE} from '../../../assets/images';
import Custom_FoodBoard from './Custom_FoodBoard';
//import scale from '../../../../responsive';
import scale from '../../../constants/responsive';

export default class Custom_FoodScrollView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foodBoard: [
        {
          img: IMG_VEGETABLE,
          key: '1',
          foodName: 'Veggie \ntomato mix',
          foodPrice: '1,900',
        },
        {
          img: IMG_VEGETABLE,
          key: '2',
          foodName: 'Spicy \nfish sauce',
          foodPrice: '1,900',
        },
        {
          img: IMG_VEGETABLE,
          key: '3',
          foodName: 'Veggie \ntomato mix',
          foodPrice: '2,300.99',
        },
      ],
    };
  }

  render() {
    return (
      <ScrollView
        horizontal={true}
        style={{...this.props.style}}
        showsHorizontalScrollIndicator={false}>
        <View style={styles.viewContainer}>
          {this.state.foodBoard.map(item => {
            return (
              <TouchableOpacity
                key={item.key}
                style={styles.touchContainer}
                // onPress = {() => {alert('Tên món ăn: '+item.foodName);}}
                onPress={() => {
                  this.props.navigationnn.navigate('FIS');
                }}>
                <Custom_FoodBoard
                  img={item.img}
                  foodName={item.foodName}
                  foodPrice={item.foodPrice}
                />
              </TouchableOpacity>
            );
          })}
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
