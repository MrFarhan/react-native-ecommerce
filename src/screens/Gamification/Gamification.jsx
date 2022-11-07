import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import {DEVICE_HEIGHT} from '../../../constants/helper';
import imagePath from '../../../constants/imagePath';
import BottomSheet from '../../components/BottomSheet';

import Header from '../../components/Header/Header';
import MapMarker from '../../components/MapMarker';
import SearchBar from '../../components/Searchbar';
// import {styles} from './style';
// import MapView from 'react-native-maps';

const Gamification = ({navigation}) => {
  const mapMarkersData = [
    {
      latitude: 37.78825,
      longitude: -122.4324,
      title: 'MrFarhan',
      image: imagePath.partner1,
    },

    {
      latitude: 37.78994,
      longitude: -122.4326,
      title: 'The Info Tech',
      image: imagePath.partner2,
    },
  ];
  return (
    <View>
      <Header title="Gamification" goBack={() => navigation.goBack()} />
      <SafeAreaView>
        {/* <View>
        <Text>Gamification here </Text>
      </View> */}
        <View style={styles.container}>
          <MapView
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={styles.map}
            region={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}>
            {mapMarkersData.map((item, index) => (
              <Marker
                coordinate={{
                  latitude: item?.latitude,
                  longitude: item?.longitude,
                }}
                key={index}>
                <MapMarker title={item.title} image={item.image} />
              </Marker>
            ))}
          </MapView>
        </View>
        <SearchBar />
        <BottomSheet shouldAlwaysVisible />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: DEVICE_HEIGHT,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
export default Gamification;
