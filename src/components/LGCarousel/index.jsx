import React, {useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import colors from '../../../constants/colors';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const LGCard = ({data}) => {
  const [activeImage, setActiveImage] = useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.wrap}>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <Image
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

export default LGCard;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  wrap: {
    width: WIDTH,
    height: HEIGHT * 0.25,
  },
  wrapDot: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  dotActive: {
    margin: 3,
    color: colors.primaryBlue,
  },
  dot: {
    margin: 3,
    color: 'white',
  },
});
