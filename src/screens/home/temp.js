import { View, Text, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { DrawnerContext } from '../../components/CustomDrawer';


const HomeScreen = props => {
  const {setStatus} = useContext(DrawnerContext);
  const open = () => {
    setStatus(true);
  }
  return (
    <View style={{flex:1, backgroundColor: 'green'}}>
      <Text> HomeScreen </Text>
      <TouchableOpacity
      onPress={()=>open()}>
        <Text style={{fontSize: 30, color: 'white'}}> ahi</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen