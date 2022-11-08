import {SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import Header from '../../components/Header/Header';
import {styles} from './style';
import SMCard from '../../components/SMCard';
import imagePath from '../../constants/imagePath';
import colors from '../../constants/colors';
import LGCarousel from '../../components/LGCarousel';
import LGCard from '../../components/LGCard';
import ReviewCard from '../../components/ReviewCard';
import BrandCard from '../../components/BrandCard';
import MDCarousel from '../../components/MDCarousel';
import {
  brandCardData,
  brandOffersData,
  categoriesData,
  ChallengesCardData,
  NewOfferData,
  partnersData,
} from '../../constants/helper';

const Home = () => {
  return (
    <SafeAreaView>
      <Header title="Home" showSearch />
      <ScrollView showsVerticalScrollIndicator={false}>
        <LGCarousel data={brandOffersData} />
        <SMCard title={'Partners'} data={partnersData} />
        <MDCarousel data={brandCardData} title={'Brand Offers'} />

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
        <MDCarousel data={ChallengesCardData} title={'Challenges'} />
        <MDCarousel data={NewOfferData} title={'New Offers'} />

        <LGCard title={'Reviews'} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
