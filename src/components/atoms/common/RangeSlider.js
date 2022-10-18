import React, { useCallback } from 'react';
import Slider from 'rn-range-slider';
import { StyleSheet, View } from 'react-native';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import * as color from '../../../styles/color';

const THUMB_RADIUS = wp(5);

const RangeSlider = (props) => {

    const Thumb = () => {
        return (
            <View style={styles.thumb} />
        );
    };

    const Rail = () => {
        return (
            <View style={styles.rail} />
        );
    };
    const RailSelected = () => {
        return (
            <View style={styles.railSelected} />
        );
    };

    const renderThumb = useCallback(() => <Thumb />, []);
    const renderRail = useCallback(() => <Rail />, []);
    const renderRailSelected = useCallback(() => <RailSelected />, []);
    const { children, ...rest } = props;

    return (
        <View>
            <Slider
                {...rest}
                renderRail={renderRail}
                renderThumb={renderThumb}
                renderRailSelected={renderRailSelected}
            />
            {props.children}
        </View>
    );
};

const styles = StyleSheet.create({

    thumb: {
        width: THUMB_RADIUS * wp(0.4),
        height: THUMB_RADIUS * wp(0.4),
        borderRadius: THUMB_RADIUS,
        backgroundColor: color.textInputColor,
    },
    rail: {
        flex: 1,
        height: hp(0.7),
        borderRadius: wp(5),
        backgroundColor: color.backgroundShade,
    },
    railSelected: {
        height: hp(0.6),
        backgroundColor: color.secondary,
        borderRadius: wp(5),
    },
});

export default RangeSlider;