import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import COLORS from '../../constants/colors';
import FONT_FAMILY from '../../constants/fonts';

const Menu = props => {
  const {onPress, isChosen, children} = props;
  //   const [present, setPresent] = useState(false);
  //   const onPressFuntion = () => {
  //     if (present === false) setPresent(true);
  //   };

  return (
    <Pressable onPress={onPress}>
      {isChosen === true ? (
        <View>
          <Text style={[general.textMenu, chosen.textMenu]}>{children}</Text>
        </View>
      ) : (
        <Text style={[general.textMenu, notChosen.textMenu]}>{children}</Text>
      )}
    </Pressable>
  );
};
const general = StyleSheet.create({
  textMenu: {
    marginRight: 41,
    fontFamily: FONT_FAMILY.SF_PRO_ROUNDED_REGULAR,
    color: COLORS.MANATEE,
  },
});
const chosen = StyleSheet.create({
  textMenu: {
    color: COLORS.VERMILION,
    borderBottomWidth: 3,
    borderBottomColor: COLORS.VERMILION,
    paddingHorizontal: 10,
  },
});
const notChosen = StyleSheet.create({
  textMenu: {
    color: COLORS.MANATEE,
  },
});

export default Menu;
