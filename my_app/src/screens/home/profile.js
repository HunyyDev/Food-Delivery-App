/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import scale from '../../constants/scales';
import FONT_FAMILY from '../../constants/fonts';
import CUSTOM_COLOR from '../../constants/colors';
import {ICOnBack, ICOnNext} from '../../assets/icons';
import {IMG_Faces} from '../../assets/images';

const Profile = props => {
  const {navigation} = props;
  const onBack = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.container}>
      {/* View Top */}
      <>
        <View style={styles.icContainer}>
          <TouchableOpacity activeOpacity={0.7} onPress={onBack}>
            <ICOnBack />
          </TouchableOpacity>
        </View>
      </>
      <>
        <Text style={styles.titleProfile}>{'My profile'}</Text>
      </>
      <View style={styles.secondContainer}>
        <TouchableOpacity activeOpacity={0.7}>
          <Text style={styles.titlePersonalDetails}>{'Personal details'}</Text>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.7}>
          <Text style={styles.titleChange}>{'Change'}</Text>
        </TouchableOpacity>
      </View>
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

          <Text
            style={[
              styles.textInfo,
              {borderBottomColor: CUSTOM_COLOR.Black, borderBottomWidth: 0.5},
            ]}>
            {'Dosamarvis@gmail.com'}
          </Text>

          <Text
            style={[
              styles.textInfo,
              {
                marginTop: scale(7),
                borderBottomColor: CUSTOM_COLOR.Black,
                borderBottomWidth: 0.5,
              },
            ]}>
            {'+234 9011039271'}
          </Text>

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

      <TouchableOpacity>
        <View style={styles.selectContainer}>
          <Text style={styles.textBackground}>{'Orders'}</Text>
          <ICOnNext style={[{marginRight: scale(26)}]} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style={styles.selectContainer}>
          <Text style={styles.textBackground}>{'Pending reviews'}</Text>
          <ICOnNext style={[{marginRight: scale(26)}]} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style={styles.selectContainer}>
          <Text style={styles.textBackground}>{'Faq'}</Text>
          <ICOnNext style={[{marginRight: scale(26)}]} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style={styles.selectContainer}>
          <Text style={styles.textBackground}>{'Help'}</Text>
          <ICOnNext style={[{marginRight: scale(26)}]} />
        </View>
      </TouchableOpacity>

      <>
        <TouchableOpacity style={styles.buttonSecondary}>
          <Text style={styles.titleButtonSecondary}>{'Update'}</Text>
        </TouchableOpacity>
      </>
    </SafeAreaView>
  );
};

export default Profile;

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
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },

  secondContainer: {
    flexDirection: 'row',
    marginTop: scale(30),
    marginLeft: scale(42),
    marginRight: scale(69),
    justifyContent: 'space-between',
  },

  titleProfile: {
    marginTop: scale(30),
    marginLeft: scale(50),
    fontFamily: FONT_FAMILY.Abel_Regular,
    fontSize: 34,
    color: CUSTOM_COLOR.Black,
  },

  titlePersonalDetails: {
    fontFamily: FONT_FAMILY.Abel_Regular,
    fontSize: 18,
    color: CUSTOM_COLOR.Black,
  },

  titleChange: {
    fontFamily: FONT_FAMILY.Abel_Regular,
    fontSize: 15,
    color: CUSTOM_COLOR.Vermilion,
  },

  backgroundProfile: {
    marginTop: scale(9),
    marginLeft: scale(42),
    marginRight: scale(40),
    //width: scale(330),
    height: scale(197),
    borderRadius: 20,
    backgroundColor: CUSTOM_COLOR.White,
  },

  infoContainer: {
    marginLeft: scale(15),
    width: scale(190),
  },

  textInfo: {
    fontSize: 15,
    fontFamily: FONT_FAMILY.Abel_Regular,
  },

  selectContainer: {
    marginTop: scale(20),
    marginLeft: scale(42),
    marginRight: scale(40),
    height: scale(60),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 20,
    alignContent: 'center',
    backgroundColor: CUSTOM_COLOR.White,
  },

  textBackground: {
    marginLeft: scale(23),
    width: scale(151),
    height: scale(23),
    fontFamily: FONT_FAMILY.Abel_Regular,
    color: CUSTOM_COLOR.Black,
  },

  buttonSecondary: {
    marginTop: scale(40),
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
