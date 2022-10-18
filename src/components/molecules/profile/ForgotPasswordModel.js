import React from 'react';
import {View, StyleSheet} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Text from '../../atoms/common/Text';
import Button from '../../atoms/common/Button';
import TextInput from '../../atoms/common/TextInput';

const ForgotPasswordModel = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={styles.container}>
        <Text textStyle={styles.header}>FIND YOUR ACCOUNT</Text>
        <Text textStyle={styles.description}>
          Enter email address or clicker id linked to your account.
        </Text>
        <TextInput
          placeholder="Email / Clicker ID"
          textInputStyle={styles.textInput}
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
});
export default ForgotPasswordModel;
