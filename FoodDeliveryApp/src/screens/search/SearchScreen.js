import {StyleSheet, Text, View, FlatList, TextInput} from 'react-native';
import React, {useState} from 'react';

const data = [
  {id: 1, name: 'Veggie tomato mix'},
  {id: 2, name: 'Egg and cucmber...'},
  {id: 3, name: 'Fried chicken m.'},
  {id: 4, name: 'Moi-moi and ekpa.'},
];

const SearchScreen = () => {
  const [dataFromState, setData] = useState(data);

  const item = ({item}) => {
    return (
      <View style={{backgroundColor: 'green'}}>
        <Text style={{fontSize: 20}}>{item.name}</Text>
      </View>
    );
  };

  const searchName = input => {
    let data = dataFromState;
    let searchData = data.filter(item => {
      return item.name.toLowerCase().includes(input.toLowerCase());
    });
    setData(searchData);
  };

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          style={{fontSize: 30}}
          placeholder="Search..."
          onChangeText={input => {
            searchName(input);
          }}
        />
      </View>
      <FlatList
        data={dataFromState}
        renderItem={item}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
