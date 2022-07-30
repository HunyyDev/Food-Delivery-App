import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  View,
  Image,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import CUSTOM_COLOR from '../../constants/color';
import scale from '../../../responsive';
import {IMG_LOADING, IMG_LOGO2} from '../../assets/images';

const LoadingScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={IMG_LOADING}
        resizeMode={'cover'}
        style={styles.backGround}>
        <View style={styles.circle}>
          <Image
            source={IMG_LOGO2}
            resizeMode={'contain'}
            style={styles.logo}
          />
          <Text style={styles.title}> {'Food for everyone'}</Text>
          <View style={styles.ellipse}>
            <ActivityIndicator
              size="large"
              color={CUSTOM_COLOR.SunsetOrange}
              style={styles.vector}
            />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.SunsetOrange,
  },
  circle: {
    width: scale(262),
    height: scale(262),
    borderRadius: scale(262 / 2),
    backgroundColor: CUSTOM_COLOR.White,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  backGround: {
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  title: {
    color: CUSTOM_COLOR.SunsetOrange,
    fontSize: scale(10),
    alignSelf: 'center',
    top: scale(160),
    position: 'absolute',
  },
  ellipse: {
    backgroundColor: 'transparent',
    width: scale(27),
    height: scale(27),
    borderRadius: scale(27) / 2,
    borderWidth: scale(1.5),
    borderColor: CUSTOM_COLOR.SunsetOrange,
    position: 'absolute',
    bottom: scale(40),
    alignSelf: 'center',
    justifyContent: 'center',
    flex: 2,
  },
  vector: {
    width: scale(27),
    height: scale(27),
    borderWidth: scale(5),
    borderColor: CUSTOM_COLOR.White,
    alignSelf: 'center',
  },
});
