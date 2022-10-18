import React, {Component} from 'react';
import {connect} from 'react-redux';
import {signIn} from '../../store/actions/userActions';

import RootView from '../../components/atoms/common/RootView';
import SignInTemplate from '../../components/templates/profile/SignInTemplate';

import {handleApiErrors} from '../../components/utility/FormComponent';

class SignInScreen extends Component {
  state = {
    username: '',
    password: '',
    usernameError: '',
    passwordError: '',
  };

  handleUsernameChange = (text) => {
    this.setState({usernameError: ''});
    this.setState({username: text});
  };

  handlePasswordChange = (text) => {
    this.setState({passwordError: ''});
    this.setState({password: text});
  };
  handleSignInPress = () => {
    const body = {
      username: this.state.username,
      password: this.state.password,
    };
    this.props.signIn(body).then((data) => {
      console.log(data);
      if (data.applicationErrorCode) {
        handleApiErrors(data.fieldMessage, this.setState.bind(this));
      } else {
        //this.props.navigation.replace('Inspiration');
      }
    });
  };
  render() {
    return (
      <RootView viewStyle={{justifyContent: 'flex-end'}}>
        <SignInTemplate
          {...this.props}
          username={this.state.username}
          password={this.state.password}
          usernameError={this.state.usernameError}
          passwordError={this.state.passwordError}
          handleUsernameChange={this.handleUsernameChange}
          handlePasswordChange={this.handlePasswordChange}
          handleSignInPress={this.handleSignInPress}
        />
      </RootView>
    );
  }
}

const mapDispatchToProps = () => {
  return {
    signIn,
  };
};

export default connect(null, mapDispatchToProps())(SignInScreen);
