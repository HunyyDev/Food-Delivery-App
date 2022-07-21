import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import CUSTOM_COLOR from '../../assets/constants/colors';
import FONT_FAMILY from '../../assets/constants/fonts';
import scale from '../../assets/constants/responsive';
import {CustomInput} from '../../assets/components/CustomInput';

export class Signup extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <SafeAreaView style={styles.backgroundContainer}>
          <ScrollView>
            <View style={styles.differentBackground}>
              <>{/*Info and forgot password*/}</>
              <View style={styles.In4Container}>
                <CustomInput label={'E-mail address:'} />
                <CustomInput label={'Password: '} secureTextEntry={true} />
                <CustomInput
                  label={'Confirm Password: '}
                  secureTextEntry={true}
                />
              </View>
              <>{/*Button Selection*/}</>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('WaitingForUpgrade')
                }
                style={styles.buttonSelection}>
                <Text style={styles.SelectionText}>{'Sign Up'}</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
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
  backgroundLogo: {
    alignSelf: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  buttonLogin: {
    backgroundColor: CUSTOM_COLOR.White,
    overflow: 'hidden',
    justifyContent: 'center',
    borderRadius: 30,
    flex: 1,
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
    fontFamily: FONT_FAMILY.SFProTextBold,
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
