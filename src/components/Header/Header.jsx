import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './style';
import DrawerHandle from '../../assets/Icons/DrawerHandle.png';
import Search from '../../assets/Icons/Search.png';
import Coin from '../CoinBadge/Coin';

const Header = ({title, goBack}) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        {goBack ? (
          <TouchableOpacity onPress={() => goBack()}>
            <Text>Go back</Text>
          </TouchableOpacity>
        ) : (
          <View>
            <Image source={DrawerHandle} style={styles.drawerHandle} />
          </View>
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
