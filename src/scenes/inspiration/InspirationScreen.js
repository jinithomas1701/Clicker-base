import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';

import RootView from '../../components/atoms/common/RootView';
import ListTemplate from '../../components/templates/inspiration/ListTemplate';
import GridTemplate from '../../components/templates/inspiration/GridTemplate';
import FilterModel from '../../components/molecules/inspiration/FilterModel';
import HeaderModel from '../../components/molecules/inspiration/HeaderModel';

class InspirationScreen extends Component {
  state = {
    isListView: true,
  };
  handleViewChange = () => {
    this.setState({isListView: !this.state.isListView});
  };
  inspirationResponse = [
    {
      id: 1,
      productName: 'I phone 11 pro',
      brandName: 'Apple',
      availability: 'nearBy',
      Price: '$ 90,000',
      rating: 4.5,
      productImg: [
        {img: '../../assets/iphone-11-pro.jpg'},
        {img: '../../assets/iphone-11-pro.jpg'},
      ],
    },
    {
      id: 2,
      productName: 'I phone 11 pro',
      brandName: 'Apple',
      availability: 'nearBy',
      Price: '$ 90,000',
      rating: 4.5,
      productImg: [
        {img: '../../assets/iphone-11-pro.jpg'},
        {img: '../../assets/iphone-11-pro.jpg'},
      ],
    },
    {
      id: 3,
      productName: 'I phone 11 pro',
      brandName: 'Apple',
      availability: 'nearBy',
      Price: '$ 90,000',
      rating: 4.5,
      productImg: [
        {img: '../../assets/iphone-11-pro.jpg'},
        {img: '../../assets/iphone-11-pro.jpg'},
      ],
    },
    {
      id: 4,
      productName: 'I phone 11 pro',
      brandName: 'Apple',
      availability: 'nearBy',
      Price: '$ 90,000',
      rating: 4.5,
      productImg: [
        {img: '../../assets/iphone-11-pro.jpg'},
        {img: '../../assets/iphone-11-pro.jpg'},
      ],
    },
  ];
  inspirationResponse2 = [
    {
      id: 1,
      productCount: 3,
      img: require('../../assets/iphone-11-pro.jpg'),
      clickDay: 3,
    },
    {
      id: 2,
      productCount: 3,
      img: require('../../assets/iphone-11-pro.jpg'),
      clickDay: 3,
    },
    {
      id: 3,
      productCount: 3,
      img: require('../../assets/iphone-11-pro.jpg'),
      clickDay: 3,
    },
    {
      id: 4,
      productCount: 3,
      img: require('../../assets/iphone-11-pro.jpg'),
      clickDay: 3,
    },
    {
      id: 5,
      productCount: 3,
      img: require('../../assets/iphone-11-pro.jpg'),
      clickDay: 3,
    },
    {
      id: 6,
      productCount: 3,
      img: require('../../assets/iphone-11-pro.jpg'),
      clickDay: 3,
    },
    {
      id: 7,
      productCount: 3,
      img: require('../../assets/iphone-11-pro.jpg'),
      clickDay: 3,
    },
    {
      id: 8,
      productCount: 3,
      img: require('../../assets/iphone-11-pro.jpg'),
      clickDay: 3,
    },
    {
      id: 9,
      productCount: 3,
      img: require('../../assets/iphone-11-pro.jpg'),
      clickDay: 3,
    },
    {
      id: 10,
      productCount: 3,
      img: require('../../assets/iphone-11-pro.jpg'),
      clickDay: 3,
    },
    {
      id: 11,
      productCount: 3,
      img: require('../../assets/iphone-11-pro.jpg'),
      clickDay: 3,
    },
  ];
  render() {
    return (
      <RootView>
        <SafeAreaView style={{width: '100%'}}>
          <HeaderModel handleViewChange={this.handleViewChange} />
          <FilterModel />
          {this.state.isListView ? (
            <ListTemplate items={this.inspirationResponse} />
          ) : (
            <GridTemplate items={this.inspirationResponse2} />
          )}
        </SafeAreaView>
      </RootView>
    );
  }
}

export default InspirationScreen;
