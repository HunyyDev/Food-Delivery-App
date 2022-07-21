import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {IMG_LOGO} from '../../../assets/images';
import React, {useState} from 'react';
import CustomButton from '../../../components/CustomButton';
import CustomInput from '../../../components/CustomInput';
import scale from '../../../components/scale';
import CUSTOM_COLOR from '../../../constants/colors';

const Login = 'Login';
const signUp = 'Sign-up';
const LoginScreen = navigation => {
  const [page, setPage] = useState(Login);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navContainer}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={IMG_LOGO} />
        </View>
        <View style={styles.text}>
          <TouchableOpacity
            style={styles.login}
            onPress={() => {
              setPage(Login);
            }}
            disabled={page === Login ? true : false}>
            <Text style={styles.textLogin}>Login</Text>
            {page === Login ? <View style={styles.rightLine} /> : null}
            {page === Login ? (
              <View style={styles.inputLogin}>
                <CustomInput style={styles.input} label="Email address" />
                <CustomInput label="Password" secureTextEntry={true} />
              </View>
            ) : null}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.signUp}
            onPress={() => {
              setPage(signUp);
            }}
            disabled={page === signUp ? true : false}>
            <Text style={styles.textSignUp}>Sign-up</Text>
            {page === signUp ? <View style={styles.leftLine} /> : null}
            {page === signUp ? (
              <View style={styles.inputSignUp}>
                <CustomInput label="Email address" />
                <CustomInput label="Password" secureTextEntry={true} />
                <CustomInput label="Confirm Password" secureTextEntry={true} />
              </View>
            ) : null}
          </TouchableOpacity>
        </View>
      </View>

      <CustomButton
        title="Login"
        type="secondary"
        alert="Login button's event handle"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navContainer: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.White,
    position: 'absolute',
    width: scale(414),
    height: scale(382),
    left: 0,
    borderRadius: 30,
    top: scale(-15),
  },
  logoContainer: {
    // flex: 1,
    position: 'absolute',
    width: scale(131.53),
    height: scale(162.38),
    left: scale(136),
    top: scale(113),
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  text: {
    flex: 1,
    // fontSize: scale(18),
  },
  login: {
    flex: 1,
    position: 'absolute',
    width: scale(49),
    height: scale(24),
    left: scale(89),
    top: scale(330),
  },
  signUp: {
    flex: 1,
    position: 'absolute',
    width: scale(71),
    height: scale(24),
    left: scale(263),
    top: scale(330),
  },
  textLogin: {
    fontSize: scale(18),
    fontWeight: '600',
    color: CUSTOM_COLOR.Black,
  },
  textSignUp: {
    fontSize: scale(18),
    fontWeight: '600',
    color: CUSTOM_COLOR.Black,
  },
  rightLine: {
    position: 'absolute',
    width: scale(134),
    height: scale(3),
    left: scale(-39),
    top: scale(51),
    backgroundColor: CUSTOM_COLOR.Vermilion,
    borderRadius: 40,
  },
  leftLine: {
    position: 'absolute',
    width: scale(134),
    height: scale(3),
    left: scale(-31),
    top: scale(51),
    backgroundColor: CUSTOM_COLOR.Vermilion,
    borderRadius: 40,
  },
  inputLogin: {
    position: 'absolute',
    top: scale(116),
    left: scale(-39),
  },
  inputSignUp: {
    position: 'absolute',
    top: scale(116),
    left: scale(-213),
  },
  button: {
    position: 'absolute',
    bottom: scale(41),
    alignSelf: 'center',
  },
});

export default LoginScreen;
