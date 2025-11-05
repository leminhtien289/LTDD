const API_URL = 'https://690b159f6ad3beba00f364ef.mockapi.io/tasks';

export const fetchTasksFromAPI = async () => {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Failed to fetch from API:', error);
        throw error;
    }
};

export const postTaskToAPI = async (name: string) => {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: name,
                completed: false,
            }),
        });
        const newData = await response.json();
        return newData; // Trả về task mới (có id từ API)
    } catch (error) {
        console.error('Failed to post to API:', error);
        throw error;
    }
};