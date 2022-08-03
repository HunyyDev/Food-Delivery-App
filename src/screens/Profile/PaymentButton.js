import { 
    StyleSheet,
    Text, 
    TouchableOpacity, 
    View,
    Image,
    Pressable
} from 'react-native'
import React from 'react'
import ChoiceBox from '../../components/ChoiceBox'
import scale from '../../constants/responsive'
import COLOR from '../../constants/colors'
import font_family from '../../constants/fonts'

const PaymentButton = (props) => {
  return (
    <Pressable
    style={styles.wrap}
    onPress={props.onPress}>
        <View style={styles.container}>
        <ChoiceBox isChoiced={props.check === props.id ? true : false}/>
        <View style={[styles.iconContainer,props.color && {backgroundColor: props.color}]}>
            <Image source={props.source} resizeMode='contain'/>
        </View>
        <Text style={styles.title}>{props.title}</Text>
        </View>
        {props.line?<View style={styles.line}/>:null}
    </Pressable>
  )
}

export default PaymentButton

const styles = StyleSheet.create({
    wrap: {
        marginTop: scale.scaleHeight(15)
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconContainer: {
        width: scale.scaleWidth(40),
        height: scale.scaleWidth(40),
        backgroundColor: COLOR.pink,
        borderRadius: scale.scaleWidth(10),
        marginLeft: scale.scaleWidth(15),
        marginRight: scale.scaleWidth(15),
        justifyContent: 'center',
        alignItems: 'center',
        padding: scale.scaleWidth(12),
    },
    title: {
        fontFamily: font_family.abel.regular,
        fontSize: scale.scaleWidth(17),
        color: COLOR.black,
    },
    line: {
        width: scale.scaleWidth(232),
        alignSelf: 'center',
        height: 0.5,
        backgroundColor: COLOR.black,
        opacity: 0.4,
        marginTop: scale.scaleHeight(15)
    }
})