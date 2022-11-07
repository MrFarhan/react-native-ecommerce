import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../components/Header/Header';
import {styles} from './style';
import Coin from '../../components/CoinBadge/Coin';
import WalletSectionHeader from '../../components/WalletSectionHeader';
import SMCardTwoColumn from '../../components/SMCardTwoColumn';
import imagePath from '../../../constants/imagePath';
import SectionHeader from '../../components/SectionHeader';
import TransactionCard from '../../components/TransactionCard';

const Wallet = ({navigation}) => {
  const data = [
    {image: imagePath.ticket, title: 'My Vouchers'},
    {image: imagePath.target, title: 'My Challenge'},
  ];

  const transactionData = [
    {
      image: imagePath.partner1,
      title: 'The Info Tech',
      tagLine: 'AED 50 off on Registration',
      date: '29/9/2022',
      time: '11:30 pm',
      badgeName: 'Burned',
      coinCount: '750',
    },
    {
      image: imagePath.partner2,
      title: 'MrFarhan',
      tagLine: 'AED 50 off on Registration',
      date: '29/9/2022',
      time: '11:30 pm',
      badgeName: 'Earned',
      coinCount: '750',
    },
    {
      image: imagePath.partner1,
      title: 'Fitness First',
      tagLine: 'AED 50 off on Registration',
      date: '29/9/2022',
      time: '11:30 pm',
      badgeName: 'Burned',
      coinCount: '750',
    },
  ];
  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <Header title="Wallet Management" goBack={() => navigation.goBack()} />
      <WalletSectionHeader />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginVertical: 13,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 0.8,
          },
          shadowOpacity: 0.23,
          shadowRadius: 2.62,

          borderRadius: 12,
          elevation: 4,
        }}>
        <View style={{width: '45%'}}>
          <SMCardTwoColumn data={data[0]} />
        </View>
        <View style={{width: '45%'}}>
          <SMCardTwoColumn data={data[1]} />
        </View>
      </View>
      <View style={{paddingHorizontal: 20}}>
        <SectionHeader title={'Recent Transactions'} hideSeeAll />
        <FlatList
          data={transactionData}
          renderItem={({item}) => <TransactionCard data={item} />}
        />
      </View>
    </View>
  );
};

export default Wallet;
