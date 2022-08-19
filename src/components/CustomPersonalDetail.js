import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {IMG_Marvis} from '../assets/images/index';
import CUSTOM_COLOR from '../constants/colors';
import FONT_FAMILY from '../constants/fonts';
import scale from '../constants/responsive';

class CustomPersonalDetail extends React.Component {
<<<<<<< HEAD
  render() {
    return (
      <View style={styles.contentContainer}>
=======

  render() {
    return (
      <View style={this.props.style}>
>>>>>>> fac1cc961b7b6728a499131822a70a12c34e4d94
        {this.props.image === 'Marvis' ? (
          <Image style={styles.imageContainer} source={IMG_Marvis} />
        ) : null}
        <View style={styles.infoContainer}>
<<<<<<< HEAD
          <View style={[styles.box, styles.border]}>
            <Text style={[styles.information, styles.name]}>
              {this.props.name}
            </Text>
            <Text style={styles.info}>{this.props.text1}</Text>
          </View>
          <View style={[styles.box, styles.border]}>
            <Text style={styles.info}>{this.props.text2}</Text>
          </View>
=======
          <View style={styles.box}>
            <Text style={[styles.information, styles.name]}>
              {this.props.name}
            </Text>
          </View>
          {this.props.lineDivider1==='true' ? (
            <View style={styles.lineDivider}/>
          ): null}
          <View style={styles.box}>
            <Text style={styles.info}>{this.props.text1}</Text>
          </View>
          {this.props.lineDivider2=== 'true' ? (
            <View style={styles.lineDivider}/>
          ): null}
          <View style={styles.box}>
            <Text style={styles.info}>{this.props.text2}</Text>
          </View>
          {this.props.lineDivider3=== 'true' ? (
            <View style={styles.lineDivider}/>
          ): null}
>>>>>>> fac1cc961b7b6728a499131822a70a12c34e4d94
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
<<<<<<< HEAD
=======

  lineDivider: {
    width: '100%',
    height: 1,
    backgroundColor: CUSTOM_COLOR.Silver,
  },
>>>>>>> fac1cc961b7b6728a499131822a70a12c34e4d94
});
