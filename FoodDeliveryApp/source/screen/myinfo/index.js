import {StyleSheet, Text, TouchableOpacity, View, Image, SafeAreaView} from 'react-native';
import React from 'react';
import scale from '../../../responsive';
import CUSTOM_COLOR from '../../constants/color';
import FONT_FAMILY from '../../constants/fonts';
import Custom_ButtonOne from '../../components/Custom_ButtonOne';
import Custom_PaymentMethod2 from './components/Custom_PaymentMethod';
import {IMG_AVATAR, IMG_BANK, IMG_CARD, IMG_PAYPAL} from '../../assets/images';
import { IC_GoBack, IC_Pencil } from '../../assets/icons';
import { useNavigation } from '@react-navigation/native';

const MyInFoScreen = ({ navigation: { goBack } }) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.goBack} onPress={() => goBack()}>
        <IC_GoBack />
      </TouchableOpacity>
      <View>
        <Text style={styles.content}>My profile</Text>
        <Text style={styles.header1}>Information</Text>
        <TouchableOpacity onPress={() => navigation.navigate('MyProfile')}>
          <View style={styles.viewInside1}>
            <Image source={IMG_AVATAR} style={styles.avatar} />
            <IC_Pencil style={styles.pencil}/>
            <Text style={styles.description2}>Marvis Ighedosa</Text>
            <Text style={[styles.description1, styles.mail]}>
              dosamarvis@gmail.com
            </Text>
            <Text style={[styles.description1, styles.info]}>
              No 15 uti street off ovie palace road effurun delta state
            </Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.header2}>Payment method</Text>
        <Custom_PaymentMethod2
          style={styles.paymentBox}
          img1={IMG_CARD}
          img2={IMG_BANK}
          img3={IMG_PAYPAL}
          selectText1={'Card'}
          selectText2={'Bank account'}
          selectText3={'Paypal'}
        />
      </View>
      <Custom_ButtonOne
        text="Update"
        fontSize={17}
        color={CUSTOM_COLOR.SunsetOrange}
        textColor={CUSTOM_COLOR.White}
         
        />
    </SafeAreaView>
  );
};

export default MyInFoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.Athens_Gray,
  },
  goBack: {
    position: 'absolute',
    top: scale(66),
    left: scale(50),
  },
  pencil: {
    left: scale(110),
    top: scale(-15),
  },
  content: {
    top: scale(61),
    left: scale(161),
    position: 'absolute',
    fontSize: scale(18),
    color: CUSTOM_COLOR.Black,
  },
  viewInside1: {
    position: 'absolute',
    top: scale(170),
    left: scale(50),
    backgroundColor: CUSTOM_COLOR.White,
    borderRadius: 30,
    width: scale(315),
    height: scale(133),
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  viewInside2: {
    position: 'absolute',
    top: scale(392),
    left: scale(50),
    backgroundColor: CUSTOM_COLOR.White,
    borderRadius: scale(30),
    width: scale(315),
    height: scale(231),
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    overflow: 'hidden',
  },
  header1: {
    position: 'absolute',
    top: scale(138),
    left: scale(53),
    fontSize: scale(17),
    fontFamily: FONT_FAMILY.SF_Pro_Rounded,
    color: CUSTOM_COLOR.Black,
  },
  header2: {
    position: 'absolute',
    top: scale(351),
    left: scale(53),
    fontSize: scale(17),
    fontFamily: FONT_FAMILY.SF_Pro_Rounded,
    color: CUSTOM_COLOR.Black,
  },
  description1: {
    position: 'absolute',
    fontSize: scale(13),
    opacity: scale(0.5),
    color: CUSTOM_COLOR.Black,
  },
  description2: {
    position: 'absolute',
    top: scale(20),
    left: scale(91),
    fontSize: scale(13),
    fontFamily: FONT_FAMILY.SF_Pro_Rounded,
    color: CUSTOM_COLOR.Black,
  },
  payment: {
    top: scale(50),
    left: scale(53),
    fontSize: scale(17),
    opacity: scale(0.5),
    color: CUSTOM_COLOR.Black,
    width: scale(297),
  },
  mail: {
    top: scale(50),
    left: scale(91),
  },
  info: {
    top: scale(75),
    left: scale(91),
    width: scale(200),
    height: scale(40),
  },
  paymentBox: {
    position: 'absolute',
    top: scale(392),
    left: scale(50),
    backgroundColor: CUSTOM_COLOR.White,
    borderRadius: scale(30),
    width: scale(315),
    height: scale(231),
  },
  avatar: {
    position: 'absolute',
    top: scale(20),
    left: scale(16),
  },
});
