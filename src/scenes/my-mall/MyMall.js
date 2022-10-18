import React, { Component } from "react";
import { createStackNavigator } from '@react-navigation/stack';

import MyMallHome from "./MyMallHome";

const SettingsStack = createStackNavigator();

const MyMall = (props) => {
    return (
        <SettingsStack.Navigator>
            <SettingsStack.Screen name="MyMall" component={MyMallHome} />
        </SettingsStack.Navigator>
    );
};

export default MyMall;