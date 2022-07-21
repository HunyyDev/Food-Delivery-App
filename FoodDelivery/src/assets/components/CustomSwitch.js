import React, {Component} from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
export class CustomSwitch extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.buttonContainer}>
        <ScrollView
          contentContainerStyle={{
            justifyContent: this.props.justifyContent,
            flexGrow: this.props.flexGrow,
            flexDirection: this.props.flexDirection,
          }}
          style={{
            flexGrow: this.props.flexGrow,
            width: '100%',
            height: '100%',
            flexDirection: this.props.flexDirection,
          }}>
          {this.props.children}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    height: 100,
    position: 'absolute',
    bottom: 0,
  },
});
