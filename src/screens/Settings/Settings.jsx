import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../components/Header/Header';
import {styles} from './style';

const Settings = ({navigation}) => {
  return (
    <View>
      <Header title="Settings" goBack={() => navigation.goBack()} />
    </View>
  );
};

export default Settings;
