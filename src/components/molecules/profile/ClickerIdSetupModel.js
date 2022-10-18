import React from 'react';
import {View, StyleSheet} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Text from '../../atoms/common/Text';
import Button from '../../atoms/common/Button';
import TextInput from '../../atoms/common/TextInput';

const ClickerIdSetupModel = (props) => {
  //validation
  const enableForm = validateFrom(props);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={styles.container}>
        <Text textStyle={styles.header}>WELCOME TO CLICKER</Text>
        <Text textStyle={styles.description}>
          Clicker id is your thumbprint in the clicker world. Let this define
          your uniqueness when someone new finds you here.
        </Text>
        <TextInput
          placeholder="Clicker Id"
          textInputStyle={styles.textInput}
          onChangeText={props.onChangeClickerIdText}
          value={props.clickerId}
          errorText={props.clickerIdError}
        />
      </View>
      <Button
        title="Next"
        disable={!enableForm}
        onPress={enableForm ? props.onNextPress : () => {}}
      />
    </View>
  );
};

const validateFrom = (props) => {
  if (props.clickerId.length == 0) return false;
  return true;
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
export default ClickerIdSetupModel;
