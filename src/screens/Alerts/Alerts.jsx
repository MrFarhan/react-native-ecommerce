import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../components/Header/Header';
import {styles} from './style';
import NotificationCard from '../../components/NotificationCard';
import SectionHeader from '../../components/SectionHeader';
import CoinEarnedCard from '../../components/CoinEarnedCard';

const Alerts = ({navigation}) => {
  return (
    <View>
      <Header title="Alerts" goBack={() => navigation.goBack()} />
      <View style={{paddingHorizontal: 20}}>
        <SectionHeader title={'Today'} hideSeeAll />
        <NotificationCard />
      </View>
      <View style={{paddingHorizontal: 20, paddingVertical: 10}}>
        <SectionHeader title={'This week'} hideSeeAll />
        <CoinEarnedCard />
      </View>
    </View>
  );
};

export default Alerts;
