import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
    SafeAreaView,
} from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { ALL_PHONES } from '../data/products';

// Import components
import ColorOption from '../components/ColorOption';
import ActionButton from '../components/ActionButton';

export default function ColorSelectorModal() {
    const router = useRouter();
    const params = useLocalSearchParams();

    // 1. Nhận ID hiện tại từ params
    const currentId = (params.currentId || 'blue') as string;

    // 2. State tạm thời CHỈ TỒN TẠI trong modal
    const [tempSelectedId, setTempSelectedId] = useState(currentId);
    const product = ALL_PHONES.find(p => p.id === tempSelectedId);

    // 3. Hàm xử lý khi nhấn "Xong"
    const handleDone = () => {
        // Quay về 'index' và gửi 'selectedId' mới
        router.push({
            pathname: '/',
            params: { selectedId: tempSelectedId }
        });
    };

    return (
        // Nền mờ (nhấn vào để đóng)
        <TouchableOpacity
            style={styles.backdrop}
            activeOpacity={1}
            onPress={() => router.back()} // Dùng router.back() để đóng modal
        >
            <SafeAreaView style={styles.safeArea}>
                {/* Ngăn không cho click xuyên qua card */}
                <TouchableOpacity style={styles.modalCard} activeOpacity={1}>
                    {/* Header của Modal */}
                    <View style={styles.header}>
                        <Image source={product?.image} style={styles.thumbImage} />
                        <View style={styles.headerText}>
                            <Text style={styles.title}>Điện thoại Vsmart Joy 3</Text>
                            <Text>Màu: {product?.name}</Text>
                            <Text style={styles.price}>{product?.price}</Text>
                        </View>
                    </View>

                    <Text style={styles.chooseText}>Chọn một màu bên dưới:</Text>

                    {/* Danh sách các ô màu */}
                    <View style={styles.colorList}>
                        {ALL_PHONES.map((phone) => (
                            <ColorOption
                                key={phone.id}
                                colorHex={phone.colorHex}
                                isSelected={tempSelectedId === phone.id}
                                onPress={() => setTempSelectedId(phone.id)}
                            />
                        ))}
                    </View>

                    <ActionButton
                        title="XONG"
                        onPress={handleDone}
                        style={styles.doneButton}
                    />
                </TouchableOpacity>
            </SafeAreaView>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    backdrop: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'flex-end',
    },
    safeArea: {
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    modalCard: {
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#EEE',
        paddingBottom: 15,
    },
    thumbImage: {
        width: 60,
        height: 60,
        resizeMode: 'contain',
        marginRight: 15,
    },
    headerText: { flex: 1 },
    title: { fontSize: 16, fontWeight: 'bold' },
    price: { fontSize: 14, color: '#D9534F', marginTop: 4 },
    chooseText: {
        fontSize: 14,
        color: '#666',
        marginTop: 20,
        marginBottom: 10,
    },
    colorList: {
        flexDirection: 'column',
    },
    doneButton: {
        marginTop: 20,
    },
});