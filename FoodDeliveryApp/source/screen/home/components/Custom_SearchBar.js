import scale from '../../../../responsive';
import {StyleSheet, View, TextInput} from 'react-native';
import React from 'react';
import Custom_IconButton from './Custom_IconButton';
import {IC_Glass} from '../../../assets/icons';
import CUSTOM_COLOR from '../../../constants/color';
import FONT_FAMILY from '../../../constants/fonts';

class Custom_SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.searchContainer(this.props)}>
        <Custom_IconButton
          style={styles.searchImage}
          icon={IC_Glass}
          onPress={this.props.onPress}
        />
        <TextInput
          style={styles.searchInput}
          placeholder={this.props.placeholderText}
          placeholderTextColor={this.props.placeholderColor}
          onChangeText={this.props.onChangeText}
        />
      </View>
    );
  }
}

export default Custom_SearchBar;

const styles = StyleSheet.create({
  searchContainer: props => ({
    width: scale(314),
    height: scale(60),
    top: scale(242),
    left: scale(50),
    borderRadius: scale(30),
    backgroundColor: CUSTOM_COLOR.Gallery,
    borderWidth: 1,
    ...props.style,
  }),
  searchInput: {
    position: 'absolute',
    top: scale(10),
    left: scale(50),
    width: scale(250),
    placeholder: 'Search',
    fontSize: scale(17),
    fontFamily: FONT_FAMILY.SF_Pro_Rounded,
    placeholderTextColor: CUSTOM_COLOR.Black,
    color: CUSTOM_COLOR.Black,
    opacity: 0.5,
  },
  searchImage: {
    width: scale(18),
    height: scale(18),
    top: scale(19),
    left: scale(25),
    position: 'absolute',
  },
});
