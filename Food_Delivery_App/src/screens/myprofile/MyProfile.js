import React from 'react';
import {Text} from 'react-native';
import {StyleSheet} from 'react-native';
import {View} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import CustomButton from '../../components/CustomButton';
import CUSTOM_COLORS from '../../constants/colors';
import {TouchableOpacity} from 'react-native';
import {IC_GoBack} from '../../assets/icons';
import scale from '../../constants/responsive';
import FONT_FAMILY from '../../constants/font';
import {Image, FlatList} from 'react-native';
import {IMG_AVATAR} from '../../assets/images';
import {IMG_CARD} from '../../assets/images';
import {IMG_BANK} from '../../assets/images';
import {IMG_LINE} from '../../assets/images';
import {IMG_PAYPAL} from '../../assets/images';
import {useState} from 'react';

const PaymentMethod = [
  {
    title: 'Card',
    sourceIMG: IMG_CARD,
    backgroundColor: CUSTOM_COLORS.TahitiGold,
  },
  {
    title: 'Bank account',
    sourceIMG: IMG_BANK,
    backgroundColor: CUSTOM_COLORS.FrenchRose,
  },
  {
    title: 'Paypal',
    sourceIMG: IMG_PAYPAL,
    backgroundColor: CUSTOM_COLORS.BlueRibbon,
  },
];

