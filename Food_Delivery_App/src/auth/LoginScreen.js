import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';

import CUSTOM_COLOR from '../constants/colors';
import FONT_FAMILY from '../constants/fonts';
import {IMG_Logo} from '../assets/images/index';
import scale from '../../responsive';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

const LOGIN = 'LOGIN';
const SIGNUP = 'SIGN_UP';

export class LoginScreen extends Component {
  state = {
    page: LOGIN,
  };
  setPage = newPage => {
    this.setState({
      page: newPage,
    });
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        {/* Heading */}
        <View style={styles.headingContainer}>
          {/* Logo */}
          <View style={styles.logoContainer}>
            <Image
              style={styles.logo}
              source={IMG_Logo}
              resizeMode={'contain'}
            />
          </View>
          {/* Navigation */}
          <View style={styles.navigationContainer}>
            {/* Login */}
            <TouchableOpacity
              style={styles.touchableContainer}
              onPress={() => {
                this.setPage(LOGIN);
              }}>
              <Text style={styles.textLabel}> Login</Text>
              {this.state.page === LOGIN ? (
                <View style={styles.pickerLiner}></View>
              ) : null}
            </TouchableOpacity>
            {/* Signup */}
            <TouchableOpacity
              style={styles.touchableContainer}
              onPress={() => {
                this.setPage(SIGNUP);
              }}>
              <Text style={styles.textLabel}> Sign-up</Text>
              {this.state.page === SIGNUP ? (
                <View style={styles.pickerLiner}></View>
              ) : null}
            </TouchableOpacity>
          </View>
        </View>

        {/* Body */}

        <View style={styles.contentContainer}>
          <View>
            <CustomInput label={'Email address'} />
            <CustomInput label={'Password'} secureText={true} />
          </View>
          {this.state.page === LOGIN ? (
            <TouchableOpacity>
              <Text style={styles.forgetPasscode}> Forgot Passcode? </Text>
            </TouchableOpacity>
          ) : (
            <CustomInput label={'Comfirm password'} secureText={true} />
          )}
        </View>

        {/* Button */}

        <View style={styles.buttonContainer}>
          {this.state.page === LOGIN ? (
            <CustomButton type={'secondary'} text={'Login'} />
          ) : (
            <CustomButton type={'secondary'} text={'Sign Up'} />
          )}
        </View>
      </SafeAreaView>
    );
  }
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.AntiFlashWhite,
  },
  headingContainer: {
    backgroundColor: CUSTOM_COLOR.White,
    justifyContent: 'center',
    width: scale(414),
    height: '40%',
    borderRadius: scale(30),
    marginBottom: 20,
  },
  logoContainer: {
    height: scale(162.38),
    width: scale(131.53),
    alignSelf: 'center',
    overflow: 'hidden',
    justifyContent: 'center',
    lignItems: 'center',
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  navigationContainer: {
    position: 'absolute',
    bottom: 0,
    height: scale(60),
    flexDirection: 'row',
  },
  touchableContainer: {
    width: '50%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pickerLiner: {
    position: 'absolute',
    bottom: 0,
    width: '50%',
    height: 3,
    backgroundColor: CUSTOM_COLOR.SunsetOrange,
  },
  textLabel: {
    fontFamily: FONT_FAMILY.Medium,
    fontSize: scale(18),
    color: CUSTOM_COLOR.Black,
  },
  contentContainer: {
    alignSelf: 'center',
    height: '40%',
    width: '87%',
  },
  forgetPasscode: {
    marginTop: 20,
    fontSize: scale(17),
    fontFamily: FONT_FAMILY.Bold,
    color: CUSTOM_COLOR.SunsetOrange,
  },
  buttonContainer: {
    flex: 1,
  },
});
