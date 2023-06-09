
import React, { useState, useContext, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, Modal, TouchableHighlight, Image } from "react-native";
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppContext } from '../../context/app.context';
import { getLeaderboard, getBadges } from '../../utils/utils';

export default function Leaderboard({ navigation }) {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [currentUserData, setCurrentUserData] = useState(null);
    const badgePlaceholder = require('../../assets/medal_placeholder.png')
    const { themeColors, API_URL, profile } = useContext(AppContext);

    handleUserClick = (userId) => {
        console.log(userId);
        getBadges(userId, API_URL)
            .then((res) => { setCurrentUserData(res) }).catch((error) => { console.log(error) });

        // let userData = {
        //     "name": "Mihai Ene",
        //     "rank": 1,
        //     "badges": {
        //         "October 2023": require('../../assets/medal_placeholder.png'),
        //         "September 2023": require('../../assets/medal_placeholder.png'),
        //         "August 2023": require('../../assets/medal_placeholder.png'),
        //     },
        // }
        // setCurrentUserData(userData);
        setModalVisible(true);
    }

    const [modalVisible, setModalVisible] = useState(false);
    const [index, setIndex] = useState();

    const styles = StyleSheet.create({
        container: {
            // backgroundColor: themeColors.black, TODO: set background color
            // TODO: search "themeColors" using Ctrl+Shift+F and fix it in the whole project before continuing
            // TODO: search "fontFamily" using Ctrl+Shift+F and fix it in the whole project before continuing
            width: '100%',
            height: '100%',
            marginBottom: 55
        },
        content: {

            paddingVertical: 5,
        },
        row: {
            flexDirection: 'row',
            borderBottomWidth: 1,
            borderBottomColor: '#ccc',
        },
        cell: {
            flex: 1,
            padding: 10,
            textAlign: 'center',
        },
        header: {
            fontWeight: 'bold',
        },
        delimiter: {
            borderRightWidth: 1,
            borderRightColor: '#ccc',
        },
    });

    const [data, setData] = useState(null);

    useEffect(() => {
        getLeaderboard(profile.companyId, API_URL).then((res) => { setData(res) }).catch((error) => { console.log(error) })
    }, []);

    const TableHeader = () => {
        return (
            <View style={styles.row}>
                <Text style={[styles.cell, styles.header]}>Rank</Text>
                <View style={styles.delimiter} />
                <Text style={[styles.cell, styles.header]}>Name</Text>
                <View style={styles.delimiter} />
                <Text style={[styles.cell, styles.header]}>Points</Text>
            </View>
        );
    };

    const TableRow = ({ item, index }) => {
        return (
            <View style={styles.row}>
                <Text style={styles.cell}>{index + 1}</Text>
                <View style={styles.delimiter} />
                <Text style={styles.cell} onPress={() => {handleUserClick(item.userId); setIndex(index+1); }}>{item.name}</Text>
                <View style={styles.delimiter} />
                <Text style={styles.cell}>{item.points}</Text>
            </View>
        );
    };
    return (
        <View style={{ flex: 1, marginBottom: 70 }}>
            <View style={{ backgroundColor: themeColors.darkblue, paddingVertical: 35, paddingHorizontal: 20 }}>
                <Text style={{
                    fontFamily: 'Montserrat-Regular',
                    fontSize: 38,
                    lineHeight: 38,
                    color: themeColors.lightgreen,
                }}>
                    Leaderboard
                </Text>
                <Text style={{
                    fontFamily: 'Montserrat-Regular',
                    fontSize: 20,
                    lineHeight: 20,
                    color: themeColors.white,
                }}>
                    {profile.company}
                </Text>
            </View>
            <FlatList
                style={{ backgroundColor: themeColors.white }}
                data={data}
                ListHeaderComponent={TableHeader}
                renderItem={({ item, index }) => <TableRow item={item} index={index} />}
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={styles.content}
            />
            {currentUserData && <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(false);
                }}>
                <View
                    style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "rgba(0,0,0,0.25)" }}>
                    <View style={{ backgroundColor: themeColors.white, paddingVertical: 20, paddingHorizontal: 20, borderRadius: 15, height: 200, width: 300 }}>

                        <View style={{ justifyContent: "space-between", flexDirection: "row", alignItems: "center", paddingVertical: 5 }}>
                            <Text style={{
                                fontFamily: 'Montserrat-Regular',
                                fontSize: 30,
                                lineHeight: 30,
                                color: themeColors.lightgreen,
                            }}>
                                {currentUserData.name}
                            </Text>
                            <TouchableHighlight
                                onPress={() => {
                                    setModalVisible(false);
                                }}
                            >
                                <Image style={{ height: 30, width: 30 }} source={require('../../assets/close.png')}></Image>
                            </TouchableHighlight>
                        </View>

                        <Text style={{
                            fontFamily: 'Montserrat-Regular',
                            fontSize: 20,
                            marginLeft: 3,
                            lineHeight: 20,
                            color: themeColors.grey,
                        }}>
                            Rank #{index}
                        </Text>
                        <View style={{ flexDirection: 'row', marginRight: 20, marginTop: 10 }}>
                            {Object.keys(currentUserData.badges).map(key => (
                                <Image
                                    key={key}
                                    source={currentUserData.badges[key]}
                                    style={{ height: 50, maxWidth: 35, marginRight: 10 }}
                                />
                            ))}
                        </View>

                    </View>
                </View>
            </Modal>}
        </View>
    );
}