import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  SafeAreaView,
  Image,
  TouchableOpacity
} from 'react-native'
import React, { useEffect, useState } from 'react'
import dataDish from '../../data/dish'
import { ICON_search, ICON_back } from '../../assets/icons/icons';
import { IMG_search } from '../../assets/images/images';
import scale from '../../constants/responsive';
import COLOR from '../../constants/colors';
import font_family from '../../constants/fonts';
import CustomDish from '../../components/CustomDish';
import BackButton from '../../components/BackButton';

const SearchScreen = props => {
  var dataFetch = dataDish;
  const [filterData, setfilterData] = useState([]);
  const [masterData, setmasterData] = useState(dataFetch);
  const [search, setSearch] = useState('');
  const { route } = props;
  const { navigation } = route.params;

  const itemView = ({ item, index }) => {
    return (
      <CustomDish
        type='search'
        key={index}
        index={index}
        source={item.source}
        name={item.name}
        cost={item.cost}
        navigation={navigation} />
    )
  }

  const searchFilter = (text) => {
    if (text) {
      const newData = masterData.filter((item) => {
        const itemData = item.name ? item.name.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setfilterData(newData);
      setSearch(text);
    } else {
      setfilterData(masterData);
      setSearch(text);
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <BackButton navigation={props.navigation}/>
        <View style={styles.Search}>
          <Image style={styles.SearchLogo} source={ICON_search}></Image>
          <TextInput
            style={styles.SearchText}
            placeholder={'Search'}
            value={search}
            onChangeText={(text) => searchFilter(text)}
            autoFocus={true} />
        </View>
      </View>

      <View style={styles.contentContainer}>
        {search.length > 0 && filterData.length > 0 ? <>
          <Text style={styles.result}>Found {filterData.length} result{filterData.length > 1 ? 's' : null}</Text>
          <FlatList
            data={filterData}
            style={styles.list}
            keyExtractor={(item, index) => index}
            renderItem={itemView}
            numColumns={2}
            showsVerticalScrollIndicator={false} />
        </> : <>
          <Image source={IMG_search} style={styles.notFoundImage} />
          <Text style={styles.notFoundText}>Item not found</Text>
          <Text style={styles.notFoundText2}>{'Try searching the item with\na different keyword.'}</Text>

        </>}
      </View>
    </SafeAreaView>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.concrete
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: scale.scaleWidth(26),
  },
  Search: {
    borderRadius: scale.scaleWidth(30),
    width: scale.scaleWidth(314),
    height: scale.scaleWidth(60),
    backgroundColor: COLOR.gallery,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  SearchLogo: {
    marginLeft: scale.scaleWidth(35),
  },
  SearchText: {
    marginLeft: scale.scaleWidth(16),
    fontSize: 17,
    fontFamily: font_family.sfProRounded.regular,
    color: COLOR.black,
  },
  list: {
    paddingHorizontal: 13,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: COLOR.white,
    marginTop: scale.scaleHeight(35),
    borderTopStartRadius: scale.scaleWidth(30),
    borderTopEndRadius: scale.scaleWidth(30),
    paddingTop: scale.scaleHeight(35),
  },
  result: {
    fontFamily: font_family.SFProText.regular,
    fontSize: scale.scaleWidth(28),
    alignSelf: 'center',
    color: COLOR.black,
    marginBottom: scale.scaleHeight(42),
  },
  notFoundImage: {
    alignSelf: 'center',
    marginTop: scale.scaleHeight(120),
  },
  notFoundText: {
    fontFamily: font_family.SFProText.regular,
    fontSize: scale.scaleWidth(28),
    color: COLOR.black,
    alignSelf: 'center',
    marginTop: scale.scaleHeight(38)
  },
  notFoundText2: {
    fontFamily: font_family.SFProText.regular,
    fontSize: scale.scaleWidth(17),
    color: COLOR.black,
    alignSelf: 'center',
    marginTop: scale.scaleHeight(14),
    opacity: 0.7,
    textAlign: 'center',
  }
})