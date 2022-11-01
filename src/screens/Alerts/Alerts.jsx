import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../components/Header/Header';
import {styles} from './style';

const Alerts = ({navigation}) => {
  return (
    <View>
      <Header title="Alerts" goBack={() => navigation.goBack()} />
    </View>
  );
};

export default Alerts;
