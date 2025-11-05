import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

interface Props {
    rating: number;
    reviewCount: number;
}

export default function RatingStars({ rating, reviewCount }: Props) {
    return (
        <View style={styles.container}>
            {[1, 2, 3, 4, 5].map((index) => (
                <FontAwesome
                    key={index}
                    name="star"
                    size={16}
                    color={index <= rating ? '#FDD835' : '#D1D1D1'}
                    style={styles.star}
                />
            ))}
            <Text style={styles.reviewText}>({reviewCount} đánh giá)</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flexDirection: 'row', alignItems: 'center' },
    star: { marginRight: 2 },
    reviewText: { marginLeft: 10, color: '#666' },
});