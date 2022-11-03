import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../components/Header/Header';
import {styles} from './style';

const Categories = ({navigation}) => {
  return (
    <View>
      <Header title="Categories" goBack={() => navigation.goBack()} />
    </View>
  );
};

export default Categories;
