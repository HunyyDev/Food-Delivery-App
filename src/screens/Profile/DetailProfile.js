import {
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image
} from 'react-native'
import React, { useEffect, useState } from 'react'
import CustomButton from '../../components/CustomButton'
import COLOR from '../../constants/colors'
import BackButton from '../../components/BackButton'
import font_family from '../../constants/fonts'
import scale from '../../constants/responsive'
import { IMG_avatar } from '../../assets/images/images'
import AsyncStorage from '@react-native-async-storage/async-storage'
import ChoiceBox from '../../components/ChoiceBox'
import PaymentButton from './PaymentButton'
import { ICON_card } from '../../assets/icons/icons'
import dataPayment from '../../data/payment'
import Screens from '../../constants/screen'
import TouchBar from './TouchBar'

const DetailProfile = (props) => {
    const [phoneNumber, setPhoneNumber] = useState('0xxx.xxx');
    const { route } = props;
    const {
        email, name, address,
        setEmail, setName, setAddress
    } = route.params;

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <BackButton style={styles.back} navigation={props.navigation} />
            </View>
            <Text style={styles.title}>My profile</Text>
            <View style={styles.infomation}>
                <View style={styles.headerInfor}>
                    <Text style={styles.title2}>Personal details</Text>
                    <TouchableOpacity activeOpacity={0.7}>
                        <Text style={styles.change}>change</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.profile}>
                    <Image source={IMG_avatar} style={styles.avatar} />
                    <View style={styles.profileContent}>
                        <Text style={styles.name}>{name}</Text>
                        <Text style={styles.info}>{email}</Text>
                        <View style={styles.line}/>
                        <Text style={styles.info}>{phoneNumber}</Text>
                        <View style={styles.line}/>
                        <Text style={styles.info}>{address}</Text>
                    </View>
                </View>
            </View>
            <TouchBar title='Orders'/>
            <TouchBar title='Pending reviews'/>
            <TouchBar title='Faq'/>
            <TouchBar title='Help'/>
            <CustomButton content='Update' type='secondary' style={styles.button} />
        </SafeAreaView>
    )
}

export default DetailProfile

const styles = StyleSheet.create({
    headerInfor: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    container: {
        flex: 1,
        backgroundColor: COLOR.athensGray,
        padding: scale.scaleWidth(40),
        justifyContent: 'flex-start'
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    back: {
        position: 'absolute',
        left: 0,
    },
    title: {
        fontFamily: font_family.abel.regular,
        fontSize: scale.scaleWidth(34),
        marginTop: scale.scaleHeight(40),
        color: COLOR.black
    },
    infomation: {
        marginTop: scale.scaleHeight(50),
    },
    title2: {
        fontFamily: font_family.abel.regular,
        fontSize: scale.scaleWidth(18),
        color: COLOR.black
    },
    change: {
        fontFamily: font_family.abel.regular,
        fontSize: scale.scaleWidth(15),
        color: COLOR.vermilion
    },
    profile: {
        flexDirection: 'row',
        backgroundColor: COLOR.white,
        paddingHorizontal: scale.scaleWidth(16),
        paddingVertical: scale.scaleHeight(20),
        borderRadius: scale.scaleWidth(20),
        marginTop: scale.scaleHeight(10),
        elevation: 10,
    },
    profileContent: {
        paddingHorizontal: scale.scaleWidth(15),
    },
    avatar: {
        width: scale.scaleWidth(90),
        height: scale.scaleWidth(90),
        borderRadius: scale.scaleWidth(10),
    },
    name: {
        fontFamily: font_family.abel.regular,
        fontSize: scale.scaleWidth(18),
        color: COLOR.black,
    },
    info: {
        fontFamily: font_family.abel.regular,
        fontSize: scale.scaleWidth(15),
        paddingVertical: scale.scaleHeight(5)
    },
    line: {
        height: 0.4,
        backgroundColor: COLOR.black,
        width: scale.scaleWidth(165),
        opacity: 0.6,
        marginVertical: scale.scaleHeight(3),
    },
    button: {
        position: 'absolute',
        bottom: scale.scaleHeight(41),
    },
})