import {
  ActivityIndicator,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Condition,
} from 'react-native';
import React, {Component} from 'react';
import {Image_LoadingBackground} from '../../assets/images';
import scale from '../../assets/constants/reponsive';
import CUSTOM_COLOR from '../../assets/constants/colors';

export class LoadingScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground
          style={styles.imageBackgroundContainer}
          source={Image_LoadingBackground}>
          <ActivityIndicator
            size="large"
            color={CUSTOM_COLOR.Scarlet}
            style={styles.loadingContainer}
          />
        </ImageBackground>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackgroundContainer: {
    width: '100%',
    height: '100%',
  },
  loadingContainer: {
    top: scale(500),
    padding: 10,
    alignSelf: 'center',
  },
});

export default LoadingScreen;
