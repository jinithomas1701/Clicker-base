import React from 'react';
import {StyleSheet, Text} from 'react-native';

import {default as RCheckBox} from 'react-native-check-box';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import * as colors from '../../../styles/color';
import * as fonts from '../../../styles/font';

const CheckBox = (props) => {
  return (
    <RCheckBox
      style={styles.checkBox}
      onClick={() => {}}
      checkBoxColor={colors.primary}
      isChecked={props.isChecked}
      uncheckedCheckBoxColor={colors.checkBoxBorder}
      rightTextView={
        <Text
          style={{
            color: colors.textOnBackground,
            fontSize: wp(2.6),
            paddingLeft: wp(2.6),
            fontFamily: fonts.regular,
          }}>
          {props.rightText}
        </Text>
      }
      rightTextStyle={{color: '#F00'}}
      leftTextStyle={props.leftTextStyle}
      onClick={props.onPress}
    />
  );
};
const styles = StyleSheet.create({
  checkBox: {padding: 0, backgroundColor: colors.backgroundColor},
});
export default CheckBox;
