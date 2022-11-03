import React, {useState} from 'react';
import {FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import SectionHeader from '../SectionHeader';
import imagePath from '../../../constants/imagePath';

const SMCard = ({
  title,
  data,
  imageProps = {},
  imageContainerStyle = {},
  imageStyle = {},
  activeContainerStyle = {},
}) => {
  const [activeItem, setActiveItem] = useState(27);
  const cardRenderer = ({item}) => {
    return (
      <Pressable
        style={[
          styles.container,
          {...imageContainerStyle},
          {...(activeItem == item && {...activeContainerStyle})},
        ]}
        onPress={() => setActiveItem(item)}>
        <Image
          source={item}
          style={styles.image}
          {...imageProps}
          {...imageStyle}
        />
      </Pressable>
    );
  };
  return (
    <View>
      {title && <SectionHeader title={title} />}
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
  );
};

export default SMCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // borderWidth: 1,
    // marginRight: 10,
    // borderRadius: 10,
    // alignItems: 'center',
    // justifyContent: 'center',
    // padding: 15,
  },
  image: {
    height: 80,
  },
});
