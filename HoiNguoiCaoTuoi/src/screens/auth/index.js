import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {IMG_Logo} from '../../assets/images';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import CUSTOM_COLOR from '../../constants/colors';
import FONT_FAMILY from '../../constants/fonts';
import {scaleHeight, scaleWidth} from '../../constants/responsive';

const LoginScreen = ({navigation}) => {
  const LOGIN = 'LOGIN';
  const SIGN_UP = 'SIGN_UP';
  const [state, setPage] = useState(LOGIN);
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.headerSection}>
          <Image source={IMG_Logo} style={styles.logo} resizeMode={'contain'} />

          <View style={styles.headerText}>
            <TouchableOpacity
              style={styles.loginAndSignUp}
              onPress={() => {
                setPage(LOGIN);
              }}>
              <Text style={styles.text}>{'Login'}</Text>
              {state === LOGIN ? <View style={styles.line} /> : null}
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.loginAndSignUp}
              onPress={() => {
                setPage(SIGN_UP);
              }}>
              <Text style={styles.text}>{'Sign-up'}</Text>
              {state === SIGN_UP ? <View style={styles.line} /> : null}
            </TouchableOpacity>
          </View>
        </View>

        {/* input */}
        <View style={styles.inputSection}>
          {state === LOGIN ? (
            <View>
              {/* Email */}
              <CustomInput label={'Email address'} />
              {/* Password */}
              <CustomInput label={'Password'} secureTextEntry />
              <TouchableOpacity>
                <Text style={styles.forgotPC}>{'Forgot passcode?'}</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View>
              {/* Email */}
              <CustomInput label={'Email address'} />
              {/* Password */}
              <CustomInput label={'Password'} secureTextEntry />
              {/* Confirm Password */}
              <CustomInput label={'Confirm Password'} secureTextEntry />
            </View>
          )}
        </View>

        {/* button */}
        <View style={styles.buttonSection}>
          {state === LOGIN ? (
            <CustomButton
              type={'secondary'}
              text={'Login'}
              onPress={() => navigation.navigate('Home')}
            />
          ) : (
            <CustomButton
              type={'secondary'}
              text={'Sign-up'}
              onPress={() => navigation.navigate('Home')}
            />
          )}
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  headerSection: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'flex-end',
    borderRadius: 30,
    backgroundColor: CUSTOM_COLOR.White,
    marginTop: -30,
  },

  headerText: {
    width: '100%',
    height: '20%',
    marginTop: 15,
    justifyContent: 'space-around',
    flexDirection: 'row',
  },

  text: {
    fontSize: scaleWidth(18),
    fontFamily: FONT_FAMILY.SemiBold,
  },

  logo: {
    height: 2 * scaleHeight(162.38),
    width: 2 * scaleWidth(131.53),
  },

  inputSection: {
    flex: 2,
    margin: 30,
    height: 30,
  },

  buttonSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
  },

  line: {
    height: 3,
    width: '65%',
    backgroundColor: CUSTOM_COLOR.Vermilion,
    position: 'absolute',
    bottom: 0,
  },
  loginAndSignUp: {
    width: '50%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  forgotPC: {
    marginTop: -12,
    color: CUSTOM_COLOR.SunsetOrange,
    fontFamily: FONT_FAMILY.Medium,
    fontSize: scaleWidth(16),
  },
});
export default LoginScreen;
