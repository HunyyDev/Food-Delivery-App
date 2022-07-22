import React from 'react';

import {Text, View, Pressable} from 'react-native';
import {
  Long_Orange_Button,
  Long_White_Button,
  general,
} from './LongButtonStyle';

const LongButton = props => {
  const type = props.type;
  const children = props.children;
  const onPress = props.onPress;

  let styles;
  switch (type) {
    case 'Long_White_Button':
      styles = Long_White_Button;
      break;
    case 'Long_Orange_Button':
      styles = Long_Orange_Button;
      break;
    default:
      styles = Long_White_Button;
      break;
  }

  return (
    <Pressable onPress={onPress}>
      <View style={[general.TextFrame, styles.TextFrame]}>
        <Text style={[general.Text2, styles.Text2]}>{children}</Text>
      </View>
    </Pressable>
  );
};

export default LongButton;
