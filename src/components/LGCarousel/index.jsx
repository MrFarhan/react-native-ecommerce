import React, {useState} from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import colors from 'constants/colors';
import {DEVICE_HEIGHT, DEVICE_WIDTH} from 'src/constants/helper';

const LGCarousel = ({data}) => {
  const [activeImage, setActiveImage] = useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.wrap}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({item}, index) => (
            <Image
              key={index}
              resizeMode="stretch"
              style={styles.wrap}
              source={item?.image}
            />
          )}
          contentContainerStyle={{
            flexDirection: 'row',
          }}
          onMomentumScrollEnd={event => {
            const index = Math.floor(
              Math.floor(event.nativeEvent.contentOffset.x) /
                Math.floor(event.nativeEvent.layoutMeasurement.width),
            );
            setActiveImage(index);
          }}
          pagingEnabled
          horizontal
          showsHorizontalScrollIndicator={false}
        />
        <View style={styles.wrapDot}>
          {data?.map((item, index) => {
            return (
              <Text
                key={item?.image}
                style={activeImage == index ? styles.dotActive : styles.dot}>
                ⬤
              </Text>
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default LGCarousel;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  wrap: {
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT * 0.25,
  },
  wrapDot: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  dotActive: {
    margin: 3,
    marginRight: 1,
    marginBottom: 9,
    fontSize: 10,
    color: colors.primaryBlue,
  },
  dot: {
    margin: 3,
    marginRight: 1,
    marginBottom: 9,
    fontSize: 10,
    color: 'white',
  },
});
