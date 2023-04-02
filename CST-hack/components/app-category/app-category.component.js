import React, { useContext } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { AppContext } from "../../context/app.context";
import AppList from "../app-list/app-list.component";

export default function AppCategory({ navigation, list }) {
    const { themeColors } = useContext(AppContext);

    const styles = StyleSheet.create({
        title: {
            fontFamily: 'Montserrat-Bold',
            fontSize: 18,
            color: themeColors.darkblue,
            marginVertical: 5
        }
    });

    const iterList = Object.entries(list).map(([category, items]) => ({
        category,
        items,
    }));

    return (
        <FlatList
            data={iterList}
            keyExtractor={(item, index) => index}
            renderItem={({ item, index }) => (
                <View style={{ flexDirection: 'column', marginBottom: 5, paddingTop: index == 0 ? 10 : 0 }}>
                    <Text style={styles.title}>{Object.keys(list)[index]}</Text>
                    <AppList list={item.items} />
                </View>
            )}
            showsVerticalScrollIndicator={false}
        />
    );

}