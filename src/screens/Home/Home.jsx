import {Pressable, Text, View} from 'react-native';
import React from 'react';
import Header from '../../components/Header/Header';
import {styles} from './style';
import NavigationStrings from '../../../constants/NavigationStrings';
import SMCard from '../../components/SMCard';
import imagePath from '../../../constants/imagePath';
import colors from '../../../constants/colors';

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
  return (
    <View>
      <Header title="Home" />
      <Pressable
        onPress={() => navigation.navigate(NavigationStrings.GAMIFICATION)}>
        <Text>To to Profile</Text>
      </Pressable>
      <SMCard title={'Partners'} data={partnersData} />
      <View>
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
      </View>
    </View>
  );
};

export default Home;
