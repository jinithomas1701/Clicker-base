import React from 'react';

import RootView from '../../components/atoms/common/RootView';
import IntroTemplate from '../../components/templates/profile/IntroTemplate';

const IntroScreen = (props) => {
  return (
    <RootView>
      <IntroTemplate {...props} />
    </RootView>
  );
};

export default IntroScreen;
