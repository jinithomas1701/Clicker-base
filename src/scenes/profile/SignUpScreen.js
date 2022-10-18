import React, {Component} from 'react';
import {connect} from 'react-redux';
import {signUp} from '../../store/actions/userActions';

import RootView from '../../components/atoms/common/RootView';
import SignUpTemplate from '../../components/templates/profile/SignUpTemplate';

import {handleApiErrors} from '../../components/utility/FormComponent';

class SignUpScreen extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    newsletterSubscription: true,
    firstNameError: '',
    lastNameError: '',
    emailError: '',
    passwordError: '',
  };

  /**Fields validation */
  handleTextInputFocusOut = (key) => {
    const regx = {
      firstName: /^[A-Za-z]{3,20}$/,
      lastName: /^[A-Za-z]{1,10}$/,
      email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,10}$/,
      password: /^.{8,}$/,
    };
    const messages = {
      firstName: 'Enter a valid first name',
      lastName: 'Enter a valid last name',
      email: 'Enter a valid email',
      password: 'Password should contains at least 8 characters',
    };
    const value = this.state[key];

    if (!regx[key].test(value)) {
      this.setState({[key + 'Error']: messages[key]});
    }
  };
  handleFirstNameChange = (text) => {
    this.setState({firstNameError: ''});
    this.setState({firstName: text});
  };

  handleLastNameChange = (text) => {
    this.setState({lastNameError: ''});
    this.setState({lastName: text});
  };

  handleEmailChange = (text) => {
    this.setState({emailError: ''});
    this.setState({email: text});
  };

  handlePasswordChange = (text) => {
    this.setState({passwordError: ''});
    this.setState({password: text});
  };

  handleNewsletterSubscriptionChange = () => {
    this.setState({newsletterSubscription: !this.state.newsletterSubscription});
  };

  handleSignUpPress = () => {
    const body = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      newsletterSubscription: this.state.newsletterSubscription,
    };
    this.props.signUp(body).then((data) => {
      if (data.applicationErrorCode) {
        handleApiErrors(data.fieldMessage, this.setState.bind(this));
      } else {
        this.props.navigation.replace('Clicker Id');
      }
    });
  };

  render() {
    return (
      <RootView viewStyle={{justifyContent: 'flex-end'}}>
        <SignUpTemplate
          {...this.props}
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          email={this.state.email}
          password={this.state.password}
          firstNameError={this.state.firstNameError}
          lastNameError={this.state.lastNameError}
          emailError={this.state.emailError}
          passwordError={this.state.passwordError}
          newsletterSubscription={this.state.newsletterSubscription}
          handleFirstNameChange={this.handleFirstNameChange}
          handleLastNameChange={this.handleLastNameChange}
          handleEmailChange={this.handleEmailChange}
          handlePasswordChange={this.handlePasswordChange}
          handleNewsletterSubscriptionChange={
            this.handleNewsletterSubscriptionChange
          }
          handleTextInputFocusOut={this.handleTextInputFocusOut}
          handleSignUpPress={this.handleSignUpPress}
        />
      </RootView>
    );
  }
}
const mapDispatchToProps = () => {
  return {
    signUp,
  };
};

export default connect(null, mapDispatchToProps())(SignUpScreen);
