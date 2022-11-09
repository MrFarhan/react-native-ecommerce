import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../components/Header/Header';
import {styles} from './style';

const TOS = ({navigation}) => {
  return (
    <View>
      <Header title="Terms of service" goBack={() => navigation.goBack()} />
    </View>
  );
};

export default TOS;
