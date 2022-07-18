import React, {Component, useState} from 'react';
import {Text, StyleSheet, View, SafeAreaView, TextInput} from 'react-native';

function CustomInput(props) {
  console.log('props', props);

  const [value, setValue] = useState(props.label);

  return (
    <>
      <Text>{props.label}</Text>
      <TextInput
        style={styles.inputContainer}
        onChangeText={text => {
          props.onInputChange(text);
          setValue(text);
        }}
        value={value}
      />
    </>
  );
}

class OnBoardingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {name: 'Custom Input'};
  }

  changeNameHandle = newValue => {
    this.setState({
      name: newValue,
    });
  };

  render() {
    // return JSX
    console.log('this.state', this.state);

    return (
      <SafeAreaView
        style={styles.container}
        onPressHandle={() => {
          this.getData();
        }}>
        {/* Label */}
        <CustomInput
          label={this.state.name}
          onInputChange={this.changeNameHandle}
        />

        {/* Password */}
        <Text>{this.state.name}</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    backgroundColor: 'orange',
    height: 40,
  },
});

export default OnBoardingScreen;