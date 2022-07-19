import {StyleSheet, Text, View, ScrollView, SafeAreaView, StatusBar, Dimensions, TextInput, useColorScheme, Image, Pressable} from 'react-native';
import React, {useState} from 'react';
import type {Node} from 'react';
import {IMG_Logo} from '../../assets/images'
import CUSTOM_COLOR from '../../constants/colors'
import FONT_FAMILY from '../../constants/fonts'

function LoginScreen (props)  {
    const {navigation} = props; 
    const [tab, setTab] = useState('login');
    const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView style={styles.container} edges={['top','bottom']}>
     <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <>
        <View style={styles.logoContainer}>
            <Image style={styles.logo} source={IMG_Logo} resizeMode={'contain'}/>
            <View style={styles.navigationBar}>
                <UnderlineButton
                    onPress={() => setTab('login')}
                    isChoosing={tab === 'login'}>
                    Login
                </UnderlineButton>
                <UnderlineButton
                    onPress={() => setTab('signup')}
                    isChoosing={tab === 'signup'}>
                    Sign-up
                </UnderlineButton>
            </View>
        </View>
      </>
      <>
    <ScrollView style={styles.loginContainer}>
        <View>
            <Text style={styles.headlines}>{'Email address'}</Text>
            <TextInput style={styles.input}/>
        </View>
        <View>
            <Text style={styles.headlines}>{'Password'}</Text>
            <TextInput style={styles.input}/>
        </View>


    <>
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
    <View style={styles.buttonView}>
        <Pressable style={styles.button}>
            <Text style={styles.buttonText}>
                Login
            </Text>
        </Pressable>
    </View>
    </ScrollView>
    </>
    </SafeAreaView>
  );
};

export default LoginScreen;

const Holder = () => {
    return (
        <Text>{'LoremIpsum'}</Text>
    );
}
const UnderlineButton = ({children, isChoosing, onPress}) => {
  return (
    <Pressable onPress={onPress} style={styles.navigationBackground({isChoosing})}>
      <Text style={styles.navigationText}>{children}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor : CUSTOM_COLOR.SilverSand,
        flex: 1,
      },
    logoContainer: {
          width: '100%',
          height: '42.63%',
          backgroundColor: CUSTOM_COLOR.White,
          overflow: 'hidden',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          borderRadius: 25,

    },
    logo: {
        position: 'absolute',
        width: 131.53,
        height: 162.38,

    },
    navigationBar: {
        position: 'absolute',
        bottom: 0,
        width: Dimensions.get('window').width,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },

    navigationBackground: ({isChoosing}) => ({
        borderBottomWidth: 3,
        borderBottomColor: isChoosing ? CUSTOM_COLOR.SunsetYellow : CUSTOM_COLOR.Transparent,
        width: 134,
    }),
    navigationText: {
        color: CUSTOM_COLOR.Black,
        padding: 15,
        fontFamily: FONT_FAMILY.ProTextBold,
        fontSize: 18,
        alignSelf: 'center',
    },

    loginContainer: {
        top: '42.63%',
    },
    headlines: {
        marginTop: 46,
        marginLeft: 50,
        fontFamily: FONT_FAMILY.ProTextBold,
        color: CUSTOM_COLOR.Black,
        opacity: 0.4,
    },
    input: {
        marginLeft: 50,
        marginRight: 50,
        border: 0.5,
        backgroundColor: CUSTOM_COLOR.White,
    },
    pressable: {
        marginTop: 34,
        marginLeft: 50,
    },
    pressableText: {
        color: CUSTOM_COLOR.OriolesOrange,
        fontFamily: FONT_FAMILY.ProTextBold,
    },
    buttonView: {
        marginHorizontal: 136,
        alignItems: 'center',
    },
    button: ({pressed}) => ({
        backgroundColor: CUSTOM_COLOR.SunsetYellow,
        opacity: pressed ? 0.4 : 1,
        height: 70,
        width: 314,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 35,
        alignSelf: 'center',
        marginHorizontal: 136,
    }),
    buttonText: {
        color: CUSTOM_COLOR.White,
        fontFamily: FONT_FAMILY.ProTextBold,
        fontSize: 18,
    },
});