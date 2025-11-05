import React, { useState, useCallback } from 'react';
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
import { useRouter, useFocusEffect } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { getCartItems, clearCart, CartItem } from '../utils/database';

export default function OrderScreen() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);
    const [cart, setCart] = useState<CartItem[]>([]);
    const [total, setTotal] = useState(0);

    useFocusEffect(
        useCallback(() => {
            const loadData = async () => {
                try {
                    setIsLoading(true);
                    const items = await getCartItems();
                    setCart(items);

                    const newTotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
                    setTotal(newTotal);
                } catch (e) {
                    console.error(e);
                } finally {
                    setIsLoading(false);
                }
            };
            loadData();
        }, [])
    );

    const handlePayNow = async () => {
        try {
            await clearCart();
            Alert.alert('Thành công', 'Đã thanh toán!', [
                { text: 'OK', onPress: () => router.back() }
            ]);
        } catch (e) {
            Alert.alert('Lỗi', 'Không thể thanh toán.');
        }
    };

    const renderItem = ({ item }: { item: CartItem }) => (
        <View style={styles.itemRow}>
            <Image source={{ uri: item.image_url }} style={styles.itemImage} />
            <View style={styles.itemInfo}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemDetails}>Số lượng: {item.quantity}</Text>
                <Text style={styles.itemPrice}>${(item.price * item.quantity).toFixed(2)}</Text>
            </View>
            <Ionicons name="ellipsis-horizontal" size={24} color="black" />
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Your orders</Text>
                <Ionicons name="search" size={24} color="black" />
            </View>

            {isLoading ? (
                <ActivityIndicator size="large" style={styles.loader} />
            ) : (
                <FlatList
                    data={cart}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                    style={{ flex: 1 }}
                    ListHeaderComponent={
                        <View style={styles.totalCard}>
                            <Text style={styles.totalText}>Tổng cộng</Text>
                            <Text style={styles.totalPrice}>${total.toFixed(2)}</Text>
                        </View>
                    }
                />
            )}

            <TouchableOpacity
                style={styles.payButton}
                onPress={handlePayNow}
            >
                <Text style={styles.payButtonText}>PAY NOW</Text>
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
    totalCard: {
        backgroundColor: '#3B5998',
        padding: 20,
        margin: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    totalText: { fontSize: 16, color: '#FFF' },
    totalPrice: { fontSize: 32, fontWeight: 'bold', color: '#FFF' },
    itemRow: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#F0F0F0',
    },
    itemImage: { width: 50, height: 50, borderRadius: 10, marginRight: 15 },
    itemInfo: { flex: 1 },
    itemName: { fontSize: 16, fontWeight: 'bold' },
    itemDetails: { fontSize: 14, color: '#666' },
    itemPrice: { fontSize: 16, fontWeight: 'bold', color: '#000', marginTop: 4 },
    payButton: {
        backgroundColor: '#EAB308',
        padding: 18,
        margin: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    payButtonText: {
        color: '#000',
        fontSize: 16,
        fontWeight: 'bold',
    },
});