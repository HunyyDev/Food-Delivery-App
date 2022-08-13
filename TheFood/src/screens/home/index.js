import {Text, StyleSheet, View} from 'react-native';
import React, {Component} from 'react';

import Header from './header';
import Title from './title';
import Search from './search';
import Slider from './slider';
import Footer from './footer';
import styles from './styles';

const HomeScreen = props => {
  const {navigation} = props;

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Header onNavigation={navigation} />
      </View>

      {/* Title Section */}
      <View style={styles.title}>
        <Title />
      </View>

      {/* Seach Section */}
      <View style={styles.search}>
        <Search onNavigation={navigation} />
      </View>

      {/* Slider Section */}
      <View style={styles.slider}>
        <Slider onNavigation={navigation} />
      </View>

      {/* Footer Section */}
      <View style={styles.footer}>
        <Footer onNavigation={navigation} />
      </View>
    </View>
  );
};

export default HomeScreen;
