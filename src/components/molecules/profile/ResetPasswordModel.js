import React from 'react';
import {View, StyleSheet} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Button from '../../atoms/common/Button';
import TextInput from '../../atoms/common/TextInput';

const ResetPasswordModel = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={styles.container}>
        <TextInput
          placeholder="New Passord"
          textInputStyle={styles.textInput}
          secureTextEntry={true}
        />
      </View>
      <Button title="Next" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: wp(84),
    alignItems: 'center',
  },
  textInput: {
    marginBottom: hp(7),
  },
});
export default ResetPasswordModel;
