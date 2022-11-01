import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../components/Header/Header';
import {styles} from './style';

const Wallet = ({navigation}) => {
  return (
    <View>
      <Header title="Wallet" goBack={() => navigation.goBack()} />
    </View>
  );
};

export default Wallet;
