import {
  StyleSheet,
  Image,
  Text,
  View,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import {IMG_Food, IMG_Food2} from '../../assets/images';
import React, {useState} from 'react';
import scale from '../../assets/constants/responsive';
import {ScrollView} from 'react-native-gesture-handler';
import CUSTOM_COLOR from '../../assets/constants/colors';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const data = [IMG_Food, IMG_Food2];

const ProductDetail = () => {
  const [dotActive, setDotActive] = useState(0);
  const onchange = nativeEvent => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
      );
      if (slide !== dotActive) {
        setDotActive(slide);
      }
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrap}>
        <ScrollView
          onScroll={({nativeEvent}) => onchange(nativeEvent)}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal>
          {data.map((e, index) => (
            <View style={styles.wrap}>
              <Image
                key={index}
                resizeMode="stretch"
                style={styles.food}
                source={e}
              />
            </View>
          ))}
        </ScrollView>
        <View style={styles.wrapDot}>
          {data.map((e, index) => (
            <Text
              key={index}
              style={{
                color:
                  dotActive === index
                    ? CUSTOM_COLOR.SunsetOrange
                    : 'tranperant',
                padding: scale(1),
              }}>
              ●
            </Text>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrap: {
    width: WIDTH,
    height: HEIGHT * 0.35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  food: {
    borderRadius: scale(102),
  },
  wrapDot: {
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 0,
    position: 'absolute',
    flexDirection: 'row',
  },
});
