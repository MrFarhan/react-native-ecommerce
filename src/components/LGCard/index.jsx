import React, {useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import colors from '../../constants/colors';
import {lgCardData} from '../../constants/helper';
import imagePath from '../../constants/imagePath';
import ReviewCard from '../ReviewCard';
import SectionHeader from '../SectionHeader';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const LGCard = ({title}) => {
  const [activeImage, setActiveImage] = useState(0);
  return (
    <View style={styles.container}>
      {title && (
        <View
          style={{paddingHorizontal: 20, paddingTop: 10, paddingBottom: 10}}>
          <SectionHeader title={title} />
        </View>
      )}

      <View style={styles.wrap}>
        <FlatList
          data={lgCardData}
          style={styles.renderImage}
          renderItem={({item}) => <ReviewCard data={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToAlignment={'center'}
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
        />
      </View>
    </View>
  );
};

export default LGCard;

const styles = StyleSheet.create({
  container: {},
  renderImage: {
    height: WIDTH / 2.6,
    width: WIDTH * 0.9,
    marginHorizontal: 10,
    borderRadius: 12,
  },
});
