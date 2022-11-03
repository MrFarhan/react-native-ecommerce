import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SectionHeader from '../SectionHeader';
import imagePath from '../../../constants/imagePath';

const SMCard = ({title, data, imageProps = {}}) => {
  const cardRenderer = ({item}) => {
    return (
      <View style={styles.container}>
        <Image source={item} style={styles.image} {...imageProps} />
      </View>
    );
  };
  return (
    <View>
      {title && <SectionHeader title={title} />}
      <View>
        <FlatList
          data={data}
          renderItem={cardRenderer}
          contentContainerStyle={{
            flexDirection: 'row',
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default SMCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  image: {
    height: 80,
  },
});
