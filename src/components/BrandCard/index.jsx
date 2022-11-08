import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from 'constants/colors';
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
          <Coin
            // coinCount={data?.coinCount}
            shoeCount={data.shoeCount}
            coinContainerStyle={{maxWidth: 90}}
          />
        </View>
        <Badge
          title={data?.otherDealsDetail}
          containerStyle={{maxWidth: 100}}
        />
      </View>
    </View>
  );
};

export default BrandCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginRight: 10,
    height: 250, // position
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
  },
  image: {
    borderTopStartRadius: 12,
    borderTopEndRadius: 12,

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
    fontFamily: 'SFUIDisplay-Regular',
    paddingBottom: 3,
  },
  offerTitle: {
    fontFamily: 'SFUIDisplay-Semibold',
    fontSize: 18,
    paddingBottom: 3,
  },
  offerExpiry: {
    fontSize: 10,
    color: '#73879B',
    fontFamily: 'SFUIDisplay-Medium',
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
