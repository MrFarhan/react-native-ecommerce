import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primaryBlue,
    padding: 10,
    color: 'white',
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    textAlign: 'center',
  },
  leftIcon: {
    marginRight: 15,
  },
});
