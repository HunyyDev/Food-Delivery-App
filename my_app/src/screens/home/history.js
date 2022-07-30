/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import scale from '../../constants/scales';
import FONT_FAMILY from '../../constants/fonts';
import CUSTOM_COLOR from '../../constants/colors';
import {ICOnBack} from '../../assets/icons';

import {IMG_Disconnect, IMG_Order} from '../../assets/images';

const History = props => {
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
            <Text style={styles.titleProfile}>{'History'}</Text>
          </>
        </View>
      </>
      <View style={styles.boxContainer}>
        <IMG_Order />
        <Text style={styles.titleNoHistory}>{'No history yet'}</Text>
        <Text style={styles.text}>
          {'Hit the orange button down\n   below to Create an order'}
        </Text>
      </View>

      <>
        <TouchableOpacity style={styles.buttonSecondary}>
          <Text style={styles.titleButtonSecondary}>{'Start odering'}</Text>
        </TouchableOpacity>
      </>
    </SafeAreaView>
  );
};

export default History;

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
    fontSize: 18,
    fontFamily: FONT_FAMILY.Abel_Regular,
    alignSelf: 'flex-end',
    color: CUSTOM_COLOR.Black,
  },

  boxContainer: {
    marginTop: scale(180),
    marginLeft: scale(40),
    marginRight: scale(40),

    justifyContent: 'center',
    alignItems: 'center',
    // alignSelf: 'center',
    //backgroundColor: CUSTOM_COLOR.Silver,
  },

  titleNoHistory: {
    marginTop: scale(26),
    fontSize: 28,
    fontFamily: FONT_FAMILY.Abel_Regular,
    color: CUSTOM_COLOR.Black,
  },

  text: {
    marginTop: scale(14),
    fontSize: 17,
    fontFamily: FONT_FAMILY.Abel_Regular,
    color: CUSTOM_COLOR.Black,
    alignSelf: 'center',
  },

  buttonSecondary: {
    marginTop: scale(230),
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
