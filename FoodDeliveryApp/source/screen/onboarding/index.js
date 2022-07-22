import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  View,
  Dimensions,
} from 'react-native';
import React, {Component} from 'react';
import FONT_FAMILY from '../../constants/fonts';
import CUSTOM_COLOR from '../../constants/color';
import {IMG_BACKGROUND, IMG_LOGO} from '../../assets/images';
import scale from '../../../responsive';
import CUSTOM_ButtonOne from '../../components/CUSTOM_ButtonOne';

export default class Onboarding extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        {/* logo */}
        <>
          <View style={styles.backgroundLogo}>
            <Image style={styles.Logo} source={IMG_LOGO} />
          </View>
        </>

        {/* title */}
        <>
          <Text style={styles.Food}>Food for Everyone</Text>
        </>

        {/* img-background */}
        <>
          <View style={styles.BackgroundImg}>
            <Image style={styles.Img} source={IMG_BACKGROUND} />
          </View>
        </>

        {/* button */}
        <>
          <CUSTOM_ButtonOne
            text="Get started"
            color={CUSTOM_COLOR.White}
            textColor={CUSTOM_COLOR.SunsetOrange}
            onPress={() => this.props.navigation.navigate('Login')}
          />
        </>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.SunsetOrange,
  },
  backgroundLogo: {
    width: scale(74),
    height: scale(74),
    backgroundColor: CUSTOM_COLOR.White,
    borderRadius: scale(37),
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: scale(50),
  },
  Logo: {
    width: '100%',
    height: '100%',
  },
  Food: {
    top: scale(-25),
    fontFamily: FONT_FAMILY.SF_Pro_Rounded,
    fontSize: scale(65),
    color: CUSTOM_COLOR.White,
    marginLeft: scale(50),
  },
  BackgroundImg: {
    top: scale(-60),
    backgroundColor: CUSTOM_COLOR.SunsetOrange,
    width: Dimensions.get('window').width,
    height: scale(540),
    justifyContent: 'flex-start',
  },
  Img: {
    height: scale(499),
    width: Dimensions.get('window').width,
  },
});
