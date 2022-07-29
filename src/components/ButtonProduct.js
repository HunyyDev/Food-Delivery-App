import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Alert,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React from 'react';
import {IMG_Product_1} from '../assets/images';
import styles from '../screens/home/styles';
import CUSTOM_COLOR from '../constants/colors';

const ButtonProduct = props => {
  // eslint-disable-next-line no-undef
  const ButtonAlert = (title, announce) => {
    Alert.alert(title, announce, [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'OK',
      },
    ]);
  };
  return (
    <>
      {/* <View style={styles.productWrapper}> */}
      <TouchableOpacity onPress={() => ButtonAlert(props.title, 'Het hang!')}>
        <View style={styles.productItem}>
          <Image
            style={styles.imageWrapper}
            source={props.source}
            resizeMode="cover"
          />
          <View style={styles.productInfo}>
            <Text style={styles.titleText}>{props.title}</Text>
            <Text style={styles.priceText}>{props.price}</Text>
          </View>
        </View>
      </TouchableOpacity>
      {/* </View> */}
    </>
  );
};

export default React.memo(ButtonProduct);
