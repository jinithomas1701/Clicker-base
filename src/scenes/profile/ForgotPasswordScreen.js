import React, {Component} from 'react';
import {Image} from 'react-native';

import RootView from '../../components/atoms/common/RootView';
import ForgotPasswordTemplate from '../../components/templates/profile/ForgotPasswordTemplate';

class ClickerIdSetupScreen extends Component {
  state = {};
  render() {
    return (
      <RootView viewStyle={{justifyContent: 'flex-end'}}>
        <ForgotPasswordTemplate />
      </RootView>
    );
  }
}

export default ClickerIdSetupScreen;
