import React, { useState } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ActivityIndicator,
    Image,
    Alert
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { addTaskToDB } from '../utils/database';
import { postTaskToAPI } from '../utils/api';

export default function AddJobScreen() {
    const [jobName, setJobName] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const router = useRouter();

    const handleFinish = async () => {
        if (!jobName.trim()) {
            Alert.alert('Lỗi', 'Vui lòng nhập công việc');
            return;
        }

        setIsSubmitting(true);

        try {
            const newApiTask = await postTaskToAPI(jobName);
            await addTaskToDB(newApiTask.name, newApiTask.id);
            router.back();

        } catch (error) {
            console.error(error);
            Alert.alert('Lỗi', 'Không thể thêm công việc. Vui lòng thử lại.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            {/* DÒNG BÌNH LUẬN LỖI ĐÃ BỊ XÓA Ở ĐÂY */}

            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <Ionicons name="arrow-back" size={24} color="#000" />
                </TouchableOpacity>
            </View>

            <View style={styles.content}>
                <Text style={styles.title}>ADD YOUR JOB</Text>
                <View style={styles.inputContainer}>
                    <Ionicons name="document-text-outline" size={24} color="#999" />
                    <TextInput
                        style={styles.input}
                        placeholder="Input your job"
                        value={jobName}
                        onChangeText={setJobName}
                    />
                </View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleFinish}
                    disabled={isSubmitting}
                >
                    {isSubmitting ? (
                        <ActivityIndicator color="#fff" />
                    ) : (
                        <>
                            <Text style={styles.buttonText}>FINISH</Text>
                            <Ionicons name="arrow-forward" size={20} color="#fff" />
                        </>
                    )}
                </TouchableOpacity>
                <Image
                    source={require('../assets/images/note.png')}
                    style={styles.noteImage}
                />
            </View>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#FFFFFF' },
    header: { padding: 20 },
    content: { flex: 1, alignItems: 'center', padding: 20 },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#3B5998',
        marginBottom: 40,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F7F7F7',
        borderWidth: 1,
        borderColor: '#E0E0E0',
        borderRadius: 10,
        width: '100%',
        padding: 15,
        marginBottom: 20,
    },
    input: { flex: 1, marginLeft: 10, fontSize: 16 },
    button: {
        flexDirection: 'row',
        backgroundColor: '#50A8DE',
        padding: 18,
        borderRadius: 10,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 10,
    },
    noteImage: {
        width: 200,
        height: 150,
        resizeMode: 'contain',
        marginTop: 50,
    },
});