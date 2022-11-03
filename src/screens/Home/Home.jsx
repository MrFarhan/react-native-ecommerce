import {Pressable, ScrollView, Text, View} from 'react-native';
import React from 'react';
import Header from '../../components/Header/Header';
import {styles} from './style';
import NavigationStrings from '../../../constants/NavigationStrings';
import SMCard from '../../components/SMCard';
import imagePath from '../../../constants/imagePath';
import colors from '../../../constants/colors';
import LGCarousel from '../../components/LGCarousel';
import LGCard from '../../components/LGCard';
import ReviewCard from '../../components/ReviewCard';

const Home = ({navigation}) => {
  const partnersData = [
    {image: imagePath.partner1},
    {image: imagePath.partner2},
    {image: imagePath.partner3},
    {image: imagePath.partner4},
    {image: imagePath.partner5},
    {image: imagePath.partner1},
    {image: imagePath.partner2},
  ];

  const categoriesData = [
    {image: imagePath.category1, bottomLabel: 'Fitness'},
    {image: imagePath.category2, bottomLabel: 'Diet'},
    {image: imagePath.category3, bottomLabel: 'Retail'},
    {image: imagePath.category4, bottomLabel: 'Health'},
  ];

  const brandOffersData = [
    {image: imagePath.carousel1},
    {image: imagePath.carousel2},
  ];

  // const reviewCardData = [
  //   {image: imagePath.carousel1},
  //   {image: imagePath.carousel2},
  // ];
  return (
    <>
      <Header title="Home" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <LGCarousel title={'Brand Offers'} data={brandOffersData} />
        <SMCard title={'Partners'} data={partnersData} />
        <SMCard
          title={'Categories'}
          data={categoriesData}
          imageProps={{resizeMode: 'contain'}}
          imageContainerStyle={{
            marginRight: 10,
            alignItems: 'center',
            justifyContent: 'center',
            padding: 15,
            borderRadius: 10,
          }}
          activeContainerStyle={{
            borderWidth: 1,
            borderColor: colors.primaryBlue,
          }}
          imageStyle={{height: 40, width: 40}}
        />

        <LGCard title={'Reviews'} />
      </ScrollView>
    </>
  );
};

export default Home;
