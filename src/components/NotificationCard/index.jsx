import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import imagePath from '../../../constants/imagePath';
import {DEVICE_WIDTH} from '../../../constants/helper';
import colors from '../../../constants/colors';

const NotificationCard = () => {
  const data = [
    {
      title: 'Congratulations! You have successfully earned a voucher from',
      tagLine: '“AED 50 off on Registration”',
      uniqueKey: 'Fitness First',
    },
    {
      title: 'Congratulations! You have successfully burned a voucher of from',
      tagLine: '“Get 10% Off”',
      uniqueKey: 'Fitness First',
    },
  ];

  return (
    <FlatList
      data={data}
      renderItem={({item}) => {
        return (
          <View style={styles.container}>
            <View>
              <Image source={imagePath.ticket} style={styles.image} />
            </View>
            <View>
              <Text style={styles.notificationText}>
                {item.title}
                <Text style={styles.uniqueKey}> {item.uniqueKey}</Text>
              </Text>
              <View>
                <Text style={styles.tagLine}> {item.tagLine}</Text>
              </View>
            </View>
            <View style={styles.timeContainer}>
              <View style={styles.notificationBadge}></View>
              <Text style={styles.date}>3:59 pm</Text>
            </View>
          </View>
        );
      }}
    />
  );
};

export default NotificationCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
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
    height: 50,
    width: 50,
  },
  timeContainer: {
    justifyContent: 'space-between',
  },
  notificationBadge: {
    width: 8,
    height: 8,
    borderRadius: 12,
    backgroundColor: colors.primaryGreen,
    alignSelf: 'flex-end',
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
