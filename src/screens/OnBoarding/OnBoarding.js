import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  Image,
} from 'react-native';

import {IMG_LOGO, IMG_BACKGROUND} from '../../assets/images';
import COLORS from '../../constants/colors';
import FONT_FAMILY from '../../constants/fonts';
import LongButton from '../../components/LongButton/LongButton';

const OnBoarding = props => {
  const navigation = props.navigation;

  const navigateToAuthenticationPage = () => {
    navigation.navigate('Authentication');
  };

  return (
    <ScrollView>
      <View style={styles.BackGround}>
        <Image
          style={styles.ImageLogo}
          source={IMG_LOGO}
          resizeMode="contain"
        />
        <Text style={styles.Text}>Food for Everyone</Text>
        <Image
          style={styles.ImageBackground}
          source={IMG_BACKGROUND}
          resizeMode="contain"
        />
        <LongButton
          onPress={navigateToAuthenticationPage}
          type="Long_White_Button">
          Get starteed
        </LongButton>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  BackGround: {
    backgroundColor: COLORS.SUNSET_ORANGE,
    flex: 1,
  },
  ImageLogo: {
    width: 67,
    height: 77,
    marginLeft: 49,
    marginTop: 56,
  },
  Text: {
    fontFamily: FONT_FAMILY.SF_PRO_ROUNDED_BOLD,
    width: 275,
    fontSize: 53,
    color: COLORS.WHITE,
    marginLeft: 51,
    marginTop: 31,
  },
  ImageBackground: {
    marginTop: 92,
    marginLeft: 0,
  },
});

export default OnBoarding;
