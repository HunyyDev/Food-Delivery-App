import {Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import CustomButton from '../../components/CustomButton';
import {IC_History} from './icons';
import BackButton from '../../components/BackButton';
import styles from './styles';
import HistoryItem from './components/HistoryItem';
import {IMG_VeggieTomato} from '../cart/images';
const HistoryScreen = props => {
  const {navigation} = props;
  const onBack = () => {
    navigation.goBack();
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <BackButton style={styles.backButton} onPress={onBack} />
        <View style={styles.historyTextContainer}>
          <Text style={styles.historyText}>History</Text>
        </View>
      </View>
      <HistoryItem
        style={styles.historyItem}
        id="#Or762537"
        food={IMG_VeggieTomato}
        price="$1,900"
        status="Processing"
      />
      <HistoryItem
        style={styles.historyItem}
        id="#00000000"
        food={IMG_VeggieTomato}
        price="$1,900"
        status="Processing"
      />
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
