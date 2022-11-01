import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../components/Header/Header';
import {styles} from './style';

const Brands = ({navigation}) => {
  return (
    <View>
      <Header title="Brands" goBack={() => navigation.goBack()} />
    </View>
  );
};

export default Brands;
