import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import imagePath from '../../constants/imagePath';

const MapMarker = ({title,image}) => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          backgroundColor: 'white',
          padding: 5,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={image}
          style={{maxWidth: 50, maxHeight: 50}}
        />
        <Text>{title}</Text>
      </View>
      <View>
        <View
          style={{
            height: 30,
            backgroundColor: 'black',
            width: 3,
          }}></View>
      </View>
    </View>
  );
};

export default MapMarker;

const styles = StyleSheet.create({});
