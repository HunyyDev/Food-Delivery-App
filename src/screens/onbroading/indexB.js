import {Text, View, ScrollView, SafeAreaView, StatusBar, TextInput, useColorScheme, Image, Pressable} from 'react-native';
import React, {useState} from 'react';
import type {Node} from 'react';
import {IMG_Logo} from '../../assets/images'
import CUSTOM_COLOR from '../../constants/colors'
import FONT_FAMILY from '../../constants/fonts'
import TAB_NAME from '../../constants/tabName'
import styles from './styles'
import UnderlineButton from '../components/UnderlineButton'

function LoginScreen (props)  {
    const {navigation} = props;
    const [tab, setTab] = useState(TAB_NAME.Login);
    const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView style={styles.container} edges={['top','bottom']}>
     <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <>
        <View style={styles.logoContainer}>
            <Image style={styles.logo} source={IMG_Logo} resizeMode={'contain'}/>
            <View style={styles.navigationBar}>
                <UnderlineButton
                    onPress={() => setTab(TAB_NAME.Login)}
                    isChoosing={tab === TAB_NAME.Login}>
                    Login
                </UnderlineButton>
                <UnderlineButton
                    onPress={() => setTab(TAB_NAME.SignUp)}
                    isChoosing={tab === TAB_NAME.SignUp}>
                    Sign-up
                </UnderlineButton>
            </View>
        </View>
      </>
    <ScrollView style={styles.loginContainer}>
      {tab === 'login' ? (
            <>
            <View style={styles.input}>
                <Text style={styles.headlines}>{'Email address'}</Text>
                <TextInput style={styles.inputBox}/>
            </View>
            <View style={styles.input}>
                <Text style={styles.headlines}>{'Password'}</Text>
                <TextInput secureTextEntry style={styles.inputBox}/>
            </View>
            <View style={styles.pressable}>
                <Pressable onPress={Holder}>
                    {({pressed}) =>
                          pressed ? (
                            <Text style={[{opacity: 0.5}, styles.pressableText]}>{'Forgot passcode?'}</Text>
                           ) : (
                            <Text style={styles.pressableText}>{'Forgot passcode?'}</Text>
                           )
                    }

                </Pressable>
            </View>
            </>
        ) : (
            <>
            <View style={styles.input}>
                 <Text style={styles.headlines}>{'Email address'}</Text>
                 <TextInput style={styles.inputBox}/>
            </View>
            <View style={styles.input}>
                  <Text style={styles.headlines}>{'Password'}</Text>
                  <TextInput secureTextEntry style={styles.inputBox}/>
            </View>
            <View style={styles.input}>
                   <Text style={styles.headlines}>{'Confirm Password'}</Text>
                   <TextInput secureTextEntry style={styles.inputBox}/>
            </View>
            </>
        )}
       </ScrollView>
      <View style={styles.buttonView}>
        <Pressable style={styles.button}>
            <Text style={styles.buttonText}>
                Login
            </Text>
        </Pressable>
      </View>

    </SafeAreaView>
  );
};

export default LoginScreen;

const Holder = () => {
    return (
        <Text>{'LoremIpsum'}</Text>
    );
}


//const styles = StyleSheet.create({
//    container: {
//        backgroundColor : CUSTOM_COLOR.SilverSand,
//        flex: 1,
//      },
//    logoContainer: {
//          width: '100%',
//          height: '42.63%',
//          backgroundColor: CUSTOM_COLOR.White,
//          overflow: 'hidden',
//          justifyContent: 'center',
//          alignItems: 'center',
//          position: 'absolute',
//          borderBottomLeftRadius: 25,
//          borderBottomRightRadius: 25,
//
//    },
//    logo: {
//        position: 'absolute',
//        width: 131.53,
//        height: 162.38,
//
//    },
//    navigationBar: {
//        position: 'absolute',
//        bottom: 0,
//        width: Dimensions.get('window').width,
//        flex: 1,
//        flexDirection: 'row',
//        justifyContent: 'space-evenly',
//    },
//
//    navigationBackground: ({isChoosing}) => ({
//        borderBottomWidth: 3,
//        borderBottomColor: isChoosing ? CUSTOM_COLOR.SunsetYellow : CUSTOM_COLOR.Transparent,
//        width: 134,
//    }),
//    navigationText: {
//        color: CUSTOM_COLOR.Black,
//        padding: 15,
//        fontFamily: FONT_FAMILY.ProTextBold,
//        fontSize: 18,
//        alignSelf: 'center',
//    },
//
//    loginContainer: {
//        top: '42.63%',
//    },
//    headlines: {
//        marginTop: 46,
//        fontFamily: FONT_FAMILY.ProTextBold,
//        color: CUSTOM_COLOR.Black,
//        opacity: 0.4,
//    },
//    input: {
//        marginLeft: 50,
//        marginRight: 50,
//        borderBottomWidth: 0.5,
//        borderBottomColor: CUSTOM_COLOR.Black,
//    },
//    inputBox: {
//        color: CUSTOM_COLOR.Black,
//        fontFamily: FONT_FAMILY.ProTextBold,
//    },
//    pressable: {
//        marginTop: 34,
//        marginLeft: 50,
//    },
//    pressableText: {
//        color: CUSTOM_COLOR.OriolesOrange,
//        fontFamily: FONT_FAMILY.ProTextBold,
//    },
//    buttonView: {
//        marginTop: 68,
//        alignItems: 'center',
//    },
//    button: ({pressed}) => ({
//        backgroundColor: CUSTOM_COLOR.SunsetYellow,
//        opacity: pressed ? 0.4 : 1,
//        height: 70,
//        width: 314,
//        justifyContent: 'center',
//        alignItems: 'center',
//        borderRadius: 35,
//        alignSelf: 'center',
//        marginHorizontal: 136,
//        marginBottom: 18,
//    }),
//    buttonText: {
//        color: CUSTOM_COLOR.White,
//        fontFamily: FONT_FAMILY.ProTextBold,
//        fontSize: 18,
//    },
//});