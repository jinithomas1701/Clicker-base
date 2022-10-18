import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import * as colors from '../../../styles/color';
import * as fonts from '../../../styles/font';

const TextButton = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={{...styles.button, ...props.buttonStyle}}
      onPress={props.onPress}>
      <Text style={{...styles.buttonText, ...props.textStyle}}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    //borderWidth: 1,
    padding: 5,
    color: colors.textOnBackground,
    fontSize: wp(2.6),
    fontFamily: fonts.regular,
  },
});

export default TextButton;
