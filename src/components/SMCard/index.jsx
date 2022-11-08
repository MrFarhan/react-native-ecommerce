import React, {useState} from 'react';
import {FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import SectionHeader from '../SectionHeader';
import imagePath from '../../constants/imagePath';

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
      <View>
        <Pressable
          style={[
            styles.container,
            {...imageContainerStyle},
            {...(activeItem == item?.image && {...activeContainerStyle})},
          ]}
          onPress={() => setActiveItem(item?.image)}>
          <Image
            source={item?.image}
            style={styles.image}
            {...imageProps}
            {...imageStyle}
          />
        </Pressable>
        {item?.bottomLabel && (
          <Text style={{textAlign: 'center', marginRight: 10, marginTop: 5}}>
            {item?.bottomLabel}
          </Text>
        )}
      </View>
    );
  };
  return (
    <View style={{paddingHorizontal: 15}}>
      {title && <SectionHeader title={title} />}
      <FlatList
        data={data}
        renderItem={(item) => cardRenderer(item)}
        keyExtractor={(item) => item.id}
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
