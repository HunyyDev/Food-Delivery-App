// import {View, Text, TextInput, StyleSheet} from 'react-native';
// import React, {useState} from 'react';
// import scale from '../scale';

// const CustomInput = props => {
//   const [value, setValue] = useState();

//   const onChangeText = text => {
//     setValue(text);
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.containerText}>{props.label}</Text>
//       {props.secureTextEntry === true ? (
//         <TextInput
//           style={styles.containerTextInput}
//           secureTextEntry
//           onChangeText={text => onChangeText(text)}
//         />
//       ) : (
//         <TextInput
//           style={styles.containerTextInput}
//           onChangeText={text => onChangeText(text)}
//         />
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   containerText: {
//     color: '#000',
//     opacity: 0.4,
//     fontSize: scale(15),
//   },
//   containerTextInput: {
//     color: '#000',
//     height: scale(40),
//     width: scale(314),
//     fontSize: scale(15),
//     lineHeight: scale(20),
//     borderBottomWidth: 1,
//     borderBottomColor: '#000',
//   },
//   container: {
//     // marginVertical: 25,
//     marginBottom: scale(24),
//     alignSelf: 'center',
//   },
// });y

// export default CustomInput;
