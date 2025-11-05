const BLUE_IMAGE = require('../assets/blue.png');
const RED_IMAGE = require('../assets/red.png');
const BLACK_IMAGE = require('../assets/black.png');
const LIGHTBLUE_IMAGE = require('../assets/silver.png');

export const PRODUCT_DATA = {
  blue: {
    id: 'blue',
    name: 'Xanh',
    image: BLUE_IMAGE,
    price: '1.790.000 đ',
    originalPrice: '1.790.000 đ',
  },
  red: {
    id: 'red',
    name: 'Đỏ',
    image: RED_IMAGE,
    price: '1.790.000 đ',
    originalPrice: '1.790.000 đ',
  },
  black: {
    id: 'black',
    name: 'Đen',
    image: BLACK_IMAGE,
    price: '1.790.000 đ',
    originalPrice: '1.790.000 đ',
  },
  lightblue: {
    id: 'lightblue',
    name: 'Xanh nhạt',
    image: LIGHTBLUE_IMAGE,
    price: '1.790.000 đ',
    originalPrice: '1.790.000 đ',
  },
};

// Danh sách các màu để render
export const COLOR_LIST = [
  { id: 'lightblue', hex: '#AEE2FF' },
  { id: 'red', hex: '#D9534F' },
  { id: 'black', hex: '#000000' },
  { id: 'blue', hex: '#3B5998' },
];