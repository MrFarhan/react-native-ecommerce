import {Pressable, Text, View} from 'react-native';
import React from 'react';
import Header from '../../components/Header/Header';
import {styles} from './style';
import NavigationStrings from '../../../constants/NavigationStrings';
import SMCard from '../../components/SMCard';
import imagePath from '../../../constants/imagePath';

const Home = ({navigation}) => {
  const partnersData = [
    imagePath.partner1,
    imagePath.partner2,
    imagePath.partner3,
    imagePath.partner4,
    imagePath.partner5,
    imagePath.partner1,
    imagePath.partner2,
  ];

  const categoriesData = [
    imagePath.category1,
    imagePath.category2,
    imagePath.category3,
    imagePath.category4,
  ];
  return (
    <View>
      <Header title="Home" />
      <Pressable
        onPress={() => navigation.navigate(NavigationStrings.GAMIFICATION)}>
        <Text>To to Profile</Text>
      </Pressable>
      <SMCard title={'Partners'} data={partnersData} />
      {/* <SMCard
        title={'Categories'}
        data={categoriesData}
        imageProps={{resizeMode: ''}}
      /> */}
    </View>
  );
};

export default Home;
