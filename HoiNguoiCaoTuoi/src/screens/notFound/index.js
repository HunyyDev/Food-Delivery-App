import React from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
} from 'react-native';
import {IMG_Feather_search} from '../../assets/images';
import {scaleWidth} from '../../constants/responsive';
import FONT_FAMILY from '../../constants/fonts';
import CUSTOM_COLOR from '../../constants/colors';
import {IMG_chevron_left} from '../../assets/icons';

const notFound = ({navigation}) => {
  //  constructor(props)
  //   {
  //     super(props);
  //     this.state = {};
  //   }
  //   render() {
  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <></>
      {/* back button */}
      <TouchableOpacity
        style={styles.backContainer}
        hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
        onPress={() => {
          console.log(this.props);
          this.props.navigation.goBack();
        }}>
        <Image source={IMG_chevron_left} />
      </TouchableOpacity>
      <></>
      {/* searchbar */}

      <></>
      {/* Logo */}
      <Image
        source={IMG_Feather_search}
        style={{alignSelf: 'center', marginTop: scaleWidth(200)}}
      />
      <Text
        style={{
          fontFamily: FONT_FAMILY.Bold,
          fontSize: scaleWidth(40),
          alignSelf: 'center',
          color: CUSTOM_COLOR.Black,
        }}>
        {'Item not found'}
      </Text>
      <Text
        style={{
          fontFamily: FONT_FAMILY.Regular,
          fontSize: scaleWidth(20),
          alignSelf: 'center',
          width: scaleWidth(240),
          textAlign: 'center',
        }}>
        {'Try searching the item with a different keyword.'}
      </Text>
    </SafeAreaView>
  );
  //   }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.WhiteSmoke,
  },
  backContainer: {
    width: scaleWidth(6),
    height: scaleWidth(12),
    top: scaleWidth(66),
    left: scaleWidth(50),
  },
  title: {
    fontFamily: FONT_FAMILY.Bold,
    fontSize: scaleWidth(25),
    alignSelf: 'center',
    top: scaleWidth(40),
    color: CUSTOM_COLOR.Black,
  },

  inputSection: {
    flex: 6,
    margin: 30,
    height: 30,
  },
});

export default notFound;
