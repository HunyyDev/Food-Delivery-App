import {Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {IC_BackButton} from '../../assets/icons';
import styles from './styles';
const BackButton = props => {
  const {navigation} = props;
  const onBack = () => {
    navigation.goBack();
  };
  return (
    <TouchableOpacity
      style={styles.container}
      hitSlop={styles.hitSlop}
      onPress={onBack}>
      <Image
        source={IC_BackButton}
        style={styles.backButton}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};

export default BackButton;
