import React, {useState} from 'react';
import {FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import colors from 'src/constants/colors';
import SectionHeader from '../SectionHeader/index';

const SMCard = ({
  title,
  data,
  imageProps = {},
  imageContainerStyle = {},
  imageStyle = {},
  showActiveContainerStyle
}) => {
  const [activeItem, setActiveItem] = useState(22);
  const cardRenderer = ({item}) => {
    return (
      <View>
        <Pressable
          style={[
            styles.container,
            {...imageContainerStyle},
            {
              ...(activeItem == item?.image &&
                showActiveContainerStyle &&
                styles.activeContainer),
            },
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
          <Text style={{textAlign: 'center', marginRight: 15, marginTop: 5}}>
            {item?.bottomLabel}
          </Text>
        )}
      </View>
    );
  };
  return (
    <View style={{paddingHorizontal: 10}}>
      {title && (
        <View style={{paddingBottom: 15}}>
          <SectionHeader title={title} />
        </View>
      )}
      <FlatList
        data={data}
        scrollEventThrottle={1}
        renderItem={item => cardRenderer(item)}
        keyExtractor={item => item.id}
        contentContainerStyle={{
          flexDirection: 'row',
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
      />
    </View>
  );
};

export default SMCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  activeContainer: {
    borderWidth: 1,
    borderColor: colors.primaryBlue,
  },
  image: {
    height: 80,
    width: 80,
  },
});
