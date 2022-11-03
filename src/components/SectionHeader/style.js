import {StyleSheet} from 'react-native';
import colors from '../../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // paddingHorizontal: 10,
    paddingVertical:10
  },
  Heading: {
    fontFamily: 'SFUIDisplay-Bold',
    fontSize: 16,
    margin:0,
    padding:0,
    color: colors.primaryBlack,

  },
  seeAll: {
    fontFamily: 'SFUIDisplay-Regular',
    fontSize: 14,
    color: colors.primaryBlue,
  },
});
