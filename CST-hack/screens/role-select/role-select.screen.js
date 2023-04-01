import React, { useEffect, useContext, useState } from 'react';
import { View, Image } from "react-native";
import { AppContext } from "../../context/app.context";
import { CustomButton } from '../../components';

export default function RoleSelectScreen({ navigation }) {
  const { themeColors, deviceH, handleLogin } = useContext(AppContext);

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
        alignItems: 'center',
        paddingHorizontal: 63,
      }}>
      <View
        style={{
          width: '100%',
          top: deviceH * 0.1,
        }}>

        {/* <Image source={require('')} style={{ width: '100%', resizeMode: 'contain' }} /> */}

        <CustomButton
          text={"Sign up"}
          onPress={() => navigation.navigate('Signup')}
        />

      </View>
    </View>
  );
}