import {
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image
} from 'react-native'
import React, { useEffect, useState, useLayoutEffect } from 'react'
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

const ProfileScreen = (props) => {
    const [email, setEmail] = useState('example@gmail.com');
    const [name, setName] = useState('Your name');
    const [address, setAddress] = useState('Your address');
    const [selected, setSelected] = useState(1);

    useEffect(() => {
        const fetch = async () => {
            const item = await AsyncStorage.getItem('Email');
            const type = await AsyncStorage.getItem('Payment');
            if(type) setSelected(Number(type));
            setEmail(item);
        };
        fetch();
        const willFocus = props.navigation.addListener('focus', () => fetch());
        return willFocus;
    }, [])
    const update =async (id) => {
        await AsyncStorage.setItem('Payment', String(id));
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <BackButton style={styles.back} navigation={props.navigation} />
                <Text style={styles.title}>My profile</Text>
            </View>
            <View style={styles.infomation}>
                <Text style={styles.title2}>Information</Text>
                <TouchableOpacity
                    style={styles.profile}
                    activeOpacity={0.8}
                    onPress={() => props.navigation.navigate(Screens.DETAIL_PROFILE, {
                        navigation: props.navigation,
                        name: name,
                        email: email,
                        address: address,
                        setName: (name) => setName(name),
                        setEmail: (name) => setEmail(name),
                        setAddress: (name) => setAddress(name),
                    })}>
                    <Image source={IMG_avatar} style={styles.avatar} />
                    <View style={styles.profileContent}>
                        <Text style={styles.name}>{name}</Text>
                        <Text style={styles.info}>{email}</Text>
                        <Text style={styles.info}>{address}</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.payment}>
                <Text style={styles.title2}>Payment Method</Text>
                <View style={styles.paymentChoice}>
                    {dataPayment.map(value => (
                        <PaymentButton
                            key={value.id}
                            id={value.id}
                            check={selected}
                            source={value.source}
                            title={value.title}
                            color={value.color}
                            onPress={() => setSelected(value.id)}
                            line={value.id == 3 ? false : true}/>
                    ))}
                </View>
            </View>
            <CustomButton content='Update' type='secondary' style={styles.button} 
            onPress={()=>update(selected)}/>
        </SafeAreaView>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.athensGray,
        padding: scale.scaleWidth(40),
    },
    header: {
        flexDirection: 'row',
        // backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center',
    },
    back: {
        position: 'absolute',
        left: 0,
    },
    title: {
        fontFamily: font_family.abel.regular,
        fontSize: scale.scaleWidth(18),
        color: COLOR.black
    },
    infomation: {
        flex: 1,
        marginTop: scale.scaleHeight(50),
    },
    title2: {
        fontFamily: font_family.abel.regular,
        fontSize: scale.scaleWidth(18),
        color: COLOR.black
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
        width: scale.scaleWidth(60),
        height: scale.scaleWidth(60),
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
    button: {
        position: 'absolute',
        bottom: scale.scaleHeight(41),
    },
    payment: {
        flex: 3.2,
        marginTop: scale.scaleHeight(48),
    },
    paymentChoice: {
        flex: 0.5,
        backgroundColor: COLOR.white,
        paddingHorizontal: scale.scaleWidth(16),
        paddingVertical: scale.scaleHeight(5),
        borderRadius: scale.scaleWidth(20),
        marginTop: scale.scaleHeight(19),
        elevation: 10,
    }
})