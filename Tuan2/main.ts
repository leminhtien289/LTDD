// (async () => {
//     console.log("--- Câu 1 ---");
//     const promise1 = new Promise<string>((resolve) => {
//         setTimeout(() => {
//             resolve("Hello Async");
//         }, 2000);
//     });

//     const result1 = await promise1;
//     console.log(result1);


//     console.log("\n--- Câu 2 ---");
//     const getTen = (): Promise<number> => {
//         return new Promise((resolve) => {
//             setTimeout(() => {
//                 resolve(10);
//             }, 1000);
//         });
//     };

//     const result2 = await getTen();
//     console.log(result2);


//     console.log("\n--- Câu 3 ---");
//     const rejectPromise = (): Promise<never> => {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 reject("Something went wrong");
//             }, 1000);
//         });
//     };

//     try {
//         await rejectPromise();
//     } catch (error) {
//         console.error(error);
//     }


//     console.log("\n--- Câu 4 ---");
//     const randomPromise = new Promise<number>((resolve, reject) => {
//         const num = Math.random();
//         if (num > 0.5) {
//             resolve(num);
//         } else {
//             reject(new Error(`Số ngẫu nhiên ${num} quá nhỏ`));
//         }
//     });


//     await new Promise<void>((done) => {
//         randomPromise
//             .then((result) => {
//                 console.log("Thành công:", result);
//             })
//             .catch((error: Error) => {
//                 console.error("Thất bại:", error.message);
//             })
//             .finally(() => {
//                 done();
//             });
//     });


//     console.log("\n--- Câu 5 ---");
//     const simulateTask = (time: number): Promise<string> => {
//         return new Promise((resolve) => {
//             setTimeout(() => {
//                 resolve(`Task done after ${time}ms`);
//             }, time);
//         });
//     };

//     const result5 = await simulateTask(500);
//     console.log(result5);


//     console.log("\n--- Câu 6 ---");
//     const task1 = simulateTask(200);
//     const task2 = simulateTask(500);
//     const task3 = simulateTask(100);

//     const results6 = await Promise.all([task1, task2, task3]);
//     console.log(results6);


//     console.log("\n--- Câu 7 ---");
//     const raceTask1 = simulateTask(300); // Chậm
//     const raceTask2 = simulateTask(100); // Nhanh nhất
//     const raceTask3 = simulateTask(200); // Vừa

//     const result7 = await Promise.race([raceTask1, raceTask2, raceTask3]);
//     console.log(result7);


//     console.log("\n--- Câu 8 ---");
//     const result8 = await Promise.resolve(2)
//         .then((num) => {
//             const squared = num * num;
//             console.log("Bình phương:", squared);
//             return squared;
//         })
//         .then((num) => {
//             const doubled = num * 2;
//             console.log("Gấp đôi:", doubled);
//             return doubled;
//         })
//         .then((num) => {
//             const added = num + 5;
//             console.log("Cộng 5:", added);
//             return added;
//         });

//     console.log("Kết quả cuối cùng:", result8);


//     console.log("\n--- Câu 9 ---");
//     const data: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//     const filterEven = (arr: number[]): Promise<number[]> => {
//         return new Promise((resolve) => {
//             setTimeout(() => {
//                 const evenNumbers = arr.filter((n) => n % 2 === 0);
//                 resolve(evenNumbers);
//             }, 1000);
//         });
//     };

//     const result9 = await filterEven(data);
//     console.log(result9);


//     console.log("\n--- Câu 10 (Trường hợp thành công) ---");
//     await new Promise<void>((done) => {
//         Promise.resolve("It worked!")
//             .then((res) => {
//                 console.log(res);
//             })
//             .catch((err) => {
//                 console.error(err);
//             })
//             .finally(() => {
//                 console.log("Done.");
//                 done();
//             });
//     });

//     console.log("\n--- Câu 10 (Trường hợp thất bại) ---");
//     await new Promise<void>((done) => {
//         Promise.reject("It failed!")
//             .then((res) => {
//                 console.log(res);
//             })
//             .catch((err) => {
//                 console.error(err);
//             })
//             .finally(() => {
//                 console.log("Done.");
//                 done();
//             });
//     });
// })();

// const simulateTask = (time: number): Promise<string> => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(`Task done after ${time}ms`);
//         }, time);
//     });
// };

// const potentiallyFailingTask = (willFail: boolean): Promise<string> => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (willFail) {
//                 reject("Task failed!");
//             } else {
//                 resolve("Task succeeded!");
//             }
//         }, 1000);
//     });
// };

// (async () => {
//     console.log("\n--- Câu 11 ---");
//     const getHelloAsync = async (): Promise<string> => {
//         await new Promise(resolve => setTimeout(resolve, 2000));
//         return "Hello Async";
//     };
//     const result11 = await getHelloAsync();
//     console.log(result11);


//     console.log("\n--- Câu 12 ---");
//     const callSimulateTask = async () => {
//         console.log("Calling simulateTask...");
//         const result = await simulateTask(2000);
//         console.log(result);
//     };

