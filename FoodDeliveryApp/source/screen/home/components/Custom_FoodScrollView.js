import {View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import {IMG_FOOD1, IMG_FOOD3, IMG_FOOD4} from '../../../assets/images';
import Custom_FoodBoard from './Custom_FoodBoard';
import scale from '../../../../responsive';

export default class Custom_FoodScrollView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      foodBoard: this.props.foodData,
    };
  };
  navigate = location => {
    this.props.navigation.navigate(location);
  };
  render() {
    return (
      <ScrollView
        horizontal={true}
        style={{...this.props.style}}
        showsHorizontalScrollIndicator={false}>
        <View style={styles.viewContainer}>
          {this.state.foodBoard.map(item => (
            <TouchableOpacity
              key={item.key}
              style={styles.touchContainer}
              onPress={this.props.onPress}>
              <Custom_FoodBoard
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
