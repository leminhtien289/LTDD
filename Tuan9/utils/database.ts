// import * as SQLite from 'expo-sqlite';

// // 1. Định nghĩa kiểu dữ liệu Task
// export interface Task {
//     id: number; // SQLite thường dùng id là số
//     api_id: string; // Lưu ID từ API để đồng bộ
//     name: string;
//     completed: boolean;
// }

// // 2. Mở kết nối CSDL
// const db = SQLite.openDatabaseSync('tasks.db');

// // 3. Hàm khởi tạo (chạy 1 lần)
// export const initDB = async () => {
//     await db.execAsync(
//         'CREATE TABLE IF NOT EXISTS tasks (id INTEGER PRIMARY KEY AUTOINCREMENT, api_id TEXT UNIQUE, name TEXT, completed BOOLEAN)'
//     );
// };

// // 4. Hàm lấy tất cả task từ SQLite
// export const getTasksFromDB = async (): Promise<Task[]> => {
//     const allRows = await db.getAllAsync<Task>('SELECT * FROM tasks');
//     return allRows;
// };

// // 5. Hàm thêm 1 task vào SQLite
// export const addTaskToDB = async (name: string, api_id: string) => {
//     const result = await db.runAsync(
//         'INSERT INTO tasks (name, completed, api_id) VALUES (?, ?, ?)',
//         [name, false, api_id]
//     );
//     return result.lastInsertRowId;
// };

// // 6. Hàm đồng bộ (Xóa cũ, chèn mới)
// export const syncTasksFromAPI = async (apiTasks: any[]) => {
//     // Dùng transaction để đảm bảo tốc độ và an toàn dữ liệu
//     await db.withTransactionAsync(async () => {
//         // Xóa tất cả dữ liệu cũ
//         await db.runAsync('DELETE FROM tasks');

//         // Thêm dữ liệu mới từ API
//         for (const task of apiTasks) {
//             await db.runAsync(
//                 'INSERT INTO tasks (api_id, name, completed) VALUES (?, ?, ?)',
//                 [task.id, task.name, task.completed]
//             );
//         }
//     });
// };


import * as SQLite from 'expo-sqlite';
import { Drink } from './api';

export interface CartItem extends Drink {
    quantity: number;
}

const db = SQLite.openDatabaseSync('cafe.db');

// Khởi tạo CSDL
export const initDB = async () => {
    await db.execAsync(
        'CREATE TABLE IF NOT EXISTS cart (api_id TEXT PRIMARY KEY, name TEXT, price REAL, quantity INTEGER, image_url TEXT, details TEXT)'
    );
};


export const getCartItems = async (): Promise<CartItem[]> => {
    const allRows = await db.getAllAsync<any>(
        'SELECT * FROM cart WHERE quantity > 0'
    );
    return allRows.map(row => ({
        id: row.api_id,
        name: row.name,
        price: row.price,
        quantity: row.quantity,
        image_url: row.image_url,
        details: row.details,
    }));
};


export const addItemToCart = async (item: Drink) => {
    await db.runAsync(

        `INSERT INTO cart (api_id, name, price, quantity, image_url, details) 
     VALUES (?, ?, ?, 1, ?, ?)
     ON CONFLICT(api_id) DO UPDATE SET quantity = quantity + 1`,
        [item.id, item.name, item.price, item.image_url, item.details]
    );
};


export const clearCart = async () => {
    await db.runAsync('DELETE FROM cart');
};