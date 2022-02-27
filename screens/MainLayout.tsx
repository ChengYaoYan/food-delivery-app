import React from 'react';
import {Text, StyleSheet} from 'react-native';
import Animated, {Adaptable} from 'react-native-reanimated';
import {useDrawerProgress} from '@react-navigation/drawer';

const MainLayout = () => {
  const progress = useDrawerProgress();

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

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <Text>main layout</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});

export default MainLayout;
