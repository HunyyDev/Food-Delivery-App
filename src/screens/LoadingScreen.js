import { Animated, Easing, Image, ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useRef } from 'react'
import { IMG_loadingBgr, IMG_logoFull } from '../assets/images/images'
import scale from '../constants/responsive'
import COLOR from '../constants/colors'
import font_family from '../constants/fonts'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { AuthContext } from '../routes/RootNavigator'

const LoadingScreen = () => {
    const rotateDegree = useRef(new Animated.Value(0)).current;
    const rotateAnimation = () => {
        Animated.loop(Animated.timing(rotateDegree, {
            toValue: 360,
            duration: 1000,
            easing: Easing.linear,
            useNativeDriver: true,
        })).start();
    };
    const { signIn, signOut } = useContext(AuthContext);
    // useEffect(()=>{
    //     const setLogin = async () => {
    //         await AsyncStorage.setItem('LoggedIn', 'sign-in');
    //     };
    //     setLogin();
    // }, []);

    useEffect(() => {
        var direction;
        const fetch = async () => {
            const status = await AsyncStorage.getItem('LoggedIn');
            if (status === 'sign-in' || status === 'loading') {
                await AsyncStorage.setItem('LoggedIn', 'sign-in');
                direction = setTimeout(() => signIn(), 1500);
            }
            else signOut();
        };
        fetch();
        rotateAnimation();
        return () => {
            try {clearTimeout(direction);}
            catch (e) {console.log(e);}
        };
    }, []);

    // useEffect(()=>{
    //     const login = setTimeout(()=>{
    //         signIn();
    //     }, 1500);
    //     return () => clearTimeout(login);
    // },[])
    return (
        <ImageBackground source={IMG_loadingBgr} style={styles.container}>
            <View style={styles.contentContainer}>
                <Image source={IMG_logoFull} style={styles.image} resizeMode='contain' />
                <Text style={styles.text}>Food for Everyone</Text>
                <Animated.View style={[styles.loading, {
                    transform: [
                        {
                            rotate: rotateDegree.interpolate({
                                inputRange: [0, 360],
                                outputRange: ['0deg', '360deg']
                            })
                        },
                    ]
                }]} />
            </View>
        </ImageBackground>
    )
}

export default LoadingScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentContainer: {
        width: scale.scaleWidth(262),
        height: scale.scaleWidth(262),
        borderRadius: scale.scaleWidth(131),
        backgroundColor: COLOR.white,
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: scale.scaleHeight(61),
    },
    text: {
        fontFamily: font_family.abel.regular,
        fontSize: scale.scaleWidth(10),
        color: COLOR.vermilion
    },
    loading: {
        width: scale.scaleWidth(28),
        height: scale.scaleWidth(28),
        borderRadius: scale.scaleWidth(14),
        marginTop: scale.scaleHeight(28),
        borderWidth: 1,
        borderBottomColor: COLOR.vermilion,
        borderLeftColor: COLOR.vermilion,
        borderRightColor: COLOR.vermilion,
        borderTopColor: COLOR.white,
    }
})