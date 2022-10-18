import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  Dimensions,
  TouchableHighlight,
  Animated,
  PanResponder,
} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import RoiSelector from '../atoms/RoiSelector';

class CanvasModel extends Component {
  state = {
    roi: [],
    image: {actualWidth: 0, actualHeight: 0, width: 0, height: 0},
  };
  handelRoiPress = (event) => {
    console.log(event.nativeEvent.locationX);
    this.setState({
      roiSelection: {
        x: event.nativeEvent.locationX,
        y: event.nativeEvent.locationY,
      },
    });
  };
  handelImagePress = (event) => {
    const regionDefaultWidth = 50;
    const regionDefaultHeight = 50;
    //pan for positioning region selector
    const pan = new Animated.ValueXY();
    //pan for positioning right-middle handle globally
    const panRMG = new Animated.ValueXY();
    //pan for positioning bottom-middle handle globally
    const panBMG = new Animated.ValueXY();
    //pan for positioning top-middle handle globally
    const panTMG = new Animated.ValueXY();
    //pan for positioning left-middle handle globally
    const panLMG = new Animated.ValueXY();
    //pan for sizing width
    const _panRM = new Animated.ValueXY();
    //pan for sizing height
    const _panBM = new Animated.ValueXY();
    //pan for sizing width
    const _panLM = new Animated.ValueXY();
    //pan for sizing height
    const _panTM = new Animated.ValueXY();

    //initiating all pan with the tapped location
    pan.setValue({
      x: event.nativeEvent.locationX,
      y: event.nativeEvent.locationY,
    });
    panRMG.setValue({
      x: event.nativeEvent.locationX,
      y: event.nativeEvent.locationY,
    });
    panBMG.setValue({
      x: event.nativeEvent.locationX,
      y: event.nativeEvent.locationY,
    });
    panTMG.setValue({
      x: event.nativeEvent.locationX,
      y: event.nativeEvent.locationY - 10,
    });
    panLMG.setValue({
      x: event.nativeEvent.locationX - 10,
      y: event.nativeEvent.locationY,
    });
    //setting initial region size
    _panRM.setValue({
      x: regionDefaultWidth,
      y: regionDefaultHeight,
    });
    _panBM.setValue({
      x: regionDefaultWidth,
      y: regionDefaultHeight,
    });
    _panLM.setValue({
      x: 0,
      y: 0,
    });
    _panTM.setValue({
      x: 0,
      y: 0,
    });

    let x = event.nativeEvent.locationX - regionDefaultWidth / 2;
    let y = event.nativeEvent.locationY - regionDefaultHeight / 2;

    this.setState({
      roi: [
        ...this.state.roi,
        {
          x,
          y,
          width: regionDefaultWidth,
          height: regionDefaultHeight,
          pan: pan,
          panRMG: panRMG,
          _panRM: _panRM,
          panBMG: panBMG,
          _panBM: _panBM,
          panTMG: panTMG,
          _panTM: _panTM,
          panLMG: panLMG,
          _panLM: _panLM,
          panResponder: PanResponder.create({
            onMoveShouldSetPanResponder: () => true,
            onPanResponderGrant: () => {
              pan.setOffset({
                x: pan.x._value,
                y: pan.y._value,
              });
              panRMG.setOffset({
                x: panRMG.x._value,
                y: panRMG.y._value,
              });
              panBMG.setOffset({
                x: panBMG.x._value,
                y: panBMG.y._value,
              });
              panTMG.setOffset({
                x: panTMG.x._value,
                y: panTMG.y._value,
              });
              panLMG.setOffset({
                x: panLMG.x._value,
                y: panLMG.y._value,
              });
            },
            onPanResponderMove: (evt, gestureState) => {
              /*return gestureState.moveX > regionDefaultWidth / 2 &&
                gestureState.moveX <
                  this.state.image.width - regionDefaultWidth / 2 &&
                gestureState.moveY >
                  this.state.image.y + this.state.roiSelection.y &&
                gestureState.moveY <
                  this.state.image.y +
                    this.state.image.height +
                    this.state.roiSelection.y * -1
                ? Animated.event([null, {dx: pan.x, dy: pan.y}], {
                    useNativeDriver: false,
                  })(evt, gestureState)
                : null;*/
              Animated.event([null, {dx: pan.x, dy: pan.y}], {
                useNativeDriver: false,
              })(evt, gestureState);
              Animated.event([null, {dx: panRMG.x, dy: panRMG.y}], {
                useNativeDriver: false,
              })(evt, gestureState);
              Animated.event([null, {dx: panBMG.x, dy: panBMG.y}], {
                useNativeDriver: false,
              })(evt, gestureState);
              Animated.event([null, {dx: panTMG.x, dy: panTMG.y}], {
                useNativeDriver: false,
              })(evt, gestureState);
              Animated.event([null, {dx: panLMG.x, dy: panLMG.y}], {
                useNativeDriver: false,
              })(evt, gestureState);
            },
            onPanResponderRelease: () => {
              pan.flattenOffset();
              panRMG.flattenOffset();
              panBMG.flattenOffset();
              panTMG.flattenOffset();
              panLMG.flattenOffset();
            },
          }),
          panResponderRM: PanResponder.create({
            onMoveShouldSetPanResponder: () => true,
            onPanResponderGrant: () => {
              _panRM.setOffset({
                x: _panRM.x._value,
                y: _panRM.y._value,
              });
              panBMG.setOffset({
                x: panBMG.x._value,
                y: panBMG.y._value,
              });
              panTMG.setOffset({
                x: panTMG.x._value,
                y: panTMG.y._value,
              });
            },
            onPanResponderMove: (evt, gestureState) => {
              Animated.event([null, {dx: _panRM.x, dy: _panRM.y}], {
                useNativeDriver: false,
              })(evt, gestureState);
              panBMG.setValue({
                x: _panRM.x._value / 2,
                y: 0,
              });
              panTMG.setValue({
                x: _panRM.x._value / 2,
                y: 0,
              });
            },
            onPanResponderRelease: () => {
              _panRM.flattenOffset();
              panBMG.flattenOffset();
              panTMG.flattenOffset();
            },
          }),
          panResponderLM: PanResponder.create({
            onMoveShouldSetPanResponder: () => true,
            onPanResponderGrant: () => {
              _panLM.setOffset({
                x: _panLM.x._value,
                y: _panLM.y._value,
              });
              panBMG.setOffset({
                x: panBMG.x._value,
                y: panBMG.y._value,
              });
              panTMG.setOffset({
                x: panTMG.x._value,
                y: panTMG.y._value,
              });
              panRMG.setOffset({
                x: panRMG.x._value,
                y: panRMG.y._value,
              });
              _panRM.setOffset({
                x: _panRM.x._value,
                y: _panRM.y._value,
              });
              pan.setOffset({
                x: pan.x._value,
                y: pan.y._value,
              });
            },
            onPanResponderMove: (evt, gestureState) => {
              Animated.event([null, {dx: _panLM.x, dy: _panLM.y}], {
                useNativeDriver: false,
              })(evt, gestureState);
              _panRM.setValue({
                x: -_panLM.x._value,
                y: 0,
              });
              pan.setValue({
                x: _panLM.x._value,
                y: 0,
              });
              panRMG.setValue({
                x: _panLM.x._value,
                y: 0,
              });
              panBMG.setValue({
                x: _panLM.x._value / 2,
                y: 0,
              });
              panTMG.setValue({
                x: _panLM.x._value / 2,
                y: 0,
              });
            },
            onPanResponderRelease: () => {
              pan.flattenOffset();
              _panLM.flattenOffset();
              _panRM.flattenOffset();
              panBMG.flattenOffset();
              panTMG.flattenOffset();
              panRMG.flattenOffset();
            },
          }),
          panResponderBM: PanResponder.create({
            onMoveShouldSetPanResponder: () => true,
            onPanResponderGrant: () => {
              _panBM.setOffset({
                x: _panBM.x._value,
                y: _panBM.y._value,
              });
              panRMG.setOffset({
                x: panRMG.x._value,
                y: panRMG.y._value,
              });
              panLMG.setOffset({
                x: panLMG.x._value,
                y: panLMG.y._value,
              });
            },
            onPanResponderMove: (evt, gestureState) => {
              Animated.event([null, {dx: _panBM.x, dy: _panBM.y}], {
                useNativeDriver: false,
              })(evt, gestureState);
              panRMG.setValue({
                x: 0,
                y: _panBM.y._value / 2,
              });
              panLMG.setValue({
                x: 0,
                y: _panBM.y._value / 2,
              });
            },
            onPanResponderRelease: () => {
              _panBM.flattenOffset();
              panRMG.flattenOffset();
              panLMG.flattenOffset();
            },
          }),
          panResponderTM: PanResponder.create({
            onMoveShouldSetPanResponder: () => true,
            onPanResponderGrant: () => {
              _panTM.setOffset({
                x: _panTM.x._value,
                y: _panTM.y._value,
              });
              _panBM.setOffset({
                x: _panBM.x._value,
                y: _panBM.y._value,
              });
              panBMG.setOffset({
                x: panBMG.x._value,
                y: panBMG.y._value,
              });
              panRMG.setOffset({
                x: panRMG.x._value,
                y: panRMG.y._value,
              });
              panLMG.setOffset({
                x: panLMG.x._value,
                y: panLMG.y._value,
              });
              pan.setOffset({
                x: pan.x._value,
                y: pan.y._value,
              });
            },
            onPanResponderMove: (evt, gestureState) => {
              Animated.event([null, {dx: _panTM.x, dy: _panTM.y}], {
                useNativeDriver: false,
              })(evt, gestureState);
              //changing height
              _panBM.setValue({
                x: 0,
                y: -_panTM.y._value,
              });
              pan.setValue({
                x: 0,
                y: _panTM.y._value,
              });
              panBMG.setValue({
                x: 0,
                y: _panTM.y._value,
              });
              panRMG.setValue({
                x: 0,
                y: _panTM.y._value / 2,
              });
              panLMG.setValue({
                x: 0,
                y: _panTM.y._value / 2,
              });
            },
            onPanResponderRelease: () => {
              pan.flattenOffset();
              _panTM.flattenOffset();
              _panBM.flattenOffset();
              panBMG.flattenOffset();
              panRMG.flattenOffset();
              panLMG.flattenOffset();
            },
          }),
        },
      ],
    });
  };
  componentDidMount() {
    const inputImageDimensions = Image.resolveAssetSource(
      require('../../assets/dummy.png'),
    );
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const reducedHeight =
      (windowWidth / inputImageDimensions.width) * inputImageDimensions.height;
    this.setState({
      image: {
        actualWidth: inputImageDimensions.width,
        actualHeight: inputImageDimensions.height,
        width: windowWidth,
        height: reducedHeight,
        x: 0,
        y: windowHeight / 2 - reducedHeight / 2,
      },
      screen: {
        width: windowWidth,
        height: windowHeight,
      },
    });
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <View style={{borderWidth: 1, alignSelf: 'baseline'}}>
          <TouchableHighlight onPressIn={this.handelImagePress}>
            <Image
              source={require('../../assets/dummy.png')}
              style={{
                width: this.state.image.width,
                height: this.state.image.height,
              }}
            />
          </TouchableHighlight>
          {this.state.roi &&
            this.state.roi.map((region, index) => (
              <RoiSelector
                key={'roi_' + index}
                panHandler={region.panResponder.panHandlers}
                panHandlerRM={region.panResponderRM.panHandlers}
                panHandlerBM={region.panResponderBM.panHandlers}
                panHandlerTM={region.panResponderTM.panHandlers}
                panHandlerLM={region.panResponderLM.panHandlers}
                panRM={region._panRM}
                panBM={region._panBM}
                panTM={region._panTM}
                panLM={region._panLM}
                width={region.width}
                height={region.height}
                left={region.x}
                top={region.y}
                translateX={region.pan.x}
                translateY={region.pan.y}
                translateRMX={region.panRMG.x}
                translateRMY={region.panRMG.y}
                translateBMX={region.panBMG.x}
                translateBMY={region.panBMG.y}
                translateTMX={region.panTMG.x}
                translateTMY={region.panTMG.y}
                translateLMX={region.panLMG.x}
                translateLMY={region.panLMG.y}
              />
            ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rectangle: {
    position: 'absolute',
    zIndex: 99,
    backgroundColor: '#F00',
    borderWidth: 3,
  },
});

export default CanvasModel;
