/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import scale from '../../constants/scales';
import FONT_FAMILY from '../../constants/fonts';
import CUSTOM_COLOR from '../../constants/colors';
import {ICOnBack, ICSearch} from '../../assets/icons';
import SCREEN_NAME from '../../constants/screen';

const Search = props => {
  const {navigation} = props;
  const onBack = () => {
    navigation.goBack();
  };

  const [onChangeText] = React.useState(null);

  return (
    <SafeAreaView style={styles.container}>
      {/* View Top */}
      <>
        <View style={styles.icContainer}>
          <TouchableOpacity activeOpacity={0.7} onPress={onBack}>
            <ICOnBack />
          </TouchableOpacity>
          <>
            <TextInput
              style={styles.titleSearch}
              onChangeText={onChangeText}
              placeholder={'Search'}
            />
          </>
        </View>
      </>

      <View style={styles.boxContainer}>
        <ICSearch />
        <Text style={styles.titleNotFound}>{'Item not found'}</Text>
        <Text style={styles.text}>
          {'Try searching the item with\n      a different keyword.'}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.AthensGray,
  },

  icContainer: {
    flexDirection: 'row',
    marginTop: scale(35),
    marginLeft: scale(50),
    marginRight: scale(55.29),
    alignItems: 'center',
    //backgroundColor: CUSTOM_COLOR.Silver,
  },

  titleSearch: {
    marginLeft: scale(44),
    width: scale(300),
    fontSize: 17,
    fontFamily: FONT_FAMILY.SFProRounded_Semibold,
    color: CUSTOM_COLOR.Black,
    //backgroundColor: CUSTOM_COLOR.Silver,
  },

  boxContainer: {
    marginTop: scale(200),
    marginLeft: scale(90),
    marginRight: scale(90),

    justifyContent: 'center',
    alignItems: 'center',
    // alignSelf: 'center',
    //backgroundColor: CUSTOM_COLOR.Silver,
  },

  titleNotFound: {
    marginTop: scale(53),
    fontSize: 28,
    fontFamily: FONT_FAMILY.Abel_Regular,
    color: CUSTOM_COLOR.Black,
  },

  text: {
    marginTop: scale(14),
    fontSize: 17,
    fontFamily: FONT_FAMILY.Abel_Regular,
    color: CUSTOM_COLOR.Black,
    alignSelf: 'center',
  },
});
