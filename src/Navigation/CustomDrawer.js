import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Image, Pressable, SafeAreaView, Text, View} from 'react-native';
import imagePath from '../../constants/imagePath';
import NavigationStrings from '../../constants/NavigationStrings';
import Button from '../components/Button/Button';
import Coin from '../components/CoinBadge/Coin';
import {styles} from './style';

function CustomDrawer(props) {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.container}>
          <View>
            <View>
              <View>
                <View style={styles.logoGroup}>
                  {/* <Image source={imagePath.drawerLogo} /> */}
                  <Text style={{color: 'black'}}>The Info Tech</Text>
                  <Pressable onPress={() => props.navigation.closeDrawer()}>
                    <Text>X</Text>
                  </Pressable>
                </View>
                <Text style={styles.tagLine}>
                  Explore exciting deals around you.
                </Text>
              </View>

              <View style={styles.profileGroup}>
                <View style={styles.profileImageContainer}>
                  <Image source={imagePath.profileAvatar} />
                </View>
                <View>
                  <Text style={styles.username}>Muhammad Farhan</Text>
                  <Coin count="2,048" />
                </View>
              </View>
            </View>
            <View>
              <DrawerItem
                label={NavigationStrings.ALL_DEALS}
                onPress={() => {
                  props.navigation.navigate(NavigationStrings.BRANDS);
                }}
                icon={() => <Image source={imagePath.icAllDeals} />}
              />
              <DrawerItem
                label={NavigationStrings.CATEGORIES}
                onPress={() => {
                  props.navigation.navigate(NavigationStrings.BRANDS);
                }}
                icon={() => <Image source={imagePath.icCategories} />}
              />
              <DrawerItem
                label={NavigationStrings.WISHLIST}
                onPress={() => {
                  props.navigation.navigate(NavigationStrings.WISHLIST);
                }}
                icon={() => <Image source={imagePath.icWishlist} />}
              />
              <DrawerItem
                label={NavigationStrings.MY_REVIEWS}
                onPress={() => {
                  props.navigation.navigate(NavigationStrings.MY_REVIEWS);
                }}
                icon={() => <Image source={imagePath.icMyReviews} />}
              />
              <DrawerItem
                label={NavigationStrings.SETTINGS}
                onPress={() => {
                  props.navigation.navigate(NavigationStrings.SETTINGS);
                }}
                icon={() => <Image source={imagePath.icSettings} />}
              />
            </View>
          </View>
        </View>
      </DrawerContentScrollView>
      <View style={styles.bottomGroup}>
        <View style={styles.termsGroup}>
          <Text>
            <Text style={styles.linkText}>Terms of service</Text> and{' '}
            <Text style={styles.linkText}>Privacy policy</Text>
          </Text>
          <Text>
            copyright č 2022,<Text style={styles.linkText}> MrFarhan</Text>{' '}
          </Text>
        </View>
        <Button title="Logout" leftIcon={imagePath.rightArrow} />
      </View>
    </View>
  );
}

export default CustomDrawer;
