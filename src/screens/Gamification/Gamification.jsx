import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../components/Header/Header';
import {styles} from './style';

const Gamification = ({navigation}) => {
  return (
    <View>
      <Header title="Gamification" goBack={() => navigation.goBack()} />
    </View>
  );
};

export default Gamification;
