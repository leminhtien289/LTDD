// const API_URL = 'https://690b159f6ad3beba00f364ef.mockapi.io/tasks';

// export const fetchTasksFromAPI = async () => {
//     try {
//         const response = await fetch(API_URL);
//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.error('Failed to fetch from API:', error);
//         throw error;
//     }
// };

// export const postTaskToAPI = async (name: string) => {
//     try {
//         const response = await fetch(API_URL, {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({
//                 name: name,
//                 completed: false,
//             }),
//         });
//         const newData = await response.json();
//         return newData; // Trả về task mới (có id từ API)
//     } catch (error) {
//         console.error('Failed to post to API:', error);
//         throw error;
//     }
// };


export interface Shop {
    id: string;
    name: string;
    address: string;
    image_url: string; 
    status: string;
    wait_time: string; 
}

export interface Drink {
    id: string;
    name: string;
    details: string;
    price: number;
    image_url: string; 
}


export const fetchShops = async (): Promise<Shop[]> => {
    try {
        const response = await fetch('https://690b7a6f6ad3beba00f52407.mockapi.io/Shop');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Failed to fetch shops:', error);
        throw error;
    }
};


export const fetchMenu = async (shopId: string): Promise<Drink[]> => {

    try {
        const response = await fetch('https://690b7a6f6ad3beba00f52407.mockapi.io/Drink');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Failed to fetch menu:', error);
        throw error;
    }
};