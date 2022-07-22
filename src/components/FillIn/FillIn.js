import React from 'react';
import {Text, View, TextInput} from 'react-native';
import {general, emailInput, passInput} from './FillInStyles';
const FillIn = props => {
  const {type, children} = props;
  let styles;
  let bool;
  switch (type) {
    case 'email':
      styles = emailInput;
      bool = false;
      break;
    case 'pass':
      styles = passInput;
      bool = true;
      break;
    default:
      styles = passInput;
      break;
  }
  return (
    <View>
      <Text style={[general.title, styles.margin]}>{children}</Text>
      <TextInput secureTextEntry={bool} style={general.input}></TextInput>
      <View style={general.line}></View>
    </View>
  );
};

export default FillIn;
