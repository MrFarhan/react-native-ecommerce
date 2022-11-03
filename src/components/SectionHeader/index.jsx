import {Text, View} from 'react-native';
import React from 'react';
import {styles} from './style';

const SectionHeader = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.Heading}>{title}</Text>
      <Text style={styles.seeAll}>See All</Text>
    </View>
  );
};

export default SectionHeader;
