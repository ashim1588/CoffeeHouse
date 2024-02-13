import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useStore} from '../store/store';

const OrderHistoryScreen = () => {
  const OrderHistoryList = useStore((state: any) => state.OrderHistoryList);
  return (
    <View>
      <Text>OrderHistoryScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default OrderHistoryScreen;
