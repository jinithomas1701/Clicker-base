import React, {Component} from 'react';
import RootView from '../../components/atoms/common/RootView';
import CanvasModel from '../../components/molecules/CanvasModel';
import RoiSelector from '../../components/atoms/RoiSelector';

class ImageUploaderScreen extends Component {
  state = {};
  render() {
    return (
      <RootView viewStyle={{justifyContent: 'center'}}>
        <CanvasModel />
        {/*<RoiSelector width={100} height={100} />*/}
      </RootView>
    );
  }
}

export default ImageUploaderScreen;
