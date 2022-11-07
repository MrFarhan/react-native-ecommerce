import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '../../../constants/colors';

export const badgeColors = {
  Earned: colors.primaryGreen,
  Burned: colors.primaryBlue,
};
const Badge = ({title, containerStyle}) => {
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: badgeColors[title] || colors.primaryBlue},
        containerStyle,
      ]}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    alignItems: 'center',
    maxWidth: 70,
  },
  text: {
    color: 'white',
    fontSize: 12,
    padding: 5,
    fontFamily: 'SFUIDisplay-Bold',
  },
});

export default Badge;
