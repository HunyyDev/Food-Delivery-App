import { 
    StyleSheet, 
    Text, 
    TextInput, 
} from 'react-native'
import React from 'react'
import isValidEmail from '../screens/Auth/isValidEmail'
import font_family from '../constants/fonts'
import scale from '../constants/responsive'
import COLOR from '../constants/colors'


const CustomInput = props => {
    return (
        <>
            <Text style={[styles.title, props.type === 'email' && {marginTop: 0 }, props.style]}>{props.title}</Text>
            <TextInput
                style={styles.input}
                value={props.value}
                placeholder={props.placeholder}
                onChangeText={props.setValue}
                secureTextEntry={props.type === 'secure'}/>
            
            {props.type === 'email' && (!isValidEmail(props.value) && props.value !== '') ?  
            <Text style={styles.alert}>Invalid email</Text>
        : null}
        </>
    )
}

export default CustomInput

const styles = StyleSheet.create({
    title: {
        fontFamily: font_family.SFProText.semibold,
        fontSize: scale.scaleWidth(15),
        opacity: 0.6,
        marginTop: scale.scaleHeight(25),
    },
    input: {
        height: scale.scaleWidth(50),
        borderBottomColor: COLOR.black,
        borderBottomWidth: 0.5,
        paddingHorizontal: 5,
    },
    alert: {
        color: COLOR.vermilion,
        fontSize: 12,
        marginTop: 5,
    }
})