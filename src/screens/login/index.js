import React, {Component} from 'react';
import {Text, StyleSheet, View, SafeAreaView, Image} from 'react-native';
import CUSTOM_COLOR from '../../assets/constants/colors';
import FONT_FAMILY from '../../assets/constants/fonts';
import scale from '../../assets/constants/responsive';
import {IMG_Bella, IMG_Vector1} from '../../assets/images';
import {Login} from './LoginForm';
import {Signup} from './SignupForm';
import {CustomSwitch} from '../../assets/components/CustomSwitch';
import {UnderlineButton} from '../../assets/components/UnderlineButton';

class Condition extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return this.props.label == 'Login' ? (
      <Login {...this.props.props} />
    ) : (
      <Signup {...this.props.props} />
    );
  }
}

export class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: 'Login',
    };
  }
  render() {
    return (
<<<<<<< HEAD:src/screens/login/index.js
      <>
        <SafeAreaView style={styles.backgroundContainer}>
          <View style={styles.backgroundAbove}>
            <>{/*Logo*/}</>
            <View style={styles.backgroundLogo}>
              <Image source={IMG_Logo} style={styles.logo} />
            </View>
            <>{/*Change between Login and Sign Up*/}</>
            <View style={styles.backgroundbuttonText}>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('WaitingForUpgrade')
                }
                style={styles.buttonLogin}>
                <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('WaitingForUpgrade')
                }
                style={styles.buttonLogin}>
                <Text style={styles.buttonText}>Sign-Up</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.differentBackground}>
            <>{/*Info and forgot password*/}</>
            <View style={styles.In4Container}>
              <CustomInput label={'E-mail address:'} secureEntry={false} />
              <CustomInput label={'Password: '} secureEntry={true} />
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('WaitingForUpgrade')
                }>
                <Text style={styles.forgotPassword}>Forgot password</Text>
              </TouchableOpacity>
            </View>
            <>{/*Button Selection*/}</>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('HomeScreen')}
              style={styles.buttonSelection}>
              <Text style={styles.SelectionText}>{'Login'}</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </>
=======
      <SafeAreaView
        style={styles.backgroundContainer}
        onPressHandle={() => {
          this.getData();
        }}>
        <View style={styles.backgroundAbove}>
          <>{/*Logo*/}</>
          <View style={styles.backgroundLogo}>
            <Image source={IMG_Bella} style={styles.logo} />
            <Image source={IMG_Vector1} style={styles.logoVector} />
          </View>
          <>{/*Change between Login and Sign Up*/}</>
          <CustomSwitch
            flexGrow={1}
            justifyContent={'center'}
            flexDirection={'row'}>
            <View style={styles.backgroundText}>
              <View style={styles.backgroundButton}>
                <UnderlineButton
                  onPress={() => this.setState({label: 'Login'})}
                  style={styles.button}
                  underlineStyle={[
                    styles.underLine,
                    {
                      backgroundColor:
                        this.state.label == 'Login'
                          ? CUSTOM_COLOR.Vermilion
                          : CUSTOM_COLOR.White,
                    },
                  ]}>
                  <Text style={styles.buttonText}>Login</Text>
                </UnderlineButton>
              </View>
              <View style={styles.backgroundButton}>
                <UnderlineButton
                  onPress={() => this.setState({label: 'Sign-up'})}
                  style={styles.button}
                  underlineStyle={[
                    styles.underLine,
                    {
                      backgroundColor:
                        this.state.label != 'Login'
                          ? CUSTOM_COLOR.Vermilion
                          : CUSTOM_COLOR.White,
                    },
                  ]}>
                  <Text style={styles.buttonText}>Sign-Up</Text>
                </UnderlineButton>
              </View>
            </View>
          </CustomSwitch>
        </View>
        <Condition label={this.state.label} props={this.props} />
      </SafeAreaView>
>>>>>>> 31f4ba01faae796df4f36689b4a7dcb5c450509e:FoodDelivery/src/screens/login/index.js
    );
  }
}

const styles = StyleSheet.create({
  backgroundContainer: {
    backgroundColor: CUSTOM_COLOR.White,
    flex: 1,
  },
  logo: {
    marginTop: scale(128),
    width: scale(131.53),
    height: scale(162.38),
    justifyContent: 'center',
    alignSelf: 'center',
    position: 'absolute',
  },
  logoVector: {
    top: scale(-50),
    width: scale(59.88),
    height: scale(115.83),
    marginLeft: scale(25),
    position: 'absolute',
  },
  backgroundAbove: {
    backgroundColor: CUSTOM_COLOR.White,
    width: '100%',
    height: scale(400),
    elevation: 10,
    borderRadius: 30,
    top: scale(-30),
    justifyContent: 'center',
  },
<<<<<<< HEAD:src/screens/login/index.js
  differentBackground: {
    justifyContent: 'space-around',
  },
  In4Container: {
    marginTop: scale(20),
    marginLeft: scale(50),
    height: scale(300),
    marginEnd: scale(50),
    justifyContent: 'space-around',
  },
  backgroundbuttonText: {
    alignContent: 'center',
    overflow: 'hidden',
    width: '100%',
    bottom: scale(-20),
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
=======
>>>>>>> 31f4ba01faae796df4f36689b4a7dcb5c450509e:FoodDelivery/src/screens/login/index.js
  backgroundLogo: {
    alignSelf: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  buttonLogin: {
    height: scale(60),
    width: '30%',
    overflow: 'hidden',
<<<<<<< HEAD:src/screens/login/index.js
    borderBottomWidth: 3,
    borderColor: CUSTOM_COLOR.Vermilion,
=======
    justifyContent: 'center',
    borderRadius: 30,
    flex: 1,
    height: 2,
>>>>>>> 31f4ba01faae796df4f36689b4a7dcb5c450509e:FoodDelivery/src/screens/login/index.js
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
    fontFamily: FONT_FAMILY.SFProTextBold,
    alignSelf: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  contentText: {
    color: 'black',
    fontSize: 15,
    fontFamily: FONT_FAMILY.SFProTextBold,
  },
<<<<<<< HEAD:src/screens/login/index.js
  inputContainer: {
    height: scale(50),
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#000',
  },
  inputText: {
    color: '#000',
    fontSize: scale(40),
    lineHeight: 30,
    flex: 2,
  },
  forgotPassword: {
    color: CUSTOM_COLOR.Vermilion,
    fontSize: 17,
    fontFamily: FONT_FAMILY.SFProTextBold,
    alignContent: 'flex-start',
  },
  SelectionText: {
    color: CUSTOM_COLOR.White,
    fontSize: 17,
    fontFamily: FONT_FAMILY.SFProTextBold,
    alignSelf: 'center',
  },
  logo: {
    resizeMode: 'cover',
    width: scale(200),
    height: scale(300),
  },
  buttonSelection: {
    width: scale(314),
    height: scale(70),
    borderRadius: 30,
    backgroundColor: CUSTOM_COLOR.Vermilion,
=======
  backgroundButton: {
    flex: 1,
    marginLeft: 10,
  },
  backgroundText: {
    alignContent: 'center',
    overflow: 'hidden',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
>>>>>>> 31f4ba01faae796df4f36689b4a7dcb5c450509e:FoodDelivery/src/screens/login/index.js
    justifyContent: 'center',
    height: 50,
  },
  underLine: {
    width: scale(134),
    height: scale(4),
    alignSelf: 'center',
    position: 'absolute',
    borderRadius: 30,
  },
  button: {
    height: '70%',
  },
});
