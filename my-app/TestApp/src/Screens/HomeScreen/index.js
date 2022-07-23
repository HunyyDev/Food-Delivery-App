import { SafeAreaView, StyleSheet, Text, View, Image, ScrollView, Dimensions } from 'react-native'
import React from 'react'
import { ic_heart, ic_House, ic_Search, ic_sharp_history, ic_Shopping_cart, ic_User, ic_Vector, img_dish1, img_Mask, img_Mask2, img_Mask3 } from '../../assets/icon'
import CUSTOM_COLOR from '../../constants/colors'
import CUSTOM_FONTS from '../../constants/custom_font'



const HOME_SCREEN = () => {
    return (
        <SafeAreaView style={styles.container}>
            {/* Top */}
            <View style={styles.TopContainer}>
                {/* Icon image top */}
                <>
                    <View style={styles.icContainer}>
                        <View style={{ flex: 1 }}>
                            <Image source={ic_Vector}></Image>
                        </View>
                        <View>
                            <Image source={ic_Shopping_cart}></Image>
                        </View>
                    </View>
                </>
                {/* Title */}
                <>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>{"Delicious \nfood for you"}</Text>
                    </View>

                </>
                {/* Bar Search */}
                <>
                    <View style={styles.barSearchContainer}>
                        <View style={styles.barSearchShape}>
                            <View style={{ flex: 1, marginLeft: 35 }}>
                                <Image source={ic_Search} ></Image>
                            </View>
                            <View style={{ flex: 5 }}>
                                <Text>Search</Text>
                            </View>
                        </View>
                    </View>
                </>
            </View>

            {/* Mid */}
            <View styles={styles.MidContainer}>
                {/* Content */}
                    {/* TextContent */}
                    <>
                    <View style={styles.TextContent}>
                    <ScrollView horizontal={true} >

                        <View style={styles.TextSpace}>
                            <Text style={styles.TextStyle}>Foods</Text>
                        </View>
                        <View style={styles.TextSpace}>
                            <Text style={styles.TextStyle}>Drinks</Text>
                        </View>
                        <View style={styles.TextSpace}>
                            <Text style={styles.TextStyle}>Snacks</Text>
                        </View>
                        <View style={styles.TextSpace}>
                            <Text style={styles.TextStyle}>Sauce</Text>
                        </View>
                    </ScrollView>
                    </View>

                    </>
                    {/* ImageContent */}
                    <>
                    <SafeAreaView style={styles.ImageContent}>
                    <ScrollView horizontal={true} >

                        <View style={styles.ImgSpace}>
                            <Image style={styles.ImgMask} source={img_Mask}></Image>
                        </View>
                        <View style={styles.ImgSpace}>
                            <Image style={styles.ImgMask} source={img_Mask}></Image>
                        </View>
                        <View style={styles.ImgSpace}>
                            <Image style={styles.ImgMask} source={img_Mask}></Image>
                        </View>
                    </ScrollView>
                    </SafeAreaView>
                    </>
            </View>


            {/* BottomContainer */}
            <View style={styles.BottomContainer}>
                {/* Icon Tab */}
                <View style={styles.icTabContainer}>
                    <View style={styles.icTab}>
                        <Image source={ic_House}></Image>
                    </View>
                    <View style={styles.icTab}>
                        <Image source={ic_heart}></Image>
                    </View>
                    <View style={styles.icTab}>
                        <Image source={ic_User}></Image>
                    </View>
                    <View style={styles.icTab}>
                        <Image source={ic_sharp_history}></Image>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default HOME_SCREEN

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent:'space-between',
        backgroundColor: CUSTOM_COLOR.Concrete,
    },

    TopContainer: {
        flex: 15,
    },
    icContainer: {
        flexDirection: 'row',
        marginTop: 65,
        marginLeft: 54.6,
        marginRight: 42,
    },
    titleContainer: {
        marginLeft: 54.6,
        marginEnd: 43.33,
    },
    title: {
        fontSize: 34,
        color: CUSTOM_COLOR.Black,
        fontFamily: CUSTOM_FONTS.Bold,
    },
    barSearchContainer: {
        marginTop: 28,
        justifyContent: 'center',
        alignItems: 'center',
    },
    barSearchShape: {
        width: 314,
        height: 60,
        borderRadius: 30,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: CUSTOM_COLOR.Gallery,
    },

    MidContainer: {
        justifyContent:'flex-start',
        alignSelf:'flex-start',
        flex: 1,
    },
    ContentContainer:
    {
    },
    TextContent:{
        marginLeft:40,
        flexDirection: 'row',
        //backgroundColor: CUSTOM_COLOR.SunsetOrange,
    },
    TextSpace:{
       marginLeft:41,
    },
    TextStyle:{
        fontFamily:CUSTOM_FONTS.Regular,
        fontSize:17,
        color:CUSTOM_COLOR.Manatee,
    },
    ImageContent: {
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        //backgroundColor:CUSTOM_COLOR.CornflowerBlue,
    },
    ImgSpace:{
        flex:1,
    },
    ImgMask: {
        height:321,
        width:220,
        resizeMode: 'contain',
    },
    BottomContainer: {
        justifyContent: 'flex-end',
        flex: 1,
    },
    icTabContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 50,
        marginBottom: 45,
    },
    icTab: {
        flex: 1,
    }

})

