import React from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
} from 'react-native';
import {IMG_Wifi_off} from '../../assets/images';
import {scaleWidth} from '../../constants/responsive';
import FONT_FAMILY from '../../constants/fonts';
import CUSTOM_COLOR from '../../constants/colors';

const noInternet = ({navigation}) => {
  //  constructor(props)
  //   {
  //     super(props);
  //     this.state = {};
  //   }
  //   render() {
  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <></>
      <></>
      {/* searchbar */}

      <></>
      {/* Logo */}
      <Image
        source={IMG_Wifi_off}
        style={{alignSelf: 'center', marginTop: scaleWidth(200)}}
      />
      <Text
        style={{
          fontFamily: FONT_FAMILY.Bold,
          fontSize: scaleWidth(28),
          alignSelf: 'center',
          color: CUSTOM_COLOR.Black,
        }}>
        {'No internet Connection'}
      </Text>
      <Text
        style={{
          fontFamily: FONT_FAMILY.Regular,
          fontSize: scaleWidth(17),
          alignSelf: 'center',
          width: scaleWidth(350),
          textAlign: 'center',
        }}>
        {
          ' Your internet connection is currently\n not available please check or try again.'
        }
      </Text>
      {/* Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>{'Try again'}</Text>
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
  title: {
    fontFamily: FONT_FAMILY.Bold,
    fontSize: scaleWidth(25),
    alignSelf: 'center',
    top: scaleWidth(40),
    color: CUSTOM_COLOR.Black,
  },
  inputSection: {
    flex: 6,
    margin: 30,
    height: 30,
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
    marginTop: scaleWidth(100),
  },
  buttonText: {
    fontFamily: FONT_FAMILY.Regular,
    fontSize: scaleWidth(20),
    alignSelf: 'center',
    color: CUSTOM_COLOR.White,
  },
});

export default noInternet;
