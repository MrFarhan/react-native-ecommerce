import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import imagePath from '../../constants/imagePath';
import Badge from '../Badge';
import Coin from '../CoinBadge/Coin';
import colors from '../../constants/colors';

const MDCard = ({data}) => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        justifyContent: 'center',
        // maxWidth: 157,
        borderTopStartRadius: 15,
        borderTopEndRadius: 15,
        marginBottom: 20,
        width: '44%',
      }}>
      <View style={{borderTopStartRadius: 15, borderTopEndRadius: 15}}>
        <Image
          source={data.image}
          style={{
            width: '100%',
            height: 100,
            borderTopStartRadius: 15,
            borderTopEndRadius: 15,
          }}
        />
        <Image
          source={data.partnerImage}
          style={{
            position: 'absolute',
            right: 0,
            bottom: -18,
            width: 35,
            height: 35,
          }}
        />
      </View>
      <View
        style={{
          paddingHorizontal: 10,
          paddingVertical: 10,
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
        }}>
        <Text style={{fontSize: 14, fontFamily: 'SFUIDisplay-Bold'}}>
          {data.title}
        </Text>
        <Text
          style={{
            fontSize: 10,
            fontFamily: 'SFUIDisplay-Regular',
            marginBottom: 10,
          }}>
          {data.tagLine}
        </Text>
        <Badge title={data.dealDaysLeft} containerStyle={{maxWidth: 100}} />
        <View
          style={{
            borderWidth: 1,
            margin: 8,
            borderColor: colors.textGray,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        />
        <Coin coinCount={data.coinsCount} />
        <Text
          style={{
            fontSize: 8,
            fontFamily: 'SFUIDisplay-Regular',
            marginTop: 10,
          }}>
          {data.offerExpiry}
        </Text>
      </View>
    </View>
  );
};

export default MDCard;

const styles = StyleSheet.create({});
