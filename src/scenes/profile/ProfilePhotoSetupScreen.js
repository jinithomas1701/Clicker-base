import React, {Component} from 'react';
import {Image} from 'react-native';
import {connect} from 'react-redux';
import {uploadProfilePhoto} from '../../store/actions/userActions';

// import ImagePicker from 'react-native-image-crop-picker';

import RootView from '../../components/atoms/common/RootView';
import ProfilePhotoSetupTemplate from '../../components/templates/profile/ProfilePhotoSetupTemplate';

class ProfilePhotoSetupScreen extends Component {
  state = {
    imageSource: require('../../assets/uploadphoto.png'),
    imageLoaded: false,
    isProfilePhotoSubmitting: false,
  };
  // handleImagePick = () => {
  //   ImagePicker.openPicker({
  //     width: 200,
  //     height: 200,
  //     cropping: true,
  //     includeBase64: true,
  //   })
  //     .then((image) => {
  //       this.setState({
  //         imageSource: {uri: `data:${image.mime};base64,${image.data}`},
  //         imageLoaded: true,
  //         image,
  //       });
  //     })
  //     .catch((error) => {
  //       //User cancelled image selection
  //       console.log(error);
  //     });
  // };
  handleSetPhoto = () => {
    this.setState({isProfilePhotoSubmitting: true});
    let formData = new FormData();
    formData.append('imageFile', {
      uri: this.state.image.path,
      name: this.state.image.path.split('/').pop(),
      type: this.state.image.mime,
    });
    this.props.uploadProfilePhoto(formData, () => {
      this.setState({isProfilePhotoSubmitting: false});
      console.log('Executed');
    });
  };
  render() {
    return (
      <RootView viewStyle={{justifyContent: 'flex-end'}}>
        <ProfilePhotoSetupTemplate
          imageSource={this.state.imageSource}
          imageLoaded={this.state.imageLoaded}
          // handleImagePick={this.handleImagePick}
          handleSetPhoto={this.handleSetPhoto}
          isProfilePhotoSubmitting={this.state.isProfilePhotoSubmitting}
        />
      </RootView>
    );
  }
}

const mapDispatchToProps = () => {
  return {
    uploadProfilePhoto,
  };
};

export default connect(null, mapDispatchToProps())(ProfilePhotoSetupScreen);
