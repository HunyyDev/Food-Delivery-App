import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
  Button,
  ScrollView,
  Alert,
} from 'react-native';
import React, {Component} from 'react';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import CUSTOM_COLOR from '../../assets/constants/colors';
import {scaleX, scaleY, normalize} from '../../helperFunction';
import {useState} from 'react';
import SCREEN_NAME from '../../assets/constants/screens';

const IMAGE = '../../assets/images/BellaOlonjeLogo111.png';
class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCheckedA: true,
      isCheckedB: false,
      loginInfo: {
        email: '',
        password: '',
      },
    };
  }

  setCheckedA = () => {
    if (!this.state.isCheckedA) {
      this.setState({
        isCheckedA: !this.state.isCheckedA,
        isCheckedB: !this.state.isCheckedB,
      });
    }
  };
  setCheckedB = () => {
    if (!this.state.isCheckedB) {
      this.setState({
        isCheckedA: !this.state.isCheckedA,
        isCheckedB: !this.state.isCheckedB,
      });
    }
  };

  isCheckedStyleA = isCheckedA => {
    if (isCheckedA) {
      return {
        borderBottomColor: CUSTOM_COLOR.VERMILION,
        borderBottomWidth: scaleY(3),
      };
    }
  };

  isCheckedStyleB = isCheckedB => {
    if (isCheckedB) {
      return {
        borderBottomColor: CUSTOM_COLOR.VERMILION,
        borderBottomWidth: scaleY(3),
      };
    }
  };

  setLoginEmail = email => {
    this.setState({
      ...this.state,
      loginInfo: {
        ...this.state.loginInfo,
        email: email,
      },
    });
  };

  setLoginPassword = pw => {
    this.setState({
      ...this.state,
      loginInfo: {
        ...this.state.loginInfo,
        password: pw,
      },
    });
  };

  // clear = () => {
  //   this.setState({
  //     ...this.state,
  //     loginInfo: {
  //       email: '',
  //       password: '',
  //     },
  //   });
  // };
  render() {
    const {navigation} = this.props;
    const onTransitToHome = () => {
      navigation.navigate(SCREEN_NAME.HOME_SCREEN);
    };
    return (
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Image style={styles.header.image} source={require(IMAGE)} />
          <View style={styles.header.buttons}>
            <TouchableOpacity onPress={this.setCheckedA}>
              <Text
                style={[
                  styles.header.buttons.button,
                  this.isCheckedStyleA(this.state.isCheckedA),
                ]}>
                Login
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.setCheckedB}>
              <Text
                style={[
                  styles.header.buttons.button,
                  this.isCheckedStyleB(this.state.isCheckedB),
                ]}>
                Sign-up
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.input}>
          <View style={styles.input.inputEmail}>
            <CustomInput
              label="Email address"
              placeholder="Email address"
              action={this.setLoginEmail}
            />
          </View>
          <View style={styles.input.inputPassword}>
            <CustomInput
              label="Password"
              secureTextEntry={true}
              placeholder="Password"
              action={this.setLoginPassword}
            />
          </View>
        </View>
        {(this.state.isCheckedA && (
          <TouchableOpacity
            onPress={() => alert('Mã xác nhận đã được gửi về Email')}>
            <Text style={styles.forgotPassword}>Forgot passcode?</Text>
          </TouchableOpacity>
        )) || (
          <View style={styles.input.inputPassword}>
            <CustomInput
              label="Comfirm Password"
              type="password"
              secureTextEntry={true}
              placeholder="Comfirm Password"
              action={this.setLoginPassword}
            />
          </View>
        )}

        <View
          style={
            ([styles.buttonLogin],
            {marginTop: this.state.isCheckedA ? scaleY(55) : scaleY(-3)})
          }>
          <CustomButton
            type="secondary"
            title={this.state.isCheckedA ? 'Login' : 'Sign up'}
            onPress={
              this.state.isCheckedA
                ? onTransitToHome
                : () => {
                    Alert.alert('Thông báo', 'Đăng kí thành công');
                    this.setCheckedA();
                  }
            }
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    backgroundColor: CUSTOM_COLOR.CONCRETE,
    flex: 1,
  },
  header: {
    position: 'relative',
    backgroundColor: CUSTOM_COLOR.WHITE,
    width: '100%',
    height: scaleY(367),
    justifyContent: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    image: {
      width: scaleX(130),
      height: scaleY(160),
      alignSelf: 'center',
    },
    buttons: {
      position: 'absolute',
      bottom: scaleY(-2),
      alignSelf: 'center',
      flexDirection: 'row',
      button: {
        textAlign: 'center',
        width: scaleX(122),
        marginLeft: scaleY(40),
        marginRight: scaleY(40),
        fontSize: normalize(21),
        color: CUSTOM_COLOR.BLACK,
        fontWeight: 'bold',
        paddingBottom: scaleY(15),
      },
    },
  },
  input: {
    marginTop: scaleY(54),
    inputEmail: {
      marginBottom: scaleY(30),
    },
    inputPassword: {
      marginBottom: scaleY(20),
    },
  },
  forgotPassword: {
    color: CUSTOM_COLOR.VERMILION,
    fontSize: normalize(21),
    fontWeight: 'bold',
    marginLeft: scaleX(50),
    paddingBottom: scaleY(20),
  },
});

export default LoginScreen;
