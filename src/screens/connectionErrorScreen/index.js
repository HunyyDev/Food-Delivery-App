import {Text, ScrollView, Image} from 'react-native';
import React from 'react';
import CustomButton from '../../components/CustomButton';
import {IC_NoConnection} from './icons';
import styles from './styles';
const ConnectionErrorScreen = props => {
  return (
    <ScrollView style={styles.container}>
      <Image source={IC_NoConnection} style={styles.noConnection} />
      <Text style={styles.note}>No internet Connection</Text>
      <Text style={styles.detailsText}>
        Your internet connection is currently not available please check or try
        again.
      </Text>
      <CustomButton type="secondary" style={styles.tryAgainButton}>
        Try again
      </CustomButton>
    </ScrollView>
  );
};

export default ConnectionErrorScreen;
