import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, } from 'react-native';
import { inlineStyles } from 'react-native-svg';
  
import { Colors, DebugInstructions, Header, LearnMoreLinks, ReloadInstructions, } from 'react-native/Libraries/NewAppScreen';
import CUSTOM_COLOR from '../constants/colors';
import { ICHD1 } from '../icons';
import { ICHD2 } from '../icons';


const HomeScreen = () => {
    return (
        <SafeAreaView style = {styles.container} edges = {['top', 'bottom']}>

            <>
            <View style = {styles.headingContainer}>
                    <View style = {styles.iconContainer}>
                        <ICHD1 
                            width = {30} //22
                            height = {30} //14.67
                            position = {'absolute'}
                            marginLeft = {54.6}
                            marginTop = {74}
                            // position: absolute;
                            // width: 22px;
                            // height: 14.67px;
                            // left: 54.6px;
                            // top: 74px;

                        />
                    </View>
                    <View style = {styles.iconContainer}>
                        <ICHD2 
                            width = {40}
                            height = {40}
                            
                        />
                    </View>

                <>

                </>

            </View>
            </>

            <>
            
            </>

            <>
            
            </>
            
            <>
            
            </>
            
            <>
            
            </>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create ({
    container : {
        flex : 1,
        backgroundColor: CUSTOM_COLOR.Silver,
    }, 

    headingContainer: {
        backgroundColor: CUSTOM_COLOR.Vermilion,
        width: '100%',
        height: 132,
        flexDirection: 'row',
    },

    iconContainer: {
        flex: 1,
        backgroundColor: 'yellow',
    },

})
  
  export default HomeScreen;