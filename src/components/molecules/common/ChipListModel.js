import React from 'react';
import { View, StyleSheet } from 'react-native';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import FilterItem from '../../atoms/common/FilterItem';
import Text from '../../atoms/common/Text';

const getChipListTemplate = (item) => {
    return (
        <React.Fragment >
            {
                item && item.length > 0 &&
                item.map(eachFilter => <FilterItem styles={styles.filter} eachFilter={eachFilter} />)
            }
        </React.Fragment>
    )
}

const ChipListModel = (props) => {
    return (
        <View style={styles.container}>
            {getChipListTemplate(props.data)}
            <Text textStyle={styles.text}>+ Add</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center'
    },
    filter: {
        marginTop: wp(1.5),
        marginBottom: wp(1.5),
        marginRight: wp(1.3),
    },
    text: {
        fontSize: wp(4.2),
        paddingLeft: wp(1)
    }
});

export default ChipListModel;