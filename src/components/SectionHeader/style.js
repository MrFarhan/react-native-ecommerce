import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 30,
    paddingBottom: 10,
    paddingHorizontal: 8,
  },
  Heading: {
    fontFamily: 'SFUIDisplay-Bold',
    fontSize: 16,
    margin: 0,
    padding: 0,
    color: '#000000',
  },
  seeAll: {
    fontFamily: 'SFUIDisplay-Regular',
    fontSize: 14,
    color: colors.primaryBlue,
  },
});
