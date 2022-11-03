import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../components/Header/Header';
import {styles} from './style';

const MyReviews = ({navigation}) => {
  return (
    <View>
      <Header title="MyReviews" goBack={() => navigation.goBack()} />
    </View>
  );
};

export default MyReviews;
