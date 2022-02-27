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
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';

import {MainLayout} from '../screens';
import {
  COLORS,
  SIZES,
  icons,
  images,
  FONTS,
  screenDescribes,
} from '../constants';

const Drawer = createDrawerNavigator();

const CustomDrawerItem: React.FC<{
  label: string;
  icon: ImageSourcePropType;
}> = ({label, icon}) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        height: 40,
        marginBottom: SIZES.base,
        paddingLeft: SIZES.radius,
        borderRadius: SIZES.base,
      }}>
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
          <CustomDrawerItem icon={icons.home} label={screenDescribes.Home} />
          <CustomDrawerItem
            icon={icons.wallet}
            label={screenDescribes.MyWallet}
          />
          <CustomDrawerItem
            icon={icons.notification}
            label={screenDescribes.Notification}
          />
          <CustomDrawerItem
            icon={icons.favourite}
            label={screenDescribes.Favourite}
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
            label={screenDescribes.Location}
          />
          <CustomDrawerItem
            icon={icons.coupon}
            label={screenDescribes.Coupon}
          />
          <CustomDrawerItem
            icon={icons.setting}
            label={screenDescribes.Setting}
          />
          <CustomDrawerItem
            icon={icons.profile}
            label={screenDescribes.Porfile}
          />
          <CustomDrawerItem icon={icons.help} label={screenDescribes.Help} />
        </View>

        {/** Logout */}
        <View style={{marginBottom: SIZES.padding}}>
          <CustomDrawerItem
            icon={icons.logout}
            label={screenDescribes.Logout}
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
