import {Dimensions, StyleSheet} from 'react-native';
import colors from '../constants/colors';
const {height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    height: '100%',
    flex: 1,
  },
  logoGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 20,
    alignItems: 'center',
  },
  tagLine: {
    fontFamily: 'HelveticaNeue',
    paddingHorizontal: 15,
    color: colors.primaryBlack,
    paddingBottom: 10,
    paddingTop: 0,
    fontSize: 12,
  },
  profileGroup: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: colors.primaryGray,
  },
  profileImageContainer: {
    paddingRight: 9,
  },
  username: {
    fontFamily: 'SourceSansPro-SemiBold',
    fontSize: 14,
    color: colors.primaryBlack,
  },
  bottomGroup: {
    paddingBottom: 50,
    // position:"absolute",
    // bottom:0
  },
  termsGroup: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  linkText: {
    color: colors.primaryBlue,
  },
});
