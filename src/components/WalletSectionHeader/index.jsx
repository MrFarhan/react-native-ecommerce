import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Coin from '../CoinBadge/Coin';
import colors from '../../constants/colors';

const WalletSectionHeader = () => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        borderBottomEndRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 20,
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
      <View>
        <Text
          style={{
            color: colors.primaryBlue,
            fontSize: 16,
            fontFamily: 'SFUIDisplay-Regular',
            maxWidth: 89,
          }}>
          Available Fayez Points
        </Text>
      </View>
      <View style={{width: 80}}>
        <Coin
          count={'2,048'}
          coinStyle={{
            color: colors.primaryBlue,
            fontFamily: 'SFUIDisplay-bold',
          }}
        />
      </View>
    </View>
  );
};

export default WalletSectionHeader;

const styles = StyleSheet.create({});
