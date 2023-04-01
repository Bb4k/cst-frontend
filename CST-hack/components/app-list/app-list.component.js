import React, { useContext } from "react";
import { Text, FlatList, View, StyleSheet, Image } from "react-native";
import { AppContext } from "../../context/app.context";

export default function AppList({ navigation, list }) {
    const { themeColors, deviceW } = useContext(AppContext);

    const styles = StyleSheet.create({
        logoImage: {
            height: 33,
            width: 33,
            borderRadius: 10,
            marginRight: 10
        },
        text: {
            fontFamily: 'Montserrat-Regular',
            fontSize: 18,
        },
        logoName: {
            color: themeColors.darkblue,
        },
        time: {
            color: themeColors.lightgreen,
        },
        score: {
            color: themeColors.darkgreen,
        }
    });

    return (
        <>
            <FlatList
                data={list}
                keyExtractor={(item, index) => index}
                renderItem={({ item, index }) => (
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 5 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={{ uri: item.logo }} style={styles.logoImage} />
                            <Text style={[styles.logoName, styles.text]}>{item.name}</Text>
                        </View>
                        <Text style={[styles.time, styles.text]}>{item.time}</Text>
                        <Text style={[styles.score, styles.text]}>+10</Text>
                    </View>
                )}
                showsVerticalScrollIndicator={false}
            />
        </>
    );
}