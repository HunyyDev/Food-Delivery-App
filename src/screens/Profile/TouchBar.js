import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import COLOR from '../../constants/colors'
import scale from '../../constants/responsive'
import { ICON_back } from '../../assets/icons/icons'
import font_family from '../../constants/fonts'

const TouchBar = (props) => {
  return (
    <TouchableOpacity 
    style={styles.container}
    activeOpacity={0.6}
    onPress={props.onPress}>
      <Text style={styles.text}>{props.title}</Text>
      <Image source={ICON_back} style={styles.image}/>
    </TouchableOpacity>
  )
}

export default TouchBar

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: scale.scaleHeight(60),
        flexDirection: 'row',
        backgroundColor: COLOR.white,
        paddingHorizontal: scale.scaleWidth(30),
        paddingVertical: scale.scaleHeight(15),
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: scale.scaleHeight(20),
        borderRadius: scale.scaleWidth(20),
        alignSelf: 'flex-start',
        elevation: 6,
    },
    text: {
        fontFamily: font_family.abel.regular,
        fontSize: scale.scaleWidth(18),
        color: COLOR.black
    },
    image: {
        transform: [{rotate: '180deg'}],
    }
})