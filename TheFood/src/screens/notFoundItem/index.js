import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import CUSTOM_COLOR from '../../assets/constants/colors';
import SCREEN_NAME from '../../assets/constants/screens';
import {scaleX, scaleY, normalize} from '../../helperFunction';
import {ICNoSearch, ICOnBack} from '../../assets/icons';

const NoFoundItemScreen = props => {
  const {navigation} = props;

  const onBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.breadcrumb} onPress={onBack}>
        <ICOnBack />
        <Text style={styles.breadcrumb.textBreadcrumb}>Go back</Text>
      </TouchableOpacity>
      <View style={styles.icnosearch}>
        <ICNoSearch />
      </View>
      <View style={styles.text}>
        <Text style={styles.text.error}>Item not found</Text>
        <Text style={styles.text.solve}>
          Try searching the item with a different keyword.
        </Text>
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
  icnosearch: {
    position: 'absolute',
    alignSelf: 'center',
    top: scaleY(300),
  },
  text: {
    alignSelf: 'center',
    alignItems: 'center',
    width: scaleX(200),
    marginTop: scaleY(120),
    fontFamily: 'FontsFree-Net-Abel-Regular',
    error: {
      color: CUSTOM_COLOR.BLACK,
      fontSize: normalize(28),
      textAlign: 'center',
    },
    solve: {
      textAlign: 'center',
      color: CUSTOM_COLOR.SILVER,
      fontSize: normalize(17),
      marginTop: scaleY(14),
    },
  },
  breadcrumb: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: scaleY(70),
    left: scaleX(50),
    textBreadcrumb: {
      color: CUSTOM_COLOR.BLACK,
      fontSize: normalize(17),
      marginLeft: scaleX(40),
    },
  },
});

export default NoFoundItemScreen;
