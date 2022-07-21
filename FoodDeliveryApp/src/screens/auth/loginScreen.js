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

const LOGIN = 'LOGIN';
const SIGN_UP = 'SIGN_UP';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: LOGIN,
    };
  }

  setPage = newPage => {
    this.setState({page: newPage});
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
                  this.setPage(LOGIN);
                }}>
                <Text style={styles.text}>Login</Text>
                {this.state.page === LOGIN ? (
                  <View style={styles.line}></View>
                ) : null}
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.loginAndSignUp}
                onPress={() => {
                  this.setPage(SIGN_UP);
                }}>
                <Text style={styles.text}>Sign-up</Text>
                {this.state.page === SIGN_UP ? (
                  <View style={styles.line}></View>
                ) : null}
              </TouchableOpacity>
            </View>
          </View>

          {/* inputSection */}

          <View style={styles.inputSection}>
            {this.state.page === LOGIN ? (
              <View>
                <CustomInput label={'Email address'} />
                {/* Password */}
                <CustomInput label={'Password'} secureText={true} />

                <TouchableOpacity>
                  <Text style={styles.forgotPasscode}>Forgot passcode?</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View>
                <CustomInput label={'Email address'} />
                {/* Password */}
                <CustomInput label={'Password'} secureText={true} />
                {/* Confirm Password */}
                <CustomInput label={'Confirm Password'} secureText={true} />
              </View>
            )}
          </View>

          {/* buttonSection */}
          <View style={styles.buttonSection}>
            {this.state.page === LOGIN ? (
              <CustomButton
                type={'secondary'}
                text={'Login'}
                onPress={() => this.props.navigation.navigate('Home')}
              />
            ) : (
              <CustomButton
                type={'secondary'}
                text={'Sign Up'}
                onPress={() => this.props.navigation.navigate('Home')}
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
