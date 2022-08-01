import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {IMG_LOGO, IMG_BACKGROUND} from '../../assets/images';
import {SafeAreaView, ScrollView} from 'react-native';
import CUSTOM_COLORS from '../../constants/colors';
import scale from '../../constants/responsive';
import FONT_FAMILY from '../../constants/font';
import Login from '../auth/Login';
import {withNavigation} from 'react-navigation';
import {createNavigator} from 'react-navigation';
import {createAppContainer} from 'react-navigation';
import CustomButton from '../../components/CustomButton';

const App = ({navigation}) => {
  const [value, setValue] = React.useState('rgba(255,75,58,255)');

  React.useEffect(() => {
    const interval = setInterval(() => {
      setValue(() => {
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
        const a = Math.floor(Math.random() * 255);
        return `rgba(${r}, ${g}, ${b}, ${a})`;
      });
    }, 1500);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        // eslint-disable-next-line react-native/no-inline-styles
        contentContainerStyle={{flexGrow: 1}}
        style={[styles.scrollView, {backgroundColor: value}]}>
      
          <>{/* Logo */}</>
          <View style={[styles.logoContainer, {backgroundColor: value}]}>
            <Image source={IMG_LOGO} style={styles.logo} />
          </View>

          <>{/* Title */}</>
          <Text style={styles.Text}>{'Food for \nEveryone'}</Text>

          <>{/* background */}</>
          <View style={[styles.backgroundContainer, {backgroundColor: value}]}>
            <Image source={IMG_BACKGROUND} style={styles.background} />
          </View>

          <>{/* Button */}</>
          
        <CustomButton title='Get started' type={'primary'} alert='primary' navigationnn={navigation} name='LG' />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLORS.SunsetOrange,
  },

  logo: {
    resizeMode: 'contain',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  logoContainer: {
    backgroundColor: 'white',
    width: scale(73),
    height: scale(73),
    borderRadius: scale(73) / 2,
    marginLeft: scale(49),
    marginTop: scale(56),
  },

  background: {
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },

  backgroundContainer: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    marginTop: scale(364),
    position: 'absolute',
  },

  scrollView: {
    backgroundColor: CUSTOM_COLORS.SunsetOrange,
  },

  buttonContainer: {
    width: scale(314),
    height: scale(70),
    backgroundColor: CUSTOM_COLORS.white,
    borderRadius: 30,
    position: 'absolute',
    marginTop: scale(700),
    margin: scale(51),
    justifyContent: 'center',
    alignContent: 'center',
    top: 110,
    //transform:scale(0),
  },

  buttonText: {
    color: CUSTOM_COLORS.SunsetOrange,
    fontFamily: FONT_FAMILY.SFProTextRegular,
    fontSize: scale(17),
    fontWeight: '600',
    justifyContent: 'center',
    alignSelf: 'center',
  },

  title: {
    fontSize: 65,
    Colors: CUSTOM_COLORS.white,
  },

  Text: {
    color: 'white',
    fontFamily: FONT_FAMILY.SFHeavy,
    fontSize: scale(65),
    marginLeft: scale(51),
    position: 'absolute',
    marginTop: scale(160),
  },
});

export default App;
