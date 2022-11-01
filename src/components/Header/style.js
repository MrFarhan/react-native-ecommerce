import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    height: 70,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    padding:20,
    paddingBottom:0
  },
  drawerHandle: {
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
  },
  title: {
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  search: {marginRight: 6},
  coinGroup: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
