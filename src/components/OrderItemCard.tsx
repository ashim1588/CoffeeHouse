import {ImageProps, StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface OrderItemCardProps {
  type: string;
  name: string;
  imagelink_square: ImageProps;
  s: string;
  prices: any;
  ItemPrice: string;
}

const OrderItemCard: React.FC<OrderItemCardProps> = ({
  type,
  name,
  imagelink_square,
  s,
  prices,
  ItemPrice
}) => {
  return (
    <View>
      <Text>OrderItemCard</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default OrderItemCard;
