import React, { useState, useCallback } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Slider from 'rn-range-slider';

import Text from '../../atoms/common/Text';
import * as color from '../../../styles/color';
import ImageButton from '../../atoms/common/ImageButton';
import ChipListModel from '../common/ChipListModel';
import RangeSlider from '../../atoms/common/RangeSlider';


const ProductDetailModel = (props) => {
    const [minimunRange, setMinimumRange] = useState(0);
    const [maximunRange, setMaximumRange] = useState(1000);

    const handleValueChange = (low, high) => {
        setMinimumRange(low);
        setMaximumRange(high);
    };

    return (
        <View style={{ padding: wp(5) }}>
            <Text textStyle={styles.productName}>{props.data.productName}</Text>
            <View style={styles.rowAlign}>
                <Text textStyle={{ ...styles.productName, ...styles.brandName }}>By {props.data.brandName}</Text>
                <View style={{ ...styles.rowAlign, ...styles.firstRowIcon }}>
                    <ImageButton
                        image={require('../../../assets/iconStar.png')}
                        imageStyle={styles.starIcon}
                        rightText={props.data.rating + '/ 5'}
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
            </View>
            <View style={styles.attributes}>
                <ChipListModel data={props.data1} />
            </View>
            <View style={styles.sliderCover}>
                <RangeSlider
                    min={0}
                    max={1000}
                    step={10}
                    floatingLabel
                    style={styles.slider}
                    onValueChanged={handleValueChange}
                >
                    <View style={styles.priceCover}>
                        <Text textStyle={styles.priceText}>$ {minimunRange}</Text>
                        <Text textStyle={styles.priceText}>$ {maximunRange}</Text>
                    </View>
                </RangeSlider>
            </View>
            <View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text textStyle={{ fontSize: wp(4.2) }}>Similar Product</Text>
                    <Text textStyle={{ fontSize: wp(4.2), color: color.MoreText }}>More</Text>
                </View>
                <View></View>
            </View>
        </View >
    );
};

const styles = StyleSheet.create({
    productName: {
        fontSize: wp(4.2)
    },
    brandName: {
        color: color.textInputBorder,
        width: wp(45)
    },
    firstRowIcon: {
        width: wp(45),
        justifyContent: 'space-between'
    },
    attributes: {
        paddingTop: hp(1),
        paddingBottom: hp(1)
    },
    rowAlign: {
        flexDirection: 'row'
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
    slider: {
        width: wp(90),
        alignSelf: 'center'
    },
    sliderCover: {
        paddingTop: wp(5),
        paddingBottom: wp(5)
    },
    priceCover: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    priceText: {
        fontSize: wp(4)
    },
});

export default ProductDetailModel;