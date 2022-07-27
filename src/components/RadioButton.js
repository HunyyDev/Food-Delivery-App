import {View, Pressable} from 'react-native';
import React from 'react';
import styles from '../screens/checkout/styles';

const RadioButton = props => {
  return (
    <Pressable style={styles.borderRadio}>
      {({pressed}) =>
        pressed ? (
          <View style={styles.borderRadio}>
            <View style={styles.radio} />
          </View>
        ) : (
          <View style={styles.borderNoPress} />
        )
      }
    </Pressable>
    // <View style={styles.borderRadio}>
    //   {props.selected ?  : null}
    // </View>
  );
};

export default RadioButton;
