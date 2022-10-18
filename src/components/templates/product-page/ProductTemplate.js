import React, { useState } from 'react';
import {
    View,
    ScrollView,
    Dimensions,
    SafeAreaView
} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Text from '../../atoms/common/Text';
import Carousel from '../../atoms/common/Carousel';
import * as color from '../../../styles/color';
import ProductDetailModel from '../../molecules/product-page/ProductDetailModel';
import RootView from '../../atoms/common/RootView';

const ProductTemplate = (props) => {
    const [screenHeight, setScreenHeight] = useState(0);
    const height = Dimensions.get("screen").height;
    const scrollEnabled = screenHeight > height;

    const onContentSizeChange = (contentWidth, contentHeight) => {
        setScreenHeight(contentHeight);
    };

    return (
        <ScrollView
            scrollEnabled={scrollEnabled}
            onContentSizeChange={onContentSizeChange}
        >
            <Carousel data={props.productDetail.img} />
            <RootView viewStyle={{ position: 'relative', top: -20, height: hp(100), width: wp(100), borderTopLeftRadius: wp(6), borderTopRightRadius: wp(6), }}>
                <ProductDetailModel data={props.productDetail} data1={props.filterList} />
            </RootView>
        </ScrollView>
    )
}

export default ProductTemplate;