import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React, {Component} from 'react';
import CUSTOM_COLOR from '../../constants/colors';
import {IMG_Logo} from '../../assets/images';
import scale from '../../constants/responsive';
import CustomInput from '../../components/CustomInput';
import FONT_FAMILY from '../../constants/fonts';
import CustomButton from '../../components/CustomButton';
import SCREEN from '../../constants/screens';
import AsyncStorage from '@react-native-community/async-storage';

export default class LoginScreen extends Component {
  state = {
    email: null,
    password: null,
    confirm: null,
    page: '',
  };
  constructor(props) {
    super(props);
    this.state = {
      page: SCREEN.LOGIN,
      email: null,
      password: null,
    };
    this.getData();
  }
  setPage = newPage => {
    this.setState({page: newPage});
  };
  onSubmit = async () => {
    try {
      await AsyncStorage.setItem('email', this.state.email);
      await AsyncStorage.setItem('password', this.state.password);
    } catch (err) {
      console.log(err);
    }
  };
  getData = async () => {
    try {
      const email = await AsyncStorage.getItem('email');
      const password = await AsyncStorage.getItem('password');
      if (email !== null) {
        this.setState({email});
      }
      if (password !== null) {
        this.setState({password});
      }
    } catch (e) {}
  };

  render() {
    return (
      <>
        <SafeAreaView style={styles.container}>
          {/* headerSection */}
          <View style={styles.headerSection}>
            <Image
              source={IMG_Logo}
              style={styles.logo}
              resizeMode={'contain'}
            />

            <View style={styles.headerText}>
              <TouchableOpacity
                style={styles.loginAndSignUp}
                onPress={() => {
                  this.setPage(SCREEN.LOGIN);
                }}>
                <Text style={styles.text}>Login</Text>
                {this.state.page === SCREEN.LOGIN ? (
                  <View style={styles.line}></View>
                ) : null}
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.loginAndSignUp}
                onPress={() => {
                  this.setPage(SCREEN.SIGN_UP);
                }}>
                <Text style={styles.text}>Sign-up</Text>
                {this.state.page === SCREEN.SIGN_UP ? (
                  <View style={styles.line}></View>
                ) : null}
              </TouchableOpacity>
            </View>
          </View>

          {/* inputSection */}

          <View style={styles.inputSection}>
            {this.state.page === SCREEN.LOGIN ? (
              <View>
                <CustomInput
                  label={'Email address'}
                  onChangeText={val => this.setState({email: val})}
                />
                {/* Password */}
                <CustomInput
                  label={'Password'}
                  secureText={true}
                  onChangeText={val => this.setState({password: val})}
                />

                <TouchableOpacity>
                  <Text style={styles.forgotPasscode}>Forgot passcode?</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View>
                <CustomInput
                  label={'Email address'}
                  onChangeText={val => this.setState({email: val})}
                />
                {/* Password */}
                <CustomInput
                  label={'Password'}
                  secureText={true}
                  onChangeText={val => this.setState({password: val})}
                />
                {/* Confirm Password */}
                <CustomInput
                  label={'Confirm Password'}
                  secureText={true}
                  onChangeText={val => this.setState({confirm: val})}
                />
              </View>
            )}
          </View>

          {/* buttonSection */}
          <View style={styles.buttonSection}>
            {this.state.page === SCREEN.LOGIN ? (
              <CustomButton
                type={'secondary'}
                text={'Login'}
                onPress={
                  this.state.email !== null && this.state.password
                    ? () => this.props.navigation.navigate('DrawerNavigator')
                    : null
                }
              />
            ) : (
              <CustomButton
                type={'secondary'}
                text={'Sign Up'}
                onPress={
                  this.state.email !== null &&
                  this.state.password !== null &&
                  this.state.password === this.state.confirm
                    ? () => this.props.navigation.navigate('DrawerNavigator')
                    : null
                }
              />
            )}
          </View>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.SilverWhite,
  },

  headerSection: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'flex-end',
    borderRadius: 30,
    backgroundColor: CUSTOM_COLOR.White,
  },

  headerText: {
    width: '100%',
    height: '20%',
    marginTop: 15,
    justifyContent: 'space-around',
    flexDirection: 'row',
  },

  text: {
    fontSize: scale(18),
    fontFamily: FONT_FAMILY.ExtraBold,
  },

  logo: {
    height: scale(162.38),
    width: scale(131.53),
  },

  inputSection: {
    flex: 6,
    backgroundColor: CUSTOM_COLOR.SilverWhite,
    margin: 30,
  },

  buttonSection: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 20,
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

  forgotPasscode: {
    marginTop: 20,
    color: CUSTOM_COLOR.SunsetOrange,
    fontFamily: FONT_FAMILY.Bold,
    fontSize: scale(17),
  },
});
