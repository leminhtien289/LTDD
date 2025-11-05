import * as SQLite from 'expo-sqlite';

// 1. Định nghĩa kiểu dữ liệu Task
export interface Task {
    id: number; // SQLite thường dùng id là số
    api_id: string; // Lưu ID từ API để đồng bộ
    name: string;
    completed: boolean;
}

// 2. Mở kết nối CSDL
const db = SQLite.openDatabaseSync('tasks.db');

// 3. Hàm khởi tạo (chạy 1 lần)
export const initDB = async () => {
    await db.execAsync(
        'CREATE TABLE IF NOT EXISTS tasks (id INTEGER PRIMARY KEY AUTOINCREMENT, api_id TEXT UNIQUE, name TEXT, completed BOOLEAN)'
    );
};

// 4. Hàm lấy tất cả task từ SQLite
export const getTasksFromDB = async (): Promise<Task[]> => {
    const allRows = await db.getAllAsync<Task>('SELECT * FROM tasks');
    return allRows;
};

// 5. Hàm thêm 1 task vào SQLite
export const addTaskToDB = async (name: string, api_id: string) => {
    const result = await db.runAsync(
        'INSERT INTO tasks (name, completed, api_id) VALUES (?, ?, ?)',
        [name, false, api_id]
    );
    return result.lastInsertRowId;
};

// 6. Hàm đồng bộ (Xóa cũ, chèn mới)
export const syncTasksFromAPI = async (apiTasks: any[]) => {
    // Dùng transaction để đảm bảo tốc độ và an toàn dữ liệu
    await db.withTransactionAsync(async () => {
        // Xóa tất cả dữ liệu cũ
        await db.runAsync('DELETE FROM tasks');

        // Thêm dữ liệu mới từ API
        for (const task of apiTasks) {
            await db.runAsync(
                'INSERT INTO tasks (api_id, name, completed) VALUES (?, ?, ?)',
                [task.id, task.name, task.completed]
            );
        }
    });
};