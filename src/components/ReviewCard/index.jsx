import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from 'constants/colors';
import VectorIcons from 'constants/vectorIcons';
import {DEVICE_WIDTH} from 'constants/helper';

const ReviewCard = ({data}) => {
  const {FontAwesome} = VectorIcons;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.imgGroup}>
          <Image source={data?.image} />
          <View style={styles.titleGroup}>
            <Text style={styles.title}>{data?.title}</Text>
            <View style={styles.starContainer}>
              {Array.from({length: 5}).map((item, index) => (
                <FontAwesome
                  name={index >= data?.rating ? 'star-o' : 'star'}
                  color={colors.primaryYellow}
                  style={styles.star}
                  key={index}
                />
              ))}
              <Text style={styles.rating}>{data?.rating}</Text>
            </View>
          </View>
        </View>
        <Text style={styles.date}>{data?.date}</Text>
      </View>

      <Text style={styles.review}>{data?.review}</Text>
    </View>
  );
};

export default ReviewCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginRight: 10,
    padding: 9,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    textAlign: 'center',
  },
  titleGroup: {
    alignSelf: 'center',
  },
  title: {
    fontFamily: 'SFUIDisplay-Bold',
    fontSize: 16,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  rating: {
    fontFamily: 'HelveticaNeue',
    color: colors.textGray,
    fontSize: 14,
    justifyContent: 'center',
    alignSelf: 'center',
    marginLeft: 2,
  },
  starContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  date: {
    fontFamily: 'SFUIDisplay-Regular',
    fontSize: 10,
    color: colors.textGray,
    alignSelf: 'center',
  },
  imgGroup: {
    flexDirection: 'row',
  },
  review: {
    width: DEVICE_WIDTH * 0.8,
    color: colors.textGray,
  },
});
