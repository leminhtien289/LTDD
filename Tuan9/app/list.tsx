// import React, { useState, useCallback } from 'react';
// import {
//     SafeAreaView,
//     View,
//     Text,
//     FlatList,
//     TouchableOpacity,
//     StyleSheet,
//     ActivityIndicator,
//     Alert
// } from 'react-native';
// import { useRouter, useLocalSearchParams, useFocusEffect } from 'expo-router';
// import { Ionicons, Feather } from '@expo/vector-icons';
// import TaskItem from '../components/TaskItem';
// import { getTasksFromDB, syncTasksFromAPI, Task } from '../utils/database';
// import { fetchTasksFromAPI } from '../utils/api';

// export default function ListScreen() {
//     const router = useRouter();
//     const params = useLocalSearchParams();
//     const userName = (params.userName as string) || 'Twinkle'; // Sửa lỗi type

//     const [isLoading, setIsLoading] = useState(true);
//     const [tasks, setTasks] = useState<Task[]>([]);

//     const loadTasksFromDB = async () => {
//         try {
//             setIsLoading(true);
//             const dbTasks = await getTasksFromDB();
//             setTasks(dbTasks);
//         } catch (e) {
//             console.error(e);
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     useFocusEffect(
//         useCallback(() => {
//             loadTasksFromDB();
//         }, [])
//     );

//     const handleSync = async () => {
//         setIsLoading(true);
//         try {
//             const apiTasks = await fetchTasksFromAPI();
//             await syncTasksFromAPI(apiTasks);
//             await loadTasksFromDB();
//             Alert.alert('Thành công', 'Đã đồng bộ dữ liệu từ cloud!');
//         } catch (e) {
//             Alert.alert('Lỗi', 'Không thể đồng bộ dữ liệu.');
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     return (
//         <SafeAreaView style={styles.container}>
//             <View style={styles.header}>
//                 <TouchableOpacity onPress={() => router.back()}>
//                     <Ionicons name="arrow-back" size={24} color="#000" />
//                 </TouchableOpacity>

//                 <View style={styles.userInfo}>
//                     <Feather name="user" size={30} color="#000" />
//                     <View>
//                         <Text style={styles.greeting}>Hi {userName}</Text>
//                         <Text>Have a grate day a head</Text>
//                     </View>
//                 </View>

//                 <TouchableOpacity onPress={handleSync}>
//                     <Ionicons name="sync" size={24} color="#007AFF" />
//                 </TouchableOpacity>
//             </View>

//             <View style={styles.searchContainer}>
//                 <Ionicons name="search" size={20} color="#999" />
//                 <Text style={styles.searchText}>Search</Text>
//             </View>

//             {isLoading ? (
//                 <ActivityIndicator size="large" style={styles.loader} />
//             ) : (
//                 <FlatList
//                     data={tasks}
//                     keyExtractor={(item) => item.id.toString()}
//                     renderItem={({ item }) => <TaskItem task={item} />}
//                     style={styles.list}
//                 />
//             )}

//             <TouchableOpacity
//                 style={styles.addButton}
//                 onPress={() => router.push('/add')}
//             >
//                 <Ionicons name="add" size={30} color="#fff" />
//             </TouchableOpacity>
//         </SafeAreaView>
//     );
// }

// const styles = StyleSheet.create({
//     container: { flex: 1, backgroundColor: '#FFFFFF' },
//     header: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         padding: 20,
//     },
//     userInfo: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         gap: 10,
//     },
//     greeting: { fontSize: 18, fontWeight: 'bold' },
//     searchContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         backgroundColor: '#F7F7F7',
//         borderWidth: 1,
//         borderColor: '#E0E0E0',
//         borderRadius: 10,
//         marginHorizontal: 20,
//         padding: 15,
//     },
//     searchText: { color: '#999', marginLeft: 10, fontSize: 16 },
//     loader: { marginTop: 50 },
//     list: { marginTop: 20 },
//     addButton: {
//         position: 'absolute',
//         bottom: 40,
//         right: 30,
//         backgroundColor: '#50A8DE',
//         width: 60,
//         height: 60,
//         borderRadius: 30,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
// });


import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    FlatList,
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
    ActivityIndicator,
    Image
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { fetchShops, Shop } from '../utils/api';

export default function ShopListScreen() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);
    const [shops, setShops] = useState<Shop[]>([]);

    useEffect(() => {
        const loadData = async () => {
            try {
                const data = await fetchShops();
                setShops(data);
            } catch (e) {
                alert('Failed to fetch shops');
            } finally {
                setIsLoading(false);
            }
        };
        loadData();
    }, []);

    const renderItem = ({ item }: { item: Shop }) => (
        <TouchableOpacity
            style={styles.shopCard}
            // Điều hướng đến shop/id
            onPress={() => router.push(`/shop/${item.id}`)}
        >
            <Image source={{ uri: item.image_url }} style={styles.shopImage} />
            <Text style={styles.shopName}>{item.name}</Text>
            <Text>{item.address}</Text>
            <View style={styles.statusRow}>
                <Text style={item.status === 'Accepting Orders' ? styles.statusOpen : styles.statusClosed}>
                    {item.status}
                </Text>
                <Text>{item.wait_time}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Shops Near Me</Text>
                <Ionicons name="person-outline" size={24} color="black" />
            </View>

            {isLoading ? (
                <ActivityIndicator size="large" style={styles.loader} />
            ) : (
                <FlatList
                    data={shops}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                    contentContainerStyle={{ padding: 15 }}
                />
            )}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#F5F5F5' },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#FFF',
    },
    headerTitle: { fontSize: 18, fontWeight: 'bold' },
    loader: { flex: 1, justifyContent: 'center' },
    shopCard: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        marginBottom: 15,
    },
    shopImage: {
        width: '100%',
        height: 120,
        borderRadius: 10,
        marginBottom: 10,
    },
    shopName: { fontSize: 18, fontWeight: 'bold' },
    statusRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    statusOpen: { color: 'green' },
    statusClosed: { color: 'red' },
});