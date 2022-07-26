import {Text, View, Image} from 'react-native';
import React from 'react';
import {IC_ChevronRight} from '../../../../assets/icons';
import styles from './styles';
const OptionButton = props => {
  const {label, ...moreProps} = props;
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{label}</Text>
      </View>
      <Image
        source={IC_ChevronRight}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
};
export default OptionButton;
