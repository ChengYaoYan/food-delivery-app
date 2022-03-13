import React from 'react';
import {StyleSheet, Image, FlatList, Text} from 'react-native';
import Animated, {Adaptable} from 'react-native-reanimated';
import {useDrawerProgress} from '@react-navigation/drawer';
import reactotron from 'reactotron-react-native';

import {useFetchBreedsQuery} from '../features/dogs/dogs-api-slice';

const Item: React.FC<{
  url: string;
}> = ({url}) => {
  reactotron.log?.(url);

  return <Image source={{uri: url}} style={{width: '100%', height: 200}} />;
};

const MainLayout = () => {
  const {data, isFetching} = useFetchBreedsQuery();
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

  const renderItem = ({item}: {item: {image: {url: string}; id: string}}) => (
    <Item url={item.image.url} />
  );

  if (isFetching) {
    return <Text>Loading ...</Text>;
  }

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
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
