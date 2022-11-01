import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CoinImage from '../../assets/Icons/Coin.png';
import { styles } from './style';

const Coin = props => {
  const {count} = props;
  return (
    <View style={styles.container}>
      <Image source={CoinImage} style={styles.coin}/>
      <Text>{count}</Text>
    </View>
  );
};

export default Coin;
