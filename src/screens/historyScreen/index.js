import {Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import {IC_BackButton} from '../../assets/icons';
import CustomButton from '../../components/CustomButton';
import {IC_History} from './icons';
import styles from './styles';

const HistoryScreen = props => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Image
          source={IC_BackButton}
          style={styles.backButton}
          resizeMode="contain"
        />
        <View style={styles.historyTextContainer}>
          <Text style={styles.historyText}>History</Text>
        </View>
      </View>
      <Image source={IC_History} style={styles.history} resizeMode="contain" />
      <View style={styles.defaultOrderContainer}>
        <Text style={styles.defaultOrder}>No history yet</Text>
      </View>
      <View style={styles.detailsTextContainer}>
        <Text style={styles.detailsText}>
          Hit the orange button down below to Create an order
        </Text>
      </View>
      <CustomButton style={styles.orderButtonContainer} type="secondary">
        Start ordering
      </CustomButton>
    </ScrollView>
  );
};

export default HistoryScreen;
