import {Text, View, Image} from 'react-native';
import React from 'react';
import styles from './styles';
const HistoryItem = props => {
  const {food, id, status, price, ...moreProps} = props;
  return (
    <View {...moreProps}>
      <View style={styles.container}>
        <Image
          source={food}
          style={{position: 'absolute', left: 12.4, top: 12}}
        />
        <Image
          source={food}
          style={{position: 'absolute', left: 24.4, top: 12}}
        />
        <Image
          source={food}
          style={{position: 'absolute', left: 37.4, top: 12}}
        />
        <Text style={styles.itemID}>{id}</Text>
        <Text style={styles.price}>{price}</Text>
        <Text style={styles.status}>{status}</Text>
      </View>
    </View>
  );
};

export default HistoryItem;
