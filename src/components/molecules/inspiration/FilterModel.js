import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import FilterItem from '../../atoms/common/FilterItem';


const FilterModel = (props) => {
  const filter = [
    'All',
    'Shirt',
    'Shoe',
    'Watch',
    'Trousers',
    'Fashon',
    'Fashon',
    'Fashon',
    'Fashon',
    'Fashon',
  ];
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} style={styles.scroll}>
        {filter.map((eachFilter, index) => {
          return <FilterItem styles={styles.filter} key={index} eachFilter={eachFilter} />;
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: wp(4.2),
  },
  scroll: {
    paddingBottom: wp(2.9)
  },
  filter: {
    marginLeft: wp(7),
  }
});

export default FilterModel;
