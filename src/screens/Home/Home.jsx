import {SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import Header from 'components/Header/Header';
import LGCarousel from 'components/LGCarousel/index';
import {
  brandCardData,
  brandOffersData,
  categoriesData,
  ChallengesCardData,
  DEVICE_HEIGHT,
  NewOfferData,
  partnersData,
} from 'constants/helper.js';
import SMCard from 'src/components/SMCard/index';
import MDCarousel from 'src/components/MDCarousel/index';
import LGCard from 'src/components/LGCard/index';

const Home = () => {
  return (
    <SafeAreaView>
      <Header title="Home" showSearch />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{height: DEVICE_HEIGHT - 200}}>
        <LGCarousel data={brandOffersData} />
        <SMCard title={'Partners'} data={partnersData} />
        <MDCarousel data={brandCardData} title={'Brand Offers'} />

        <SMCard
          title={'Categories'}
          data={categoriesData}
          imageProps={{resizeMode: 'contain'}}
          imageContainerStyle={{
            marginRight: 15,
            marginLeft: 15,
            alignItems: 'center',
            justifyContent: 'center',
            padding: 15,
            borderRadius: 10,
          }}
          showActiveContainerStyle={true}
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