//     await callSimulateTask();


//     console.log("\n--- Câu 13 ---");
//     const handleError = async () => {
//         try {
//             const result = await potentiallyFailingTask(true);
//             console.log("Thành công:", result);
//         } catch (error) {
//             console.error("Đã bắt lỗi:", error);
//         }
//     };

//     await handleError();


//     console.log("\n--- Câu 14 ---");
//     const multiplyByThree = async (num: number): Promise<number> => {
//         await new Promise(resolve => setTimeout(resolve, 1000));
//         return num * 3;
//     };

//     const result14 = await multiplyByThree(5);
//     console.log(result14);


//     console.log("\n--- Câu 15 (Chạy tuần tự) ---");
//     console.time("Sequential");
//     console.log("Bắt đầu tuần tự...");
//     const res15_1 = await multiplyByThree(2);
//     console.log("Kết quả 1:", res15_1);
//     const res15_2 = await multiplyByThree(3);
//     console.log("Kết quả 2:", res15_2);
//     const res15_3 = await multiplyByThree(4);
//     console.log("Kết quả 3:", res15_3);
//     console.log("Kết thúc tuần tự.");
//     console.timeEnd("Sequential");


//     console.log("\n--- Câu 16 (Chạy song song) ---");
//     console.time("Parallel");
//     console.log("Bắt đầu song song...");
//     const promise16_1 = multiplyByThree(2);
//     const promise16_2 = multiplyByThree(3);
//     const promise16_3 = multiplyByThree(4);

//     const results16 = await Promise.all([promise16_1, promise16_2, promise16_3]);
//     console.log("Kết thúc song song.");
//     console.log("Kết quả:", results16);
//     console.timeEnd("Parallel");


//     console.log("\n--- Câu 17 ---");
//     const promiseGen = (val: number, time: number) =>
//         new Promise<number>((resolve) => {
//             setTimeout(() => resolve(val), time);
//         });

//     const promiseArray = [
//         promiseGen(1, 300),
//         promiseGen(2, 600),
//         promiseGen(3, 100),
//     ];

//     console.log("Bắt đầu for await...of (sẽ log theo thứ tự mảng)");
//     for await (const result of promiseArray) {
//         console.log(result);
//     }


//     console.log("\n--- Câu 18 ---");
//     type User = { id: number; name: string };
//     const fetchUser = async (id: number): Promise<User> => {
//         console.log(`Đang tìm user ${id}...`);
//         await new Promise(resolve => setTimeout(resolve, 1000));
//         return { id: id, name: `User ${id}` };
//     };

//     const user18 = await fetchUser(101);
//     console.log(user18);


//     console.log("\n--- Câu 19 ---");
//     const fetchUsers = async (ids: number[]): Promise<User[]> => {
//         console.log("Đang tìm tất cả user (song song)...");
//         const userPromises = ids.map(id => fetchUser(id));
//         const users = await Promise.all(userPromises);
//         return users;
//     };

//     const ids = [1, 2, 3];
//     const users19 = await fetchUsers(ids);
//     console.log(users19);


//     console.log("\n--- Câu 20 ---");
//     const withTimeout = <T>(
//         promise: Promise<T>,
//         ms: number
//     ): Promise<T> => {
//         const timeoutPromise = new Promise<never>((_, reject) => {
//             setTimeout(() => {
//                 reject(new Error(`Thao tác quá hạn sau ${ms}ms`));
//             }, ms);
//         });

//         return Promise.race([promise, timeoutPromise]);
//     };

//     // --- Trường hợp 1: Tác vụ nhanh hơn timeout (Thành công)
//     const fastTask = simulateTask(1000);
//     try {
//         const result = await withTimeout(fastTask, 2000);
//         console.log("Tác vụ nhanh (Thành công):", result);
//     } catch (error) {
//         console.error("Tác vụ nhanh (Lỗi):", (error as Error).message);
//     }

//     // --- Trường hợp 2: Tác vụ chậm hơn timeout (Thất bại)
//     const slowTask = simulateTask(3000);
//     try {
//         const result = await withTimeout(slowTask, 2000);
//         console.log("Tác vụ chậm (Thành công):", result);
//     } catch (error) {
//         console.error("Tác vụ chậm (Lỗi):", (error as Error).message);
//     }
// })();


type Todo = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
};

