import React from 'react';
import {View, StyleSheet} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import TextButton from '../../atoms/common/TextButton';
import Text from '../../atoms/common/Text';
import OtpInput from '../../atoms/common/OtpInput';

const OtpVerificationModel = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={styles.container}>
        <Text textStyle={styles.header}>ENTER VERIFICATION CODE</Text>
        <Text textStyle={styles.description}>
          Enter the verification code sent to ab****@***.com.
        </Text>
        <OtpInput
          placeholder="Clicker Id"
          textInputStyle={styles.textInput}
          otpLength={5}
        />
        <View style={styles.resend}>
          <TextButton title="Resend Code" />
        </View>
      </View>
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
    marginBottom: hp(2.5),
  },
  resend: {
    alignItems: 'flex-end',
    width: wp(84),
    marginBottom: hp(4.9),
  },
});
export default OtpVerificationModel;
