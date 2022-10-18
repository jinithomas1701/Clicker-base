import React, {Component} from 'react';

import RootView from '../../components/atoms/common/RootView';
import OtpVerificationTemplate from '../../components/templates/profile/OtpVerificationTemplate';

class OtpVerificationScreen extends Component {
  state = {};
  render() {
    return (
      <RootView viewStyle={{justifyContent: 'flex-end'}}>
        <OtpVerificationTemplate />
      </RootView>
    );
  }
}

export default OtpVerificationScreen;
