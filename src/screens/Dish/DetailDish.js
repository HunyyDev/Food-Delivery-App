import {
    Image,
    TouchableOpacity,
    Text,
    View,
    SafeAreaView,
    StyleSheet,
} from 'react-native';
import { IMG_dish1 } from '../../assets/images/images';
import { ICON_back, ICON_heart } from '../../assets/icons/icons';
import React, { Component } from 'react';
import CustomButton from '../../components/CustomButton';
import Swiper from 'react-native-swiper';
import Screens from '../../constants/screen';
import scale from '../../constants/responsive';
import COLOR from '../../constants/colors';
import font_family from '../../constants/fonts';

const delRow = (string) => {
    let res = '';
    for(let i = 0; i < string.length; i++){
        if(string[i] == '\n')
            res += ' ';
        else
            res += string[i];
    }
    return res;
}

const DetailDish = props => {
    const {route} = props;
    const {navigation, title, cost, image} = route.params;
    const addToCart = () => {
        console.log('hehe');
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={ICON_back} style={styles.back} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {}}>
                    <Image source={ICON_heart} style={styles.heart} resizeMode={'center'}/>
                </TouchableOpacity>
            </View>
            <View style={styles.swipContainer}>
                <Swiper>
                    <Image source={image} style={styles.dish}/>
                    <Image source={image} style={styles.dish}/>
                    <Image source={image} style={styles.dish}/>
                    <Image source={image} style={styles.dish}/>
                </Swiper>
            </View>
            <Text style={styles.title}>{delRow(title)}</Text>
            <Text style={styles.cost}>{cost}</Text>
            <Text style={styles.h2}>Delivery info</Text>
            <Text style={styles.h3}>{
            'Delivered between monday aug and thursday 20\nfrom 8pm to 91:32 pm'}
            </Text>
            <Text style={styles.h2}>Return policy</Text>
            <Text style={styles.h3}>{
            'All our foods are double checked before leaving\nour stores so by any case you found a broken\nfood please contact our hotline immediately.'}
            </Text>
            <CustomButton content='Add to cart' type='secondary'
            style={styles.button}
            onPress={()=>addToCart()}/>


        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.white,
    },
    header: {
        flexDirection: 'row',
        marginTop: scale.scaleWidth(60),
        height: scale.scaleHeight(24),
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    back: {
        tintColor: COLOR.black,
        marginRight: scale.scaleWidth(137),
    },
    heart: {
        tintColor: COLOR.black,
        width: scale.scaleWidth(19),
        height: scale.scaleWidth(19),
        marginLeft: scale.scaleWidth(137),

    },
    swipContainer: {
        height: scale.scaleHeight(289),
        marginTop: scale.scaleHeight(10)
    },
    dishContainer: {
        width: scale.scaleWidth(241.21),
        height: scale.scaleWidth(241.21),
        justifyContent: 'flex-end'
    },
    dish: {
        width: scale.scaleWidth(231.21),
        height: scale.scaleWidth(231.21),
        borderRadius: scale.scaleWidth(231.21/2),
        elevation: 10,
        alignSelf: 'center',
    },
    title: {
        fontFamily: font_family.SFProText.regular,
        fontSize: scale.scaleHeight(24),
        alignSelf: 'center',
        textAlign: 'center',
        color: COLOR.black,
    },
    cost: {
        color: COLOR.vermilion,
        fontSize: scale.scaleHeight(20),
        alignSelf: 'center',
        fontFamily: font_family.SFProText.regular,
    },
    h2: {
        color: COLOR.black,
        fontFamily: font_family.SFProText.regular,
        paddingHorizontal: scale.scaleWidth(53),
        marginTop: scale.scaleHeight(43),
        fontSize: scale.scaleHeight(15),
    },
    h3: {
        opacity: 0.7,
        fontFamily: font_family.SFProText.regular,
        paddingHorizontal: scale.scaleWidth(53),
        fontSize: scale.scaleHeight(13),
        lineHeight: 20,
        marginTop: scale.scaleHeight(5),
    },
    button: {
        position:'absolute',
        bottom: scale.scaleHeight(41),
    }
})

export default DetailDish;
