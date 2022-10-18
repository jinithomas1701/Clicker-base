import React from 'react';
import {View, StyleSheet} from 'react-native';

import * as colors from '../../../styles/color';

const RootView = (props) => {
  return (
    <View style={{...styles.rootContainer, ...props.viewStyle}}>
      {props.children}
    </View>
  );
};
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    width: '100%',
  },
});
export default RootView;
