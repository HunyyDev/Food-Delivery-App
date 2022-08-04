import {TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {ICON_back} from '../assets/icons/icons';

const BackButton = props => {
  return (
    <TouchableOpacity
      style={props.style}
      onPress={() => props.navigation.goBack()}>
      <Image source={ICON_back} />
    </TouchableOpacity>
  );
};

export default BackButton;
