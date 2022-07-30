/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import scale from '../../constants/scales';
import FONT_FAMILY from '../../constants/fonts';
import CUSTOM_COLOR from '../../constants/colors';
import {ICOnBack, ICOnNext, ICSelect} from '../../assets/icons';
import {IMG_Faces} from '../../assets/images';

const DeliveryScreen = props => {
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
          <>
            <Text style={styles.titleProfile}>{'Checkout'}</Text>
          </>
        </View>
      </>
      <>
        <Text style={styles.titleDelivery}>{'Delivery'}</Text>
      </>

      <View style={styles.secondContainer}>
        <TouchableOpacity activeOpacity={0.7}>
          <Text style={styles.titleAddressDetails}>{'Address details'}</Text>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.7}>
          <Text style={styles.titleChange}>{'Change'}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.backgroundProfile}>
        <View style={[styles.infoContainer, {flexDirection: 'column'}]}>
          <Text
            style={[
              styles.textInfo,
              {borderBottomColor: CUSTOM_COLOR.Black, borderBottomWidth: 0.5},
            ]}>
            {'Marvis Kparobo'}
          </Text>

          <Text
            style={[
              styles.textInfo,
              {
                marginTop: scale(14),
                borderBottomColor: CUSTOM_COLOR.Black,
                borderBottomWidth: 0.5,
              },
            ]}>
            {
              'Km 5 refinery road oppsite re\n public road, effurun, delta state'
            }
          </Text>

          <Text
            style={[
              styles.textInfo,
              {
                marginTop: scale(14),
              },
            ]}>
            {'+234 9011039271'}
          </Text>
        </View>
      </View>
      {/*  */}

      <Text style={styles.titleDeliveryMethod}>{'Delivery method.'}</Text>

      <View style={styles.selectContainer}>
        <TouchableOpacity>
          <>
            <View style={[styles.box]}>
              <ICSelect />

              <Text style={styles.nameMethod}>{'Door delivery'}</Text>
            </View>
          </>

          <View style={styles.line} />
        </TouchableOpacity>

        <TouchableOpacity>
          <>
            <View style={styles.box}>
              <ICSelect />

              <Text style={styles.nameMethod}>{'Pick up'}</Text>
            </View>
          </>
        </TouchableOpacity>
      </View>

      <View style={styles.secondContainer}>
        <TouchableOpacity activeOpacity={0.7}>
          <Text style={styles.titleAddressDetails}>{'Total'}</Text>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.7}>
          <Text style={styles.price}>{'23,000'}</Text>
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

export default DeliveryScreen;

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

  secondContainer: {
    flexDirection: 'row',
    marginTop: scale(30),
    marginLeft: scale(42),
    marginRight: scale(69),
    justifyContent: 'space-between',
    //backgroundColor: CUSTOM_COLOR.Silver,
  },

  titleProfile: {
    marginLeft: scale(105),
    fontSize: 23,
    fontFamily: FONT_FAMILY.Abel_Regular,
    alignSelf: 'flex-end',
    color: CUSTOM_COLOR.Black,
  },

  titleDelivery: {
    marginTop: scale(30),
    marginLeft: scale(50),
    fontFamily: FONT_FAMILY.Abel_Regular,
    fontSize: 34,
    color: CUSTOM_COLOR.Black,
  },

  titleAddressDetails: {
    fontFamily: FONT_FAMILY.Abel_Regular,
    fontSize: 17,
    color: CUSTOM_COLOR.Black,
  },

  titleChange: {
    fontFamily: FONT_FAMILY.Abel_Regular,
    fontSize: 15,
    color: CUSTOM_COLOR.Vermilion,
  },

  price: {
    fontFamily: FONT_FAMILY.Abel_Regular,
    fontSize: 22,
    color: CUSTOM_COLOR.Black,
  },

  backgroundProfile: {
    marginTop: scale(18),
    marginLeft: scale(42),
    marginRight: scale(40),
    //width: scale(330),
    height: scale(170),
    borderRadius: 20,
    backgroundColor: CUSTOM_COLOR.White,
  },

  infoContainer: {
    marginTop: scale(25),
    marginLeft: scale(30),
    marginRight: scale(50),
    // width: scale(290),
    //backgroundColor: CUSTOM_COLOR.Silver,
  },

  textInfo: {
    fontSize: 15,
    fontFamily: FONT_FAMILY.Abel_Regular,
  },

  titleDeliveryMethod: {
    marginTop: scale(25),
    marginLeft: scale(50),
    fontFamily: FONT_FAMILY.Abel_Regular,
    fontSize: 17,
    color: CUSTOM_COLOR.Black,
  },

  selectContainer: {
    marginTop: scale(20),
    marginLeft: scale(42),
    marginRight: scale(40),
    height: scale(156),
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

  nameMethod: {
    marginLeft: scale(11),
    fontSize: 17,
    fontFamily: FONT_FAMILY.Abel_Regular,
    color: CUSTOM_COLOR.Black,
    // alignSelf: 'center',
  },

  line: {
    marginTop: scale(15),
    marginLeft: scale(30),
    borderBottomColor: CUSTOM_COLOR.Black,
    borderBottomWidth: 0.5,
  },

  buttonSecondary: {
    marginTop: scale(70),
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
