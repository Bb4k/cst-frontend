import React, { memo } from "react";
import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack";
import {
    LoginScreen,
    Home,
    Progress,
    Leaderboard
} from "../screens";

function DashboardStackScreenSimple({ navigation }) {
    const DashboardStack = createStackNavigator();

    return (
        <DashboardStack.Navigator
        >
            <DashboardStack.Screen options={{ headerShown: false }} name="Home" component={Home} />
            <DashboardStack.Screen options={{ headerShown: false }} name="Leaderboard" component={Leaderboard} />
            <DashboardStack.Screen options={{ headerShown: false }} name="Progress" component={Progress} />

            <DashboardStack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
        </DashboardStack.Navigator>
    );
}

const DashboardStackScreen = memo(DashboardStackScreenSimple);
export default DashboardStackScreen;