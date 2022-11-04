import {useFocusEffect} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import Animated, {
  interpolate,
  Extrapolate,
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';
import imagePath from '../../../constants/imagePath';
import SectionHeader from '../SectionHeader';

const SRC_WIDTH = Dimensions.get('window').width;
const CARD_LENGTH = SRC_WIDTH * 0.8;
const SPACING = SRC_WIDTH * 0.02;
const SIDECARD_LENGTH = (SRC_WIDTH * 0.18) / 2;
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

function Item({index, scrollX}) {
  const size = useSharedValue(1);

  const inputRange = [
    (index - 1) * CARD_LENGTH,
    index * CARD_LENGTH,
    (index + 1) * CARD_LENGTH,
  ];

  size.value = interpolate(
    scrollX,
    inputRange,
    [0.8, 1, 0.8],
    Extrapolate.CLAMP,
  );

  const opacity = useSharedValue(1);
  const opacityInputRange = [
    (index - 1) * CARD_LENGTH,
    index * CARD_LENGTH,
    (index + 1) * CARD_LENGTH,
  ];
  opacity.value = interpolate(
    scrollX,
    opacityInputRange,
    [0.5, 1, 0.5],
    Extrapolate.CLAMP,
  );

  const cardStyle = useAnimatedStyle(() => {
    return {
      transform: [{scaleY: size.value}],
      opacity: opacity.value,
    };
  });

  return (
    <Animated.View
      style={[
        styles.card,
        cardStyle,
        {
          marginLeft: index == 0 ? SIDECARD_LENGTH : SPACING,
          marginRight: index == 2 ? SIDECARD_LENGTH : SPACING,
        },
      ]}>
      <Image
        source={imagePath.random2}
        style={{width: '100%', height: '100%'}}
      />
    </Animated.View>
  );
}

export default function MDCarousel({title, data}) {
  const [scrollX, setScrollX] = useState(0);

  return (
    <Animated.View style={{paddingVertical: 20}}>
      {title && (
        <View
          style={{paddingHorizontal: 20, paddingTop: 10, paddingBottom: 10}}>
          <SectionHeader title={title} />
        </View>
      )}
      <AnimatedFlatList
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        decelerationRate={0.8}
        snapToInterval={CARD_LENGTH + SPACING + 20 * 1.5}
        disableIntervalMomentum={true}
        disableScrollViewPanResponder={true}
        snapToAlignment={'center'}
        data={data}
        horizontal={true}
        renderItem={({item, index}) => {
          return <Item index={index} scrollX={scrollX} />;
        }}
        keyExtractor={item => item.id}
        onScroll={event => {
          setScrollX(event.nativeEvent.contentOffset.x);
        }}
      />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: CARD_LENGTH,
    height: 150,
    overflow: 'hidden',
    borderRadius: 15,
  },
});
