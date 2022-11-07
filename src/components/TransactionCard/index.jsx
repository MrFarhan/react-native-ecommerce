import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Coin from '../CoinBadge/Coin';
import Badge from '../Badge';
import colors from '../../../constants/colors';

const TransactionCard = ({data}) => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderColor: colors.primaryGray,
        flexDirection: 'row',
        paddingVertical: 15,
        justifyContent: 'space-evenly',
        
      }}>
      <View>
        <Image source={data.image} style={{width: 40, height: 40}} />
      </View>
      <View>
        <Text
          style={{
            fontSize: 18,
            color: colors.textGray,
            fontFamily: 'SFUIDisplay-Regular',
            marginBottom: 5,
          }}>
          {data.title}
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontFamily: 'SFUIDisplay-Regular',
            color: colors.textGray,
            marginBottom: 5,
          }}>
          {data.tagLine}
        </Text>
        <Text
          style={{
            fontFamily: 'Effra-Regular',
            fontSize: 14,
            color: colors.textGray,
            marginBottom: 5,
          }}>
          {data.date} | {data.time}
        </Text>
      </View>
      <View
        style={{
          alignItems: 'flex-end',
          justifyContent: 'space-between',
        }}>
        <Coin
          count={data.coinCount}
          coinContainerStyle={{padding: 4, paddingHorizontal: 10}}
        />
        <Badge title={data?.badgeName} />
      </View>
    </View>
  );
};

export default TransactionCard;

const styles = StyleSheet.create({});
