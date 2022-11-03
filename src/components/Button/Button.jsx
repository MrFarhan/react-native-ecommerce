import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from './style';

const Button = ({title, leftIcon}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={leftIcon} style={styles.leftIcon} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
