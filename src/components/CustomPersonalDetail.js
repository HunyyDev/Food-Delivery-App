import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {IMG_Marvis} from '../assets/images/index';
import CUSTOM_COLOR from '../constants/colors';
import FONT_FAMILY from '../constants/fonts';
import scale from '../constants/responsive';

class CustomPersonalDetail extends React.Component {
  render() {
    return (
      <View style={styles.contentContainer}>
        {this.props.image === 'Marvis' ? (
          <Image style={styles.imageContainer} source={IMG_Marvis} />
        ) : null}
        <View style={styles.infoContainer}>
          <View style={[styles.box, styles.border]}>
            <Text style={[styles.information, styles.name]}>
              {this.props.name}
            </Text>
            <Text style={styles.info}>{this.props.text1}</Text>
          </View>
          <View style={[styles.box, styles.border]}>
            <Text style={styles.info}>{this.props.text2}</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.info}>{this.props.text3}</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default CustomPersonalDetail;

const styles = StyleSheet.create({
  detailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  text: {
    fontSize: scale(17),
    color: CUSTOM_COLOR.Black,
    fontFamily: FONT_FAMILY.Medium,
  },

  contentContainer: {
    backgroundColor: CUSTOM_COLOR.White,
    flex: 1,
    borderRadius: scale(20),
    flexDirection: 'row',
  },

  infoContainer: {
    //backgroundColor: 'orange',
    marginHorizontal: scale(15),
    marginTop: scale(10),
    flex: 1,
  },

  box: {
    justifyContent: 'center',
  },

  border: {
    borderBottomWidth: 0.5,
  },

  information: {
    color: CUSTOM_COLOR.Black,
  },

  name: {
    fontFamily: FONT_FAMILY.Medium,
    fontSize: scale(17),
  },

  info: {
    fontFamily: FONT_FAMILY.Light,
    fontSize: scale(15),
  },
  imageContainer: {
    marginTop: scale(10),
    marginLeft: scale(10),
    // backgroundColor: 'green',
  },
});
