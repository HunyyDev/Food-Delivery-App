import React from "react";
import { Text  } from "react-native-svg";
import { StyleSheet } from "react-native";
import { View } from "react-native";

const MyProScreen = ()=>
{
    return(
    <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>Food Info Screen</Text>
    </View>
    );

};
const styles=StyleSheet.create({
    viewStyle:{
        flex: 1,
        backgroundColor: 'black',
    },
    textStyle:{
        flex: 1,
        fontSize:50,
        color: 'white'

    },
});
export default MyProScreen;