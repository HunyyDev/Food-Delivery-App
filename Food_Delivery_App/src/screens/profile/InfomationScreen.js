import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import React from 'react';
import ButtonGoBack from '../../Components/ButtonGoBack';
import CUSTOM_COLOR from '../../constant/color';
import {SafeAreaView} from 'react-native-safe-area-context';
import {IMG_Profile} from '../../assets/images';
import {ICO_Chevron_Right, ICO_Line} from '../../assets/icons';
import CustomButton from '../../Components/CustomButton';

const InfomationScreen = props => {
  const {navigation} = props;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <ButtonGoBack navigation={navigation} />
        <Text style={styles.header}>My profile</Text>
        <Text style={styles.title}>Personal details</Text>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.changeButton}>change</Text>
        </TouchableOpacity>
        <View style={styles.profile}>
          <Image source={IMG_Profile} style={styles.image} />
          <View>
            <Text style={styles.name}>Marvis Ighedosa</Text>
            <Text style={styles.email}>Dosamarvis@gmail.com</Text>
            <Image source={ICO_Line} style={styles.line}></Image>
            <Text style={styles.phoneNumber}>+234 9011039271</Text>
            <Image source={ICO_Line} style={styles.line}></Image>
            <Text style={styles.address}>
              {`No 15 uti street off ovie\npalace road effurun delta\nstate`}
            </Text>
          </View>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Orders</Text>
          <Image source={ICO_Chevron_Right} style={styles.chevron} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Pending reviews</Text>
          <Image source={ICO_Chevron_Right} style={styles.chevron} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Faq</Text>
          <Image source={ICO_Chevron_Right} style={styles.chevron} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Help</Text>
          <Image source={ICO_Chevron_Right} style={styles.chevron} />
        </TouchableOpacity>
        <View style={styles.buttonUpdate}>
          <CustomButton label={'Update'} navigation={navigation}></CustomButton>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default InfomationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.Concrete,
  },
  header: {
    color: CUSTOM_COLOR.Black,
    fontSize: 34,
    fontWeight: '400',
    fontStyle: 'normal',
    marginLeft: 50,
    marginTop: 70,
  },
  title: {
    fontSize: 18,
    color: CUSTOM_COLOR.Black,
    marginLeft: 50,
    marginTop: 20,
  },
  changeButton: {
    color: CUSTOM_COLOR.Red,
    top: -20,
    marginLeft: 300,
  },
  profile: {
    width: 315,
    height: 197,
    backgroundColor: CUSTOM_COLOR.White,
    borderRadius: 20,
    alignSelf: 'center',
    marginTop: -10,
    flexDirection: 'row',
  },
  image: {
    width: 91,
    height: 100,
    marginLeft: 20,
    marginTop: 20,
    borderRadius: 10,
  },
  name: {
    fontSize: 18,
    color: CUSTOM_COLOR.Black,
    marginTop: 20,
    marginLeft: 10,
  },
  email: {
    fontSize: 15,
    color: CUSTOM_COLOR.Black,
    marginLeft: 10,
    marginTop: 10,
  },
  line: {
    marginTop: 5,
  },
  phoneNumber: {
    fontSize: 15,
    color: CUSTOM_COLOR.Black,
    marginLeft: 10,
    marginTop: 10,
  },
  address: {
    fontSize: 15,
    color: CUSTOM_COLOR.Black,
    marginLeft: 10,
    marginTop: 10,
  },
  button: {
    width: 315,
    height: 60,
    backgroundColor: CUSTOM_COLOR.White,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 20,
  },
  textButton: {
    color: CUSTOM_COLOR.Black,
    marginTop: 20,
    marginLeft: 20,
  },
  buttonUpdate: {
    alignSelf: 'center',
    marginTop: 30,
    marginBottom: 30,
  },
  chevron: {
    marginTop: -20,
    marginLeft: 270,
  },
});
