import React, {Component} from 'react';
import {TouchableOpacity, View} from 'react-native';

export class UnderlineButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onPress() {
    this.props.onPress();
  }
  render() {
    return (
      <View style={{height: '100%'}}>
        <TouchableOpacity
          onPress={() => this.onPress()}
          style={this.props.style}>
          {this.props.children}
        </TouchableOpacity>
        {/* Line */}
        <View
          style={[this.props.underlineStyle, {bottom: 0, position: 'absolute'}]}
        />
      </View>
    );
  }
}
