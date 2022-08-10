import React from "react";
import { IC_GoBack } from "../../assets/icons";
import { StyleSheet ,View,TouchableOpacity,Text} from "react-native";
import scale from "../../components/scale";
import CUSTOM_COLORS from "../../constants/colors";
import FONT_FAMILY from "../../constants/font";
import { useState } from "react";
const CartScreen = ({navigation})=>
{
    const [count, setCount] = useState(1);
    return(
    <View>

        {/*Icon goBack */}
        <View style={styles.goBackcontainer}>
            <TouchableOpacity onPress={()=>{navigation.goBack()}} hitSlop={styles.hitSlop}>
                <IC_GoBack/>
            </TouchableOpacity>
        </View>

         {/* Cart */}
         <Text style={styles.cartName}>Cart</Text>

        {/*Box 1 */}
        <View style={styles.box1}>
            <Text style={styles.textBox1}>Veggie tomato mix</Text>
            <Text style={styles.numberBox1}>#1,900</Text>
            <View style={styles.button}>
                {/*Button + */}
                <View style={styles.button1}>
                    
                    <TouchableOpacity onPress={() => setCount(count + 1)} hitSlop={styles.hitSlop}>
                        <IC_GoBack/>
                    </TouchableOpacity>
                </View>

                {/*Button - */}
                <View style={styles.button2}>
                    <TouchableOpacity onPress={() => setCount(count - 1)} hitSlop={styles.hitSlop}>
                        <IC_GoBack/>
                    </TouchableOpacity>
                </View>

                {/*Count */}
                <Text style={styles.numbercount}>{count}</Text>
            </View>
        </View>
    </View>
    );

};
const styles=StyleSheet.create({
    numbercount:{
        textAlign: 'center',
        fontSize: scale(13),
        left: scale(24),
        //top: scale(27),
        fontWeight: '400',
        color: CUSTOM_COLORS.White,
        position: 'absolute',
        lineHeight: scale(17),
        fontFamily:FONT_FAMILY.Abel,
    },
    button2:{
        position: 'absolute',
        top: scale(4),
        left: scale(10),
      },

    button1:{
      position: 'absolute',
      top: scale(4),
      left: scale(39),
    },
    button:{
        backgroundColor:CUSTOM_COLORS.SunsetOrange,
        width:scale(52),
        height:scale(20),
        left:scale(239),
       top:scale(64),
        borderRadius:scale(30),
        position:"absolute",
    },
    box1:{
        backgroundColor:CUSTOM_COLORS.White,
        width:scale(315),
        height:scale(102),
        left:scale(50),
       top:scale(178),
        borderRadius:scale(20),
        position:"absolute",
    },
    numberBox1:{
        textAlign: 'center',
        fontSize: scale(15),
        left: scale(105),
        top: scale(58),
        fontWeight: '400',
        color: CUSTOM_COLORS.SunsetOrange,
        position: 'absolute',
        lineHeight: scale(19),
        fontFamily:FONT_FAMILY.Abel,
    },
    textBox1:{
        textAlign: 'center',
        fontSize: scale(17),
        left: scale(111),
        top: scale(27),
        fontWeight: '400',
        color: CUSTOM_COLORS.Black,
        position: 'absolute',
        lineHeight: scale(22),
        fontFamily:FONT_FAMILY.Abel,
    },
    cartName:{
        textAlign: 'center',
        fontSize: scale(18),
        left: scale(175),
        top: scale(61),
        fontWeight: '600',
        color: CUSTOM_COLORS.Black,
        position: 'absolute',
        lineHeight: scale(21),
    },

    viewStyle:{
        flex: 1,
        backgroundColor: 'white',
    },
    textStyle:{
        flex: 1,
        fontSize:50,
        color: 'white'
    },
    hitSlop: {
        top: scale(20),
        left: scale(20),
        right: scale(20),
        bottom: scale(20),
      },
      goBackcontainer:{
        position: 'absolute',
      top: scale(61),
      left: scale(50),
      
      },
});
export default CartScreen;