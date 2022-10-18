import React, {useState} from 'react';
import {View, Image, TouchableOpacity, StyleSheet} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Text from './Text';

const ImageButton = (props) => {
  const [active, setActive] = useState(false);
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          props.onPress && props.onPress();
          setActive(!active);
        }}
        style={styles.container}>
        {props.leftText && (
          <Text textStyle={{...styles.leftText, ...props.leftTextStyle}}>
            {props.leftText}
          </Text>
        )}
        {active ? (
          <Image
            source={props.activeImage ? props.activeImage : props.image}
            style={
              props.activeImageStyle ? props.activeImageStyle : props.imageStyle
            }
          />
        ) : (
          <Image
            source={props.inactiveImage ? props.inactiveImage : props.image}
            style={
              props.inactiveImageStyle
                ? props.inactiveImageStyle
                : props.imageStyle
            }
          />
        )}
        {props.rightText && (
          <Text textStyle={{...styles.rightText, ...props.rightTextStyle}}>
            {props.rightText}
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightText: {marginLeft: wp(1.3)},
  leftText: {marginRight: wp(1.3)},
});

export default ImageButton;
