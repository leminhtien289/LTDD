import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';

// Định nghĩa kiểu dữ liệu cho Task
interface Task {
    id: string;
    name: string;
    completed: boolean;
}

// Định nghĩa kiểu cho props
interface TaskItemProps {
    task: Task;
}

export default function TaskItem({ task }: TaskItemProps) {
    return (
        <View style={styles.itemContainer}>
            <View style={styles.taskInfo}>
                <View style={styles.checkbox}>
                    <Ionicons name="checkmark" size={16} color="#fff" />
                </View>
                <Text style={styles.taskName}>{task.name}</Text>
            </View>
            <View style={styles.taskActions}>
                <View style={[styles.tag, { backgroundColor: '#F39C12' }]} />
                <Feather name="edit-2" size={20} color="#E94141" />
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#F7F7F7',
        borderWidth: 1,
        borderColor: '#E0E0E0',
        borderRadius: 10,
        padding: 15,
        marginHorizontal: 20,
        marginVertical: 5,
    },
    taskInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    checkbox: {
        width: 24,
        height: 24,
        backgroundColor: '#50A8DE',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    taskName: {
        fontSize: 16,
        flex: 1,
    },
    taskActions: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
    },
    tag: {
        width: 10,
        height: 10,
        borderRadius: 5,
    },
});