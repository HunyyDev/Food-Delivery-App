import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import CUSTOM_COLOR from '../../../constants/colors';
import SCREEN from '../../../constants/screens';
import scale from '../../../constants/responsive';
import FONT_FAMILY from '../../../constants/fonts';

export class CustomCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: SCREEN.FOODS,
      clicked: false,
    };
  }

  setOnPress = (newPage, isClicked) => {
    this.setState({page: newPage, clicked: true});
  };

  render() {
    return this.state.clicked === true ? (
      <TouchableOpacity>
        <Text style={[this.props.style, styles.styleText]}>
          {this.props.name}
        </Text>
      </TouchableOpacity>
    ) : (
      <TouchableOpacity>
        <Text style={[this.props.style]}>{this.props.name}</Text>
      </TouchableOpacity>
    );
  }
}

export default CustomCategory;

const styles = StyleSheet.create({
  styleText: {
    color: CUSTOM_COLOR.Manatee,
    fontSize: scale(17),
    fontFamily: FONT_FAMILY.Black,
  },
});
