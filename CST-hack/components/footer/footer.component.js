import React, { useContext, useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { AppContext } from "../../context/app.context";

export default function Footer({ navigate }) {
  const localRoutes = ["Leaderboard", "Home", "Progress"];
  const { themeColors, profile } = useContext(AppContext);
  const [focused, setFocused] = useState('Feed');

  const FooterButton = ({ isFocused, image }) => {
    return (
      <View style={{ backgroundColor: isFocused ? 'rgba(0,0,0,0.25)' : 'rgba(0,0,0,0)', padding: 3}}>
        {<Image source={image} style={{ width: 35, height: 35 }} />}
      </View>);
  };

  const renderIcon = ({ routeName, isFocused }) => {
    if (routeName == 'Leaderboard') {
      return <FooterButton image={require('../../assets/leaderboard.png')} isFocused={isFocused} />;
    }

    if (routeName == 'Home') {
      return <FooterButton image={require('../../assets/home.png')} isFocused={isFocused} />;
    }

    if (routeName == 'Progress') {
      return <FooterButton image={require('../../assets/progress.png')} isFocused={isFocused} />;
    }
  }

  return (
    <View
      style={{
        position: 'absolute',
        bottom: 0,
        width: '100%',
        zIndex: 100,
        height: 60,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-around',
        backgroundColor: themeColors.darkblue,
      }}>
      {localRoutes.map((route, index) => {
        const isFocused = route === focused;

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            onPress={() => {
              navigate(route);
              setFocused(route);
            }}
            style={{
              alignContent: 'center',
              justifyContent: 'center',
              marginBottom:'1%'
            }}
          >
            {renderIcon({ routeName: route, isFocused })}
          </TouchableOpacity>
        )
      })}
    </View>
  );
}
