/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import scale from '../../constants/scales';
import FONT_FAMILY from '../../constants/fonts';
import CUSTOM_COLOR from '../../constants/colors';
import {ICOnBack, ICSelect} from '../../assets/icons';
import {IMG_Bank, IMG_Card, IMG_Faces, IMG_Paypal} from '../../assets/images';
import SCREEN_NAME from '../../constants/screen';

const MyProfile = props => {
  const {navigation} = props;
  const onBack = () => {
    navigation.goBack();
  };

  const onProfile = () => {
    navigation.navigate(SCREEN_NAME.PROFILE);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* View Top */}
      <>
        <View style={styles.icContainer}>
          <TouchableOpacity activeOpacity={0.7} onPress={onBack}>
            <ICOnBack />
          </TouchableOpacity>
          <>
            <Text style={styles.titleProfile}>{'My profile'}</Text>
          </>
        </View>
      </>

      <Text style={styles.titleInformation}>{'Information'}</Text>

      <TouchableOpacity activeOpacity={0.7} onPress={onProfile}>
        <View style={[styles.backgroundProfile, {flexDirection: 'row'}]}>
          <Image
            source={IMG_Faces}
            resizeMode={'contain'}
            style={[{marginLeft: scale(16), marginTop: scale(18)}]}
          />

          <View style={[styles.infoContainer, {flexDirection: 'column'}]}>
            <Text
              style={[
                {
                  marginTop: scale(26),
                  fontFamily: FONT_FAMILY.Abel_Regular,
                  fontSize: 18,
                  color: CUSTOM_COLOR.Black,
                },
              ]}>
              {'Marvis Ighedosa'}
            </Text>

            <Text style={[styles.textInfo]}>{'dosamarvis@gmail.com'}</Text>

            <Text
              style={[
                styles.textInfo,
                {
                  marginTop: scale(7),
                },
              ]}>
              {'No 15 uti street off ovie palace road effurun delta state'}
            </Text>
          </View>
        </View>
      </TouchableOpacity>

      <Text style={styles.titleInformation}>{'Payment Method'}</Text>

      <View style={styles.selectContainer}>
        <TouchableOpacity>
          <>
            <View style={[styles.box]}>
              <ICSelect />

              <View
                style={[
                  styles.rectangle,
                  {backgroundColor: CUSTOM_COLOR.TahitiGold},
                ]}>
                <Image source={IMG_Card} />
              </View>

              <Text style={styles.nameMethod}>{'Card'}</Text>
            </View>
          </>

          <View style={styles.line} />
        </TouchableOpacity>

        <TouchableOpacity>
          <>
            <View style={styles.box}>
              <ICSelect />

              <View
                style={[
                  styles.rectangle,
                  {backgroundColor: CUSTOM_COLOR.FrenchRose},
                ]}>
                <Image source={IMG_Bank} />
              </View>
              <Text style={styles.nameMethod}>{'Bank account'}</Text>
            </View>
          </>

          <View style={styles.line} />
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.box}>
            <ICSelect />

            <View
              style={[
                styles.rectangle,
                {backgroundColor: CUSTOM_COLOR.BlueRibbon},
              ]}>
              <Image source={IMG_Paypal} />
            </View>
            <Text style={styles.nameMethod}>{'Paypal'}</Text>
          </View>
        </TouchableOpacity>
      </View>

      <>
        <TouchableOpacity style={styles.buttonSecondary}>
          <Text style={styles.titleButtonSecondary}>{'Update'}</Text>
        </TouchableOpacity>
      </>
    </SafeAreaView>
  );
};

export default MyProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.AthensGray,
  },

  icContainer: {
    flexDirection: 'row',
    marginTop: scale(35),
    marginLeft: scale(50),
    marginRight: scale(55.29),
    alignItems: 'center',
    //backgroundColor: CUSTOM_COLOR.Silver,
  },

  titleProfile: {
    marginLeft: scale(105),
    fontSize: 23,
    fontFamily: FONT_FAMILY.Abel_Regular,
    alignSelf: 'flex-end',
    color: CUSTOM_COLOR.Black,
  },

  titleInformation: {
    marginTop: scale(54),
    marginLeft: scale(53),
    fontFamily: FONT_FAMILY.Abel_Regular,
    fontSize: 17,
    color: CUSTOM_COLOR.Black,
  },

  backgroundProfile: {
    marginTop: scale(10),
    marginLeft: scale(42),
    marginRight: scale(40),
    //width: scale(330),
    height: scale(160),
    borderRadius: 20,
    backgroundColor: CUSTOM_COLOR.White,
  },

  infoContainer: {
    marginLeft: scale(15),
    width: scale(190),
  },

  textInfo: {
    fontSize: 13,
    fontFamily: FONT_FAMILY.Abel_Regular,
  },

  //   titlePayment: {
  //     marginLeft: scale(53),
  //     fontFamily: FONT_FAMILY.Abel_Regular,
  //     fontSize: 17,
  //     color: CUSTOM_COLOR.Black,
  //   },

  selectContainer: {
    marginTop: scale(20),
    marginLeft: scale(42),
    marginRight: scale(40),
    height: scale(231),
    //justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 20,
    alignContent: 'center',
    backgroundColor: CUSTOM_COLOR.White,
  },

  box: {
    marginTop: scale(20),
    flexDirection: 'row',
    width: scale(262),
    height: scale(40),
    alignItems: 'center',
    //backgroundColor: CUSTOM_COLOR.Silver,
  },

  rectangle: {
    marginLeft: scale(28),
    width: scale(40),
    height: scale(40),
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  nameMethod: {
    marginLeft: scale(11),
    fontSize: 17,
    fontFamily: FONT_FAMILY.Abel_Regular,
    color: CUSTOM_COLOR.Black,
    // alignSelf: 'center',
  },

  line: {
    marginTop: scale(15),
    marginLeft: scale(45),
    borderBottomColor: CUSTOM_COLOR.Black,
    borderBottomWidth: 0.5,
  },

  buttonSecondary: {
    marginTop: scale(105),
    height: scale(70),
    width: scale(314),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 35,
    alignSelf: 'center',
    backgroundColor: CUSTOM_COLOR.Vermilion,
  },

  titleButtonSecondary: {
    fontSize: 17,
    fontFamily: FONT_FAMILY.Abel_Regular,
    color: CUSTOM_COLOR.White,
  },
});
