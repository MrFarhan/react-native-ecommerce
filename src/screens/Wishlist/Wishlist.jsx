import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../components/Header/Header';
import {styles} from './style';

const Wishlist = ({navigation}) => {
  return (
    <View>
      <Header title="Wishlist" goBack={() => navigation.goBack()} />
    </View>
  );
};

export default Wishlist;
