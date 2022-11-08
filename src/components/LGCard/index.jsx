import React, {useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {DEVICE_WIDTH, lgCardData} from 'constants/helper';
import ReviewCard from '../ReviewCard/index';
import SectionHeader from '../SectionHeader';

const LGCard = ({title}) => {
  const [activeImage, setActiveImage] = useState(0);
  return (
    <View style={styles.container}>
      {title && (
        <View style={{paddingBottom: 10}}>
          <SectionHeader title={title} />
        </View>
      )}

      <View style={styles.wrap}>
        <FlatList
          data={lgCardData}
          keyExtractor={item => item.id}
          style={styles.renderImage}
          renderItem={({item}) => <ReviewCard data={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToAlignment={'center'}
          contentContainerStyle={{
            flexDirection: 'row',
          }}
          pagingEnabled
          onMomentumScrollEnd={event => {
            const index = Math.floor(
              Math.floor(event.nativeEvent.contentOffset.x) /
                Math.floor(event.nativeEvent.layoutMeasurement.width),
            );
            setActiveImage(index);
          }}
        />
      </View>
    </View>
  );
};

export default LGCard;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  renderImage: {
    height: DEVICE_WIDTH / 2.6,
    width: DEVICE_WIDTH * 0.9,
    marginHorizontal: 10,
    borderRadius: 12,
  },
});
