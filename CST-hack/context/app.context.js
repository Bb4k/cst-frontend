import { createContext, useState, useMemo, useEffect } from "react";
import { Dimensions } from 'react-native';
import axios from "axios";
import { navigate } from "../navigation/root.navigation";
import AsyncStorage from '@react-native-async-storage/async-storage';

const AppContext = createContext();

function AppProvider(props) {
  const [isLoading, setIsLoading] = useState(true);

  const [themeColors, setThemeColors] = useState({
    darkblue: '#393E46',
    darkgreen: '#057176',
    lightgreen: '#00ADB5',
    gray: '#707070',
    white: '#EEEEEE'
  })

  const [profile, setProfile] = useState(null);

  const [failedLogin, setFailedLogin] = useState(null);
  const [API_URL, SET_API_URL] = useState("http://10.0.0.6:8000");

  const [deviceW, setDeviceW] = useState(Dimensions.get('window').width);
  const [deviceH, setDeviceH] = useState(Dimensions.get('window').height);

  const saveProfile = async (profileToSave) => {
    try {
      await AsyncStorage.setItem('profile', JSON.stringify(profileToSave));
      setProfile(profileToSave);
    } catch (error) {
      console.error('Error saving profile:', error);
    }
  };

  const loadProfile = async () => {
    try {
      const savedProfile = await AsyncStorage.getItem('profile');
      setProfile(JSON.parse(savedProfile));
      setIsLoading(false);

    } catch (error) {
      console.error('Error loading profile:', error);
    }
  };

  useEffect(() => {
    loadProfile();
  }, []);

  const handleLogin = async (formData) => {
    const bodyFormData = new FormData();
    bodyFormData.append("email", formData.email);
    bodyFormData.append("password", formData.password);

    axios.post(
      `${API_URL}/login-user/`,
      JSON.stringify(formData),
      {
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then((response) => {
        saveProfile(response.data);
        // navigate("Home");
      })
      .catch((response) => {
        try {
          show({ message: response, type: "error" });
        } catch (e) {
          console.log("Response rgvv: ", response);
        }
      });
  };

  const handleSignout = async () => {
    try {
      await AsyncStorage.removeItem('profile');
      setProfile(null);
    } catch (error) {
      console.error('Error deleting profile:', error);
    }
  };

  const store = {
    // General app
    isLoading,
    setIsLoading,

    // User data
    profile,
    setProfile,
    failedLogin,

    // API
    API_URL,

    // Auth
    handleLogin,
    saveProfile,
    handleSignout,

    // Color Pallete
    themeColors,

    // Device
    deviceW,
    deviceH,
  };

  const storeForProvider = useMemo(() => store, [store]);
  return <AppContext.Provider value={storeForProvider}>{props.children}</AppContext.Provider>;
}

export { AppContext };
export default AppProvider;
