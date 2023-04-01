import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AppProvider from "./context/app.context";
import RootNavigation, { navigationRef } from "./navigation/root.navigation";
import 'react-native-gesture-handler';
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from 'expo-font';

export default function App() {

  let [fontsLoaded] = useFonts({
    'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
    'Montserrat-SemiBold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
    'Montserrat-Medium': require('./assets/fonts/Montserrat-Medium.ttf'),
    'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-Light': require('./assets/fonts/Montserrat-Light.ttf'),
  });

  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // }

  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "", // TODO: change color #fsasda
        }}>
        <AppProvider>
          <NavigationContainer
            ref={navigationRef}
            fallback={<Text>Loading...</Text>}
          >
            <RootNavigation />
          </NavigationContainer>
        </AppProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
