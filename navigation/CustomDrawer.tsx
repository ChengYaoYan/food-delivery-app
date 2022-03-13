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
import {connect, ConnectedProps} from 'react-redux';

import {MainLayout} from '../screens';
import {
  COLORS,
  SIZES,
  icons,
  images,
  FONTS,
  screenDescribes,
} from '../constants';
import {AppDispatch, RootState} from '../features/store';
import {TabActionType} from '../features/tab/reducer';
import {DrawerContentComponentProps} from '@react-navigation/drawer/lib/typescript/src/types';

function mapStateToProps(state: RootState) {
  return {
    selectedTab: state.tab.selectedTab,
  };
}

function mapDispatchToProps(dispatch: AppDispatch) {
  return {
    setSelectedTab: (selectedTab: string) => {
      return dispatch({
        type: TabActionType.SET_SELECTED_TAB,
        payload: {selectedTab},
      });
    },
  };
}

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

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

const CustomDrawerContent = (
  props: DrawerContentComponentProps & PropsFromRedux,
) => {
  const {navigation, selectedTab, setSelectedTab} = props;

  const pressHandler = (tabName: string) => {
    setSelectedTab(tabName);
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
            label={screenDescribes.Home}
            onPress={() => pressHandler(screenDescribes.Home)}
            isFocus={selectedTab === screenDescribes.Home}
          />
          <CustomDrawerItem
            icon={icons.wallet}
            label={screenDescribes.MyWallet}
            onPress={() => pressHandler(screenDescribes.MyWallet)}
            isFocus={selectedTab === screenDescribes.MyWallet}
          />
          <CustomDrawerItem
            icon={icons.notification}
            label={screenDescribes.Notification}
            onPress={() => pressHandler(screenDescribes.Notification)}
            isFocus={selectedTab === screenDescribes.Notification}
          />
          <CustomDrawerItem
            icon={icons.favourite}
            label={screenDescribes.Favourite}
            onPress={() => pressHandler(screenDescribes.Favourite)}
            isFocus={selectedTab === screenDescribes.Favourite}
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

const CustomDrawer = ({selectedTab, setSelectedTab}: PropsFromRedux) => {
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
          return (
            <CustomDrawerContent
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
              {...props}
            />
          );
        }}
        initialRouteName="MainLayout">
        <Drawer.Screen name="MainLayout" component={MainLayout} />
      </Drawer.Navigator>
    </View>
  );
};

export default connector(CustomDrawer);
