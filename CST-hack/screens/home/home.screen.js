import React, { useState, useContext, useEffect } from 'react';
import { StyleSheet, View, Text } from "react-native";

import { AppContext } from '../../context/app.context';

export default function Home({ navigation }) {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const { themeColors, handleLogin, failedLogin } = useContext(AppContext);

    const styles = StyleSheet.create({
        container: {
            // backgroundColor: themeColors.black, TODO: set background color
            // TODO: search "themeColors" using Ctrl+Shift+F and fix it in the whole project before continuing
            // TODO: search "fontFamily" using Ctrl+Shift+F and fix it in the whole project before continuing
            width: '100%',
            height: '100%',
            marginBottom: 52
        }
    });

    return ({});
}