import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import FONT_FAMILY from '../.././constants/fonts';
import {IMG_Logo} from '../.././assets/images';
import CUSTOM_COLOR from '../.././constants/colors';
import CustomInput from '../.././components/CustomInput';
import CustomButton from '../.././components/CustomButton';
import scale from '../.././constants/responsive';
import {LOGIN, SIGN_UP} from '../.././constants/screen'; 

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: LOGIN,
    };
  }

  render() {
    const {navigation} = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.LoginScreenUpView}>
          <Image source={IMG_Logo} style={styles.logoView} />

          <TouchableOpacity
            style={styles.touch}
            onPress={() => {
              this.setState({flag: LOGIN});
            }}
            disabled={this.state.flag === LOGIN ? true : false}>
            <Text style={styles.textLogin}>Login</Text>
            {this.state.flag === LOGIN ? (
              <View left={scale(50)} style={styles.lineUnder} />
            ) : null}
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.touch}
            onPress={() => {
              this.setState({flag: SIGN_UP});
            }}
            disabled={this.state.flag === SIGN_UP ? true : false}>
            <Text style={styles.textSignUp}>Sign-up</Text>
            {this.state.flag === SIGN_UP ? (
              <View left={scale(232)} style={styles.lineUnder} />
            ) : null}
          </TouchableOpacity>
        </View>

        {this.state.flag === LOGIN ? (
          <View top={scale(360)}>
            <CustomInput label="Email address" />
            <CustomInput label="Password" secureTextEntry={true} />
            <Text style={styles.TextForgot}>Forgot PassCode?</Text>
          </View>
        ) : null}
        {this.state.flag === SIGN_UP ? (
          <View top={scale(360)}>
            <CustomInput label="Email address" />
            <CustomInput label="Password" secureTextEntry={true} />
            <CustomInput label="Confirm Password" secureTextEntry={true} />
          </View>
        ) : null}
        <View style={styles.styleButton}>
          <CustomButton
            onPress={() => navigation.navigate('Home')}
            type="secondary"
            text="Login"
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.Gray,
  },
  LoginScreenUpView: {
    position: 'absolute',
    width: scale(414),
    height: scale(382),
    top: scale(-30),
    borderRadius: 30,
    backgroundColor: CUSTOM_COLOR.White,
  },
  logoView: {
    position: 'absolute',
    width: scale(132),
    height: scale(162),
    top: scale(115),
    left: scale(140),
  },
  touch: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textLogin: {
    position: 'absolute',
    width: scale(80),
    height: scale(25),
    top: scale(330),
    left: scale(89),
    fontFamily: FONT_FAMILY.SF_Pro_Text,
    fontSize: 18,
    color: CUSTOM_COLOR.Black,
    lineHeight: 21,
  },
  textSignUp: {
    position: 'absolute',
    width: scale(80),
    height: scale(25),
    top: scale(330),
    left: scale(263),
    fontFamily: FONT_FAMILY.SF_Pro_Text,
    fontSize: 18,
    color: CUSTOM_COLOR.Black,
    lineHeight: 21,
  },
  lineUnder: {
    position: 'absolute',
    bottom: 0,
    height: scale(3),
    width: scale(134),
    backgroundColor: CUSTOM_COLOR.SunsetOrange,
    borderRadius: 40,
    top: scale(380),
  },
  TextForgot: {
    position: 'absolute',
    width: scale(200),
    height: scale(25),
    left: scale(50),
    top: scale(220),
    fontSize: 17,
    lineHeight: 20,
    color: CUSTOM_COLOR.Orange,
    fontFamily: FONT_FAMILY.SF_Pro_Text,
  },
  styleButton: {
    position: 'absolute',
    width: scale(314),
    height: scale(70),
    left: scale(50),
    top: scale(650),
    backgroundColor: CUSTOM_COLOR.Orange,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ButtonContainer: {
    height: scale(70),
    width: scale(314),
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  Text: {
    fontSize: 18,
    fontFamily: FONT_FAMILY.Black,
  },
});
