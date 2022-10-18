import React from 'react';
import {View, Image} from 'react-native';

import RootView from '../../../components/atoms/common/RootView';
import ProfilePhotoSetupModel from '../../../components/molecules/profile/ProfilePhotoSetupModel';

const ProfilePhotoSetupTemplate = (props) => {
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
      <ProfilePhotoSetupModel {...props} />
    </View>
  );
};

export default ProfilePhotoSetupTemplate;
