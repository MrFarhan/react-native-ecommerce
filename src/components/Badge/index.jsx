import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '../../../constants/colors';

const Badge = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default Badge;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primaryBlue,
    borderRadius: 5,
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 12,
    padding: 5,
    fontFamily: 'SFUIDisplay-Bold',
  },
});
