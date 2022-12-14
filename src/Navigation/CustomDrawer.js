import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {Image, Pressable, Text, View} from 'react-native';
import imagePath from 'constants/imagePath';
import NavigationStrings from 'constants/NavigationStrings';
import Button from 'components/Button/Button';
import Coin from 'components/CoinBadge/Coin';
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
                icon={() => (
                  <View style={{marginRight: -20}}>
                    <Image source={imagePath.icAllDeals} />
                  </View>
                )}
              />
              <DrawerItem
                label={NavigationStrings.CATEGORIES}
                onPress={() => {
                  props.navigation.navigate(NavigationStrings.CATEGORIES);
                }}
                icon={() => (
                  <View style={{marginRight: -20}}>
                    <Image source={imagePath.icCategories} />
                  </View>
                )}
              />
              <DrawerItem
                label={NavigationStrings.WISHLIST}
                onPress={() => {
                  props.navigation.navigate(NavigationStrings.WISHLIST);
                }}
                icon={() => (
                  <View style={{marginRight: -20}}>
                    <Image source={imagePath.icWishlist} />
                  </View>
                )}
              />
              <DrawerItem
                label={NavigationStrings.MY_REVIEWS}
                onPress={() => {
                  props.navigation.navigate(NavigationStrings.MY_REVIEWS);
                }}
                icon={() => (
                  <View style={{marginRight: -20}}>
                    <Image source={imagePath.icMyReviews} />
                  </View>
                )}
              />
              <DrawerItem
                label={NavigationStrings.SETTINGS}
                onPress={() => {
                  props.navigation.navigate(NavigationStrings.SETTINGS);
                }}
                icon={() => (
                  <View style={{marginRight: -20}}>
                    <Image source={imagePath.icSettings} />
                  </View>
                )}
              />
            </View>
          </View>
        </View>
      </DrawerContentScrollView>
      <View style={styles.bottomGroup}>
        <View style={styles.termsGroup}>
          <Pressable
            onPress={() => props.navigation.navigate(NavigationStrings.TOS)}>
            <Text style={styles.linkText}>Terms of Service </Text>
          </Pressable>
          <Text>and </Text>
          <Pressable
            onPress={() =>
              props.navigation.navigate(NavigationStrings.PRIVACY_POLICY)
            }>
            <Text style={styles.linkText}>Privacy Policy</Text>
          </Pressable>
          <Text style={styles.copyright}>
            Copyright ?? 2022,<Text style={styles.linkText}> MrFarhan</Text>
          </Text>
        </View>
        <Button title="Logout" leftIcon={imagePath.rightArrow} />
      </View>
    </View>
  );
}

export default CustomDrawer;
