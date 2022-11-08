import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import imagePath from '../../constants/imagePath';
import {coinsEarnedData, DEVICE_WIDTH} from '../../constants/helper';
import colors from '../../constants/colors';

const CoinEarnedCard = () => {
  return (
    <FlatList
      data={coinsEarnedData}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => {
        return (
          <View style={styles.container}>
            <View style={styles.coinContainer}>
              <Image source={imagePath.coinImage} style={styles.image} />
            </View>
            <View>
              <Text style={styles.notificationText}>{item.title}</Text>
            </View>
            <View style={styles.timeContainer}>
              <Text style={styles.date}>3:59 pm</Text>
            </View>
          </View>
        );
      }}
    />
  );
};

export default CoinEarnedCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowColor: '#000',
    padding: 20,
    marginBottom: 15,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    borderRadius: 12,
    elevation: 4,
  },
  uniqueKey: {
    color: colors.primaryBlue,
  },
  tagLine: {
    color: colors.textGray,
  },
  image: {
    height: 30,
    aspectRatio: 1,
    alignSelf: 'center',
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  notificationText: {
    maxWidth: DEVICE_WIDTH - 200,
    color: colors.textGray,
  },
  date: {
    color: colors.textGray,
    fontSize: 12,
  },
});
