import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import scale from '../../responsive';
import CUSTOM_COLOR from '../constants/color';

class CUSTOM_SwitchButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <CUSTOM_Button
          text={'Login'}
          topLine={scale(50)}
          leftLine={scale(50)}
          activeTab={this.props.activeTab}
          setActiveTab={this.props.setActiveTab}
          style={styles.buttonLogin}
        />
        <CUSTOM_Button
          text={'Sign-Up'}
          topLine={scale(50)}
          leftLine={scale(232)}
          activeTab={this.props.activeTab}
          setActiveTab={this.props.setActiveTab}
          style={styles.buttonSignUp}
        />
      </View>
    );
  }
}

export default CUSTOM_SwitchButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    top: scale(330),
    position: 'absolute',
    width: scale(414),
  },
  buttonLogin: {
    left: scale(89),
    position: 'absolute',
  },
  buttonSignUp: {
    left: scale(263),
    position: 'absolute',
  },
  text: props => ({
    color: 'black',
    fontSize: 18,
    fontWeight: '600',
    ...props.style,
  }),
  line: props => ({
    position: 'absolute',
    width: scale(134),
    height: scale(3),
    left: props.leftLine,
    backgroundColor:
      props.activeTab === props.text
        ? CUSTOM_COLOR.SunsetOrange
        : CUSTOM_COLOR.White,
    top: props.topLine,
  }),
});

class CUSTOM_Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <TouchableOpacity
        onPress={() => this.props.setActiveTab(this.props.text)}>
        <Text style={styles.text(this.props)}>{this.props.text}</Text>

        <View style={styles.line(this.props)} />
      </TouchableOpacity>
    );
  }
}
