import React from 'react';
import {FlatList, View} from 'react-native';
import Header from 'components/Header/Header';
import SMCard from 'components/SMCard/index';
import {BrandPageData, categoriesData} from 'constants/helper';
import MDCard from 'components/MDCard/index';

const Categories = ({navigation}) => {
  return (
    <>
      <Header title="Categories" goBack={() => navigation.goBack()} />
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

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          flexWrap: 'wrap',
          marginTop: 30,
        }}>
        <FlatList
          contentInset={{bottom: 200}}
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={{justifyContent: 'space-around'}}
          horizontal={false}
          numColumns={2}
          data={BrandPageData}
          renderItem={({item}) => <MDCard data={item} />}
          keyExtractor={item => item.id}
        />
      </View>
    </>
  );
};

export default Categories;
