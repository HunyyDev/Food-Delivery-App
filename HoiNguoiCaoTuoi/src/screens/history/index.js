import React from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
} from 'react-native';
import {IMG_History} from '../../assets/images';
import {scaleWidth} from '../../constants/responsive';
import FONT_FAMILY from '../../constants/fonts';
import CUSTOM_COLOR from '../../constants/colors';
import {IMG_chevron_left} from '../../assets/icons';

const History = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <></>
      {/* back button */}
      <TouchableOpacity
        style={styles.backContainer}
        hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
        onPress={() => {
          console.log(this.props);
          this.props.navigation.goBack();
        }}>
        <Image source={IMG_chevron_left} />
      </TouchableOpacity>
      <></>
      {/* title */}
      <Text style={styles.title}>{'History'}</Text>
      <></>
      {/* Logo */}
      <Image
        source={IMG_History}
        style={{alignSelf: 'center', marginTop: scaleWidth(200)}}
      />
      <Text
        style={{
          fontFamily: FONT_FAMILY.Bold,
          fontSize: scaleWidth(40),
          alignSelf: 'center',
          color: CUSTOM_COLOR.Black,
        }}>
        {'No history yet'}
      </Text>
      <Text
        style={{
          fontFamily: FONT_FAMILY.Regular,
          fontSize: scaleWidth(20),
          alignSelf: 'center',
          width: scaleWidth(240),
          textAlign: 'center',
        }}>
        {'Hit the orange button down below to Create an order.'}
      </Text>
      <></>
      {/* Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>{'Start ordering'}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
  //   }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.WhiteSmoke,
  },
  backContainer: {
    width: scaleWidth(6),
    height: scaleWidth(12),
    top: scaleWidth(66),
    left: scaleWidth(50),
  },
  title: {
    fontFamily: FONT_FAMILY.Light,
    fontSize: scaleWidth(25),
    alignSelf: 'center',
    top: scaleWidth(40),
    color: CUSTOM_COLOR.Black,
  },
  button: {
    backgroundColor: CUSTOM_COLOR.Vermilion,
    width: scaleWidth(314),
    height: scaleWidth(70),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: scaleWidth(30),
    bottom: scaleWidth(41),
    position: 'absolute',
  },
  buttonText: {
    fontFamily: FONT_FAMILY.Regular,
    fontSize: scaleWidth(20),
    alignSelf: 'center',
    color: CUSTOM_COLOR.White,
  },
});

export default History;
