import React, { useState, useContext, useEffect } from 'react';
import { View, Text } from "react-native";
import { CustomInput } from '../../components';
import { CustomButton } from '../../components';
import { AppContext } from '../../context/app.context';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const { themeColors, handleLogin, failedLogin } = useContext(AppContext);


  return (
    <View
      style={{
        height: '100%',
        width: '100%',
        alignItems: 'center',
        // justifyContent: 'center',
        paddingTop: 120,
        paddingHorizontal: 63,
        backgroundColor: themeColors.white
      }}>
      <View style={{ width: '100%' }}>
        <Text style={{
          fontFamily: 'Montserrat-Bold',
          fontSize: 50,
          color: themeColors.lightgreen,
          textAlign: 'center',
          marginBottom: 50
        }}>Login</Text>
        <CustomInput
          title={'username'}
          value={username}
          onChangeText={setUsername}
        />
        <CustomInput
          title={'password'}
          value={password}
          onChangeText={setPassword}
          password
        />
        {failedLogin &&
          <Text
            style={{
              color: 'blue',
              fontSize: 10,
              fontFamily: 'Montserrat-Medium'
            }}>
            {failedLogin}
          </Text>}

        <CustomButton
          text={"SUBMIT"}
          onPress={() => {
            var bodyFormData = {
              username: username,
              email: '',
              password: password,
              picture: ''
            }
            // Hardcode button for faster testing
            // var bodyFormData = {
            //   username: 'dragosbalmau',
            //   email: '',
            //   password: 'dragos',
            //   picture: '',
            // }
            handleLogin(bodyFormData);
          }}
        />
      </View>
    </View>
  );
}
