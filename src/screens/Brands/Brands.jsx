import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../components/Header/Header';
import {styles} from './style';
import SMCard from '../../components/SMCard';
import {BrandPageData, partnersData} from '../../../constants/helper';
import colors from '../../../constants/colors';
import MDCard from '../../components/MDCard';

const Brands = ({navigation}) => {
  return (
    <>
      <Header title="Brands" goBack={() => navigation.goBack()} />
      <SMCard
        data={partnersData}
        imageProps={{resizeMode: 'cover'}}
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
        imageStyle={{height: 40, width: 50}}
      />

      <View
        style={{
          // paddingHorizontal: 20,
          // paddingVertical: 20,
          flexDirection: 'row',
          justifyContent: 'flex-start',
          flexWrap: 'wrap',
        }}>
        <FlatList
          contentInset={{bottom: 180}}
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={{justifyContent: 'space-around'}}
          horizontal={false}
          numColumns={2}
          data={BrandPageData}
          renderItem={({item}) => <MDCard data={item} />}
        />
      </View>
    </>
  );
};

export default Brands;
