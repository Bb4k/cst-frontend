import React, { useState, useContext, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { StyleSheet, View, Text, FlatList } from "react-native";
import { AppContext } from '../../context/app.context';

import { AppCategory } from '../../components';
import { ScrollView } from 'react-native-gesture-handler';
import { getDataForDate, getProgressDaily, getProgressMonthly } from '../../utils/utils';

export default function Progress({ navigation }) {
    const { themeColors, profile, API_URL } = useContext(AppContext);

    const [selected, setSelected] = useState('daily');
    const [selectedItem, setSelectedItem] = useState(0);
    const [maxScore, setMaxScore] = useState(1000);

    // const dailyTemplate1 = {
    //     date: 10,
    //     score: 1000,
    //     usage: {
    //         "Social Media": [
    //             {
    //                 name: "Instagram",
    //                 logo: "https://i.ibb.co/G5F82Gk/Instagram.png",
    //                 time: '1h35m'
    //             },
    //             {
    //                 name: "Instagram",
    //                 logo: "https://i.ibb.co/G5F82Gk/Instagram.png",
    //                 time: '1h35m'
    //             },
    //             {
    //                 name: "Instagram",
    //                 logo: "https://i.ibb.co/G5F82Gk/Instagram.png",
    //                 time: '1h35m'
    //             },
    //         ],
    //         "Games": [
    //             {
    //                 name: "Instagram",
    //                 logo: "https://i.ibb.co/G5F82Gk/Instagram.png",
    //                 time: '1h35m'
    //             },
    //             {
    //                 name: "Instagram",
    //                 logo: "https://i.ibb.co/G5F82Gk/Instagram.png",
    //                 time: '1h35m'
    //             },
    //             {
    //                 name: "Instagram",
    //                 logo: "https://i.ibb.co/G5F82Gk/Instagram.png",
    //                 time: '1h35m'
    //             },
    //         ],
    //         "Productivity": [
    //             {
    //                 name: "Instagram",
    //                 logo: "https://i.ibb.co/G5F82Gk/Instagram.png",
    //                 time: '1h35m'
    //             },
    //             {
    //                 name: "Instagram",
    //                 logo: "https://i.ibb.co/G5F82Gk/Instagram.png",
    //                 time: '1h35m'
    //             }
    //         ]
    //     }
    // }
    // const dailyTemplate2 = {
    //     date: 11,
    //     score: 500,
    //     usage: {
    //         "Social Media": [
    //             {
    //                 name: "Instagram",
    //                 logo: "https://i.ibb.co/G5F82Gk/Instagram.png",
    //                 time: '1h35m'
    //             },
    //             {
    //                 name: "Instagram",
    //                 logo: "https://i.ibb.co/G5F82Gk/Instagram.png",
    //                 time: '1h35m'
    //             },
    //             {
    //                 name: "Instagram",
    //                 logo: "https://i.ibb.co/G5F82Gk/Instagram.png",
    //                 time: '1h35m'
    //             },
    //         ],
    //         "Games": [
    //             {
    //                 name: "Instagram",
    //                 logo: "https://i.ibb.co/G5F82Gk/Instagram.png",
    //                 time: '1h35m'
    //             },
    //             {
    //                 name: "Instagram",
    //                 logo: "https://i.ibb.co/G5F82Gk/Instagram.png",
    //                 time: '1h35m'
    //             },
    //             {
    //                 name: "Instagram",
    //                 logo: "https://i.ibb.co/G5F82Gk/Instagram.png",
    //                 time: '1h35m'
    //             },
    //         ],
    //         "Productivity": [
    //             {
    //                 name: "Instagram",
    //                 logo: "https://i.ibb.co/G5F82Gk/Instagram.png",
    //                 time: '1h35m'
    //             },
    //             {
    //                 name: "Instagram",
    //                 logo: "https://i.ibb.co/G5F82Gk/Instagram.png",
    //                 time: '1h35m'
    //             }
    //         ]
    //     }
    // }
    // const dailyTemplate3 = {
    //     date: 12,
    //     score: 700,
    //     usage: {
    //         "Social-Media": [
    //             {
    //                 name: "Instagram",
    //                 logo: "https://i.ibb.co/G5F82Gk/Instagram.png",
    //                 time: '1h35m'
    //             },
    //             {
    //                 name: "Instagram",
    //                 logo: "https://i.ibb.co/G5F82Gk/Instagram.png",
    //                 time: '1h35m'
    //             },
    //             {
    //                 name: "Instagram",
    //                 logo: "https://i.ibb.co/G5F82Gk/Instagram.png",
    //                 time: '1h35m'
    //             },
    //         ],
    //         "Games": [
    //             {
    //                 name: "Instagram",
    //                 logo: "https://i.ibb.co/G5F82Gk/Instagram.png",
    //                 time: '1h35m'
    //             },
    //             {
    //                 name: "Instagram",
    //                 logo: "https://i.ibb.co/G5F82Gk/Instagram.png",
    //                 time: '1h35m'
    //             },
    //             {
    //                 name: "Instagram",
    //                 logo: "https://i.ibb.co/G5F82Gk/Instagram.png",
    //                 time: '1h35m'
    //             },
    //         ],
    //         "Productivity": [
    //             {
    //                 name: "Instagram",
    //                 logo: "https://i.ibb.co/G5F82Gk/Instagram.png",
    //                 time: '1h35m'
    //             },
    //             {
    //                 name: "Instagram",
    //                 logo: "https://i.ibb.co/G5F82Gk/Instagram.png",
    //                 time: '1h35m'
    //             },
    //             {
    //                 name: "Instagram",
    //                 logo: "https://i.ibb.co/G5F82Gk/Instagram.png",
    //                 time: '1h35m'
    //             },
    //             {
    //                 name: "Instagram",
    //                 logo: "https://i.ibb.co/G5F82Gk/Instagram.png",
    //                 time: '1h35m'
    //             },
    //             {
    //                 name: "Instagram",
    //                 logo: "https://i.ibb.co/G5F82Gk/Instagram.png",
    //                 time: '1h35m'
    //             },
    //             {
    //                 name: "Instagram",
    //                 logo: "https://i.ibb.co/G5F82Gk/Instagram.png",
    //                 time: '1h35m'
    //             }
    //         ]
    //     }
    // }

    // const res = [dailyTemplate1, dailyTemplate2, dailyTemplate3, dailyTemplate2, dailyTemplate3, dailyTemplate2, dailyTemplate3, dailyTemplate2, dailyTemplate3, dailyTemplate1, dailyTemplate2, dailyTemplate3, dailyTemplate2, dailyTemplate3, dailyTemplate2, dailyTemplate3, dailyTemplate2, dailyTemplate3];
    const [data, setData] = useState(null);
    const [graph, setGraph] = useState(null);
    const [daily, setDaily] = useState([]);
    const [monthly, setMonthly] = useState([]);
    const [loading, setLoading] = useState(true);
    const newDate = new Date();
    let count = 0;
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
            fontSize: 30,
            color: themeColors.lightgreen
        }
    });

    const fetchData = async () => {
        setLoading(true);

        //   const response = await fetch(`https://your-api.com/stats/${selectedOption}`);
        const response = res;
        // const statsData = await response.json();

        setData(response);
        setLoading(false);
    };

    useEffect(() => {
        if (count < 2) {
            setLoading(true);

            if (selected == 'daily') {
                getProgressDaily(profile.userId, API_URL)
                    .then((data) => {
                        setGraph(data);
                        const maxScore = data.reduce((max, obj) => {
                            return obj.score > max ? obj.score : max;
                        }, -Infinity);
                        setMaxScore(maxScore);
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            } else {
                getProgressMonthly(profile.userId, API_URL)
                    .then((data) => {
                        setGraph(data);
                        const maxScore = data.reduce((max, obj) => {
                            return obj.score > max ? obj.score : max;
                        }, -Infinity);
                        setMaxScore(maxScore);
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }

            getDataForDate(`${newDate.getDate()}-${newDate.getMonth() + 1}-${newDate.getFullYear()}`, profile.userId, API_URL)
                .then((data) => {
                    setData(data);
                })
                .catch((error) => {
                    console.log(error);
                });
            if (data && graph)
                setLoading(false);
            count += 1;
            // fetchData();
        }
    }, [selected, graph, data]);

    // useEffect(() => {
    //     setLoading(true);
    //     if (graph)
    //         if (selected == 'daily') {
    //             getDataForDate(`${graph[selectedItem].date}-${newDate.getMonth() + 1}-${newDate.getFullYear()}`, profile.userId, API_URL)
    //                 .then((data) => {
    //                     setData(data);
    //                 })
    //                 .catch((error) => {
    //                     console.log(error);
    //                 });
    //         } else {
    //             getDataForDate(`${28}-${newDate.getMonth() + 1}-${newDate.getFullYear()}`, profile.userId, API_URL)
    //                 .then((data) => {
    //                     setData(data);
    //                 })
    //                 .catch((error) => {
    //                     console.log(error);
    //                 });
    //         }
    //     // if (data && graph)
    //     setLoading(false);
    // }, [selectedItem, graph]);

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
                if (selected == 'daily') {
                    getDataForDate(`${elem.date}-${newDate.getMonth() + 1}-${newDate.getFullYear()}`, profile.userId, API_URL)
                        .then((data) => {
                            setData(data);
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                    setSelectedItem(index);
                }

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
        <>
            {
                !loading &&
                <View style={{ marginBottom: 55, backgroundColor: themeColors.white, flex: 1 }}>
                    <View style={styles.top}>
                        <View style={{ justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 20, alignItems: 'center' }}>
                            <Text style={styles.title}>Your progress</Text>
                            <TouchableOpacity
                                style={{
                                    borderRadius: 100,
                                    width: 90,
                                    height: 30,
                                    flexDirection: selected == 'daily' ? 'row' : 'row-reverse',
                                    backgroundColor: selected == 'daily' ? themeColors.lightgreen : themeColors.darkgreen,
                                    alignItems: 'center'
                                }}
                                onPress={() => {
                                    setLoading(true);
                                    setSelected(selected == 'daily' ? 'monthly' : 'daily')
                                }}
                            >
                                <View style={{
                                    height: 30,
                                    width: 30,
                                    borderRadius: 100,
                                    backgroundColor: selected == 'daily' ? themeColors.darkgreen : themeColors.lightgreen,
                                }} />
                                <Text style={{
                                    fontFamily: 'Montserrat-Bold',
                                    fontSize: 13,
                                    color: 'black',
                                    paddingHorizontal: 7
                                }}>{selected == 'daily' ? "Day" : "Month"}</Text>
                            </TouchableOpacity>
                        </View>

                        <FlatList
                            data={graph.reverse()}
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
                        <AppCategory list={data.usage} />
                    </View>
                </View>
            }
        </>
    );
}