import React from 'react';
import {View, Image} from 'react-native';

import ClickerIdSetupModel from '../../../components/molecules/profile/ClickerIdSetupModel';

const ClickerIdSetupTemplate = (props) => {
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
      <ClickerIdSetupModel
        {...props}
        onChangeClickerIdText={props.handleClickerIdChange}
        onNextPress={props.handleNextPress}
      />
    </View>
  );
};

export default ClickerIdSetupTemplate;
