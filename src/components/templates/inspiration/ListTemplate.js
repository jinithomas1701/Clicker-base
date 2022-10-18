import React from 'react';
import { StyleSheet, FlatList, Platform } from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import ListItem from '../../molecules/inspiration/ListItemModel';

const ListTemplate = (props) => {

  const FlatListItem = ({ item }) => <ListItem item={item} />;
  return (
    <FlatList
      data={props.items}
      renderItem={FlatListItem}
      keyExtractor={(item) => 'inspiration_list_' + item.id}
      style={styles.container}
      removeClippedSubviews={true}
      initialNumToRender={4}
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

export default ListTemplate;
