import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './style';
import DrawerHandle from '../../assets/Icons/DrawerHandle.png';
import Coin from '../CoinBadge/Coin';
import {useNavigation} from '@react-navigation/native';
import imagePath from '../../../constants/imagePath';

const Header = ({title, goBack, showSearch}) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={styles.container}>
        {goBack ? (
          <TouchableOpacity onPress={() => goBack()}>
            <Text>Go back</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Image source={DrawerHandle} style={styles.drawerHandle} />
          </TouchableOpacity>
        )}
        <Text style={styles.title}>{title}</Text>
        <View style={styles.coinGroup}>
          {showSearch && (
            <Image source={imagePath.searchImage} style={styles.search} />
          )}
          <Coin count={'2,048'} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Header;
