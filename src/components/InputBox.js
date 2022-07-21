import React from "react";
import { useState } from "react";
import { TextInput } from "react-native";

const InputBox = () => {
    const [input, setInput] = useState('');
    return (
      <TextInput
        style = {{width: 250,
                  height: 40, 
                  marginLeft: 16,
                  overflow: 'hidden',}}

        placeholder = 'Searching...'
        onChangeText = {(text) => setInput(text)}
        value = {input}
      />
    );
  };
  
  export default InputBox;