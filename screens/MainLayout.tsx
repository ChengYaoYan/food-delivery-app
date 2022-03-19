import React from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  GestureResponderEvent,
  TouchableWithoutFeedback,
  ViewStyle,
  StyleProp,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Animated, {
  Adaptable,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import {useDrawerProgress} from '@react-navigation/drawer';
import Home from './Home';
import Cart from './Cart';
import Notification from './Notification';
import Search from './Search';
import Favourite from './Favourite';

import {Header} from '../components';
import {useAppSelector, useAppDispatch} from '../app/hooks';
import {
  COLORS,
  dummyData,
  icons,
  SIZES,
  SCREEN_DESCRIBES,
  FONTS,
  SCREENS,
} from '../constants';
import {setSelectedTab} from '../features/tab/tab-slice';
import {FlatList} from 'react-native-gesture-handler';
import constant from '../constants/constant';

const TabButton: React.FC<{
  label: SCREEN_DESCRIBES;
  icon: ImageSourcePropType;
  onPress: (event: GestureResponderEvent) => void;
  isFocus: boolean;
  outerContainerStyle: StyleProp<ViewStyle>;
  innerContainerStyle: StyleProp<ViewStyle>;
}> = ({
  label,
  icon,
  onPress,
  isFocus,
  outerContainerStyle,
  innerContainerStyle,
}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Animated.View
        style={[
          {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          },
          outerContainerStyle,
        ]}>
        <Animated.View
          style={[
            {
              flexDirection: 'row',
              width: '80%',
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 25,
            },
            innerContainerStyle,
          ]}>
          <Image
            source={icon}
            style={{
              width: 20,
              height: 20,
              tintColor: isFocus ? COLORS.white : COLORS.gray,
            }}
          />

          {isFocus && (
            <Text
              numberOfLines={1}
              style={{
                marginLeft: SIZES.base,
                color: isFocus ? COLORS.white : COLORS.gray,
                ...FONTS.h3,
              }}>
              {label}
            </Text>
          )}
        </Animated.View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const MainLayout = () => {
  const FLEX_DURATION = 500,
    COLOR_DURATION = 500,
    FLEX_ORIGINAL_VALUE = 1,
    FLEX_TARGET_VALUE = 5;

  const progress = useDrawerProgress();
  const selectedTab = useAppSelector(state => state.tab.selectedTab);
  const dispatch = useAppDispatch();
  const flatListRef = React.useRef<FlatList>(null);

  // Reanimated Shared Value
  const homeTabFlex = useSharedValue(FLEX_ORIGINAL_VALUE);
  const homeTabColor = useSharedValue(COLORS.white);
  const searchTabFlex = useSharedValue(FLEX_ORIGINAL_VALUE);
  const searchTabColor = useSharedValue(COLORS.white);
  const cartTabFlex = useSharedValue(FLEX_ORIGINAL_VALUE);
  const cartTabColor = useSharedValue(COLORS.white);
  const favouriteTabFlex = useSharedValue(FLEX_ORIGINAL_VALUE);
  const favouriteTabColor = useSharedValue(COLORS.white);
  const notificationTabFlex = useSharedValue(FLEX_ORIGINAL_VALUE);
  const notificationTabColor = useSharedValue(COLORS.white);

  // Reanimated styles
  const homeTabFlexStyle = useAnimatedStyle(() => {
    return {
      flex: withTiming(homeTabFlex.value, {
        duration: FLEX_DURATION,
        easing: Easing.bezier(0.22, 1, 0.36, 1).factory(),
      }),
    };
  });
  const homeTabColorStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: withTiming(homeTabColor.value, {
        duration: COLOR_DURATION,
        easing: Easing.bezier(0.16, 1, 0.3, 1).factory(),
      }) as any as string,
    };
  });
  const searchTabFlexStyle = useAnimatedStyle(() => {
    return {
      flex: withTiming(searchTabFlex.value, {
        duration: FLEX_DURATION,
        easing: Easing.bezier(0.22, 1, 0.36, 1).factory(),
      }),
    };
  });
  const searchTabColorStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: withTiming(searchTabColor.value, {
        duration: COLOR_DURATION,
        easing: Easing.bezier(0.16, 1, 0.3, 1).factory(),
      }) as any as string,
    };
  });
  const cartTabFlexStyle = useAnimatedStyle(() => {
    return {
      flex: withTiming(cartTabFlex.value, {
        duration: FLEX_DURATION,
        easing: Easing.bezier(0.22, 1, 0.36, 1).factory(),
      }),
    };
  });
  const cartTabColorStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: withTiming(cartTabColor.value, {
        duration: COLOR_DURATION,
        easing: Easing.bezier(0.16, 1, 0.3, 1).factory(),
      }) as any as string,
    };
  });
  const favouriteTabFlexStyle = useAnimatedStyle(() => {
    return {
      flex: withTiming(favouriteTabFlex.value, {
        duration: FLEX_DURATION,
        easing: Easing.bezier(0.22, 1, 0.36, 1).factory(),
      }),
    };
  });
  const favouriteTabColorStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: withTiming(favouriteTabColor.value, {
        duration: COLOR_DURATION,
        easing: Easing.bezier(0.16, 1, 0.3, 1).factory(),
      }) as any as string,
    };
  });
  const notificationTabFlexStyle = useAnimatedStyle(() => {
    return {
      flex: withTiming(notificationTabFlex.value, {
        duration: FLEX_DURATION,
        easing: Easing.bezier(0.22, 1, 0.36, 1).factory(),
      }),
    };
  });
  const notificationTabColorStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: withTiming(notificationTabColor.value, {
        duration: COLOR_DURATION,
        easing: Easing.bezier(0.16, 1, 0.3, 1).factory(),
      }) as any as string,
    };
  });

  const scaleY = Animated.interpolateNode(progress as Adaptable<number>, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });

  const borderRadius = Animated.interpolateNode(progress as Adaptable<number>, {
    inputRange: [0, 1],
    outputRange: [0, 25],
  });

  const animatedStyle = {
    transform: [{scaleY}],
    borderRadius,
  };

  const pressHandler = (tabName: `${SCREEN_DESCRIBES}`) => {
    dispatch(setSelectedTab(tabName));
  };

  React.useEffect(() => {
    if (selectedTab === SCREEN_DESCRIBES.Home) {
      flatListRef.current?.scrollToIndex({
        index: 0,
        animated: false,
      });
      homeTabFlex.value = FLEX_TARGET_VALUE;
      homeTabColor.value = COLORS.primary;
    } else {
      homeTabFlex.value = FLEX_ORIGINAL_VALUE;
      homeTabColor.value = COLORS.white;
    }

    if (selectedTab === SCREEN_DESCRIBES.Search) {
      flatListRef.current?.scrollToIndex({
        index: 1,
        animated: false,
      });
      searchTabFlex.value = FLEX_TARGET_VALUE;
      searchTabColor.value = COLORS.primary;
    } else {
      searchTabFlex.value = FLEX_ORIGINAL_VALUE;
      searchTabColor.value = COLORS.white;
    }

    if (selectedTab === SCREEN_DESCRIBES.Cart) {
      flatListRef.current?.scrollToIndex({
        index: 2,
        animated: false,
      });
      cartTabFlex.value = FLEX_TARGET_VALUE;
      cartTabColor.value = COLORS.primary;
    } else {
      cartTabFlex.value = FLEX_ORIGINAL_VALUE;
      cartTabColor.value = COLORS.white;
    }

    if (selectedTab === SCREEN_DESCRIBES.Favourite) {
      flatListRef.current?.scrollToIndex({
        index: 3,
        animated: false,
      });
      favouriteTabFlex.value = FLEX_TARGET_VALUE;
      favouriteTabColor.value = COLORS.primary;
    } else {
      favouriteTabFlex.value = FLEX_ORIGINAL_VALUE;
      favouriteTabColor.value = COLORS.white;
    }

    if (selectedTab === SCREEN_DESCRIBES.Notification) {
      flatListRef.current?.scrollToIndex({
        index: 4,
        animated: false,
      });
      notificationTabFlex.value = FLEX_TARGET_VALUE;
      notificationTabColor.value = COLORS.primary;
    } else {
      notificationTabFlex.value = FLEX_ORIGINAL_VALUE;
      notificationTabColor.value = COLORS.white;
    }
  }, [
    selectedTab,
    homeTabFlex,
    homeTabColor,
    searchTabFlex,
    searchTabColor,
    cartTabFlex,
    cartTabColor,
    favouriteTabFlex,
    favouriteTabColor,
    notificationTabFlex,
    notificationTabColor,
  ]);

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      {/** Header */}
      <Header
        title={selectedTab.toUpperCase()}
        containerStyle={styles.headerContainer}
        leftComponent={
          <TouchableOpacity style={styles.leftComponentContainerStyle}>
            <Image source={icons.menu} />
          </TouchableOpacity>
        }
        rightComponent={
          <TouchableOpacity>
            <Image
              // todo: replace profile image source with API
              source={dummyData.myProfile.profile_image}
              style={{width: 40, height: 40, borderRadius: SIZES.radius}}
            />
          </TouchableOpacity>
        }
      />

      {/** Content */}
      <View
        style={{
          flex: 1,
        }}>
        <FlatList
          ref={flatListRef}
          horizontal
          scrollEnabled={false}
          pagingEnabled
          snapToAlignment="center"
          showsHorizontalScrollIndicator={false}
          data={constant.bottom_tabs}
          keyExtractor={item => `${item.id}`}
          renderItem={({item}) => {
            return (
              <View
                style={{
                  width: SIZES.width,
                  height: SIZES.height,
                }}>
                {item.label === SCREENS.Home && <Home />}
                {item.label === SCREENS.Search && <Search />}
                {item.label === SCREENS.Cart && <Cart />}
                {item.label === SCREENS.Favourite && <Favourite />}
                {item.label === SCREENS.Notification && <Notification />}
              </View>
            );
          }}
        />
      </View>

      {/** Footer */}
      <View style={styles.footerContainer}>
        {/** Shadow */}
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 0, y: 4}}
          colors={[COLORS.transparent, COLORS.lightGray1]}
          style={styles.linearGradientContainer}
        />

        {/** Tabs */}
        <View style={styles.tabContainer}>
          <TabButton
            label={SCREEN_DESCRIBES.Home}
            icon={icons.home}
            onPress={() => pressHandler(SCREEN_DESCRIBES.Home)}
            isFocus={SCREEN_DESCRIBES.Home === selectedTab}
            outerContainerStyle={homeTabFlexStyle}
            innerContainerStyle={homeTabColorStyle}
          />
          <TabButton
            label={SCREEN_DESCRIBES.Search}
            icon={icons.search}
            onPress={() => pressHandler(SCREEN_DESCRIBES.Search)}
            isFocus={SCREEN_DESCRIBES.Search === selectedTab}
            outerContainerStyle={searchTabFlexStyle}
            innerContainerStyle={searchTabColorStyle}
          />
          <TabButton
            label={SCREEN_DESCRIBES.Cart}
            icon={icons.cart}
            onPress={() => pressHandler(SCREEN_DESCRIBES.Cart)}
            isFocus={SCREEN_DESCRIBES.Cart === selectedTab}
            outerContainerStyle={cartTabFlexStyle}
            innerContainerStyle={cartTabColorStyle}
          />
          <TabButton
            label={SCREEN_DESCRIBES.Favourite}
            icon={icons.favourite}
            onPress={() => pressHandler(SCREEN_DESCRIBES.Favourite)}
            isFocus={SCREEN_DESCRIBES.Favourite === selectedTab}
            outerContainerStyle={favouriteTabFlexStyle}
            innerContainerStyle={favouriteTabColorStyle}
          />
          <TabButton
            label={SCREEN_DESCRIBES.Notification}
            icon={icons.notification}
            onPress={() => pressHandler(SCREEN_DESCRIBES.Notification)}
            isFocus={SCREEN_DESCRIBES.Notification === selectedTab}
            outerContainerStyle={notificationTabFlexStyle}
            innerContainerStyle={notificationTabColorStyle}
          />
        </View>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    height: 50,
    paddingHorizontal: SIZES.padding,
    marginTop: 40,
    alignItems: 'center',
  },
  leftComponentContainerStyle: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: COLORS.gray2,
    borderRadius: SIZES.radius,
  },
  footerContainer: {
    height: 100,
    justifyContent: 'flex-end',
  },
  linearGradientContainer: {
    position: 'absolute',
    top: -20,
    left: 0,
    right: 0,
    height: 100,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  tabContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: SIZES.radius,
    paddingBottom: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    backgroundColor: COLORS.white,
  },
});

export default MainLayout;
