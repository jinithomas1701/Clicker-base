import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import ImageButton from '../../atoms/common/ImageButton';
import AvailabilityStatus from '../../atoms/common/AvailabilityStatus';
import Text from '../../atoms/common/Text';

import * as colors from '../../../styles/color';
import * as fonts from '../../../styles/font';

const ListItemModel = (props) => {
  const item = props.item;

  return (
    <View style={styles.container}>
      <View style={styles.firstRow}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../../assets/iphone-11-pro.jpg')}
            style={styles.productImage}
          />
        </View>
        <View style={styles.detailsContainer}>
          <View style={styles.productNameContainer} >
            <Text
              numberOfLines={1}
              ellipsizeMode="end"
              textStyle={styles.productName}
            >
              {item.productName}
            </Text>
            <Text textStyle={styles.brandName}>By {item.brandName}</Text>
          </View>
          <View style={styles.actionsContainer}>
            <ImageButton
              activeImage={require('../../../assets/iconLikeFilled.png')}
              inactiveImage={require('../../../assets/iconLike.png')}
              activeImageStyle={styles.likeIcon}
              inactiveImageStyle={styles.likeIcon}
            />
            <ImageButton
              activeImage={require('../../../assets/iconHeartFilled.png')}
              inactiveImage={require('../../../assets/iconHeart.png')}
              activeImageStyle={styles.heartIcon}
              inactiveImageStyle={styles.heartIcon}
            />
            <ImageButton
              activeImage={require('../../../assets/iconWrongImageFilled.png')}
              inactiveImage={require('../../../assets/iconWrongImage.png')}
              activeImageStyle={styles.wrongIcon}
              inactiveImageStyle={styles.wrongIcon}
            />
          </View>
          <View style={styles.availabilityContainer}>
            <AvailabilityStatus availability={true} statusText={'Nearby'} />
            <AvailabilityStatus availability={false} statusText={'Online'} />
          </View>
          <View style={styles.priceContainer}>
            <Text textStyle={{ fontSize: wp(4.8) }}>{item.Price}</Text>
          </View>
        </View>
      </View>
      <View style={styles.secondRow}>
        <View style={styles.firstColumn}>
          <ImageButton
            image={require('../../../assets/iconStar.png')}
            imageStyle={styles.starIcon}
            rightText={item.rating + '/ 5'}
          />
          <ImageButton
            image={require('../../../assets/iconMore.png')}
            imageStyle={styles.moreIcon}
            rightText={'More'}
          />
          <ImageButton
            image={require('../../../assets/diyIcon.png')}
            imageStyle={styles.diyIcon}
            rightText={'How'}
          />
        </View>
        <View style={styles.secondColumn}>
          <ImageButton
            image={require('../../../assets/iconAddToStore.png')}
            imageStyle={styles.addtostoreIcon}
            leftText={'Add To Store'}
            leftTextStyle={styles.addToStoreText}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderBottomColor: colors.backgroundShade,
    borderBottomWidth: 1,
    marginBottom: hp(3.7),
  },
  firstRow: { height: wp(39.4), flexDirection: 'row' },
  imageContainer: {
    height: wp(39.4),
    width: wp(33),
  },
  productImage: {
    width: '100%',
    height: wp(36.5),
    borderRadius: wp(3.2),
  },
  detailsContainer: {
    height: wp(39.4),
    width: wp(50.9),
    paddingLeft: wp(4),
    justifyContent: 'space-between',
  },
  productNameContainer: {},
  productName: {
    fontSize: wp(4.2),
    fontFamily: fonts.light,
  },
  brandName: {
    fontSize: wp(2.6),
    color: colors.backgroundShade,
  },
  actionsContainer: {
    width: wp(30.7),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  likeIcon: {
    width: wp(4.8),
    height: wp(4.8),
  },
  heartIcon: {
    width: wp(4.8),
    height: wp(4.4),
  },
  wrongIcon: {
    width: wp(4.8),
    height: wp(4.8),
  },
  availabilityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp(27.6),
  },
  priceContainer: {
    alignItems: 'flex-end',
    paddingBottom: wp(1.3),
  },
  secondRow: { height: wp(10.5), flexDirection: 'row' },
  firstColumn: {
    width: '55%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  starIcon: {
    width: wp(4.1),
    height: wp(3.9),
  },
  moreIcon: {
    width: wp(5.9),
    height: wp(4),
  },
  diyIcon: {
    width: wp(3.8),
    height: wp(3.8),
  },
  secondColumn: {
    width: '45%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  addtostoreIcon: {
    width: wp(5),
    height: wp(5),
  },
  addToStoreText: { color: colors.primary, fontFamily: fonts.bold },
});

export default ListItemModel;
