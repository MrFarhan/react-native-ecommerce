import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import imagePath from '../../../constants/imagePath';
import colors from '../../../constants/colors';

const WIDTH = Dimensions.get('window').width;
const ReviewCard = ({data}) => {
  //   const data = [
  //     {
  //       title: 'Fitnglam',
  //       date: 'Oct 01, 2022',
  //       review:
  //         'Excellent personal training. Trainers who really care and go above and beyond to help you achieve your goals.',
  //       image: imagePath.partner1,
  //     },
  //     {
  //       title: 'The Info Tech',
  //       date: 'Nov 05, 2022',
  //       review:
  //         'Excellent personal training. Trainers who really care and go above and beyond to help you achieve your goals.',
  //       image: imagePath.partner2,
  //     },
  //   ];
  console.warn(data);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.imgGroup}>
          <Image source={data?.image} />
          <View style={styles.titleGroup}>
            <Text style={styles.title}>{data?.title}</Text>
            <Text style={styles.rating}>{data?.rating}</Text>
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
    // fontFamily: 'SFUIDisplay-Bold',
    color: colors.textGray,
    fontSize: 16,
    justifyContent: 'center',
    alignSelf: 'center',
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
    width: WIDTH * 0.8,
    color: colors.textGray,
  },
});
