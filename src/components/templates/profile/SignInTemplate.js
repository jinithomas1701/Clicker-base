import React, {Component} from 'react';
import {View, Image} from 'react-native';

import RootView from '../../../components/atoms/common/RootView';
import SignInModel from '../../../components/molecules/profile/SignInModel';

const SignInTemplate = (props) => {
  return (
    <View style={{alignItems: 'center'}}>
      <Image
        source={require('../../../assets/ripple.png')}
        style={{
          width: '100%',
          height: '63%',
          position: 'absolute',
          top: -100,
        }}
      />
      <SignInModel
        {...props}
        onChangeUsernameText={props.handleUsernameChange}
        onChangePasswordText={props.handlePasswordChange}
        onSignInPress={props.handleSignInPress}
      />
    </View>
  );
};

export default SignInTemplate;
