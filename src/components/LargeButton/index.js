import React from 'react';
import {Pressable, Text} from 'react-native';

import {generalStyles, primaryStyles, secondaryStyles} from './styles';

const LargeButton = props => {
  const {type, children, ...otherProps} = props;

  const styles = (() => {
    switch (type) {
      case 'primary':
        return primaryStyles;
      case 'secondary':
        return secondaryStyles;
      default:
        return primaryStyles;
    }
  })();

  return (
    <Pressable {...otherProps}>
      {({pressed}) => (
        <Text
          style={[
            generalStyles.button,
            styles.button,
            pressed && styles.buttonHover,
          ]}>
          {children}
        </Text>
      )}
    </Pressable>
  );
};

export default LargeButton;
