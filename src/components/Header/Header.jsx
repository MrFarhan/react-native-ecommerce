import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './style';
import DrawerHandle from '../../assets/Icons/DrawerHandle.png';
import Search from '../../assets/Icons/Search.png';
import Coin from '../CoinBadge/Coin';
import {useNavigation} from '@react-navigation/native';

const Header = ({title, goBack}) => {
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
          <Image source={Search} style={styles.search} />
          <Coin count={'2,048'} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Header;
