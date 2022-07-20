import {Text, Pressable} from 'react-native';
import {secondary, primary, general} from './styles';
import React from 'react';

const Custom_Button = props => {
  const {type, children, ...moreProps} = props;
  const styles = (() => {
    switch (type) {
      case 'primary':
        return primary;
      case 'secondary':
        return secondary;
      default:
        return primary;
    }
  })();
  return (
    <Pressable {...moreProps}>
      {({pressed}) => (
        <Text
          style={[
            general.button,
            styles.buttonCommentContainer,
            pressed && styles.buttonPress,
          ]}>
          {children}
        </Text>
      )}
    </Pressable>
  );
};

export default Custom_Button;
