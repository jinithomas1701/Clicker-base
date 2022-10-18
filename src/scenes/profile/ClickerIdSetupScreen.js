import React, {Component} from 'react';
import {Image} from 'react-native';
import {connect} from 'react-redux';
import {setClickerId} from '../../store/actions/userActions';

import RootView from '../../components/atoms/common/RootView';
import ClickerIdSetupTemplate from '../../components/templates/profile/ClickerIdSetupTemplate';

import {handleApiErrors} from '../../components/utility/FormComponent';

class ClickerIdSetupScreen extends Component {
  state = {
    clickerId: '',
    clickerIdError: '',
  };

  handleClickerIdChange = (text) => {
    this.setState({clickerIdError: ''});
    this.setState({clickerId: text});
  };
  handleNextPress = () => {
    const body = {
      clickerId: this.state.clickerId,
    };
    this.props.setClickerId(body).then((data) => {
      if (data.applicationErrorCode) {
        handleApiErrors(data.fieldMessage, this.setState.bind(this));
      } else {
        this.props.navigation.replace('Profile Photo');
      }
    });
  };
  render() {
    return (
      <RootView viewStyle={{justifyContent: 'flex-end'}}>
        <ClickerIdSetupTemplate
          {...this.props}
          handleClickerIdChange={this.handleClickerIdChange}
          clickerId={this.state.clickerId}
          clickerIdError={this.state.clickerIdError}
          handleNextPress={this.handleNextPress}
        />
      </RootView>
    );
  }
}

const mapDispatchToProps = () => {
  return {
    setClickerId,
  };
};

export default connect(null, mapDispatchToProps())(ClickerIdSetupScreen);
