import React from 'react';
import { View, StyleSheet } from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import * as colors from '../../../styles/color';
import Text from './Text';

const FilterItem = (props) => {
  return (
    <View style={[styles.container, props.styles]}>
      <Text textStyle={styles.text}>{props.eachFilter}</Text>
    </View >
  );
};
const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    borderColor: colors.textOnBackground,
    borderWidth: 1,
    paddingBottom: wp(1.8),
    paddingTop: wp(1.8),
    paddingLeft: wp(3.6),
    paddingRight: wp(3.6),
  },
  text: {
    fontSize: wp(3.7),
  },
});

export default FilterItem;
