import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import scale from '../../responsive';

class CUSTOM_ButtonOne extends React.Component {
  constructor(props) {
      super(props);
      this.state = {};
    }
  navigate = location => {
    this.props.navigation.navigate(location);
  };
  render(){
    return (
      <TouchableOpacity
        style={[styles.touchableContainer(this.props)]}
        onPress={this.props.onPress}
      >
        <Text
          style={{
            color: this.props.textColor,
          }}>
          {this.props.text}
        </Text>
      </TouchableOpacity>
    );
  }
};

export default CUSTOM_ButtonOne;

const styles = StyleSheet.create({
  touchableContainer: props => (
  {
    top: scale(730),
    height: scale(65),
    position: 'absolute',
    width: scale(270),
    borderRadius: scale(30),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: props.color,
    ...props.style,
  }),
});