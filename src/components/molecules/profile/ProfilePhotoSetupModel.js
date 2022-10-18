import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Text from '../../atoms/common/Text';
import Button from '../../atoms/common/Button';
import TextButton from '../../atoms/common/TextButton';
import * as colors from '../../../styles/color';

const ProfilePhotoSetupModel = (props) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={styles.container}>
        <TouchableOpacity onPress={props.handleImagePick} activeOpacity={0.7}>
          <Image
            source={props.imageSource}
            style={
              props.imageLoaded
                ? {...styles.photoUploader, borderWidth: 1}
                : {...styles.photoUploader}
            }
          />
        </TouchableOpacity>
        <Text textStyle={styles.header}>PICK YOUR PROFILE PHOTO</Text>
        <Text textStyle={styles.description}>
          Take a photo or choose from your photo gallery.
        </Text>
      </View>
      <Button
        title="Set As Profile Photo"
        buttonStyle={styles.button}
        disable={!props.imageLoaded}
        onPress={props.handleSetPhoto}
        isLoading={props.isProfilePhotoSubmitting}
      />
      <TextButton title="Skip" textStyle={styles.skip} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp(84),
    alignItems: 'center',
  },
  photoUploader: {
    width: wp(25),
    height: wp(25),
    marginBottom: hp(5.5),
    borderRadius: wp(3.2),
    borderColor: colors.textOnBackground,
  },
  header: {
    fontSize: wp(4.2),
    textAlign: 'center',
    marginBottom: hp(1.6),
  },
  description: {
    fontSize: wp(3.2),
    textAlign: 'center',
    width: wp(75),
    marginBottom: hp(5.9),
  },
  textInput: {
    marginBottom: hp(8.8),
  },
  skip: {
    fontSize: wp(3.7),
  },
  button: {
    marginBottom: hp(4),
  },
});
export default ProfilePhotoSetupModel;
