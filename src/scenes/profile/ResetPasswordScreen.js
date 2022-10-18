import React, {Component} from 'react';

import RootView from '../../components/atoms/common/RootView';
import ResetPasswordTemplate from '../../components/templates/profile/ResetPasswordTemplate';

class ClickerIdSetupScreen extends Component {
  state = {};
  render() {
    return (
      <RootView viewStyle={{justifyContent: 'flex-end'}}>
        <ResetPasswordTemplate />
      </RootView>
    );
  }
}

export default ClickerIdSetupScreen;
