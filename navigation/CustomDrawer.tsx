import React from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  ImageSourcePropType,
} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {DrawerContentComponentProps} from '@react-navigation/drawer/lib/typescript/src/types';

import {MainLayout} from '../screens';
import {
  COLORS,
  SIZES,
  icons,
  images,
  FONTS,
  SCREEN_DESCRIBES,
} from '../constants';
import {useAppDispatch, useAppSelector} from '../app/hooks';
import {setSelectedTab} from '../features/tab/tab-slice';

const Drawer = createDrawerNavigator();

const CustomDrawerItem: React.FC<{
  label: string;
  icon: ImageSourcePropType;
  onPress?: any;
  isFocus?: boolean;
}> = ({label, icon, onPress, isFocus}) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        height: 40,
        marginBottom: SIZES.base,
        paddingLeft: SIZES.radius,
        borderRadius: SIZES.base,
        backgroundColor: isFocus ? COLORS.transparentBlack1 : 'transparent',
      }}
      onPress={onPress}>
      <Image
        source={icon}
        style={{width: 20, height: 20, tintColor: 'white'}}
      />
      <Text
        style={{
          marginLeft: 15,
          color: COLORS.white,
          ...FONTS.h3,
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  const {navigation} = props;

  const selectedTab = useAppSelector(state => state.tab.selectedTab);
  const dispatch = useAppDispatch();

  const pressHandler = (tabName: `${SCREEN_DESCRIBES}`) => {
    dispatch(setSelectedTab(tabName));
  };

  return (
    <DrawerContentScrollView
      scrollEnabled={true}
      contentContainerStyle={{flex: 1}}>
      <View
        style={{
          flex: 1,
          paddingHorizontal: SIZES.radius,
        }}>
        {/** Close */}
        <View
          style={{
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
          }}>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={navigation.closeDrawer}>
            <Image
              source={icons.cross}
              style={{
                height: 35,
                width: 35,
                tintColor: COLORS.white,
              }}
            />
          </TouchableOpacity>
        </View>

        {/**  Profile */}
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: SIZES.radius,
          }}>
          <Image
            source={images.profile}
            style={{
              width: 50,
              height: 50,
              borderRadius: SIZES.radius,
            }}
          />
          <View
            style={{
              marginLeft: SIZES.radius,
            }}>
            <Text style={{color: COLORS.white, ...FONTS.h3}}>
              ByProgrammers
            </Text>
            <Text style={{color: COLORS.white, ...FONTS.body4}}>
              View your profile
            </Text>
          </View>
        </TouchableOpacity>

        {/** Drawer Item */}
        <View
          style={{
            marginTop: SIZES.radius,
            flex: 1,
          }}>
          <CustomDrawerItem
            icon={icons.home}
            label={SCREEN_DESCRIBES.Home}
            onPress={() => pressHandler(SCREEN_DESCRIBES.Home)}
            isFocus={selectedTab === SCREEN_DESCRIBES.Home}
          />
          <CustomDrawerItem
            icon={icons.wallet}
            label={SCREEN_DESCRIBES.MyWallet}
            onPress={() => pressHandler(SCREEN_DESCRIBES.MyWallet)}
            isFocus={selectedTab === SCREEN_DESCRIBES.MyWallet}
          />
          <CustomDrawerItem
            icon={icons.notification}
            label={SCREEN_DESCRIBES.Notification}
            onPress={() => pressHandler(SCREEN_DESCRIBES.Notification)}
            isFocus={selectedTab === SCREEN_DESCRIBES.Notification}
          />
          <CustomDrawerItem
            icon={icons.favourite}
            label={SCREEN_DESCRIBES.Favourite}
            onPress={() => pressHandler(SCREEN_DESCRIBES.Favourite)}
            isFocus={selectedTab === SCREEN_DESCRIBES.Favourite}
          />

          {/** Line Divider */}
          <View
            style={{
              height: 1,
              marginLeft: SIZES.radius,
              marginVertical: SIZES.radius,
              backgroundColor: COLORS.lightGray1,
            }}
          />

          <CustomDrawerItem
            icon={icons.location}
            label={SCREEN_DESCRIBES.Location}
          />
          <CustomDrawerItem
            icon={icons.coupon}
            label={SCREEN_DESCRIBES.Coupon}
          />
          <CustomDrawerItem
            icon={icons.setting}
            label={SCREEN_DESCRIBES.Setting}
          />
          <CustomDrawerItem
            icon={icons.profile}
            label={SCREEN_DESCRIBES.Porfile}
          />
          <CustomDrawerItem icon={icons.help} label={SCREEN_DESCRIBES.Help} />
        </View>

        {/** Logout */}
        <View style={{marginBottom: SIZES.padding}}>
          <CustomDrawerItem
            icon={icons.logout}
            label={SCREEN_DESCRIBES.Logout}
          />
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

const CustomDrawer = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.primary,
      }}>
      <Drawer.Navigator
        screenOptions={{
          drawerType: 'slide',
          drawerStyle: {
            flex: 1,
            width: '65%',
            paddingRight: 20,
            backgroundColor: 'transparent',
          },
          overlayColor: 'transparent',
          sceneContainerStyle: {
            backgroundColor: 'transparent',
          },
          headerShown: false,
        }}
        drawerContent={props => {
          return <CustomDrawerContent {...props} />;
        }}
        initialRouteName="MainLayout">
        <Drawer.Screen name="MainLayout" component={MainLayout} />
      </Drawer.Navigator>
    </View>
  );
};

export default CustomDrawer;
