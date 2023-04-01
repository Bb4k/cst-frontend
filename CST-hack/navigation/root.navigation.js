import React, { useContext } from "react";
import { AppContext } from "../context/app.context";
// import { Footer, Header } from "../components";
import DashboardStackScreen from "./dashboard.navigation";
import { createStackNavigator } from "@react-navigation/stack";
import {
  LoginScreen,
  Home
} from "../screens";

export const navigationRef = React.createRef();

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}

function RootNavigation() {
  const Stack = createStackNavigator();
  const { profile } = useContext(AppContext);

  const renderLoggedInUser = () => (
    <>
      {/* <Header navigate={navigate} /> */}
      <DashboardStackScreen navigation={navigationRef} />
      <Footer navigate={navigate} />
    </>
  );

  const renderLoggedOutUser = () => (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );

  return profile == null ? renderLoggedOutUser() : renderLoggedInUser();
}

export default RootNavigation;
