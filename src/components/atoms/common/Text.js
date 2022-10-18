import React from 'react';
import {Text as RText, StyleSheet} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import * as colors from '../../../styles/color';
import * as fonts from '../../../styles/font';

const Text = (props) => {
  return (
    <RText style={{...styles.textStyle, ...props.textStyle}}>
      {props.children}
    </RText>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    color: colors.textOnBackground,
    fontSize: wp(2.6),
    fontFamily: fonts.regular,
  },
});

export default Text;
