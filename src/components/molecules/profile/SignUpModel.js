import React from 'react';
import {View, KeyboardAvoidingView} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Button from '../../atoms/common/Button';
import TextButton from '../../atoms/common/TextButton';
import TextInput from '../../atoms/common/TextInput';
import Text from '../../atoms/common/Text';
import CheckBox from '../../atoms/common/CheckBox';

import * as colors from '../../../styles/color';

const SignUpModel = (props) => {
  const enableForm = validateFrom(props);
  return (
    <View style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center'}}>
      <KeyboardAvoidingView behavior="position">
        <TextInput
          placeholder="First Name"
          textInputStyle={{marginBottom: hp(1.8)}}
          maxLength={40}
          value={props.firstName}
          onChangeText={props.onChangeFirstNameText}
          errorText={props.firstNameError}
          onBlur={() => {
            props.onTextInputFocusOut('firstName');
          }}
        />
        <TextInput
          placeholder="Last Name"
          textInputStyle={{marginBottom: hp(1.8)}}
          maxLength={40}
          value={props.lastName}
          onChangeText={props.onChangeLastNameText}
          errorText={props.lastNameError}
          onBlur={() => {
            props.onTextInputFocusOut('lastName');
          }}
        />
        <TextInput
          placeholder="Email"
          textInputStyle={{marginBottom: hp(1.8)}}
          maxLength={40}
          value={props.email}
          onChangeText={props.onChangeEmailText}
          errorText={props.emailError}
          onBlur={() => {
            props.onTextInputFocusOut('email');
          }}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          textInputStyle={{marginBottom: hp(1.8)}}
          maxLength={40}
          value={props.password}
          onChangeText={props.onChangePasswordText}
          errorText={props.passwordError}
          onBlur={() => {
            props.onTextInputFocusOut('password');
          }}
        />
      </KeyboardAvoidingView>
      <View style={{alignItems: 'center', marginBottom: hp(6.7)}}>
        <View style={{width: wp(84), marginBottom: hp(2)}}>
          <CheckBox
            rightText="Subscribe to newsletter"
            isChecked={props.newsletterSubscription}
            onPress={props.onPressNewsLetterSubscription}
          />
        </View>
        <View style={{width: wp(84)}}>
          <Text textStyle={{marginBottom: hp(0.1)}}>
            By pressing the Sign Up button, you agree to our
          </Text>
          <Text textStyle={{marginBottom: hp(2)}}>
            Terms & Connditions, and Privacy Policy
          </Text>
        </View>
        <Button
          title="Sign Up"
          disable={!enableForm}
          buttonStyle={{marginBottom: hp(3.6)}}
          textStyle={enableForm ? {} : {color: colors.textOnPrimaryShade}}
          activeOpacity={enableForm ? 0.7 : 1}
          onPress={enableForm ? props.onSignUpPress : () => {}}
        />
        <Text textStyle={{marginBottom: hp(0.7)}}>
          Already have an account?
        </Text>
        <TextButton
          title="Sign In"
          textStyle={{color: '#FFF', fontSize: wp(3.7)}}
          onPress={() => props.navigation.replace('Sign In')}
        />
      </View>
    </View>
  );
};

const validateFrom = (props) => {
  if (
    props.firstName.length == 0 ||
    props.lastName.length == 0 ||
    props.email.length == 0 ||
    props.password.length == 0
  )
    return false;
  return true;
};

export default SignUpModel;
