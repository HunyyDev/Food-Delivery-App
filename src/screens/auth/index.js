import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import CUSTOM_COLOR from '../../constants/colors';
import {IMG_Logo} from '../../assets/images/images';
import FONT_FAMILY from '../../constants/fonts';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import scale from '../../constants/responsive';
import SCREEN from '../../constants/screen';

const LoginScreen = props => {
  const [page, setPage] = useState(SCREEN.LOGIN);

  return (
    <SafeAreaView style={styles.container}>
      {/*Heading*/}
      <View style={styles.containerHeading}>
        <>
          <Image source={IMG_Logo} style={styles.img} resizeMode={'cover'} />
          <View style={styles.containerTouch}>
            <TouchableOpacity
              style={styles.touch}
              onPress={() => {
                setPage(SCREEN.LOGIN);
              }}
              disabled={page === SCREEN.LOGIN ? true : false}>
              <Text style={styles.headingText}>Login</Text>
              {page === SCREEN.LOGIN ? <View style={styles.line} /> : null}
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.touch}
              onPress={() => {
                setPage(SCREEN.SIGN_UP);
              }}
              disabled={page === SCREEN.SIGN_UP ? true : false}>
              <Text style={styles.headingText}>Sign-up</Text>
              {page === SCREEN.SIGN_UP ? <View style={styles.line} /> : null}
            </TouchableOpacity>
          </View>
        </>
      </View>
      {/* Body*/}
      <View style={styles.containerBody}>
        <View>
          {page === SCREEN.LOGIN ? (
            <>
              <CustomInput label="Email address" />
              <CustomInput label="Password" secureTextEntry={true} />
              <Text style={styles.loginText}>Forgot passcode?</Text>
            </>
          ) : null}
          {page === SCREEN.SIGN_UP ? (
            <>
              <CustomInput label="Email address" />
              <CustomInput label="Password" secureTextEntry={true} />
              <CustomInput label="Confirm Password" secureTextEntry={true} />
            </>
          ) : null}
        </View>
        <View style={styles.containerBottom}>
          {page === SCREEN.LOGIN ? (
            <CustomButton type={'secondary'} text={'Login'} />
          ) : (
            <CustomButton type={'secondary'} text={'Sign Up'} />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.Grey,
  },
  containerHeading: {
    flex: 2,
    backgroundColor: CUSTOM_COLOR.White,
    borderBottomStartRadius: 30,
    borderBottomEndRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    flex: 5,
    width: scale.scaleWidth(150),
    height: scale.scaleWidth(150),
  },
  containerTouch: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
  },
  containerBody: {
    flex: 2,
    marginHorizontal: scale.scaleWidth(50),
  },
  containerBottom: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  touch: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headingText: {
    fontFamily: FONT_FAMILY.Medium,
    fontSize: 18,
    lineHeight: 21,
    color: CUSTOM_COLOR.Black,
  },
  line: {
    position: 'absolute',
    bottom: 0,
    height: 3,
    width: scale.scaleWidth(134),
    backgroundColor: CUSTOM_COLOR.SunsetOrange,
    borderRadius: 40,
  },
  containerInput: {
    marginTop: scale.scaleWidth(50),
    alignItems: 'center',
  },
  loginText: {
    color: CUSTOM_COLOR.Vermilion,
    fontFamily: FONT_FAMILY.Medium,
    fontSize: 17,
    marginTop: scale.scaleWidth(30),
    marginLeft: 0,
  },
});

export default LoginScreen;
