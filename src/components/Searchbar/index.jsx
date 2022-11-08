import {Image, Platform, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import imagePath from '../../constants/imagePath';
import colors from '../../constants/colors';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Search Challenges, Brands" style={styles.input} />
      <Image source={imagePath.searchImage} style={styles.search} />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    padding: Platform.OS === 'ios' ? 15 : 7,
    borderRadius: 15,
    width: '90%',
    marginTop: 20,
    justifyContent: 'space-between',
    alignSelf: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.textGray,
    zIndex: 6,
  },
  input: {
    flex: 1,
    color: colors.textBlack,
    padding: 0,
  },
  search: {
    marginRight: Platform.OS === 'android' ? 10 : 0,
  },
});
