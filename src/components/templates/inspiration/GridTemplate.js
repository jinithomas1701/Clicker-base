import React from 'react';
import {FlatList, StyleSheet} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import GridItemModel from '../../molecules/inspiration/GridItemModel';

const GridTemplate = (props) => {
  const FlatListItem = ({item}) => <GridItemModel item={item} />;
  return (
    <FlatList
      columnWrapperStyle={{justifyContent: 'space-between'}}
      data={props.items}
      renderItem={FlatListItem}
      numColumns={2}
      keyExtractor={(item) => 'inspiration_grid_' + item.id}
      style={styles.container}
      removeClippedSubviews={true}
      initialNumToRender={11}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: wp(8),
    paddingRight: wp(8),
    paddingTop: wp(2),
  },
});

export default GridTemplate;
