import {StyleSheet, Text, View, ImageBackground, Image} from 'react-native';
import React from 'react';
import CUSTOM_COLOR from '../../assets/constants/colors';
import SCREEN_NAME from '../../assets/constants/screens';
import {scaleX, scaleY, normalize} from '../../helperFunction';

const LoaderScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/loader-background.jpg')}
        resizeMode="cover"
        style={styles.backgroundImage}
      />
      <View style={styles.mainImageContainer}>
        <Image
          source={require('../../assets/images/LoaderBellaOlonjelogo111.png')}
          style={styles.mainImage}
        />
        <Text style={styles.mainText}>Food for everyone</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    position: 'relative',
  },
  backgroundImage: {
    flex: 1,
  },
  mainImageContainer: {
    position: 'absolute',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: CUSTOM_COLOR.WHITE,
    width: normalize(245),
    borderRadius: 200,
    height: '30%',
    top: scaleY(230),
  },
  mainImage: {
    position: 'absolute',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  mainText: {
    color: CUSTOM_COLOR.VERMILION,
    fontSize: 10,
    textAlign: 'center',
    marginTop: scaleY(90),
    fontFamily: 'Abel-Regular',
  },
});

export default LoaderScreen;
