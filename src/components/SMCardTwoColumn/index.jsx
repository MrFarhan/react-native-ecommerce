import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import imagePath from '../../constants/imagePath';

const SMCardTwoColumn = ({data}) => {
  return (
    <View
      style={{
        padding: 5,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        borderRadius: 12,
        alignItems: 'center',
        marginVertical: 5,
        paddingVertical: 8,
      }}>
      <View>
        <Image source={data?.image} style={{width: 45, height: 40}} />
      </View>
      <Text style={{fontFamily: 'SFUIDisplay-Bold', fontSize: 12}}>
        {data?.title}
      </Text>
    </View>
  );
};

export default SMCardTwoColumn;

const styles = StyleSheet.create({});
