import {Pressable, Text, View} from 'react-native';
import React from 'react';
import Header from '../../components/Header/Header';
import {styles} from './style';
import NavigationStrings from '../../../constants/NavigationStrings';

const Home = ({navigation}) => {
  return (
    <View>
      <Header title="Home" />
      <Pressable onPress={() => navigation.navigate(NavigationStrings.GAMIFICATION)}>
        <Text>To to Profile</Text>
      </Pressable>
    </View>
  );
};

export default Home;
