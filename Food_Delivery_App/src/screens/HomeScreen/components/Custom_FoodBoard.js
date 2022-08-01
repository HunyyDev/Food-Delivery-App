import {Text, View, StyleSheet, Image} from 'react-native';
import React, {Component} from 'react';
import CUSTOM_COLORS from '../../../constants/colors';
//import scale from '../../../../responsive';

import scale from '../../../constants/responsive';

export class Custom_FoodBoard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.viewContainer(this.props)}>
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

export default Custom_FoodBoard;

const styles = StyleSheet.create({
  viewContainer: props =>({
    width: scale(200),
    height: scale(293),
    flexDirection: 'column-reverse',
    ...props.style,
  }),
  viewInside: {
    width: scale(200),
    height: scale(250),
    backgroundColor: CUSTOM_COLORS.White,
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
    color: CUSTOM_COLORS.Black,
    fontWeight: '600',
    textAlign: 'center',
    width: scale(200),
    top: scale(-10),
  },
  textPrice: {
    fontSize: scale(17),
    color: CUSTOM_COLORS.Vermilion,
    fontWeight: '700',
    textAlign: 'center',
    width: scale(200),
  },
});
