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
import BrandCard from '../../components/BrandCard';
import MDCarousel from '../../components/MDCarousel';

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

  const CarouselData = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];

  const brandCardData = [
    {
      title: 'MrFarhan',
      image: imagePath.carousel1,
      offerTitle: 'Get 30% off',
      offerExpiry: '* Expiry date 23 sept 2022',
      coins: '3500',
      otherDealsDetail: '53 Deals left',
      brandLogo: imagePath.partner1,
    },
    {
      title: 'The Info Tech',
      image: imagePath.carousel2,
      offerTitle: 'Get 30% off',
      offerExpiry: '* Expiry date 23 sept 2022',
      coins: '3500',
      otherDealsDetail: '77 Deals left',
      brandLogo: imagePath.partner2,
    },
  ];
  return (
    <>
      <Header title="Home" />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* <LGCarousel title={'Brand Offers'} data={brandOffersData} />
        <SMCard title={'Partners'} data={partnersData} />
        <MDCarousel data={CarouselData} title={'Brands'} />
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
        <MDCarousel data={CarouselData} title={'Challenges'} />
        <MDCarousel data={CarouselData} title={'New Offers'} />

        <LGCard title={'Reviews'} /> */}
        <BrandCard data={brandCardData[0]} />
      </ScrollView>
    </>
  );
};

export default Home;