(async () => {
    console.log("--- Câu 21 ---");
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: Todo = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Lỗi fetch Câu 21:", (error as Error).message);
    }


    console.log("\n--- Câu 22 ---");
    try {
        const fetchTodo = async (id: number): Promise<Todo> => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
            return response.json();
        };

        const [todo1, todo2] = await Promise.all([
            fetchTodo(1),
            fetchTodo(2)
        ]);

        console.log("Todo 1:", todo1);
        console.log("Todo 2:", todo2);
    } catch (error) {
        console.error("Lỗi fetch Câu 22:", (error as Error).message);
    }


    console.log("\n--- Câu 23 ---");
    const fetchIncompleteTodos = async (): Promise<Todo[]> => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const todos: Todo[] = await response.json();
        const incompleteTodos = todos.filter(todo => !todo.completed);
        return incompleteTodos;
    };

    try {
        const incomplete = await fetchIncompleteTodos();
        console.log(`Tìm thấy ${incomplete.length} todos chưa hoàn thành. (Hiển thị 5 cái đầu):`);
        console.log(incomplete.slice(0, 5));
    } catch (error) {
        console.error("Lỗi fetch Câu 23:", (error as Error).message);
    }


    console.log("\n--- Câu 24 ---");
    const postData = async () => {
        try {
            const newPost = {
                title: 'foo',
                body: 'bar',
                userId: 1,
            };

            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify(newPost),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            });

            const data = await response.json();
            console.log("Phản hồi từ POST request:", data);
        } catch (error) {
            console.error("Lỗi POST Câu 24:", (error as Error).message);
        }
    };

    await postData();


    console.log("\n--- Câu 25 ---");
    const downloadFile = (): Promise<void> => {
        return new Promise((resolve) => {
            console.log("Bắt đầu tải file...");
            setTimeout(() => {
                console.log("Tải file hoàn tất.");
                resolve();
            }, 3000);
        });
    };

    await downloadFile();


    console.log("\n--- Câu 26 ---");
    const wait = (ms: number): Promise<void> => {
        return new Promise(resolve => setTimeout(resolve, ms));
    };

    console.log("Bắt đầu chờ 5 giây...");
    await wait(5000);
    console.log("Đã chờ xong 5 giây.");


    console.log("\n--- Câu 27 ---");
    const fetchWithRetry = async (url: string, retries: number): Promise<any> => {
        let lastError: Error | null = null;
        for (let i = 0; i < retries; i++) {
            try {
                console.log(`(Thử lần ${i + 1}/${retries}) Đang gọi ${url}...`);
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`Server trả về status ${response.status}`);
                }
                return await response.json(); // Thành công!
            } catch (error) {
                lastError = error as Error;
                console.error(`Lần thử ${i + 1} thất bại:`, lastError.message);
                if (i < retries - 1) {
                    await wait(500); // Chờ 500ms trước khi thử lại
                }
            }
        }
        throw new Error(`Thất bại sau ${retries} lần thử. Lỗi cuối cùng: ${lastError?.message}`);
    };

    try {
        await fetchWithRetry('https://httpstat.us/500', 3);
    } catch (error) {
        console.error("fetchWithRetry (Thất bại):", (error as Error).message);
    }

    try {
        const data = await fetchWithRetry('https://jsonplaceholder.typicode.com/todos/3', 3);
        console.log("fetchWithRetry (Thành công):", data.title);
    } catch (error) {
        console.error("fetchWithRetry (Lỗi):", (error as Error).message);
    }


    console.log("\n--- Câu 28 (Batch Process) ---");
    const simpleTask = (id: number, time: number): Promise<string> => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(`Task ${id} (thời gian ${time}ms) hoàn thành`);
            }, time);
        });
    };

    const batchProcess = async () => {
        console.log("Bắt đầu batch process (song song)...");
        const tasks = [
            simpleTask(1, 300),
            simpleTask(2, 100), // Xong trước
            simpleTask(3, 500), // Xong cuối
            simpleTask(4, 200),
            simpleTask(5, 400),
        ];

        console.time("BatchTime");
        const results = await Promise.all(tasks);
        console.timeEnd("BatchTime");

        console.log("Kết quả batch:");
        console.log(results);
    };

    await batchProcess();


    console.log("\n--- Câu 29 (Queue Process) ---");
    const queueProcess = async () => {
        console.log("Bắt đầu queue process (tuần tự)...");
        const taskRunners = [
            () => simpleTask(1, 300),
            () => simpleTask(2, 100),
            () => simpleTask(3, 500),
            () => simpleTask(4, 200),
            () => simpleTask(5, 400),
        ];

        console.time("QueueTime");
        const results = [];
        for (const runTask of taskRunners) {
            const result = await runTask();
            console.log(result);
            results.push(result);
        }
        console.timeEnd("QueueTime");

        console.log("Kết quả queue (đã log ở trên):", results.length, "tasks done.");
    };

    await queueProcess();


    console.log("\n--- Câu 30 (Promise.allSettled) ---");
    const promise1 = fetch('https://jsonplaceholder.typicode.com/todos/1');
    const promise2 = fetch('https://đây-là-url-lỗi.com');
    const promise3 = simpleTask(99, 500);

    const results = await Promise.allSettled([promise1, promise2, promise3]);

    results.forEach((result, index) => {
        if (result.status === 'fulfilled') {
            if (index === 0) {
                console.log(`Promise ${index} (fetch): Thành công (cần .json() để xem data)`);
            } else {
                console.log(`Promise ${index} (task): Thành công, value:`, result.value);
            }
        } else {
            console.error(`Promise ${index}: Thất bại, reason:`, result.reason.message);
        }
    });
})();