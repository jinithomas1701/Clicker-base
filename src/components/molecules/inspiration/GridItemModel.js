import React from 'react';
import {View, Image, StyleSheet, Dimensions} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Text from '../../atoms/common/Text';

const GridItemModel = (props) => {
  const item = props.item;

  return (
    <View style={styles.container}>
      <Image source={item.img} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text textStyle={styles.productCount}>
          {item.productCount} Products
        </Text>
        <Text textStyle={styles.daysInfo}>{item.clickDay} d</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp(40.2),
  },
  image: {
    width: wp(40.2),
    height: wp(40.2),
    borderRadius: wp(5),
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginTop: hp(1.2),
    marginBottom: hp(2.4),
  },
  productCount: {
    fontSize: wp(3.7),
  },
  daysInfo: {
    fontSize: wp(2.6),
    marginLeft: wp(2.6),
  },
});

export default GridItemModel;
