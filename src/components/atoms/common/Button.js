import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import * as colors from '../../../styles/color';
import * as fonts from '../../../styles/font';

const Button = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={props.disable ? 1 : props.isLoading ? 1 : 0.7}
      style={
        props.disable
          ? {
              ...styles.button,
              ...props.buttonStyle,
              backgroundColor: colors.primaryShade,
            }
          : {
              ...styles.button,
              ...props.buttonStyle,
            }
      }
      onPress={!props.isLoading ? props.onPress : () => {}}>
      <Text style={{...styles.buttonText, ...props.textStyle}}>
        {!props.isLoading ? props.title : ''}
      </Text>
      {props.isLoading && (
        <ActivityIndicator color={'#FFF'} style={{position: 'absolute'}} />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: wp(84),
    backgroundColor: colors.primary,
    borderRadius: wp(3.2),
    height: hp(5.9),
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: colors.shadow,
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 1,
    shadowRadius: 6,
    elevation: 4,
  },
  buttonText: {
    color: colors.textOnPrimary,
    fontSize: wp(3.7),
    fontFamily: fonts.semiBold,
  },
});

export default Button;
