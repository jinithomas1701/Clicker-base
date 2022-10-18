import React from 'react';
import {View, StyleSheet, Platform, Image} from 'react-native';

import Text from '../../atoms/common/Text';
import ImageButton from '../../atoms/common/ImageButton';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import * as fonts from '../../../styles/font';

const HeaderModel = (props) => {
  return (
    <View style={styles.container}>
      <ImageButton
        image={require('../../../assets/hamburger.png')}
        imageStyle={styles.hamburger}
      />
      <Text textStyle={styles.headerText}>Inspiration</Text>
      <ImageButton
        image={require('../../../assets/iconSearch.png')}
        imageStyle={styles.searchIcon}
      />
      <ImageButton
        activeImage={require('../../../assets/iconListView.png')}
        activeImageStyle={styles.gridIcon}
        inactiveImage={require('../../../assets/iconGridView.png')}
        inactiveImageStyle={styles.gridIcon}
        onPress={props.handleViewChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: wp(8),
    marginRight: wp(8),
    marginTop: wp(2.5),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  hamburger: {
    width: wp(4.8),
    height: wp(4.2),
  },
  searchIcon: {
    width: wp(4.8),
    height: wp(5),
  },
  gridIcon: {
    width: wp(4.8),
    height: wp(4.8),
  },
  headerText: {
    width: wp(55),
    fontFamily: fonts.semiBold,
    fontSize: wp(5.3),
  },
});
export default HeaderModel;
