import React from 'react';
import {Text, Image, TouchableOpacity, View} from 'react-native';

import {ICON_CHEVRON} from '../assets/icons';

const BackButton = props => {
  const {navigation, style} = props;

  return (
    <TouchableOpacity style={style} onPress={() => navigation?.goBack()}>
      <Image source={ICON_CHEVRON} />
    </TouchableOpacity>
  );
};

export default BackButton;
