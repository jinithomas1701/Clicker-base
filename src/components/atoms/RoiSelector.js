import React, {Component} from 'react';
import {View, StyleSheet, Animated, PanResponder} from 'react-native';

import * as colors from '../../styles/color';

class RoiSelector extends Component {
  render() {
    return (
      <View style={{position: 'absolute'}}>
        {/* < ROI SELECTOR */}
        <Animated.View
          {...this.props.panHandler}
          style={{
            ...styles.rectangle,
            width: this.props.panRM.x,
            height: this.props.panBM.y,
            left: this.props.translateX,
            top: this.props.translateY,
          }}></Animated.View>
        {/* ROI SELECTOR /> */}
        {/* < LM */}
        <Animated.View
          {...this.props.panHandlerLM}
          style={{
            ...styles.lm,
            top: this.props.translateLMY,
            left: this.props.translateLMX,
            transform: [{translateX: this.props.panLM.x}, {translateY: 5}],
          }}
        />
        {/* LM /> */}
        {/* < TM */}
        <Animated.View
          {...this.props.panHandlerTM}
          style={{
            ...styles.tm,
            top: this.props.translateTMY,
            left: this.props.translateTMX,
            transform: [{translateX: 5}, {translateY: this.props.panTM.y}],
          }}
        />
        {/* TM /> */}
        {/* < RM */}
        <Animated.View
          {...this.props.panHandlerRM}
          style={{
            ...styles.rm,
            top: this.props.translateRMY,
            left: this.props.translateRMX,
            transform: [{translateX: this.props.panRM.x}, {translateY: 5}],
          }}
        />
        {/* RM /> */}
        {/* < BM */}
        <Animated.View
          {...this.props.panHandlerBM}
          style={{
            ...styles.bm,
            left: this.props.translateBMX,
            top: this.props.translateBMY,
            transform: [{translateX: 5}, {translateY: this.props.panBM.y}],
          }}
        />
        {/* BM /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rectangle: {
    backgroundColor: colors.roiSelectorBackground,
    borderWidth: 3,
    //borderRadius: 500,
    borderColor: colors.secondary,
    position: 'absolute',
    //zIndex: 1,
  },
  lm: {
    backgroundColor: colors.secondary,
    width: 10,
    height: 40,
    position: 'absolute',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  tm: {
    backgroundColor: colors.secondary,
    height: 10,
    width: 40,
    position: 'absolute',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  rm: {
    backgroundColor: colors.secondary,
    width: 10,
    height: 40,
    position: 'absolute',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  bm: {
    backgroundColor: colors.secondary,
    height: 10,
    width: 40,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    position: 'absolute',
  },
});

export default RoiSelector;
