/* eslint-disable prettier/prettier */
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    SafeAreaView,
    Image,
    ScrollView,
  } from 'react-native';
  import React from 'react';
  import CUSTOM_COLOR from '../../constants/color';
  import {IC_GoBack} from '../../assets/icons';
  import scale from '../../../responsive';
  import TextHead from '../checkout/checkout1/component/text';
  import Choose_Button from './components/button';
  import Custom_ButtonOne from '../../components/Custom_ButtonOne';
  import { IMG_AVATAR } from '../../assets/images';
  import TextImg from './components/TextImg';
  import Custom_Boder from '../checkout/checkout1/component/boder';
  
  const MyProfileScreen = () => {
    return (
   <ScrollView >
      <SafeAreaView style={styles.container} >
        <TouchableOpacity style={styles.IC}>
          <IC_GoBack />
        </TouchableOpacity>
        <Text style={styles.text2}>My profile</Text>
  
        <>
        <View style={styles.view1}>
          <TextHead text="Personal details" />
          <TouchableOpacity style={styles.button1}>
              <Text style={styles.textbutton}>change</Text>
          </TouchableOpacity>
          <View style={styles.view1a}>
              <View style={styles.viewimg}>
                  <Image source={IMG_AVATAR} />
              </View>
                 <View style={styles.view2}>
                   <Text style={styles.textview}>Marvis Ighedosa</Text>
                   <TextImg top={scale(0)} text="Dosamarvis@gmail.com"></TextImg>
                   <Custom_Boder top={5}></Custom_Boder>
                   <TextImg top={scale(15)} text="+234 9011039271s"></TextImg>
                   <Custom_Boder top={20}></Custom_Boder>
                   <TextImg top={scale(25)} text="No 15 uti street off ovie palace road effurun delta state"></TextImg>
                 </View>
          </View>
        </View>
        </>
  
        <>
          <Choose_Button top={360} text="Orders"></Choose_Button>
          <Choose_Button top={385} text="Pending reviews"></Choose_Button>
          <Choose_Button top={410} text="Faq"></Choose_Button>
          <Choose_Button top={435} text="Help"></Choose_Button>
        </>
  
        <>
        <Custom_ButtonOne
            text={'Update'}
            color={CUSTOM_COLOR.Vermilion}
            textColor={CUSTOM_COLOR.White}
            style={{top: 770}}
          />
        </>
      
      </SafeAreaView>
      </ScrollView>
    );
  };
  
  export default MyProfileScreen;
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: CUSTOM_COLOR.AthensGray,
      flex: 1,
      height: scale(1000),
      },
    IC: {
      top: scale(85),
      left: scale(41),
      width: scale(24),
      height: scale(24),
      alignItems: 'center',
      justifyContent: 'center',
    },
    text2: {
      fontSize: scale(34),
      top: scale(90),
      left: scale(50),
      height: scale(45),
      width: scale(170),
      color: CUSTOM_COLOR.Black,
    },
    view1: {
      top: scale(210),
      left: scale(50),
      height: scale(196),
      width: scale(315),
      position: 'absolute',
   
    },
    button1: {top: scale(-20),
        width: scale(59),
        height: scale(23),
      },
      textbutton: {
        left: scale(250),
        color: CUSTOM_COLOR.TahitiGold,
        width: '100%',
        height: '100%',
      },
      view1a: {
        top: scale(32),
        position: 'absolute',
        width: scale(315),
        height: scale(197),
        borderRadius: scale(20),
        backgroundColor: CUSTOM_COLOR.White,
      },
      view2:{
        left: scale(122),
        top: scale(-80),
        width: scale(182),
        height: scale(150),
        overflow: 'hidden',
      },
      viewimg:{
        left: scale(16),
        top: scale(18),
        width: scale(91),
        height: scale(100),
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,  
      },
      textview:{
        fontSize: scale(18),
        height: scale(23),
        width: scale(140),
        fontWeight: '600',
        color: CUSTOM_COLOR.Black,
      },
    });