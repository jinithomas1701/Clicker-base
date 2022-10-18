import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Dimensions, FlatList, Animated } from 'react-native'

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import * as color from '../../../styles/color';
import CarouselItem from '../product-page/CarouselItem';

const { width, heigth } = Dimensions.get('window')

function infiniteScroll(dataList) {
    const numberOfData = dataList.length
    let scrollValue = 0, scrolled = 0

    setInterval(function () {
        scrolled++
        if (scrolled < numberOfData) {
            scrollValue = scrollValue + width
        }
        else {
            scrollValue = 0
            scrolled = 0
        }

    }, 3000)
}

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
const Carousel = ({ data }) => {
    const scrollX = new Animated.Value(0)
    let position = Animated.divide(scrollX, width)
    const [dataList, setDataList] = useState(data)
    const flatlist = React.useRef()

    useEffect(() => {
        setDataList(data)
        infiniteScroll(dataList)
    })


    if (data && data.length) {
        return (
            <View>
                <AnimatedFlatList data={data}
                    ref={flatlist}
                    keyExtractor={(item, index) => 'key' + index}
                    horizontal
                    pagingEnabled
                    scrollEnabled
                    snapToAlignment="center"
                    scrollEventThrottle={16}
                    decelerationRate={"fast"}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => {
                        return <CarouselItem item={item} />
                    }}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { x: scrollX } } }], { usenativeDriver: true }
                    )}
                />

                <View style={styles.dotView}>
                    {data.map((_, i) => {
                        let opacity = position.interpolate({
                            inputRange: [i - 1, i, i + 1],
                            outputRange: [0.3, 1, 0.3],
                            extrapolate: 'clamp'
                        })
                        return (
                            <Animated.View
                                key={i}
                                style={{ opacity, ...styles.animation }}
                            />
                        )
                    })}

                </View>
            </View>
        );
    }

    return null
}

const styles = StyleSheet.create({
    dotView: {
        flexDirection: 'row',
        position: 'absolute',
        width: wp(100),
        bottom: hp(4),
        justifyContent: 'center'
    },
    animation: {
        height: wp(1.8),
        width: wp(1.8),
        backgroundColor: color.carouselBg,
        margin: wp(0.5),
        borderRadius: 5
    }
});

export default Carousel;