import React, {useState} from 'react';
import {
  TextInput as RTextInput,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Text,
} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import * as colors from '../../../styles/color';
import * as fonts from '../../../styles/font';

const TextInput = (props) => {
  const [securePassword, setSecurePassword] = useState(true);
  return (
    <View style={{...props.textInputStyle}}>
      <View
        style={
          !props.errorText || props.errorText === ''
            ? {
                ...styles.container,
              }
            : {
                ...styles.container,
                borderColor: colors.primary,
              }
        }>
        <RTextInput
          placeholder={props.placeholder}
          placeholderTextColor={colors.placeholder}
          secureTextEntry={securePassword && props.secureTextEntry}
          style={{...styles.textInput}}
          maxLength={props.maxLength}
          value={props.value}
          onChangeText={props.onChangeText}
          onBlur={props.onBlur}
          autoCompleteType="off"
        />
        {props.secureTextEntry && (
          <TouchableOpacity
            activeOpacity={0.7}
            onPressIn={() => setSecurePassword(false)}
            onPressOut={() => setSecurePassword(true)}>
            <View style={styles.eyeButtonContainer}>
              <Image
                source={require('../../../assets/eye.png')}
                style={styles.eyeButton}
              />
            </View>
          </TouchableOpacity>
        )}
      </View>
      <Text style={styles.error}>{props.errorText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: colors.textInputBorder,
    width: wp(84),
    height: 37,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textInput: {
    fontSize: wp(3.7),
    height: 37,
    width: wp(78),
    color: colors.textInputColor,
    fontFamily: fonts.regular,
    paddingTop: 0,
  },
  eyeButtonContainer: {
    padding: 5,
  },
  eyeButton: {
    width: wp(4.1),
    height: wp(3),
  },
  error: {
    color: colors.primary,
    fontSize: wp(3.2),
    width: wp(78),
    minHeight: hp(1.6),
  },
});

export default TextInput;
