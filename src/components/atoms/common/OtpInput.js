import React, {useState} from 'react';
import {TextInput as RTextInput, View, StyleSheet} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import * as colors from '../../../styles/color';
import * as fonts from '../../../styles/font';

const OtpInput = (props) => {
  let inputs = [];
  for (let i = 0; i < props.otpLength; i++) {
    inputs.push(
      <RTextInput
        key={'otpInput_' + i}
        style={{...styles.textInput}}
        maxLength={1}
        value={props.value}
        autoCompleteType="off"
        keyboardType="number-pad"
      />,
    );
  }
  return (
    <View
      style={{
        ...styles.container,
        ...props.textInputStyle,
      }}>
      {inputs}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: wp(84),
    height: 37,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  textInput: {
    borderBottomWidth: 1,
    borderColor: colors.textInputBorder,
    fontSize: wp(3.7),
    width: wp(13),
    height: 37,
    color: colors.textInputColor,
    fontFamily: fonts.regular,
    paddingTop: 0,
    textAlign: 'center',
  },
});

export default OtpInput;
