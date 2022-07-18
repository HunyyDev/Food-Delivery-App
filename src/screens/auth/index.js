import {Text, View} from 'react-native';
import React, {Component} from 'react';
import {
  scaleHeight,
  scaleWidth,
} from 'D:/ReactNative/food-delivery-app/src/constants/responsive';
export class LoginScreen extends Component {
  render() {
    return (
      <View>
        <Text>{scaleHeight(30)}</Text>
      </View>
    );
  }
}

export default LoginScreen;
