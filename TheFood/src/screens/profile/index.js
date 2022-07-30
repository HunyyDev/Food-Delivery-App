import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import CUSTOM_COLOR from '../../assets/constants/colors';
import SCREEN_NAME from '../../assets/constants/screens';
import {scaleX, scaleY, normalize} from '../../helperFunction';
import {ICOnBack} from '../../assets/icons';

const ProfileScreen = props => {
  const {navigation} = props;

  const onBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.breadcrumb} onPress={onBack}>
        <ICOnBack />
        <Text style={styles.breadcrumb.textBreadcrumb}>My profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    position: 'relative',
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

export default ProfileScreen;
