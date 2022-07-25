import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
} from 'react-native';
import React from 'react';
import Custom_Text_Input from './src/components/Custom_Text_Input';
import OnboardingScreen from './src/screens/onboarding';
import {useState} from 'react';
import CUSTOM_COLOR from './src/constants/colors';
import FONT_FAMILY from './src/constants/fonts';
import {IC_BackButton} from './src/assets/icons';
const ProfileScreen = props => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.backButtonContainer}>
        <Image
          source={IC_BackButton}
          style={styles.backButton}
          resizeMode={'contain'}
        />
      </View>
      <View style={styles.textMyProfileContainer}>
        <Text style={styles.textMyProfile}>My Profile</Text>
      </View>
      <View style={styles.textPersonalDetailsContainer}>
        <Text style={styles.textPersonalDetail}>Personal details</Text>
        <Text style={styles.textChange}>Change</Text>
      </View>
      <View style={styles.idContainer}></View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.AthensGray,
  },
  backButtonContainer: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: CUSTOM_COLOR.SunsetYellow,
    marginTop: 60,
    marginLeft: 41,
  },
  textMyProfileContainer: {
    width: 168,
    height: 41,
    marginLeft: 50,
    marginTop: 40,
    backgroundColor: CUSTOM_COLOR.SunsetYellow,
  },
  textMyProfile: {
    fontFamily: FONT_FAMILY.ProTextRegular,
    fontSize: 34,
    fontWeight: 'bold',
    lineHeight: 41,
    color: CUSTOM_COLOR.Black,
  },
  textPersonalDetailsContainer: {
    flexDirection: 'row',
    height: 21,
    marginTop: 44,
    justifyContent: 'space-around',
  },
  textPersonalDetail: {
    fontFamily: FONT_FAMILY.ProTextRegular,
    fontWeight: 'bold',
    lineHeight: 21,
    fontSize: 18,
    fontStyle: 'normal',
    color: CUSTOM_COLOR.Black,
  },
  textChange: {
    fontFamily: FONT_FAMILY.ProTextRegular,
    fontSize: 15,
    fontStyle: 'normal',
    lineHeight: 18,
    color: CUSTOM_COLOR.Vermilion,
  },
  idContainer: {
    width: 315,
    height: 197,
    borderRadius: 20,
    backgroundColor: CUSTOM_COLOR.SunsetYellow,
    marginLeft: 42,
    marginTop: 11,
    shadowRadius: 20,
    shadowOpacity: 0.03,
    shadowOffset: {width: 0, height: 10},
    shadowColor: CUSTOM_COLOR.Black,
  },
});
