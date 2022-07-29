import {StyleSheet, Dimensions} from 'react-native';
import CUSTOM_COLOR from '../../constants/colors';
import FONT_FAMILY from '../../constants/fonts';

const styles = StyleSheet.create({
  backgroundContainer: {
    backgroundColor: CUSTOM_COLOR.Concrete,
    bottom:'7.25%',
  },
  foodTextContainer: {
    width: 220,
    height: 95,
    marginLeft: 50,
    marginTop: 43,
  },
  foodText: {
    fontFamily: FONT_FAMILY.Bold,
    fontStyle: 'normal',
    fontSize: 34,
    lineHeight: 40.57,
    color: CUSTOM_COLOR.Black,
  },
  navigatorContainer: {
    marginTop: 74,
    marginLeft: 54,
    marginRight: 42,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rectangleContainer: {
    borderRadius: 30,
    marginTop: 28,
    marginHorizontal: 50,
    height: 60,
    backgroundColor: CUSTOM_COLOR.Gallery,
    borderColor: CUSTOM_COLOR.Gallery,
    paddingHorizontal: 35,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchIcon: {
    width: 18,
    height: 18,
    borderCenterWidth: 2,
    borderColor: CUSTOM_COLOR.Black,
    borderStyle: 'solid',
  },
  inputSearchText: {
    width: 200,
    marginLeft: 16,
    paddingTop: 20,
    fontFamily: FONT_FAMILY.Bold,
    fontStyle: 'normal',
    fontSize: 17,
    color: CUSTOM_COLOR.Black,
    lineHeight: 15,
    opacity: 0.5,
  },
  ScrollTab: {
    marginTop: 45,

    height: 60,
  },
  ScrollViewStyle: {
    marginTop: 110,
    height: 320,
  },
  scrollViewBox: {
    alignSelf: 'flex-end',
    width: 220,
    height: 270,
    backgroundColor: CUSTOM_COLOR.White,
    borderRadius: 30,
    shadowColor: CUSTOM_COLOR.MineShaft,
    shadowOffset: {width: 0, height: 30},
    shadowRadius: 60,
    shadowOpacity: 0.1,
    marginHorizontal: 25,
    justifyContent: 'center',
  },
  foodImageContainer: {
    position: 'absolute',
    top: -50,
  },
  foodImageStyle: {
    position: 'absolute',
    marginHorizontal: 24,
    height: 164,
    width: 164,
    zIndex: 5,
    elevation: 5,
    borderRadius: 9999,
    padding: 0,
  },
  foodName: {
    position: 'relative',
    alignSelf: 'center',
    fontFamily: FONT_FAMILY.Bold,
    fontSize: 22,
    lineHeight: 22,
    top: 30,
    width: 130,
    height: 55,
    color: CUSTOM_COLOR.Black,
    opacity: 0.9,
    textAlign: 'center',
  },
  foodPrice: {
    color: CUSTOM_COLOR.Vermilion,
    fontFamily: FONT_FAMILY.Bold,
    fontStyle: 'Bold',
    fontSize: 17,
    alignSelf: 'center',
    top: 50,
  },
  iconSection: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-around',
    top: '92.75%',
    height: '7.25%',
    width: Dimensions.get('window').width,
    marginBottom: 0,
    backgroundColor: CUSTOM_COLOR.Concrete,
    alignItems: 'center',
  },
});

export default styles;