/* eslint-disable no-sequences */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
//import liraries
import React, {Component, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import CUSTOM_COLOR from '../../constants/colors';
import FONT_FAMILY from '../../constants/fonts';
import {IMG_Logo} from '../../assets/images';
import CustomInput from '../../constants/inputs';
import scale from '../../constants/scales';

// create a component
export class SignUpScreen extends Component {
  constructor(props, navigation) {
    super(props);
    this.state = {
      name: 'Email address',
      password: 'Password',
      confirmPassword: 'Confirm Password',
      login: 'Login',
      signup: 'Sign-up',
    };
  }

  changeNameHandle = newValue => {
    this.setState({});
  };

  render() {
    // return JSX
    console.log('this.state', this.state);

    return (
      <SafeAreaView
        style={styles.container}
        onPressHandle={() => {
          this.getData();
        }}>
        {/* Background */}
        <>
          <View style={styles.background}>
            {/* Image */}
            <Image
              source={IMG_Logo}
              style={styles.logo}
              //resizeMode={'contain'}
            />

            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                style={styles.titleBackgroundLogin}
                onPress={() => {
                  this.props.navigation.navigate('LoginScreen');
                }}>
                <Text style={[styles.title]}>{this.state.login}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.titleBackground}>
                <Text style={[styles.title]}>{this.state.signup}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </>

        {/* Label */}
        <>
          <CustomInput
            label={this.state.name}
            placeholder="username@gmail.com"
            onInputChange={this.changeNameHandle}
            secureTextEntry={false}
          />
        </>

        {/* Password */}
        <>
          <CustomInput
            label={this.state.password}
            placeholder="Your password"
            onInputChange={this.changeNameHandle}
            secureTextEntry={true}
          />
        </>

        {/* Confirm Password */}
        <>
          <CustomInput
            label={this.state.confirmPassword}
            placeholder="Your password"
            onInputChange={this.changeNameHandle}
            secureTextEntry={true}
          />
        </>

        {/* Button */}
        <>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate('HomeScreen');
            }}>
            <Text style={styles.titleButton}>{'Sign-up'}</Text>
          </TouchableOpacity>
        </>
      </SafeAreaView>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.Silver,
  },

  background: {
    width: '100%',
    height: scale(382),
    overflow: 'hidden',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: -15,
    //position: 'relative',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: CUSTOM_COLOR.White,
  },

  logo: {
    marginBottom: scale(54.62),
    alignSelf: 'center',
    width: scale(131.53),
    height: scale(162.38),
  },

  title: {
    alignItems: 'center',
    marginBottom: scale(16),
    fontSize: 18,
    fontFamily: FONT_FAMILY.SFProText_Semibold,
    color: CUSTOM_COLOR.Black,
  },

  titleBackgroundLogin: {
    marginLeft: scale(0),
    width: scale(134),
    height: scale(50),
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: CUSTOM_COLOR.White,
    borderBottomWidth: 3,
  },

  titleBackground: {
    marginLeft: scale(90),
    width: scale(134),
    height: scale(50),
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: CUSTOM_COLOR.Vermilion,
    borderBottomWidth: 3,
  },

  rectangle: {
    //marginTop: 380,
    width: 134,
    height: 3,
    borderRadius: 40,
    backgroundColor: CUSTOM_COLOR.Vermilion,
  },

  boxForgotPasscode: {
    marginTop: scale(20),
    marginLeft: scale(50),
    height: scale(40),
    width: scale(175),
    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  forgotPasscode: {
    fontSize: 17,
    fontFamily: FONT_FAMILY.SFProText_Semibold,
    color: CUSTOM_COLOR.Vermilion,
  },

  button: {
    marginTop: scale(20),
    height: scale(70),
    width: scale(314),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 35,
    backgroundColor: CUSTOM_COLOR.Vermilion,
  },

  titleButton: {
    fontSize: 17,
    fontFamily: FONT_FAMILY.SFProText_Semibold,
    color: CUSTOM_COLOR.White,
  },
});

//make this component available to the LoginScreen
export default SignUpScreen;
