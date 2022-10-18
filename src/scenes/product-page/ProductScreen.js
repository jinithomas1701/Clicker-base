import React from 'react';
import { SafeAreaView } from 'react-native';

import RootView from '../../components/atoms/common/RootView';
import ProductTemplate from '../../components/templates/product-page/ProductTemplate';

const ProductScreen = () => {

    const dummyData =
    {
        productName: "HR Smart Watch 4th Gen Explorist(Brown strap, Regular)",
        brandName: "Fossil",
        rating: 4.5,
        img: [{
            title: 'Anise Aroma Art Bazar', url: 'https://i.ibb.co/hYjK44F/anise-aroma-art-bazaar-277253.jpg',
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            id: 1

        },
        {
            title: 'Food inside a Bowl', url: 'https://i.ibb.co/JtS24qP/food-inside-bowl-1854037.jpg',
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            id: 2
        },
        {
            title: 'Vegatable Salad', url: 'https://i.ibb.co/JxykVBt/flat-lay-photography-of-vegetable-salad-on-plate-1640777.jpg',
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            id: 3
        },
        {
            title: 'Vegatable Salad', url: 'https://i.ibb.co/JxykVBt/flat-lay-photography-of-vegetable-salad-on-plate-1640777.jpg',
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            id: 4
        }
        ]
    };

    const filterList = ['Leather', 'Black', 'Fossil', 'Smart Watch', 'Touch Screen', 'Regular'];

    return (
        <RootView>
            <SafeAreaView style={{ width: '100%' }}>
                <ProductTemplate filterList={filterList} productDetail={dummyData} />

            </SafeAreaView>
        </RootView>
    )
}

export default ProductScreen;