const MyProScreen = ({navigation}) => {
  const onPressMyprofile = () => {
    navigation.navigate('MyInforScreen');
  };
  const [isSelect, setIsSelect] = useState(0);

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      {/* Go back button */}

      <View style={styles.goBackContainer}>
        <TouchableOpacity
          hitSlop={styles.hitSlop}
          onPress={() => {
            navigation.goBack();
          }}>
          <IC_GoBack />
        </TouchableOpacity>
      </View>

      {/* screen name */}
      <Text style={styles.screenName}>My Profile</Text>
      {/*Information */}
      <>
        <Text style={styles.textInformation}>Information</Text>

        <TouchableOpacity
          style={styles.viewInfomation}
          onPress={onPressMyprofile}>
          <View>
            <Image source={IMG_AVATAR} style={styles.avatar}></Image>
            <Text style={styles.textName}>Nguyen Hung Quyen</Text>
            <Text style={styles.textEmail}>abc@gmail.com</Text>
            <Text style={styles.textviewInformation}>
              No 15 uti street off ovie palace road effurun delta state
            </Text>
          </View>
        </TouchableOpacity>
      </>
      {/*PaymentMethod */}
      <>
        <Text style={styles.textPayment}>Payment Method</Text>
      </>
      <View style={styles.viewPayment}>
        {/*Button card */}

        <FlatList
          data={PaymentMethod}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  setIsSelect(index);
                }}
                style={styles.touchPayment}>
                <View
                  style={[
                    styles.selectBorder,
                    isSelect == index
                      ? {borderColor: CUSTOM_COLORS.SunsetOrange}
                      : {borderColor: CUSTOM_COLORS.Black},
                  ]}>
                  <View
                    style={styles.select}
                    backgroundColor={
                      isSelect == index
                        ? CUSTOM_COLORS.SunsetOrange
                        : 'transparent'
                    }
                  />
                </View>

                {/* childComponent */}
                <View
                  style={[
                    styles.childComponentContainer,
                    index < PaymentMethod.length - 1
                      ? styles.childComponentContainerBorder
                      : null,
                  ]}>
                  <View
                    style={[
                      styles.viewPaymentItem,
                      {backgroundColor: item.backgroundColor},
                    ]}>
                    <Image
                      source={item.sourceIMG}
                      style={styles.imagePayment}
                    />
                  </View>
                  <Text style={styles.textviewPayment}>{item.title}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <CustomButton
        title="Update"
        type="secondary"
        name="goBack"
        navigation={navigation}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLORS.Athens_Gray,
  },
  goBackContainer: {
    position: 'absolute',
    top: scale(61),
    left: scale(50),
  },
  hitSlop: {
    top: scale(10),
    left: scale(10),
    right: scale(10),
    bottom: scale(10),
  },
  screenName: {
    textAlign: 'center',
    fontSize: scale(18),
    left: scale(175),
    top: scale(61),
    fontWeight: '600',
    color: CUSTOM_COLORS.Black,
    position: 'absolute',
    lineHeight: scale(21),
  },
  textInformation: {
    fontSize: 15,
    color: CUSTOM_COLORS.Black,
    fontFamily: FONT_FAMILY.SFBold,
    left: scale(53),
    top: scale(138),
  },

  viewInfomation: {
    backgroundColor: CUSTOM_COLORS.White,
    width: scale(315),
    height: scale(133),
    left: scale(50),
    bottom: scale(593),
    borderRadius: scale(20),
    position: 'absolute',
  },
  textviewInformation: {
    position: 'absolute',
    fontSize: scale(13),
    opacity: scale(0.5),
    color: CUSTOM_COLORS.Black,
    top: scale(75),
    left: scale(91),
    width: scale(200),
    height: scale(40),
    fontFamily: FONT_FAMILY.Abel,
  },

  avatar: {
    // position: "absolute",
    left: scale(16),
    bottom: scale(-10),
    borderRadius: scale(10),
    width: scale(60),
    height: scale(60),
  },

  textName: {
    //position:"absolute",
    left: scale(91),
    bottom: scale(50),
    fontFamily: FONT_FAMILY.Abel,
    fontSize: scale(18),
    color: CUSTOM_COLORS.Black,
  },

  textEmail: {
    position: 'absolute',
    fontSize: scale(13),
    opacity: scale(0.5),
    color: CUSTOM_COLORS.Black,
    top: scale(50),
    left: scale(91),
    width: scale(200),
    height: scale(40),
    fontFamily: FONT_FAMILY.Abel,
  },

  viewPayment: {
    backgroundColor: CUSTOM_COLORS.White,
    width: scale(315),
    // height: scale(231),
    borderRadius: scale(20),

    left: scale(50),
    bottom: scale(233),
    position: 'absolute',
  },
  textPayment: {
    fontSize: 15,
    color: CUSTOM_COLORS.Black,
    fontFamily: FONT_FAMILY.SFBold,
    left: scale(53),
    top: scale(351),
  },

  childComponentContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 15,
    alignItems: 'center',
    marginLeft: scale(15),
    marginRight: scale(32),
  },
  childComponentContainerBorder: {
    borderBottomWidth: 1,
    borderBottomColor: CUSTOM_COLORS.Black,
  },

  viewPaymentItem: {
    // backgroundColor: CUSTOM_COLORS.TahitiGold,
    width: scale(40),
    height: scale(40),
    borderRadius: scale(10),
    // left: scale(51),
    // bottom: scale(0),
    // position: 'absolute',

    alignItems: 'center',
    justifyContent: 'center',
  },

  imagePayment: {
    width: scale(16),
    height: scale(12),
    // left: scale(13),
    // bottom: scale(15),
    // position: 'absolute',
  },
  textviewPayment: {
    // left: scale(102),
    // bottom: scale(10),
    // position: 'absolute',
    fontFamily: FONT_FAMILY.Abel,
    color: CUSTOM_COLORS.Black,
    marginLeft: scale(11),
  },

  touchPayment: {
    // position: 'absolute',
    // top: scale(20),
    // width: scale(315),
    // height: scale(40),
    width: '100%',
    backgroundColor: CUSTOM_COLORS.White,
    flexDirection: 'row',
    alignItems: 'center',
  },

  select: {
    width: scale(7),
    height: scale(7),
    borderRadius: 360,
    // left: scale(10),
  },

  selectBorder: {
    // left: scale(21),
    marginLeft: scale(21),
    width: scale(15),
    height: scale(15),
    borderRadius: 360,
    // borderColor: CUSTOM_COLORS.SunsetOrange,
    borderWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default MyProScreen;
