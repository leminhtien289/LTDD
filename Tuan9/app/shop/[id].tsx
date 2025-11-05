import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    FlatList,
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
    ActivityIndicator,
    Image,
    Alert
} from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { fetchMenu, Drink } from '../../utils/api';
import { addItemToCart } from '../../utils/database';

export default function MenuScreen() {
    const router = useRouter();
    const { id: shopId } = useLocalSearchParams();

    const [isLoading, setIsLoading] = useState(true);
    const [menu, setMenu] = useState<Drink[]>([]);

    useEffect(() => {
        const loadData = async () => {
            try {
                // shopId được truyền vào nhưng API của bạn không dùng,
                // chúng ta vẫn gọi fetchMenu như bình thường
                const data = await fetchMenu(shopId as string);
                setMenu(data);
            } catch (e) {
                alert('Failed to fetch menu');
            } finally {
                setIsLoading(false);
            }
        };
        loadData();
    }, [shopId]);

    const handleAddToCart = async (item: Drink) => {
        try {
            await addItemToCart(item);
            Alert.alert('Thành công', `${item.name} đã được thêm vào giỏ hàng.`);
        } catch (e) {
            console.error(e);
            Alert.alert('Lỗi', 'Không thể thêm vào giỏ hàng.');
        }
    };

    const renderItem = ({ item }: { item: Drink }) => (
        <View style={styles.drinkRow}>
            <Image source={{ uri: item.image_url }} style={styles.drinkImage} />
            <View style={styles.drinkInfo}>
                <Text style={styles.drinkName}>{item.name}</Text>
                <Text style={styles.drinkDetails}>{item.details}</Text>
                <Text style={styles.drinkPrice}>${item.price}</Text>
            </View>
            <TouchableOpacity
                style={styles.addButton}
                onPress={() => handleAddToCart(item)}
            >
                <Ionicons name="add" size={24} color="green" />
            </TouchableOpacity>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Drinks</Text>
                <Ionicons name="search" size={24} color="black" />
            </View>

            {isLoading ? (
                <ActivityIndicator size="large" style={styles.loader} />
            ) : (
                <FlatList
                    data={menu}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                    style={{ flex: 1 }}
                />
            )}

            <TouchableOpacity
                style={styles.cartButton}
                onPress={() => router.push('/order')}
            >
                <Text style={styles.cartButtonText}>GO TO CART</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#FFF' },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
    },
    headerTitle: { fontSize: 18, fontWeight: 'bold' },
    loader: { flex: 1, justifyContent: 'center' },
    drinkRow: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#F0F0F0',
    },
    drinkImage: { width: 50, height: 50, borderRadius: 25, marginRight: 15 },
    drinkInfo: { flex: 1 },
    drinkName: { fontSize: 16, fontWeight: 'bold' },
    drinkDetails: { fontSize: 14, color: '#666' },
    drinkPrice: { fontSize: 14, color: '#000', marginTop: 4 },
    addButton: {
        padding: 5,
    },
    cartButton: {
        backgroundColor: '#EAB308',
        padding: 18,
        margin: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    cartButtonText: {
        color: '#000',
        fontSize: 16,
        fontWeight: 'bold',
    },
});