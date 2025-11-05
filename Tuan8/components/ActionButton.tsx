import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from 'react-native';

interface Props {
    title: string;
    onPress: () => void;
    style?: ViewStyle;
}

export default function ActionButton({ title, onPress, style }: Props) {
    const isBuyButton = title === 'CHỌN MUA';
    const buttonStyle = isBuyButton ? styles.buyButton : styles.doneButton;
    const textStyle = isBuyButton ? styles.buyText : styles.doneText;

    return (
        <TouchableOpacity style={[styles.button, buttonStyle, style]} onPress={onPress}>
            <Text style={[styles.text, textStyle]}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        paddingVertical: 15,
        borderRadius: 5,
        alignItems: 'center',
        flex: 1, 
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    buyButton: {
        backgroundColor: '#D9534F',
    },
    buyText: {
        color: '#FFFFFF',
    },
    doneButton: {
        backgroundColor: '#3B5998',
        flex: 0, // Sửa: Bỏ flex 1
    },
    doneText: {
        color: '#FFFFFF',
    },
});