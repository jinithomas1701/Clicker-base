import {Alert} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import {navigate} from '../../navigations/NavigationService';
import {ADD_USER_INFO} from './types';
import {fetchData, submitData, submitImage} from '../../api/Request';

const serviceURL = 'http://127.0.0.1:5000/profile-service';

export const addUserInfo = (userInfo) => {
  return {
    type: ADD_USER_INFO,
    payload: {
      userInfo,
    },
  };
};
export const fetchUserInfo = () => {
  return (dispatch) => {
    fetchData(serviceURL + '/user/info').then((data) => {
      dispatch(addUserInfo(data));
      Alert.alert('Welcome ' + data.firstName);
    });
  };
};
export const signIn = (body) => {
  return (dispatch) => {
    return submitData(serviceURL + '/user/sign-in', body).then((data) => {
      if (!data.applicationErrorCode && data.token) {
        AsyncStorage.setItem('JWT', data.token);
        dispatch(fetchUserInfo());
      }
      return data;
    });
  };
};

export const signUp = (body) => {
  return (dispatch) => {
    return submitData(serviceURL + '/user/sign-up', body).then((data) => {
      if (!data.applicationErrorCode && data.token) {
        AsyncStorage.setItem('JWT', data.token);
        dispatch(fetchUserInfo());
      }
      return data;
    });
  };
};

export const setClickerId = (body) => {
  return (dispatch) => {
    return submitData(serviceURL + '/user/set-clicker-id', body).then(
      (data) => {
        return data;
      },
    );
  };
};

export const uploadProfilePhoto = (body, callback) => {
  return (dispatch) => {
    submitImage(serviceURL + '/user/upload-photo', body)
      .then((data) => {
        console.log('okkk');
        callback();
        //console.log('Profile Image', data);
        if (data.applicationErrorCode) {
          //Alert.alert(JSON.stringify(data.message));
          //navigate('Clicker Id');
        } else {
          if (data.token) {
            // AsyncStorage.setItem('JWT', data.token);
            //navigate('Clicker Id');
          }
          // dispatch(fetchUserInfo());
        }
      })
      .catch((error) => {
        console.log('okkkssss');
        callback();
      });
  };
};
