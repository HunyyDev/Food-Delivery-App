import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import CUSTOM_COLOR from '../constants/colors';
import React, {Component} from 'react';
import scale from '../constants/responsive';
import FONT_FAMILY from '../constants/fonts';

export class CustomList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles}>
        <TouchableOpacity style={styles.optionContainer}>
          <View style={styles.optionInfo}>
            <Image
              style={styles.imageMain}
              source={this.props.IMGSource}
              // source={IMG_Veggie_tomato_mix}
              resizeMode={'cover'}></Image>
            <View></View>
          </View>
          <View style={styles.decriseContainer}>
            <View style={styles.dontUse}></View>
            <View style={styles.textContainer}>
              <Text style={styles.name}>{this.props.Name}</Text>
              <Text style={styles.price}>{this.props.Price}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default CustomList;

const styles = StyleSheet.create({
  optionContainer: {
    width: scale(210),
    height: scale(170),
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: scale(15),
  },
  imageMain: {
    borderRadius: 100,
  },
  optionInfo: {
    //top: 0,
    bottom: 0,
    //height: '30%',
    //width: '50%',
    // backgroundColor: 'yellow',
    borderRadius: 30,
    zIndex: 2,
  },
  decriseContainer: {
    width: scale(210),
    height: scale(280),
    backgroundColor: CUSTOM_COLOR.White,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 50,
    zIndex: 1,
    borderRadius: 30,
  },
  dontUse: {
    height: scale(60),
  },
  textContainer: {
    marginTop: scale(70),
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    // backgroundColor: '#000',
    marginBottom: scale(20),
    flex: 1,
  },
  name: {
    textAlign: 'center',
    fontFamily: FONT_FAMILY.Black,
    fontSize: scale(22),
  },
  price: {
    fontFamily: FONT_FAMILY.Black,
    fontSize: scale(17),
    color: CUSTOM_COLOR.Vermilion,
  },
});
