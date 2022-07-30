import {Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {IC_BackButton} from '../../assets/icons';
import styles from './styles';
import SCREEN_NAME from '../../constants/screens';
const BackButton = props => {
  const {navigation, ...moreProps} = props;
  return (
    <TouchableOpacity
      style={styles.container}
      hitSlop={styles.hitSlop}
      {...moreProps}>
      <Image
        source={IC_BackButton}
        style={styles.backButton}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};

export default BackButton;
