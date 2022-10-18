import AsyncStorage from '@react-native-community/async-storage';
///import Constants from "expo-constants";

//const { manifest } = Constants;
export const submitData = (url, body) => {
  return new Promise(function (resolve, reject) {
    let requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(body),
    };
    AsyncStorage.getItem('JWT').then((token) => {
      if (token != null) {
        const authHeader = `Bearer ${token}`;
        requestOptions.headers = {
          ...requestOptions.headers,
          Authorization: authHeader,
        };
      }
      fetch(url, requestOptions)
        .then((response) => response.json())
        .then((data) => {
          resolve(data);
        });
    });
  });
};
export const fetchData = (url) => {
  return new Promise(function (resolve, reject) {
    let requestOptions = {
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
    };
    AsyncStorage.getItem('JWT').then((token) => {
      if (token != null) {
        const authHeader = `Bearer ${token}`;
        requestOptions.headers = {
          ...requestOptions.headers,
          Authorization: authHeader,
        };
      }
      fetch(url, requestOptions)
        .then((response) => response.json())
        .then((data) => {
          resolve(data);
        });
    });
  });
};

export const submitImage = (url, body) => {
  return new Promise(function (resolve, reject) {
    let requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'multipart/form-data'},
      body: body,
    };
    AsyncStorage.getItem('JWT').then((token) => {
      if (token != null) {
        const authHeader = `Bearer ${token}`;
        requestOptions.headers = {
          ...requestOptions.headers,
          Authorization: authHeader,
        };
      }
      //const uri = `http://${manifest.debuggerHost.split(":").shift()}:8688`;
      //console.log(uri);*/
      //console.log(requestOptions);
      fetch(url, requestOptions)
        //then((response) => response.json())
        .then((data) => {
          resolve(data);
        });
    });
  });
};
