import { Text, StyleSheet, View } from 'react-native'

import color from '../../assets/constants/colors.js'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.SILVER, 
  },
  header: {
    marginTop: '10%',
  },
  title: {
    marginTop: '10%',
  },
  search: {
    marginTop: '10%',
  },
  slider: {
    marginTop: '10%',
  },
  footer: {
    position: 'absolute', 
    bottom: 10,
    width: '100%',
  }

})

export default styles