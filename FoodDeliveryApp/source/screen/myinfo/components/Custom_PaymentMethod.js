import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import CUSTOM_COLOR from '../../../constants/color';
import scale from '../../../../responsive';
import {IMG_LINE} from '../../../assets/images';

const Custom_PaymentMethod2 = props => {
  const [isSelect, setIsSelect] = useState('1');
  return (
    <View style={styles.viewContainer(props)}>
      {/*section one */}
      <TouchableOpacity
        onPress={() => {
          setIsSelect('1');
        }}
        style={styles.touchContainer1}>
        <View style={styles.selectBorder}>
          <View
            backgroundColor={
              isSelect === '1' ? CUSTOM_COLOR.SunsetOrange : 'transparent'
            }
            style={styles.select}
          />
        </View>
        <View style={styles.selectImageView1}>
          <Image source={props.img1} style={styles.selectImage} />
        </View>
        <Text style={styles.selectText1}>{props.selectText1}</Text>
      </TouchableOpacity>
      <View style={styles.firstLine}/>
      {/*section two */}
      <TouchableOpacity
        onPress={() => {
          setIsSelect('2');
        }}
        style={styles.touchContainer2}>
        <View style={styles.selectBorder}>
          <View
            backgroundColor={
              isSelect === '2' ? CUSTOM_COLOR.SunsetOrange : 'transparent'
            }
            style={styles.select}
          />
        </View>
        <View style={styles.selectImageView2}>
          <Image source={props.img2} style={styles.selectImage} />
        </View>
        <Text style={styles.selectText2}>{props.selectText2}</Text>
      </TouchableOpacity>
      <View style={styles.secondLine}/>
      {/*section three */}
      <TouchableOpacity
        onPress={() => {
          setIsSelect('3');
        }}
        style={styles.touchContainer3}>
        <View style={styles.selectBorder}>
          <View
            backgroundColor={
              isSelect === '3' ? CUSTOM_COLOR.SunsetOrange : 'transparent'
            }
            style={styles.select}
          />
        </View>
        <View style={styles.selectImageView3}>
          <Image source={props.img3} style={styles.selectImage} />
        </View>
        <Text style={styles.selectText3}>{props.selectText3}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Custom_PaymentMethod2;

const styles = StyleSheet.create({
  viewContainer: props => ({
    flexDirection: 'column',
    backgroundColor: CUSTOM_COLOR.White,
    width: scale(315),
    borderRadius: scale(20),
    ...props.style,
  }),
  touchContainer1: {
    position: 'absolute',
    top: scale(20),
    width: scale(315),
    height: scale(40),
    backgroundColor: CUSTOM_COLOR.White,
    flexDirection: 'row',
    alignItems: 'center',
  },
  firstLine: {
    position: 'absolute',
    width: scale(232),
    left: scale(51),
    top: scale(75),
    height: 1,
    backgroundColor: CUSTOM_COLOR.Black,
    opacity: 0.3,
  },
  secondLine: {
    position: 'absolute',
    width: scale(232),
    left: scale(51),
    top: scale(145),
    height: 1,
    backgroundColor: CUSTOM_COLOR.Black,
    opacity: 0.3,
  },
  touchContainer2: {
    position: 'absolute',
    top: scale(90),
    width: scale(315),
    height: scale(40),
    backgroundColor: CUSTOM_COLOR.White,
    flexDirection: 'row',
    alignItems: 'center',
  },
  selectBorder: {
    left: scale(21),
    width: scale(15),
    height: scale(15),
    borderRadius: 360,
    borderColor: CUSTOM_COLOR.SunsetOrange,
    borderWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  select: {
    width: scale(7),
    height: scale(7),
    borderRadius: 360,
  },
  selectImageView1: {
    position: 'absolute',
    width: scale(40),
    height: scale(40),
    left: scale(51),
    backgroundColor: CUSTOM_COLOR.TahitiGold,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectImageView2: {
    position: 'absolute',
    width: scale(40),
    height: scale(40),
    left: scale(51),
    backgroundColor: CUSTOM_COLOR.FrenchRose,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectImage: {
    fill: CUSTOM_COLOR.White,
  },
  selectText1: {
    fontSize: scale(17),
    fontWeight: '400',
    color: CUSTOM_COLOR.Black,
    left: scale(102),
  },
  selectText2: {
    fontSize: scale(17),
    fontWeight: '400',
    color: CUSTOM_COLOR.Black,
    left: scale(102),
  },
  touchContainer3: {
    position: 'absolute',
    top: scale(160),
    width: scale(315),
    backgroundColor: CUSTOM_COLOR.White,
    flexDirection: 'row',
    alignItems: 'center',
  },
  selectImageView3: {
    position: 'absolute',
    width: scale(40),
    height: scale(40),
    left: scale(51),
    backgroundColor: CUSTOM_COLOR.BlueRibbon,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectText3: {
    fontSize: scale(17),
    fontWeight: '400',
    color: CUSTOM_COLOR.Black,
    left: scale(102),
  },
});

