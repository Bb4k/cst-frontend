import React, { useContext, useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { AppContext } from "../../context/app.context";

export default function Footer({ navigate }) {
  const localRoutes = ["Feed", "Search", "Requests", "Profile"];
  const { themeColors, profile } = useContext(AppContext);
  const [focused, setFocused] = useState('Feed');

  const FooterButton = ({ isFocused, image }) => {
    return (
      <View style={{
        padding: 7,
      }}>
        {<Image source={image} style={{ width: 25, height: 25 }} />}
      </View>);
  };

  const renderIcon = ({ routeName, isFocused }) => {
    if (routeName == 'Feed') {
      return <FooterButton image={require('../../assets/home.png')} isFocused={isFocused} />;
    }

    if (routeName == 'Search') {
      return <FooterButton image={require('../../assets/home.png')} isFocused={isFocused} />;
    }

    if (routeName == 'Requests') {
      return <FooterButton image={require('../../assets/home.png')} isFocused={isFocused} />;
    }

    if (routeName == 'Profile') {
      return <FooterButton image={require('../../assets/home.png')} isFocused={isFocused} />;
    }
  }

  return (
    <View
      style={{
        position: 'absolute',
        bottom: 0,
        width: '100%',
        zIndex: 100,
        height: 52,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-around',
        // backgroundColor: themeColors.black,
      }}>
      {localRoutes.map((route, index) => {
        const isFocused = route === focused;

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            onPress={() => {
              // navigate(route, { profile: profile });
              setFocused(route);
            }}
            style={{
              justifyContent: 'center',
              alignContent: 'center',
            }}
          >
            {renderIcon({ routeName: route, isFocused })}
          </TouchableOpacity>
        )
      })}
    </View>
  );
}
