import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

import {ICCart, ICMenu, ICTyre} from '../../../assets/icons'
import styles from './styles'

export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity>
            <ICMenu style={styles.icmenu}/>
        </TouchableOpacity>
        <TouchableOpacity>
            <View style={styles.iccarttyre}>
                <ICCart/>
                <View style={styles.ictyre}>
                    <ICTyre/>
                    <ICTyre/>
                </View>
            </View>
        </TouchableOpacity>
      </View>
    )
  }
}



