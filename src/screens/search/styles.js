import {StyleSheet} from 'react-native'
import CUSTOM_COLOR from '../../constants/colors'
import FONT_FAMILY from '../../constants/fonts'
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:CUSTOM_COLOR.Gallery,
    },
    searchContainer: {
        flexDirection: 'row',
        top: 10,
        height: 50,
    },
    backButton: {
        alignSelf: 'flex-start',
        width: 6,
        height: 12,
        marginTop: 18,
        marginLeft: 25,
    },
    input: {
        marginLeft: 44,
        fontFamily: FONT_FAMILY.Bold,
        color: CUSTOM_COLOR.Black,
    },
    resultContainer: {
        marginTop: 135,
        backgroundColor: CUSTOM_COLOR.White,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    header: {
        fontFamily: FONT_FAMILY.Black,
        color: CUSTOM_COLOR.Black,
        marginTop: 35,
        marginLeft: '18%',
        fontSize: 28,
    },
    result: {
        flexDirection: 'row',
        marginTop: 10,

    },
    resultColumn: {

    },
});
export default styles;