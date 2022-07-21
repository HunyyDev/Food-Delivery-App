import React, {Component} from 'react';
import {
  Text,
  TextInput,
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import CUSTOM_COLOR from '../../assets/constants/colors';
import FONT_FAMILY from '../../assets/constants/fonts';
import scale from '../../assets/constants/reponsive';
import {IMG_Logo} from '../../assets/images';
const CustomInput = props => {
  console.log('props', props);
  return (
    <View style={styles.contentText}>
      <Text>{props.label}</Text>
      <TextInput
        onChangeText={newText => console.log(newText)}
        style={styles.inputContainer}
      />
    </View>
  );
};

export class Login extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
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
    );
  }
}

const styles = StyleSheet.create({
  backgroundContainer: {
    backgroundColor: CUSTOM_COLOR.White,
    flex: 1,
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
  backgroundLogo: {
    alignSelf: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  buttonLogin: {
    height: scale(60),
    width: '30%',
    overflow: 'hidden',
    borderBottomWidth: 3,
    borderColor: CUSTOM_COLOR.Vermilion,
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
    justifyContent: 'center',
    marginTop: scale(50),
    alignSelf: 'center',
  },
});
