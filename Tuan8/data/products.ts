import { ImageSourcePropType } from 'react-native';

const BLUE_IMAGE = require('../assets/images/blue.png');
const RED_IMAGE = require('../assets/images/red.png');
const BLACK_IMAGE = require('../assets/images/black.png');
const LIGHTBLUE_IMAGE = require('../assets/images/silver.png');

export interface Phone {
    id: string;
    name: string;
    image: ImageSourcePropType;
    price: string;
    originalPrice: string;
    colorHex: string;
}

export const ALL_PHONES: Phone[] = [
    {
        id: 'blue',
        name: 'Xanh',
        image: BLUE_IMAGE,
        price: '1.790.000 đ',
        originalPrice: '1.790.000 đ',
        colorHex: '#3B5998',
    },
    {
        id: 'red',
        name: 'Đỏ',
        image: RED_IMAGE,
        price: '1.790.000 đ',
        originalPrice: '1.790.000 đ',
        colorHex: '#D9534F',
    },
    {
        id: 'black',
        name: 'Đen',
        image: BLACK_IMAGE,
        price: '1.790.000 đ',
        originalPrice: '1.790.000 đ',
        colorHex: '#000000',
    },
    {
        id: 'lightblue',
        name: 'Xanh nhạt',
        image: LIGHTBLUE_IMAGE,
        price: '1.790.000 đ',
        originalPrice: '1.790.000 đ',
        colorHex: '#AEE2FF',
    },
];