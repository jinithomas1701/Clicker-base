import React from 'react';
import {View, Image} from 'react-native';

import SignUpModel from '../../../components/molecules/profile/SignUpModel';

const SignUpTemplate = (props) => {
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
      <SignUpModel
        {...props}
        onChangeFirstNameText={props.handleFirstNameChange}
        onChangeLastNameText={props.handleLastNameChange}
        onChangeEmailText={props.handleEmailChange}
        onChangePasswordText={props.handlePasswordChange}
        onPressNewsLetterSubscription={props.handleNewsletterSubscriptionChange}
        onTextInputFocusOut={props.handleTextInputFocusOut}
        onSignUpPress={props.handleSignUpPress}
      />
    </View>
  );
};

export default SignUpTemplate;
