import {StackActions} from '@react-navigation/native';

let navigator;

export const setTopLevelNavigator = (navigatorRef) => {
  navigator = navigatorRef;
};

export const navigate = (routeName) => {
  navigator.dispatch(StackActions.push(routeName));
};
