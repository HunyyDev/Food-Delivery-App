import {
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native'
import React from 'react'
import Screens from '../../constants/screen'

const ButtonTab = (props) => {
    return (
        <TouchableOpacity 
        activeOpacity={0.6}
        onPress={()=>props.navigation.navigate(props.screen)}>
            <Image source={props.icon}></Image>
        </TouchableOpacity>
    )
}

export default ButtonTab

const styles = StyleSheet.create({})