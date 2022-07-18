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
import {IMG_LOGO} from '../../assets/images';

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
            <Image source={IMG_LOGO} style={styles.loginLOGO} />
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
              <Text style={{marginTop: 20, color: CUSTOM_COLOR.SunsetOrange}}>
                Forgot passcode?
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* sectionButton */}
        <View style={styles.sectionButton}></View>
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
    width: '60%',
    height: '60%',
  },

  textHeading: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 10,
  },
  textLogin: {
    fontFamily: FONT_FAMILY.Bold,
    fontSize: 18,
    // borderBottomColor: CUSTOM_COLOR.Vermilion,
    // borderRightColor: CUSTOM_COLOR.White,
    // borderLeftColor: CUSTOM_COLOR.White,
    // borderTopColor: CUSTOM_COLOR.White,
    padding: 10,
    // borderWidth: 3,
  },

  textSignUp: {
    fontFamily: FONT_FAMILY.Bold,
    fontSize: 18,
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
  },

  textInput: {
    marginTop: 20,
    opacity: 0.8,
  },
  sectionButton: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.Silver,
  },
});
