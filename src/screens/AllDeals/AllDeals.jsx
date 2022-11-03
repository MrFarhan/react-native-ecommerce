import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../components/Header/Header';
import {styles} from './style';

const AllDeals = ({navigation}) => {
  return (
    <View>
      <Header title="AllDeals" goBack={() => navigation.goBack()} />
    </View>
  );
};

export default AllDeals;
