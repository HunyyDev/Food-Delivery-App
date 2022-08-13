import {
  Alert,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import ButtonGoBack from '../../Components/ButtonGoBack';
import {IMG_Food_1} from '../../assets/images';
import CUSTOM_COLOR from '../../constant/color';
import FONT_FAMILY from '../../constant/font';

const ProductDetail = props => {
  const {navigation} = props;
  const {src} = props;
  const {name} = props;
  const {cost} = props;
  const alert = () =>
    Alert.alert('Da Them Vao Gio Hang', 'Them thanh cong', [
      {
        text: 'Ok',
        onPress: () => console.log('Ok Pressed'),
        //style: 'ok',
      },
      {text: 'Cancel', onPress: () => console.log('Cancel Pressed')},
    ]);
  return (
    <SafeAreaView style={styles.container}>
      <ButtonGoBack navigation={navigation} />
      <View></View>
      <Image source={IMG_Food_1} style={styles.image} />
      <Text style={styles.nameStyle}>Veggie tomato mix</Text>
      <Text style={styles.costStyle}>N1,900</Text>
      <Text style={styles.title}>Delivery info</Text>
      <Text style={styles.dis}>
        Delivered between monday aug and thursday 20 from 8pm to 91:32 pm
      </Text>
      <Text style={styles.title}>Return policy</Text>
      <Text style={styles.dis}>
        All our foods are double checked before leaving our stores so by any
        case you found a broken food please contact our hotline immediately.
      </Text>
      <TouchableOpacity style={styles.button} onPress={alert}>
        <Text style={styles.textButton}>Add to cart</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    alignSelf: 'center',
    borderRadius: 100,
    width: 200,
    height: 200,
    marginTop: 70,
  },
  nameStyle: {
    color: CUSTOM_COLOR.Black,
    fontSize: 25,
    alignSelf: 'center',
    marginTop: 15,
    fontFamily: FONT_FAMILY.Light,
  },
  costStyle: {
    color: CUSTOM_COLOR.Red,
    fontSize: 15,
    alignSelf: 'center',
    marginTop: 5,
  },
  title: {
    color: CUSTOM_COLOR.Black,
    fontSize: 17,
    marginTop: 30,
    marginLeft: 50,
  },
  dis: {
    fontSize: 15,
    marginLeft: 50,
  },
  button: {
    backgroundColor: CUSTOM_COLOR.Red,
    width: 314,
    height: 70,
    alignSelf: 'center',
    borderRadius: 30,
    marginTop: 30,
  },
  textButton: {
    color: CUSTOM_COLOR.White,
    alignSelf: 'center',
    marginTop: 20,
    fontSize: 17,
  },
});
