import React, { memo } from "react";
import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack";
import {

} from "../screens";

function DashboardStackScreenSimple({ navigation }) {
    const DashboardStack = createStackNavigator();

    return (
        <DashboardStack.Navigator
            screenOptions={{
                animation: 'fade',
                cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
            }}
        >

            <DashboardStack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
            <DashboardStack.Screen options={{ headerShown: false }} name="Signup" component={Signup} />
            <DashboardStack.Screen options={{ headerShown: false }} name="RoleSelectScreen" component={RoleSelectScreen} />
        </DashboardStack.Navigator>
    );
}

const DashboardStackScreen = memo(DashboardStackScreenSimple);
export default DashboardStackScreen;