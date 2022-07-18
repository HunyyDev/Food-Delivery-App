import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Image,
  Dimensions,
  TextInput,
  Pressable,
} from 'react-native';
import React, {Component, useState} from 'react';
import CUSTOM_COLOR from '../../constants/colors';
import {IMG_Logo} from '../../assets/images';
import FONT_FAMILY from '../../constants/fonts';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import UnderlineButton from '../../components/UnderlineButton';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 'login',
    };
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <>
          <View style={styles.logoBackground}>
            <Image
              style={styles.logo}
              source={IMG_Logo}
              resizeMode={'contain'}
            />
            <View style={styles.navigationBar}>
              <UnderlineButton
                onPress={() => this.setState({tab: 'login'})}
                isChoosing={this.state.tab === 'login'}>
                Login
              </UnderlineButton>
              <UnderlineButton
                onPress={() => this.setState({tab: 'signup'})}
                isChoosing={this.state.tab === 'signup'}>
                Sign-up
              </UnderlineButton>
            </View>
          </View>
        </>
        <>
          <CustomInput label={'Email address'} secure={false} />
          <CustomInput label={'Password'} secure={true} />
        </>
        <>
          {/* <Pressable
            onPress={10}
            style={({pressed}) => [
              {
                backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
              },
              styles.forgotBackground,
            ]}>
            {({pressed}) =>
              ({pressed} ? (
                <Text style={styles.forgot}>Forgot passcode?</Text>
              ) : (
                <Text style={styles.forgotPressed}>Forgot passcode?</Text>
              ))
            }
          </Pressable> */}
          <View style={styles.forgotBackground}>
            <Text style={styles.forgot}>Forgot passcode?</Text>
          </View>
        </>
        <>
          <CustomButton label={'secondary'} text={'Login'} />
        </>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.Concrete,
  },
  logoBackground: {
    width: '100%',
    height: Dimensions.get('window').height * 0.4,
    backgroundColor: CUSTOM_COLOR.White,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
  },
  logo: {
    width: '70%',
    height: '70%',
    alignSelf: 'center',
  },
  navigationBar: {
    position: 'absolute',
    bottom: 0,
    width: Dimensions.get('window').width,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  forgotBackground: {
    width: '75%',
    height: '8%',
    margin: 30,
    marginBottom: 10,
    backgroundColor: CUSTOM_COLOR.Concrete,
    alignSelf: 'center',
  },
  forgot: {
    fontFamily: FONT_FAMILY.TextBold,
    fontSize: 14,
    color: CUSTOM_COLOR.SunsetOrange,
  },
  forgotPressed: {
    fontFamily: FONT_FAMILY.TextBold,
    fontSize: 14,
    color: CUSTOM_COLOR.White,
  },
});
