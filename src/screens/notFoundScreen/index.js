import {Text, Image, SafeAreaView} from 'react-native';
import React from 'react';
import {IC_BigSearch} from './icons';
import {IC_BackButton} from '../../assets/icons';
import {styles} from './styles';
const NotFoundScreen = props => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={IC_BackButton}
        style={styles.backButton}
        resizeMode="contain"
      />
      <Text style={styles.foodName}>Spicy Chickens</Text>
      <Image
        source={IC_BigSearch}
        style={styles.bigSearch}
        resizeMode="contain"
      />
      <Text style={styles.note}>Item not found</Text>
      <Text style={styles.detailsText}>
        {'Try searching the item with \na different keyword.'}
      </Text>
    </SafeAreaView>
  );
};

export default NotFoundScreen;
