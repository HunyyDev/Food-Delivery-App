import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React, {useMemo, useState} from 'react'
import scale from '../../responsive';
import FONT_FAMILY from '../constants/fonts';
import CUSTOM_COLOR from '../constants/color';
import UnderlineButton from './UnderlineButton';

const CUSTOM_CategoryScrollView = () => {
    const categoryList = useMemo(
           () => ['Foods', 'Drinks', 'Snacks', 'Sauce'],
            [],
        );
    const [tab, setTab] = useState(categoryList[0]);
    return (
        <ScrollView style={styles.scrollViewContainer} >
            <View style={styles.categoryView}>
                {categoryList.map(item => (
                    <View style={styles.categoryItem} key={item}>
                        <UnderlineButton 
                            isChoosing={tab === item}
                            onPress={() => setTab(item)}
                            textStyle={styles.categoryText(tab === item)}>
                            {item}
                        </UnderlineButton>
                    </View>
                ))}
            </View>
        </ScrollView>
  )
}

export default CUSTOM_CategoryScrollView

const styles = StyleSheet.create({
    scrollViewContainer: {
        position: 'absolute',
        top: scale(310),
        left: scale(80),
        horizontal: true,
        width: scale(414),
    },
    categoryView: {
        flexDirection: 'row',
    },
    categoryItem: {
        padding: scale(10),
        fontSize: scale(17),
    },
    categoryText: 
        isChoosing => ({
            color: isChoosing ? CUSTOM_COLOR.SunsetOrange : CUSTOM_COLOR.Manatee,
            fontSize: scale(17),
            
        }),
});