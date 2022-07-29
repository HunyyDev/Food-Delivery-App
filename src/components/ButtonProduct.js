import React from 'react';
import {Alert, Image, Text, TouchableOpacity, View} from 'react-native';
import styles from '../screens/home/styles';

const ButtonProduct = props => {
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
    </>
  );
};

export default React.memo(ButtonProduct);
