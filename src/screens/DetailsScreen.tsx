import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useStore} from '../store/store';

const DetailsScreen = ({navigation, route}: any) => {
  console.log(route.params.index);
  const ItemofIndex = useStore((state: any) =>
    route.params.type === 'Coffee' ? state.CoffeeList : state.BeansList,
  )[route.params.index];
  return (
    <View style={styles.ScreenContainer}>
      <Text>DetailsScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ScreenContainer: {},
});

export default DetailsScreen;
