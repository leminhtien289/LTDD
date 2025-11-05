import React, { useState, useCallback } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    FlatList,
    TouchableOpacity,
    StyleSheet,
    ActivityIndicator
} from 'react-native';
import { useRouter, useLocalSearchParams, useFocusEffect } from 'expo-router';
import { Ionicons, Feather } from '@expo/vector-icons';
import TaskItem from '../components/TaskItem';

const API_URL = 'https://690b159f6ad3beba00f364ef.mockapi.io/users';

// Định nghĩa kiểu dữ liệu cho Task
interface Task {
    id: string;
    name: string;
    completed: boolean;
}

export default function ListScreen() {
    const router = useRouter();
    const params = useLocalSearchParams();
    const userName = params.userName || 'Twinkle';

    const [isLoading, setIsLoading] = useState(true);
    const [tasks, setTasks] = useState<Task[]>([]); // Sử dụng kiểu Task[]

    const fetchTasks = async () => {
        try {
            setIsLoading(true);
            const response = await fetch(API_URL);
            const data = await response.json();
            setTasks(data);
        } catch (error) {
            console.error(error);
            alert('Failed to fetch tasks');
        } finally {
            setIsLoading(false);
        }
    };

    useFocusEffect(
        useCallback(() => {
            fetchTasks();
        }, [])
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <Ionicons name="arrow-back" size={24} color="#000" />
                </TouchableOpacity>
                <View style={styles.userInfo}>
                    <Feather name="user" size={30} color="#000" />
                    <View>
                        <Text style={styles.greeting}>Hi {userName}</Text>
                        <Text>Have a grate day a head</Text>
                    </View>
                </View>
            </View>

            <View style={styles.searchContainer}>
                <Ionicons name="search" size={20} color="#999" />
                <Text style={styles.searchText}>Search</Text>
            </View>

            {isLoading ? (
                <ActivityIndicator size="large" style={styles.loader} />
            ) : (
                <FlatList
                    data={tasks}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <TaskItem task={item} />}
                    style={styles.list}
                />
            )}

            <TouchableOpacity
                style={styles.addButton}
                onPress={() => router.push('/add')} // Tên file là 'add'
            >
                <Ionicons name="add" size={30} color="#fff" />
            </TouchableOpacity>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#FFFFFF' },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20,
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    greeting: { fontSize: 18, fontWeight: 'bold' },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F7F7F7',
        borderWidth: 1,
        borderColor: '#E0E0E0',
        borderRadius: 10,
        marginHorizontal: 20,
        padding: 15,
    },
    searchText: { color: '#999', marginLeft: 10, fontSize: 16 },
    loader: { marginTop: 50 },
    list: { marginTop: 20 },
    addButton: {
        position: 'absolute',
        bottom: 40,
        right: 30,
        backgroundColor: '#50A8DE',
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
});