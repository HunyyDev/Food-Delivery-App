import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {Component, useInsertionEffect} from 'react';
import CUSTOM_COLOR from '../../constants/color';
import scale from '../../../responsive';
import {IMG_LOGO} from '../../assets/images';
import Custom_InputOne from '../login/components/Custom_InputOne';
import Custom_ButtonOne from '../../components/CUSTOM_ButtonOne';
import Custom_SwitchButton from '../login/components/Custom_SwitchButton';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'Login',
      pass: '',
      confirmPass: '',
    };
    this.setActiveTab = this.setActiveTab.bind(this);
  }
  setActiveTab(val){
    this.setState({activeTab: val})
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.upperBackground}>
          <Image style={styles.Logo} source={IMG_LOGO} />
          <Custom_SwitchButton
            activeTab={this.state.activeTab}
            setActiveTab={this.setActiveTab}
          />
        </View>
        <Custom_InputOne
          text={'Email Address'}
          placeHolderText={'example@gmail.com'}
          placeholderTextColor={CUSTOM_COLOR.Black}
          top={scale(431)}
          left={scale(50)}
          position={'absolute'}
          entry={false}
        />
        <Custom_InputOne
          onChangeText={(pass) => this.setState({pass: pass})}
          text={'Password'}
          placeHolderText={'********'}
          placeholderTextColor={CUSTOM_COLOR.Black}
          top={scale(536)}
          left={scale(50)}
          position={'absolute'}
          entry={true}
        />
        {!isLogin(this.state.activeTab) ? (
          <Custom_InputOne
            onChangeText={(pass) => this.setState({confirmPass: pass})}
            text={'Confirm password'}
            placeHolderText={'********'}
            placeholderTextColor={CUSTOM_COLOR.Black}
            top={scale(615)}
            left={scale(50)}
            position={'absolute'}
            entry={true}
          />
        ) : null}

        {isLogin(this.state.activeTab) ? (
          <TouchableOpacity style={styles.ForgotPasscodeButton}>
            <Text style={styles.ForgotPasscodeButtonText}>
              Forgot passcode?{' '}
            </Text>
          </TouchableOpacity>
        ) : null}

        {isLogin(this.state.activeTab) ? (
          <Custom_ButtonOne
            text={'Login'}
            color={CUSTOM_COLOR.Vermilion}
            textColor={CUSTOM_COLOR.White}
            onPress={() => this.props.navigation.navigate('Home')}
          />
        ) : null}

        {!isLogin(this.state.activeTab) ? (
          <Custom_ButtonOne
            text={'Sign-Up'}
            color={CUSTOM_COLOR.Vermilion}
            textColor={CUSTOM_COLOR.White}
            onPress={() => correctConFirmPassword(this.state.pass, this.state.confirmPass) ? this.props.navigation.navigate('Home') : alert('Nhap sai')}
          />
        ) : null}
      </SafeAreaView>
    );
  }
}


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
});

function isLogin(props) {
  if (props === 'Login') return true;
  return false;
}

function correctConFirmPassword(pass, confirmPass){
  if(pass === confirmPass) 
    return true;
  return false;
}
