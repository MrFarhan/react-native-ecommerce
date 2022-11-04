import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {DEVICE_WIDTH} from '../../../constants/helper';
import colors from '../../../constants/colors';
import Badge from '../Badge';
import Coin from '../CoinBadge/Coin';

const BrandCard = ({data}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={data?.image} style={styles.image} />
        <Image source={data?.brandLogo} style={styles.brandLogo} />
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.leftGroup}>
          <Text style={styles.title}>{data?.title}</Text>
          <Text style={styles.offerTitle}>{data?.offerTitle}</Text>
          <Text style={styles.offerExpiry}>{data?.offerExpiry}</Text>
        </View>
      </View>
      <View style={styles.rightGroup}>
        <View style={styles.coin}>
          <Coin count={data?.coins} />
        </View>
        <Badge title={data?.otherDealsDetail} />
      </View>
    </View>
  );
};

export default BrandCard;

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    backgroundColor: 'white',
    marginRight: 10,
    height: 250, // position
    // borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    borderRadius: 12,
    elevation: 4,
    flex: 1,
  },
  imageContainer: {
    position: 'relative',
    height: '100%',
    borderRadius: 12,
  },
  image: {
    borderRadius: 12,

    width: '100%',
    maxHeight: 150,
  },
  brandLogo: {
    position: 'absolute',
    left: 10,
    bottom: 70, // position
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 110,
    borderRadius: 12,

    paddingHorizontal: 20,
    paddingVertical: 40, // position
  },
  title: {
    color: colors.textGray,
    fontSize: 14,
    fontFamily: 'SFUIDisplay',
  },
  offerTitle: {
    fontFamily: 'SFUIDisplay-bold',
    fontSize: 18,
  },
  offerExpiry: {
    fontSize: 10,
    color: colors.textGray,
    fontFamily: 'SFUIDisplay-Regular',
  },
  coin: {
    paddingBottom: 10,
    top: 0,
  },
  rightGroup: {
    bottom: 30, // position
    position: 'absolute',
    right: 15,
  },
});
