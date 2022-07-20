import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React, {Component} from 'react';
import CUSTOM_COLOR from '../constants/color';
import scale from '../../responsive';

export class CUSTOM_FoodBoard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View
        style={styles.viewContainer(this.props)}>
        <View style={styles.viewInside}>
          <View style={styles.viewCircle}>
            <Image source={this.props.img} />
          </View>
          <Text style={styles.textName}>{this.props.foodName}</Text>
          <Text style={styles.textPrice}>N{this.props.foodPrice}</Text>
        </View>
      </View>
    );
  }
}

export default CUSTOM_FoodBoard;

const styles = StyleSheet.create({
  viewContainer: props =>({
    width: scale(200),
    height: scale(293),
    borderWidth: 1,
    flexDirection: 'column-reverse',
    ...props.style,
  }),
  viewInside: {
    width: scale(200),
    height: scale(250),
    backgroundColor: CUSTOM_COLOR.White,
    borderRadius: scale(30),
    alignItems: 'center',
  },
  viewCircle: {
    backgroundColor: 'transparent',
    height: scale(140),
    width: scale(140),
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
