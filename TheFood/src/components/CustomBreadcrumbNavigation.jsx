import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {scaleX, scaleY, normalize} from '../helperFunction';
import {ICOnBack} from '../assets/icons';
import CUSTOM_COLOR from '../assets/constants/colors';

const CustomBreadcrumbNavigation = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.breadcrumb} onPress={props.onBack}>
        <View>
          <ICOnBack />
        </View>
        <View>
          <Text style={styles.breadcrumb.textBreadcrumb}>{props.title}</Text>
        </View>
        <View></View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  breadcrumb: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-around',
    textBreadcrumb: {
      color: CUSTOM_COLOR.BLACK,
    },
  },
});

export default CustomBreadcrumbNavigation;
