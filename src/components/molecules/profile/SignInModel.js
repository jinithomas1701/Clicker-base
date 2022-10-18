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

import * as colors from '../../../styles/color';

const SignInModel = (props) => {
  //form validation
  const enableForm = validateFrom(props);
  return (
    <View style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center'}}>
      <KeyboardAvoidingView behavior="position">
        <TextInput
          placeholder="Email / Clicker ID"
          textInputStyle={{marginBottom: hp(1.8)}}
          value={props.username}
          errorText={props.usernameError}
          onChangeText={props.onChangeUsernameText}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          value={props.password}
          errorText={props.passwordError}
          onChangeText={props.onChangePasswordText}
        />
      </KeyboardAvoidingView>
      <View style={{alignItems: 'center', marginBottom: hp(6.7)}}>
        <View
          style={{alignItems: 'flex-end', width: wp(84), marginBottom: hp(3)}}>
          <TextButton
            title="Forgot Password?"
            onPress={() => props.navigation.navigate('Forgot Password')}
          />
        </View>
        <Button
          title="Sign In"
          disable={!enableForm}
          buttonStyle={{marginBottom: hp(3.6)}}
          textStyle={enableForm ? {} : {color: colors.textOnPrimaryShade}}
          activeOpacity={enableForm ? 0.7 : 1}
          onPress={enableForm ? props.onSignInPress : () => {}}
        />
        <Text textStyle={{marginBottom: hp(0.7)}}>Don't have an account?</Text>
        <TextButton
          title="Sign Up"
          textStyle={{color: '#FFF', fontSize: wp(3.7)}}
          onPress={() => props.navigation.replace('Sign Up')}
        />
      </View>
    </View>
  );
};

const validateFrom = (props) => {
  if (props.username.length == 0 || props.password.length == 0) return false;
  return true;
};

export default SignInModel;
