<<<<<<< HEAD
import {SafeAreaView, Text, View, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import CUSTOM_COLOR from '../../constants/colors';
export class LoginScreen extends Component {
  render() {
    return <SafeAreaView style={styles.Container}></SafeAreaView>;
  }
}

export default LoginScreen;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.AntiFlashWhite,
=======
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';
import CUSTOM_COLOR from '../../constants/colors';
import {IMG_Logo} from '../../assets/images/images';
import FONT_FAMILY from '../../constants/fonts';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import scaleWidth from '../../constants/responsive';
import {LOGIN, SIGN_UP} from '../../constants/screen';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: LOGIN,
    };
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {/*Heading*/}
        <View style={styles.containerHeading}>
          <>
            <Image source={IMG_Logo} style={styles.img} resizeMode={'cover'} />
            <View style={styles.containerTouch}>
              <TouchableOpacity
                style={styles.touch}
                onPress={() => {
                  this.setState({page: LOGIN});
                }}
                disabled={this.state.page === LOGIN ? true : false}>
                <Text style={styles.headingText}>Login</Text>
                {this.state.page === LOGIN ? (
                  <View style={styles.line} />
                ) : null}
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.touch}
                onPress={() => {
                  this.setState({page: SIGN_UP});
                }}
                disabled={this.state.page === SIGN_UP ? true : false}>
                <Text style={styles.headingText}>Sign-up</Text>
                {this.state.page === SIGN_UP ? (
                  <View style={styles.line} />
                ) : null}
              </TouchableOpacity>
            </View>
          </>
        </View>
        {/* Body*/}
        <View style={styles.containerBody}>
          <View>
            {this.state.page === LOGIN ? (
              <>
                <CustomInput label="Email address" />
                <CustomInput label="Password" secureTextEntry={true} />
                <Text style={styles.loginText}>Forgot passcode?</Text>
              </>
            ) : null}
            {this.state.page === SIGN_UP ? (
              <>
                <CustomInput label="Email address" />
                <CustomInput label="Password" secureTextEntry={true} />
                <CustomInput label="Confirm Password" secureTextEntry={true} />
              </>
            ) : null}
          </View>
        </View>
        {/* Bottom */}
        <View style={styles.containerBottom}>
          <CustomButton type={'secondary'} text={'Login'} />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.Grey,
  },
  containerHeading: {
    flex: 2,
    backgroundColor: CUSTOM_COLOR.White,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    flex: 5,
    width: scaleWidth(150),
    height: scaleWidth(150),
  },
  containerTouch: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
  },
  containerBody: {
    flex: 2,
    marginHorizontal: scaleWidth(50),
  },
  containerBottom: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  touch: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headingText: {
    fontFamily: FONT_FAMILY.Medium,
    fontSize: 18,
    lineHeight: 21,
    color: CUSTOM_COLOR.Black,
  },
  line: {
    position: 'absolute',
    bottom: 0,
    height: 3,
    width: scaleWidth(134),
    backgroundColor: CUSTOM_COLOR.SunsetOrange,
    borderRadius: 40,
  },
  containerInput: {
    marginTop: scaleWidth(50),
    alignItems: 'center',
  },
  loginText: {
    color: CUSTOM_COLOR.Vermilion,
    fontFamily: FONT_FAMILY.Medium,
    fontSize: 17,
    marginTop: scaleWidth(30),
    marginLeft: 0,
>>>>>>> e51852857c05cb3f560428b32216a3d2ff4ad911
  },
});
