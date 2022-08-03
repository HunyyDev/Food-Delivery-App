import {StyleSheet} from 'react-native';
import COLOR from '../../constants/colors';
import scale from '../../constants/responsive';
import font_family from '../../constants/fonts';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.concrete,
    },
    header: {
        backgroundColor: COLOR.white,
        height: scale.scaleWidth(372),
        borderBottomLeftRadius: scale.scaleWidth(30),
        borderBottomRightRadius: scale.scaleWidth(30),
        elevation: 8,
        overflow: 'hidden',
        justifyContent: 'center',
    },
    logoContainer: {
        marginTop: scale.scaleHeight(80),
        width: scale.scaleWidth(250),
        height: scale.scaleHeight(250),
        flex: 1,
        alignSelf: 'center'
    },
    body: {
        flex: 1,
        padding: scale.scaleWidth(40),
    },
    title: {
        fontFamily: font_family.SFProText.semibold,
        fontSize: scale.scaleWidth(15),
        opacity: 0.6,
        marginTop: scale.scaleHeight(25),
    },
    forgot: {
        fontFamily: font_family.SFProText.semibold,
        fontSize: scale.scaleWidth(17),
        color: COLOR.vermilion,
        marginTop: scale.scaleHeight(25),
    },
    input: {
        height: scale.scaleHeight(50),
        borderBottomColor: COLOR.black,
        borderBottomWidth: 0.5,
        paddingHorizontal: 5,
    },
    button: {
        marginBottom: scale.scaleHeight(30),
    },
    alert: {
        color: COLOR.vermilion,
        fontSize: scale.scaleWidth(12),
        marginTop: scale.scaleHeight(5),
    }
})

export default styles;