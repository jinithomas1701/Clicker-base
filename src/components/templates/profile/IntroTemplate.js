import React from 'react';

import {View, Image, StyleSheet} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Text from '../../../components/atoms/common/Text';
import Button from '../../../components/atoms/common/Button';

import * as colors from '../../../styles/color';
import * as fonts from '../../../styles/font';

const IntroTemplate = (props) => {
  return (
    <View>
      <Image
        source={require('../../../assets/rawripple.png')}
        style={{
          width: wp(90),
          height: hp(60),
          position: 'absolute',
          top: hp(18),
        }}
      />
      <View style={styles.introContainer}>
        <View style={styles.v1}>
          <Image
            style={styles.logo}
            source={require('../../../assets/logo.png')}
          />
          <Text textStyle={styles.header}>AN IMPORTANT MESSAGE FOR YOU</Text>
          <Text textStyle={styles.p1}>
            Data is the NEW OIL and you should OWN yours !!
          </Text>
          <Text textStyle={styles.p2}>
            You are embarking on a journey where you will own your personal data
            while we anonymize it and enrich your shopping journey in ways never
            imagined before.
          </Text>
          <Text textStyle={styles.p3}>We bring to you two</Text>
          <Text textStyle={styles.p4}>INTERNET REVOLUTIONS!</Text>
          <View style={styles.subContainer}>
            <View style={styles.subContainerElement}>
              <Image
                style={styles.subContainerImageGrowth}
                source={require('../../../assets/personalGrowth.png')}
              />
              <Text textStyle={styles.p5}>
                You are to benefit monetarily and experientially from your data,
                both personal and transactional.
              </Text>
            </View>
            <View style={styles.subContainerElement}>
              <Image
                style={styles.subContainerImageWish}
                source={require('../../../assets/fullfillWish.png')}
              />
              <Text textStyle={{...styles.p5, marginLeft: wp(4.8)}}>
                You will now have the power to Bring the world to fulfill your
                wishes.
              </Text>
            </View>
          </View>
          <Text textStyle={{...styles.p2, marginTop: hp(2)}}>
            Experience the feel of buying better at genuine businesses of your
            interest and not just the ones offered to you by the big brands.
          </Text>
        </View>
        <View tyle={styles.v2}>
          <Button
            title="Continue"
            buttonStyle={styles.button}
            onPress={() => {
              props.navigation.replace('Sign In');
            }}
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  introContainer: {
    backgroundColor: colors.introContainer,
    marginBottom: hp(7.3),
    marginTop: hp(7.3),
    width: wp(90),
    height: hp(85),
    borderRadius: 12,
    //position: 'absolute',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  v1: {
    alignItems: 'center',
  },
  v2: {},
  subContainer: {
    marginTop: hp(2.4),
    backgroundColor: colors.textOnIntroContainer,
    width: wp(80),
    height: hp(20),
    borderRadius: 12,
    justifyContent: 'space-around',
  },
  subContainerElement: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  subContainerImageGrowth: {
    width: wp(9.3),
    height: wp(7.3),
    marginLeft: wp(5.3),
  },
  subContainerImageWish: {
    width: wp(6.6),
    height: wp(5.8),
    marginLeft: wp(5.3),
  },
  logo: {
    width: wp(8.3),
    height: wp(9.2),
    marginTop: hp(2.6),
  },
  header: {
    fontSize: wp(4.2),
    color: colors.textOnIntroContainer,
    marginTop: hp(2.9),
  },
  p1: {
    fontSize: wp(3.7),
    color: colors.textOnIntroContainer,
    marginTop: hp(2.6),
    width: wp(63),
    fontFamily: fonts.semiBold,
    textAlign: 'center',
  },
  p2: {
    fontSize: wp(3.2),
    color: colors.textOnIntroContainer,
    marginTop: hp(1.2),
    width: wp(77),
    textAlign: 'center',
    fontFamily: fonts.regular,
  },
  p3: {
    fontSize: wp(3.7),
    color: colors.textOnIntroContainer,
    marginTop: hp(2.6),
    width: wp(77),
    textAlign: 'center',
    fontFamily: fonts.regular,
  },
  p4: {
    fontSize: wp(3.7),
    color: colors.textOnIntroContainer,
    width: wp(77),
    textAlign: 'center',
    fontFamily: fonts.semiBold,
  },
  p5: {
    fontSize: wp(3.2),
    color: colors.backgroundColor,
    width: wp(55),
    marginLeft: wp(3.8),
    textAlign: 'left',
  },
  button: {
    marginBottom: hp(1.4),
  },
});
export default IntroTemplate;
