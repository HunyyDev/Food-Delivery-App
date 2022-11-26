import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';

import {IMG_OB} from '../../assets/images';
import COLORS from '../../constants/colors';
import FONT_FAMILY from '../../constants/fonts';

const OnBoarding = props => {
  const navigation = props.navigation;

  const navigateToAuthenticationPage = () => {
    navigation.navigate('Authentication');
  };

  return (
    <View style={styles.backGround}>
      <ScrollView style={styles.scrollView}>
        <Image style={styles.image} source={IMG_OB}></Image>
        <TouchableOpacity onPress={navigateToAuthenticationPage}>
          <View style={styles.button}>
            <Text style={styles.TextFrame}>Get Started</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    marginBottom: 70,
    width: Dimensions.get('window').width,
    justifyContent: 'center',
  },
  backGround: {
    backgroundColor: COLORS.WHITE,
    width: Dimensions.get('window').width,
    // height: Dimensions.get('window').height,
    flex: 1,
  },
  scrollView: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  TextFrame: {
    fontFamily: FONT_FAMILY.SF_PRO_TEXT_BOLD,
    color: COLORS.WHITE,
    fontSize: 18,
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    display: 'flex',
  },
  button: {
    width: 344,
    height: 56,
    // marginLeft: 51,
    alignSelf: 'center',
    marginTop: -25,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginBottom: 36,
    backgroundColor: COLORS.JUNGLE_GREEN,
  },
});

export default OnBoarding;
