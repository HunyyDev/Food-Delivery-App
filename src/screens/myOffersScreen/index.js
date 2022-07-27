import {Text, ScrollView, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {IC_BackButton} from '../../assets/icons';
const MyOffersScreen = props => {
  return (
    <ScrollView style={styles.container}>
      <Image
        source={IC_BackButton}
        style={styles.backButton}
        resizeMode="contain"
      />
      <Text style={styles.header}>My offers</Text>
      <Text style={styles.note}>ohh snap! No offers yet</Text>
      <Text style={styles.detailsText}>
        {"Bella doesn't have any offer \nyet please check again."}
      </Text>
    </ScrollView>
  );
};

export default MyOffersScreen;
