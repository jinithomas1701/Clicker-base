import React from 'react';
import {View, StyleSheet} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Text from './Text';

import * as colors from '../../../styles/color';

const AvailabilityStatus = (props) => {
  return (
    <View style={styles.container}>
      <Text textStyle={props.availability === true ? styles.available : {}}>
        {props.statusText}
      </Text>
      <View
        style={
          props.availability === true
            ? {
                ...styles.circleStyle,
                borderColor: colors.lightGreen,
                backgroundColor: colors.lightGreen,
              }
            : styles.circleStyle
        }></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  available: {
    color: colors.lightGreen,
  },
  circleStyle: {
    marginLeft: wp(1.3),
    borderRadius: wp(8),
    width: wp(2.1),
    height: wp(2.1),
    borderWidth: wp(0.3),
    borderColor: colors.textOnBackground,
  },
});

export default AvailabilityStatus;
