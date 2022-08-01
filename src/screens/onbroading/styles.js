import {StyleSheet, Dimensions} from 'react-native'
import CUSTOM_COLOR from '../../constants/colors'
import FONT_FAMILY from '../../constants/fonts'
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
          borderBottomLeftRadius: 25,
          borderBottomRightRadius: 25,

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
        top: '42%',
        height: 150,
    },
    headlines: {
        marginTop: 36,
        fontFamily: FONT_FAMILY.ProTextBold,
        color: CUSTOM_COLOR.Black,
        opacity: 0.4,
    },
    input: {
        marginLeft: 50,
        marginRight: 50,
        borderBottomWidth: 0.5,
        borderBottomColor: CUSTOM_COLOR.Black,
    },
    inputBox: {
        color: CUSTOM_COLOR.Black,
        fontFamily: FONT_FAMILY.ProTextBold,
    },
    pressable: {
        marginTop: 34,
        marginLeft: 50,
    },
    pressableText: {
        color: CUSTOM_COLOR.Vermilion,
        fontFamily: FONT_FAMILY.ProTextBold,
    },
    buttonView: {
        marginTop: 20,
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
        marginBottom: 18,
    }),
    buttonText: {
        color: CUSTOM_COLOR.White,
        fontFamily: FONT_FAMILY.ProTextBold,
        fontSize: 18,
    },
});

export default styles;