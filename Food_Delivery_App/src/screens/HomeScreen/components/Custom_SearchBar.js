import scale from '../../../constants/responsive';
//import scale from '../../../../responsive';
import {StyleSheet, View, TextInput} from 'react-native';
import React from 'react';
import Custom_IconButton from './Custom_IconButton';
import {ICON_GLASS} from '../../../assets/icons';
import CUSTOM_COLORS from '../../../constants/colors';
import FONT_FAMILY from '../../../constants/font';

class Custom_SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.searchContainer(this.props)}>
        <Custom_IconButton
          style={styles.searchImage}
          icon={ICON_GLASS}
          //onPress={this.props.onPress}
          navigation={this.props.navigation}
          name={this.props.name}
        />
        <TextInput
          style={styles.searchInput}
          placeholder={this.props.placeholderText}
          placeholderTextColor={this.props.placeholderColor}
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
    backgroundColor: CUSTOM_COLORS.Search,
    borderWidth: 1,
    ...props.style,
  }),
  searchInput: {
    top: scale(6),
    left: scale(50),
    width: scale(100),
    height: scale(50),
    placeholder: 'Search',
    fontWeight: '600',
    fontSize: scale(17),
    fontFamily: FONT_FAMILY.SF_Pro_Rounded,
    position: 'absolute',
    placeholderTextColor: CUSTOM_COLORS.Black,
    opacity: scale(0.5),
    color: CUSTOM_COLORS.Black,
  },
  searchImage: {
    width: scale(18),
    height: scale(18),
    top: scale(19),
    left: scale(25),
    position: 'absolute',
  },
});
