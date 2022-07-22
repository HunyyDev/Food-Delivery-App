import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  Pressable,
} from 'react-native';
import {IMG_LOGO} from '../../assets/images';
import COLORS from '../../constants/colors';
import FONT_FAMILY from '../../constants/fonts';
import FillIn from '../../components/FillIn/FillIn';
import LongButton from '../../components/LongButton/LongButton';
import PresentLine from '../../components/PresentLine/PresentLine';

const Authentication = props => {
  const [present, setPresent] = useState('login');

  const {navigation} = props;
  const navigateToHomePage = () => {
    navigation.navigate('Home');
  };
  const onPress = props;
  const onPressFuntionLog = () => {
    setPresent('login');
  };
  const onPressFuntion = () => {
    setPresent('sign-up');
  };
  return (
    <ScrollView>
      <View style={styles.background}>
        <View style={styles.backgroundLogo}>
          <View style={styles.imageLogoFrame} resizeMode="contain">
            <Image style={styles.imageLogo} source={IMG_LOGO} />
          </View>
          <View style={styles.tabFrame}>
            <Pressable onPress={onPressFuntionLog}>
              <Text style={styles.text}>Login</Text>
            </Pressable>
            <Pressable onPress={onPressFuntion}>
              <Text style={styles.text}>Sign-up</Text>
            </Pressable>
          </View>
        </View>
        {present === 'login' ? (
          <View>
            <PresentLine type="longLeft"></PresentLine>
            <FillIn type="email">Email address</FillIn>
            <FillIn type="pass">Password</FillIn>
            <Text style={styles.noteText}>Forgot passcode?</Text>
          </View>
        ) : (
          <View>
            <PresentLine type="longRight"></PresentLine>
            <FillIn type="email">Email address</FillIn>
            <FillIn type="pass">Password</FillIn>
            <FillIn type="pass">Confirm Password</FillIn>
          </View>
        )}
        <View style={styles.longButton}>
          <LongButton onPress={navigateToHomePage} type="Long_Orange_Button">
            Login
          </LongButton>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: COLORS.SLIVER,
  },
  backgroundLogo: {
    height: 382,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    top: -15,
    backgroundColor: COLORS.WHITE,
  },
  imageLogoFrame: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageLogo: {
    width: 131.53,
    height: 162.38,
  },
  tabFrame: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  text: {
    color: COLORS.BLACK,
    fontFamily: FONT_FAMILY.SF_PRO_TEXREGULAR,
    fontSize: 18,
    paddingVertical: 15,
  },
  noteText: {
    color: COLORS.VERMILION,
    fontSize: 17,
    fontFamily: FONT_FAMILY.SF_PRO_TEXT_BOLD,
    marginLeft: 50,
    marginTop: 34,
  },
  longButton: {
    marginTop: 136,
  },
});
export default Authentication;
