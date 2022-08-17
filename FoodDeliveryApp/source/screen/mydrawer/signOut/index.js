//import { signOut } from 'firebase/auth/react-native';
import React from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';
import CUSTOM_COLOR from '../../../constants/color';
import FONT_FAMILY from '../../../constants/fonts';
import scale from '../../../../responsive';
//import { auth } from '../../../firebase-config';
import auth from '@react-native-firebase/auth';

const SignOut = (props) => {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
      <TouchableOpacity
        onPress={() => {auth()
        .signOut()
        .then(() =>  props.navigation.replace("Login"))
        .catch((error) => console.log(error.message))}}
        style={{
          backgroundColor: CUSTOM_COLOR.SunsetOrange,
          justifyContent: 'center',
          marginLeft: scale(50),
          marginRight: scale(50),
        }}>
        <Text
          style={{
            alignSelf: 'center',
            color: CUSTOM_COLOR.White,
            fontSize: scale(24),
            fontFamily: FONT_FAMILY.SF_Pro_Rounded,
          }}>
          {'Sign-Out'}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default SignOut;


