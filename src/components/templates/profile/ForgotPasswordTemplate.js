import React from 'react';
import {View, Image} from 'react-native';

import ForgotPasswordModel from '../../../components/molecules/profile/ForgotPasswordModel';

const ForgotPasswordTemplate = () => {
  return (
    <View style={{alignItems: 'center'}}>
      <Image
        source={require('../../../assets/ripplesmall.png')}
        style={{
          width: '100%',
          height: '63%',
          position: 'absolute',
          top: -200,
        }}
      />
      <ForgotPasswordModel />
    </View>
  );
};

export default ForgotPasswordTemplate;
