import {ScrollView, StatusBar, StyleSheet, View} from 'react-native';
import React from 'react';
import {useStore} from '../store/store';
import {COLORS} from '../theme/theme';
import ImageBackgroundInfo from '../components/ImageBackgroundInfo';

const DetailsScreen = ({navigation, route}: any) => {
  const ItemofIndex = useStore((state: any) =>
    route.params.type === 'Coffee' ? state.CoffeeList : state.BeansList,
  )[route.params.index];

  const addToFavoriteList = useStore((state: any) => state.addToFavoriteList);
  const deleteFromFavoriteList = useStore(
    (state: any) => state.deleteFromFavoriteList,
  );
  const ToggleFavourite = (favourite: boolean, type: string, id: string) => {
    favourite ? deleteFromFavoriteList(type, id) : addToFavoriteList(type, id);
  };

  const BackHandler = () => {
    navigation.pop();
  };

  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}>
        <ImageBackgroundInfo
          EnableBackHandler={true}
          imagelink_portrait={ItemofIndex.imagelink_portrait}
          type={ItemofIndex.type}
          id={ItemofIndex.id}
          favourite={ItemofIndex.favourite}
          name={ItemofIndex.name}
          special_ingredient={ItemofIndex.special_ingredient}
          ingredients={ItemofIndex.ingredients}
          average_rating={ItemofIndex.average_rating}
          ratings_count={ItemofIndex.ratings_count}
          roasted={ItemofIndex.roasted}
          BackHandler={BackHandler}
          ToggleFavourite={ToggleFavourite}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },
  ScrollViewFlex: {
    flexGrow: 1,
  },
});

export default DetailsScreen;
