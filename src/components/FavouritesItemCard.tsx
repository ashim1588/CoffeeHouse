import {ImageProps, StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface FavouritesItemCardProps {
  id: string;
  imagelink_square: ImageProps;
  name: string;
  special_ingredient: string;
  type: string;
  ingredients: string;
  average_rating: number;
  ratings_count: string;
  roasted: string;
  description: string;
  favourite: boolean;
  ToggleFavoriteItem: any;
}

const FavouritesItemCard: React.FC<FavouritesItemCardProps> = ({
  id,
  imagelink_square,
  name,
  special_ingredient,
  type,
  ingredients,
  average_rating,
  ratings_count,
  roasted,
  description,
  favourite,
  ToggleFavoriteItem,
}) => {
  return (
    <View>
      <Text>FavouritesItemCard</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default FavouritesItemCard;
