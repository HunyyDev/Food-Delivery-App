import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import ButtonGoBack from '../../Components/ButtonGoBack';
import CUSTOM_COLOR from '../../constant/color';
import {IMG_Profile} from '../../assets/images';
import CustomButton from '../../Components/CustomButton';

const ProfileScreen = props => {
  const {navigation} = props;
  const onPress = () => {
    navigation.navigate('InfomationScreen');
  };
  return (
    <SafeAreaView style={styles.container}>
      <ButtonGoBack navigation={navigation} />
      <Text style={styles.name}>My profile</Text>
      <Text style={styles.title}>Information</Text>
      <Pressable style={styles.profile} onPress={onPress}>
        <Image source={IMG_Profile} style={styles.image} />
        <View style={{marginLeft: 10}}>
          <Text style={styles.nameUser}>Marvis Ighedosa</Text>
          <Text style={styles.email}>dosamarvis@gmail.com</Text>
          <Text style={styles.address}>
            No 15 uti street off ovie palace road effurun delta state
          </Text>
        </View>
      </Pressable>
      <Text style={styles.title}>Payment Method</Text>
      <View style={styles.payment}></View>
      <View style={{alignSelf: 'center', marginTop: 20}}>
        <CustomButton label={'Update'} navigation={navigation} />
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.Concrete,
  },
  name: {
    fontSize: 25,
    //marginLeft: 80,
    marginTop: 20,
    alignSelf: 'center',
    color: CUSTOM_COLOR.Black,
  },
  title: {
    fontSize: 17,
    marginLeft: 50,
    marginTop: 40,
    color: CUSTOM_COLOR.Black,
  },
  profile: {
    width: 315,
    height: 133,
    backgroundColor: CUSTOM_COLOR.White,
    borderRadius: 20,
    // marginLeft: 30,
    alignSelf: 'center',
    marginTop: 20,
    flexDirection: 'row',
  },
  image: {
    width: 60,
    height: 60,
    marginTop: 20,
    marginLeft: 16,
  },
  nameUser: {
    fontSize: 18,
    marginTop: 10,
    color: CUSTOM_COLOR.Black,
  },
  email: {
    fontSize: 13,
    color: CUSTOM_COLOR.Black,
    opacity: 0.5,
    marginTop: 10,
  },
  address: {
    fontSize: 13,
    color: CUSTOM_COLOR.Black,
    opacity: 0.5,
    marginTop: 13,
  },
  payment: {
    width: 315,
    height: 231,
    alignSelf: 'center',
    backgroundColor: CUSTOM_COLOR.White,
    borderRadius: 20,
    marginTop: 20,
  },
  text: {},
});
