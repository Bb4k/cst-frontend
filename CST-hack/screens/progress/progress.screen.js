import React, { useState, useContext, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { StyleSheet, View, Text, FlatList } from "react-native";
import { AppContext } from '../../context/app.context';

import { AppCategory } from '../../components';
import { ScrollView } from 'react-native-gesture-handler';

export default function Progress({ navigation }) {
    const { themeColors } = useContext(AppContext);

    const [monthly, setMonthly] = useState([]);
    const [selected, setSelected] = useState('daily');
    const [selectedItem, setSelectedItem] = useState(0);
    const [maxScore, setMaxScore] = useState(1000);

    const dailyTemplate1 = {
        date: 10,
        score: 1000,
        usage: {
            "Social Media": [
                {
                    name: "Instagram",
                    logo: "https://i.ibb.co/G5F82Gk/Instagram.png",
                    time: '1h35m'
                },
                {
                    name: "Instagram",
                    logo: "https://i.ibb.co/G5F82Gk/Instagram.png",
                    time: '1h35m'
                },
                {
                    name: "Instagram",
                    logo: "https://i.ibb.co/G5F82Gk/Instagram.png",
                    time: '1h35m'
                },
            ],
            "Games": [
                {
                    name: "Instagram",
                    logo: "https://i.ibb.co/G5F82Gk/Instagram.png",
                    time: '1h35m'
                },
                {
                    name: "Instagram",
                    logo: "https://i.ibb.co/G5F82Gk/Instagram.png",
                    time: '1h35m'
                },
                {
                    name: "Instagram",
                    logo: "https://i.ibb.co/G5F82Gk/Instagram.png",
                    time: '1h35m'
                },
            ],
            "Productivity": [
                {
                    name: "Instagram",
                    logo: "https://i.ibb.co/G5F82Gk/Instagram.png",
                    time: '1h35m'
                },
                {
                    name: "Instagram",
                    logo: "https://i.ibb.co/G5F82Gk/Instagram.png",
                    time: '1h35m'
                }
            ]
        }
    }
    const dailyTemplate2 = {
        date: 11,
        score: 500,
        usage: {
            "Social Media": [
                {
                    name: "Instagram",
                    logo: "https://i.ibb.co/G5F82Gk/Instagram.png",
                    time: '1h35m'
                },
                {
                    name: "Instagram",
                    logo: "https://i.ibb.co/G5F82Gk/Instagram.png",
                    time: '1h35m'
                },
                {
                    name: "Instagram",
                    logo: "https://i.ibb.co/G5F82Gk/Instagram.png",
                    time: '1h35m'
                },
            ],
            "Games": [
                {
                    name: "Instagram",
                    logo: "https://i.ibb.co/G5F82Gk/Instagram.png",
                    time: '1h35m'
                },
                {
                    name: "Instagram",
                    logo: "https://i.ibb.co/G5F82Gk/Instagram.png",
                    time: '1h35m'
                },
                {
                    name: "Instagram",
                    logo: "https://i.ibb.co/G5F82Gk/Instagram.png",
                    time: '1h35m'
                },
            ],
            "Productivity": [
                {
                    name: "Instagram",
                    logo: "https://i.ibb.co/G5F82Gk/Instagram.png",
                    time: '1h35m'
                },
                {
                    name: "Instagram",
                    logo: "https://i.ibb.co/G5F82Gk/Instagram.png",
                    time: '1h35m'
                }
            ]
        }
    }
    const dailyTemplate3 = {
        date: 12,
        score: 700,
        usage: {
            "Social-Media": [
                {
                    name: "Instagram",
                    logo: "https://i.ibb.co/G5F82Gk/Instagram.png",
                    time: '1h35m'
                },
                {
                    name: "Instagram",
                    logo: "https://i.ibb.co/G5F82Gk/Instagram.png",
                    time: '1h35m'
                },
                {
                    name: "Instagram",
                    logo: "https://i.ibb.co/G5F82Gk/Instagram.png",
                    time: '1h35m'
                },
            ],
            "Games": [
                {
                    name: "Instagram",
                    logo: "https://i.ibb.co/G5F82Gk/Instagram.png",
                    time: '1h35m'
                },
                {
                    name: "Instagram",
                    logo: "https://i.ibb.co/G5F82Gk/Instagram.png",
                    time: '1h35m'
                },
                {
                    name: "Instagram",
                    logo: "https://i.ibb.co/G5F82Gk/Instagram.png",
                    time: '1h35m'
                },
            ],
            "Productivity": [
                {
                    name: "Instagram",
                    logo: "https://i.ibb.co/G5F82Gk/Instagram.png",
                    time: '1h35m'
                },
                {
                    name: "Instagram",
                    logo: "https://i.ibb.co/G5F82Gk/Instagram.png",
                    time: '1h35m'
                },
                {
                    name: "Instagram",
                    logo: "https://i.ibb.co/G5F82Gk/Instagram.png",
                    time: '1h35m'
                },
                {
                    name: "Instagram",
                    logo: "https://i.ibb.co/G5F82Gk/Instagram.png",
                    time: '1h35m'
                },
                {
                    name: "Instagram",
                    logo: "https://i.ibb.co/G5F82Gk/Instagram.png",
                    time: '1h35m'
                },
                {
                    name: "Instagram",
                    logo: "https://i.ibb.co/G5F82Gk/Instagram.png",
                    time: '1h35m'
                }
            ]
        }
    }

    const [daily, setDaily] = useState([dailyTemplate1, dailyTemplate2, dailyTemplate3, dailyTemplate2, dailyTemplate3, dailyTemplate2, dailyTemplate3, dailyTemplate2, dailyTemplate3, dailyTemplate1, dailyTemplate2, dailyTemplate3, dailyTemplate2, dailyTemplate3, dailyTemplate2, dailyTemplate3, dailyTemplate2, dailyTemplate3]);

    const styles = StyleSheet.create({
        container: {
            width: '100%',
            height: '100%',
            marginBottom: 52
        },
        top: {
            backgroundColor: themeColors.darkblue,
            justifyContent: 'flex-start',
            paddingVertical: 30
        },
        title: {
            fontFamily: 'Montserrat-Regular',
            fontSize: 35,
            paddingLeft: 20,
            color: themeColors.lightgreen
        }
    });

    const renderElement = (elem, index) => (
        <TouchableOpacity
            style={[{
                alignItems: 'center',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                height: 130,
                minWidth: 30,
                borderRadius: 20,
                marginHorizontal: 2
            }, index == 0 && { marginRight: 0, paddingRight: 20 }, selected == 'daily' ? index === daily.length - 1 && { paddingLeft: 20 } : index === monthly.length - 1 && { paddingLeft: 20 }]}
            onPress={() => {
                setSelectedItem(index);
            }}>
            <View style={{
                backgroundColor: index == selectedItem ? themeColors.darkgreen : themeColors.lightgreen,
                borderRadius: 30,
                width: 13,
                height: `${elem.score / maxScore * 80}%`
            }}
            />
            <Text style={{ fontFamily: 'Montserrat-Regular', fontSize: 15, color: 'white', textAlign: 'center' }}>{elem.date}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={{ marginBottom: 55, backgroundColor: themeColors.white, flex: 1 }}>
            <View style={styles.top}>
                <Text style={styles.title}>Your progress</Text>
                <FlatList
                    data={selected == 'montly' ? monthly : daily}
                    keyExtractor={(item, index) => index}
                    renderItem={({ index, item }) => (
                        renderElement(item, index)
                    )}
                    inverted={true}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
            <View style={{ paddingHorizontal: 20, flex: 1 }}>
                <AppCategory list={selected == 'daily' ? daily[selectedItem].usage : monthly[selectedItem].usage} />
            </View>
        </View>
    );
}