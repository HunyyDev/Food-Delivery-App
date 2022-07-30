import scale from '../../../../responsive';
import {StyleSheet, View, TextInput} from 'react-native';
import React from 'react';
import CUSTOM_COLOR from '../../../constants/color';

class Custom_InputText extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.searchContainer(this.props)}>
        <TextInput
          style={styles.searchInput}
          placeholder={this.props.placeholderText}
          placeholderTextColor={this.props.placeholderColor}
          >abcd
          </TextInput>
      </View>
    );
  }
}

export default Custom_InputText;

const styles = StyleSheet.create({
  searchContainer: props => ({
    width: scale(314),
    height: scale(60),
    top: scale(101),
    left: scale(72),
    borderRadius: scale(30),
    backgroundColor: CUSTOM_COLOR.Search,
    ...props.style,
  }),
  searchInput: {
    width: scale(132),
    height: scale(50),
    placeholder: 'Search',
    fontWeight: '600',
    fontSize: scale(17),
    lineHeight: scale(20),
    position: 'absolute',
    placeholderTextColor: CUSTOM_COLOR.Black,
    color: CUSTOM_COLOR.Black,
  },
});
