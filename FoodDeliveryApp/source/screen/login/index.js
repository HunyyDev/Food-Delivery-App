import { Text, View, StyleSheet, SafeAreaView, Image, TouchableOpacity} from 'react-native'
import React, { Component, useState } from 'react'
import CUSTOM_COLOR from '../../constants/color'
import scale from '../../../responsive'
import { IMG_LOGO } from '../../assets/images'
import CUSTOM_INPUT1 from '../../components/CUSTOM_INPUT1'
import CUSTOM_BUTTON1 from '../../components/CUSTOM_BUTTON1'
import CUSTOM_SWITCH_BUTTON from '../../components/CUSTOM_SWITCH_BUTTON'

const LoginScreen = ({navigation}) => {
  const [activeTab, setActiveTab] = useState('login');
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.upperBackground}>
          <Image style={styles.Logo} source={IMG_LOGO}/>
          <CUSTOM_SWITCH_BUTTON activeTab={activeTab} setActiveTab={setActiveTab} />
        </View>
        <CUSTOM_INPUT1
          text={'Email Address'}
          placeHolderText={'example@gmail.com'}
          placeholderTextColor={CUSTOM_COLOR.Black}
          top={scale(431)}
          left={scale(50)}
          position={'absolute'}
          entry={false}
        />
        <CUSTOM_INPUT1
            text={'Password'}
            placeHolderText={'********'}
            placeholderTextColor={CUSTOM_COLOR.Black}
            top={scale(536)}
            left={scale(50)}
            position={'absolute'}
            entry={true}
          />
        {!isLogin(activeTab) ? (
            <CUSTOM_INPUT1
              text={'Confirm password'}
              placeHolderText={'********'}
              placeholderTextColor={CUSTOM_COLOR.Black}
              top={scale(615)}
              left={scale(50)}
              position={'absolute'}
              entry={true}
            />
          ) : null}

        {isLogin(activeTab) ? (
          <TouchableOpacity style={styles.ForgotPasscodeButton}>
            <Text style={styles.ForgotPasscodeButtonText}>Forgot passcode? </Text>
          </TouchableOpacity>
          ) : null}

        <CUSTOM_BUTTON1
            text={'Login'}
            color={CUSTOM_COLOR.Vermilion}
            textColor={CUSTOM_COLOR.White}
            onPress={() => navigation.navigate('Home')}
          />
      </SafeAreaView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.Concreate,
  },
  upperBackground: {
    top: scale(-20),
    backgroundColor: CUSTOM_COLOR.White,
    width: scale(414),
    height: scale(382),
    borderRadius: scale(30),
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Logo: {
    position: 'absolute',
    width: scale(131.53),
    height: scale(162.38),
    top: scale(113),
    left: scale(136),
  },
  ForgotPasscodeButton: {
    width: scale(149),
    height: scale(30),
    left: scale(50),
    top: scale(629),
    position: 'absolute',
  },
  ForgotPasscodeButtonText: {
    color: CUSTOM_COLOR.Vermilion,
    fontSize: scale(16),
  },
})

function isLogin(props){
  if (props === 'Login') return true;
  return false;
}