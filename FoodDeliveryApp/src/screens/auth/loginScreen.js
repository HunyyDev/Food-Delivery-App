import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {Component} from 'react';
import CUSTOM_COLOR from '../../constants/colors';
import FONT_FAMILY from '../../constants/fonts';
import {IMG_Logo} from '../../assets/images';
import CustomButton from '../../components/CustomButton';
import scale from '../../constants/responsive';

const CustomInput = props => {
  // console.log('props', props);
  // console.log('secureText', props.secureText);
  return (
    <>
      <Text style={styles.textInput}>{props.label}</Text>
      <TextInput
        secureTextEntry={props.secureText}
        placeholder={props.label}
        style={styles.inputContainer}
      />
    </>
  );
};

export class LoginScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        {/* sectionHeading */}
        <View style={styles.sectionHeading}>
          <View style={styles.imageHeading}>
            <Image source={IMG_Logo} style={styles.loginLOGO} />
          </View>

          <View style={styles.textHeading}>
            <TouchableOpacity>
              <Text style={styles.textLogin}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.textSignUp}>Sign-up</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* sectionInput */}

        <View style={styles.sectionInput}>
          <View>
            {/* Email address */}
            <CustomInput label={'Email address'} />

            {/* Password */}
            <CustomInput label={'Password'} secureText={true} />

            <TouchableOpacity>
              <Text style={styles.forgotPasscode}>Forgot passcode?</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* sectionButton */}
        <View style={styles.sectionButton}>
          <CustomButton text={'Login'} />
        </View>
      </SafeAreaView>
    );
  }
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.Silver,
  },

  sectionHeading: {
    flex: 4,
    backgroundColor: CUSTOM_COLOR.White,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  imageHeading: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginLOGO: {
    width: scale(131.53),
    height: scale(162.38),
  },

  textHeading: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 10,
  },
  textLogin: {
    fontFamily: FONT_FAMILY.ExtraBold,
    fontSize: scale(17),
    color: CUSTOM_COLOR.Black,
  },

  textSignUp: {
    fontFamily: FONT_FAMILY.ExtraBold,
    fontSize: scale(17),
    color: CUSTOM_COLOR.Black,
  },

  sectionInput: {
    flex: 4,
    marginTop: 25,
    marginHorizontal: 30,
  },

  inputContainer: {
    backgroundColor: CUSTOM_COLOR.Silver,
    marginTop: 10,
    borderButtonColor: CUSTOM_COLOR.Black,
    borderRightColor: CUSTOM_COLOR.Silver,
    borderLeftColor: CUSTOM_COLOR.Silver,
    borderTopColor: CUSTOM_COLOR.Silver,
    borderWidth: 1,
    fontFamily: FONT_FAMILY.ExtraBold,
  },

  textInput: {
    marginTop: 20,
    fontFamily: FONT_FAMILY.ExtraBold,
    width: scale(200),
    height: scale(20),
  },
  forgotPasscode: {
    marginTop: 20,
    color: CUSTOM_COLOR.SunsetOrange,
    fontFamily: FONT_FAMILY.Bold,
    fontSize: scale(17),
  },
  sectionButton: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.Silver,
  },
});
