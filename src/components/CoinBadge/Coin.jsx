import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { styles } from './style';
import imagePath from '../../../constants/imagePath';

const Coin = props => {
  const {count} = props;
  return (
    <View style={styles.container}>
      <Image source={imagePath.coinImage} style={styles.coin}/>
      <Text>{count}</Text>
    </View>
  );
};

export default Coin;
