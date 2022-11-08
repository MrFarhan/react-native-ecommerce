import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import imagePath from 'constants/imagePath';
import colors from 'constants/colors';

const Coin = props => {
  const {coinCount, shoeCount, coinStyle, coinContainerStyle} = props;
  return (
    <View style={[styles.container, coinContainerStyle]}>
      <Image
        source={coinCount ? imagePath.coinImage : imagePath.shoeImage}
        style={styles.coin}
      />
      <Text style={[styles.count, coinStyle]}>{coinCount || shoeCount}</Text>
    </View>
  );
};

export default Coin;

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    borderRadius: 20,
    elevation: 4,
  },
  coin: {
    marginRight: 6,
    maxWidth: 20,
    maxHeight: 20,
  },
  count: {
    color: colors.textBlack,
    fontFamily: 'SFUIDisplay-bold',
    fontSize: 12,
  },
});
