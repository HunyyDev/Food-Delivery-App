import React from "react";
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { Colors } from "react-native/Libraries/NewAppScreen";
/*import {useState} from 'react';
import {scaleX, scaleY} from '../../helperFunction';

const OnBoardingScreen = () => {
  const [mainColor, setMainColor] = useState('rgba(210,75,58,255)');
  const changeColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const a = Math.floor(Math.random() * 256);
    setMainColor(`rgba(${r}, ${g}, ${b}, ${a})`);
  };

  return (
    <View style={[styles.container, {backgroundColor: `${mainColor}`}]}>
      <View style={styles.headerSection}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.headerSection.logoHeader}
        />
        <Text style={styles.headerSection.textHeader}>Food for Everyone</Text>
      </View>
      <View style={styles.imageSection}>
        <Image
          source={require('../../assets/images/background.png')}
          resizeMode="cover"
          style={styles.imageSection.img}
        />
      </View>
      <View style={styles.buttonSection}>
        <TouchableOpacity
          style={styles.buttonSection.button}
          onPress={changeColor}>
          <Text
            style={[styles.buttonSection.button.text, {color: `${mainColor}`}]}>
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  headerSection: {
    flex: 3,
    paddingTop: scaleY(56),
    marginLeft: scaleX(51),

    logoHeader: {
      width: Math.min(scaleX(73), scaleY(73)),
      height: Math.min(scaleX(73), scaleY(73)),
    },

    textHeader: {
      fontSize: 60,
      color: '#fff',
      fontFamily: 'FontsFree-Net-SF-Pro-Rounded-Bold',
      marginTop: scaleY(31),
      lineHeight: 56.44,
      letterSpacing: -0.05,
    },
  },

  imageSection: {
    flex: 6,
    img: {
      width: '100%',
      height: '100%',
    },
  },

  buttonSection: {
    flex: 1,
    alignItems: 'center',
    overflow: 'visible',
    marginHorizontal: scaleY(51),

    button: {
      backgroundColor: '#fff',
      paddingHorizontal: scaleX(105),
      paddingVertical: scaleY(25),
      width: '100%',
      borderRadius: 30,
      alignItems: 'center',
      fontSize: 17,
      position: 'absolute',
      bottom: scaleY(36),

      text: {
        fontWeight: '600',
      },
    },
  },
});

export default OnBoardingScreen;*/
import { IMG_LOGO,IMG_BACKGROUND  } from "../../assets/images";
//import CUSTOM_COLORS from "../../constants/colors";
import { SafeAreaView , ScrollView} from "react-native";
import CUSTOM_COLORS from "../../constants/colors";
import scale  from "../../constants/responsive";
import FONT_FAMILY  from "../../constants/font";
const App=()=>{
  return(
    <SafeAreaView style={styles.container}>

        <ScrollView
          // eslint-disable-next-line react-native/no-inline-styles
          contentContainerStyle={{flexGrow: 1}}
          style={styles.scrollView}>

          <View>

            <>{/* Logo */}</>
            <View style={styles.logoContainer}>
              <Image source={IMG_LOGO} style={styles.logo} />
            </View>

            <>{/* Title */}</>
            <Text style={styles.Text}>{'Food for \nEveryone'}</Text>

            <>{/* background */}</>
            <View style={styles.backgroundContainer}>
              <Image source={IMG_BACKGROUND} style={styles.background} />
            </View>

            <>{/* Button */}</>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Login')}
              style={styles.buttonContainer}>
              <Text style={styles.buttonText}>{'Get started '}</Text>
            </TouchableOpacity>
            
          </View>
        </ScrollView>
      </SafeAreaView>


  );
};

const styles=StyleSheet.create(
{
  container:{
    flex: 1,
    backgroundColor: CUSTOM_COLORS.SunsetOrange,
  },

  logo:{
    resizeMode: 'contain',
    justifyContent: 'center',
    alignSelf: 'center',
    

  },
  logoContainer:
  {
    backgroundColor: 'white',
    width: scale(73),
    height: scale(73),
    borderRadius: scale(73) / 2,
    marginLeft: scale(49),
    marginTop: scale(56),

  },

  background:
  {
    resizeMode:"cover",
    justifyContent:"flex-end",
  },

  backgroundContainer:
  {
    flex:1,
    alignContent:"center",
    justifyContent: "center",
    marginTop: scale(364),
    position: "absolute",
  },

  scrollView:
  {
    backgroundColor:CUSTOM_COLORS.SunsetOrange,
  },

  buttonContainer:
  {
    width:scale(314),
    height:scale(70),
    backgroundColor: CUSTOM_COLORS.white,
    borderRadius: 30,
    position : "absolute",
    marginTop: scale(700),
    margin: scale(51),
    justifyContent:"center",
    alignContent:"center",
  },

  buttonText: {
    color: CUSTOM_COLORS.SunsetOrange,
    fontFamily: FONT_FAMILY.SFBlack,
    fontSize: scale(17),
    fontWeight: '600',
    justifyContent:"center",
    alignSelf: 'center',
  },

  title:
  {
    fontSize: 65,
    Colors:CUSTOM_COLORS.white,
  
  },

  Text: {
    color: 'white',
    fontFamily: FONT_FAMILY.SFBlack,
    fontSize: scale(65),
    marginLeft: scale(51),
    position: 'absolute',
    marginTop: scale(160),
  },


}
);

export default App;
