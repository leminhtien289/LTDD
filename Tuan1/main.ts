class Person {
    constructor(public name: string, public age: number) {
    }

    displayInfo(): void {
        console.log(`Tên: ${this.name}`);
        console.log(`Tuổi: ${this.age}`);
    }
}
const p1 = new Person("Tiến", 21);
p1.displayInfo();
console.log("-----------------------\n");


class Student extends Person {
    constructor(name: string, age: number, public grade: string) {
        super(name, age);
    }
    displayInfo(): void {
        super.displayInfo();
        console.log(`Lớp: ${this.grade}`);
    }
}
const s1 = new Student("Tiến", 21, "DHKTPM18B");
s1.displayInfo();
console.log("-----------------------\n");


class Car {
    constructor(
        public brand: string,
        public model: string,
        public year: number
    ) { }

    showCarInfo(): void {
        console.log(`Hãng (Brand): ${this.brand}`);
        console.log(`Kiểu (Model): ${this.model}`);
        console.log(`Năm (Year): ${this.year}`);
    }
}
const car1 = new Car("Toyota", "Corolla", 2022);
car1.showCarInfo();
console.log("-----------------------\n");


class Rectangle {
    constructor(public width: number, public height: number) { }

    getArea(): number {
        return this.width * this.height;
    }

    getPerimeter(): number {
        return 2 * (this.width + this.height);
    }
}
const rect1 = new Rectangle(10, 5);
const area1 = rect1.getArea();
const perimeter1 = rect1.getPerimeter();

console.log(`- Diện tích: ${area1} `);
console.log(`- Chu vi: ${perimeter1} `);
console.log("-----------------------\n");


class BankAccount {
    private balance: number;

    constructor(initialBalance: number = 0) {
        if (initialBalance < 0) {
            this.balance = 0;
            console.log("Số dư ban đầu không thể là số âm. Đặt về 0.");
        } else {
            this.balance = initialBalance;
        }
    }

    deposit(amount: number): void {
        if (amount <= 0) {
            console.log("Số tiền nạp phải lớn hơn 0.");
            return;
        }

        this.balance += amount;
        console.log(`Nạp thành công: ${amount}. Số dư mới: ${this.balance}`);
    }

    withdraw(amount: number): void {
        if (amount <= 0) {
            console.log("Số tiền rút phải lớn hơn 0.");
            return;
        }

        if (amount > this.balance) {
            console.log(`Rút thất bại: Không đủ số dư. Chỉ còn ${this.balance}.`);
            return;
        }

        this.balance -= amount;
        console.log(`Rút thành công: ${amount}. Số dư mới: ${this.balance}`);
    }
}
const acc1 = new BankAccount(100);
acc1.deposit(50);
acc1.withdraw(70);
acc1.withdraw(200);
acc1.deposit(-10);
console.log("-----------------------\n");


class Book {
    constructor(
        public title: string,
        public author: string,
        public year: number
    ) { }

    showBookInfo(): void {
        console.log(`Tiêu đề: ${this.title}`);
        console.log(`Tác giả: ${this.author}`);
        console.log(`Năm xuất bản: ${this.year}`);
    }
}
const book1 = new Book("Lập trình TypeScript", "John Doe", 2023);
book1.showBookInfo();
console.log("-----------------------\n");


class User {
    private nameUser: string;

    constructor(initialName: string) {
        this.nameUser = initialName;
    }

    public get name(): string {
        return this.nameUser;
    }
    public set name(newName: string) {
        if (newName && newName.trim().length > 0) {
            this.nameUser = newName.trim();
        } else {
            console.log("Lỗi: Tên không được để trống.");
        }
    }
}
const user1 = new User("  Tiến  ");
console.log(`Tên người dùng: ${user1.name}`);

user1.name = "Henry";
console.log(`Tên sau khi đổi: ${user1.name}`);

user1.name = "   ";
console.log(`Tên sau khi đổi (lần 2): ${user1.name}`);
console.log("-----------------------\n");


class Product {
    constructor(public name: string, public price: number) { }
    display(): void {
        console.log(`- ${this.name}: $${this.price}`);
    }
}

const products: Product[] = [
    new Product("Laptop", 1200),
    new Product("Mouse", 50),
    new Product("Keyboard", 99),
    new Product("Monitor", 250),
    new Product("Headphones", 110)
];

console.log("Tất cả sản phẩm:");
products.forEach(product => product.display());

const expensiveProducts: Product[] = products.filter(product => {
    return product.price > 100;
});

console.log("\nSản phẩm có giá > $100:");
expensiveProducts.forEach(product => product.display());
console.log("-----------------------\n");


interface Animal {
    name: string;
    sound(): void;
}

class Dog implements Animal {
    constructor(public name: string) { }

    sound(): void {
        console.log(`${this.name} kêu: Gâu gâu!`);
    }
}

class Cat implements Animal {
    constructor(public name: string) { }

    sound(): void {
        console.log(`${this.name} kêu: Meo meo!`);
    }
}
const myPets: Animal[] = [];

myPets.push(new Dog("Buddy"));
myPets.push(new Cat("Whiskers"));

myPets.forEach(pet => {
    pet.sound();
});
console.log("-----------------------\n");


class Account {
    public owner: string;
    private _balance: number;

    public readonly accountNumber: string;
    private static lastAccountNumber = 1000;

    constructor(owner: string, initialBalance: number) {
        this.owner = owner;
        this._balance = initialBalance;

        Account.lastAccountNumber++;
        this.accountNumber = `ACC-${Account.lastAccountNumber}`;
    }

    getBalance(): number {
        return this._balance;
    }

    deposit(amount: number): void {
        if (amount > 0) {
            this._balance += amount;
            console.log(`Nạp ${amount}. Số dư mới: ${this._balance}`);
        }
    }
}
const acc2 = new Account("Eve", 500);

console.log(`Chủ tài khoản: ${acc2.owner}`);
acc2.owner = "Eva Green";
console.log(`Tên chủ TK mới: ${acc2.owner}`);

console.log(`Số tài khoản: ${acc2.accountNumber}`);

console.log(`Số dư ban đầu: ${acc2.getBalance()}`);
acc2.deposit(150);
console.log(`Số dư cuối: ${acc2.getBalance()}`);
console.log("-----------------------\n");


class AnimalBase {
    constructor(public name: string) { }
    eat(): void {
        console.log(`${this.name} đang ăn...`);
    }
}

class DogFromBase extends AnimalBase {
    bark(): void {
        console.log(`${this.name} (chó) kêu: Gâu gâu!`);
    }
}

class CatFromBase extends AnimalBase {
    meow(): void {
        console.log(`${this.name} (mèo) kêu: Meo meo!`);
    }
}

const myDog = new DogFromBase("Milo");
const myCat = new CatFromBase("Luna");

myDog.eat();
myCat.eat();

myDog.bark();
myCat.meow();
console.log("-----------------------\n");


interface Flyable {
    fly(): void;
}
interface Swimmable {
    swim(): void;
}

class Bird implements Flyable {
    fly(): void {
        console.log("Chim đang bay lượn...");
    }
}

class Fish implements Swimmable {
    swim(): void {
        console.log("Cá đang bơi lội...");
    }
}

const bird = new Bird();
const fish = new Fish();
bird.fly();
fish.swim();
console.log("-----------------------\n");


abstract class Shape {
    abstract getArea(): number;

    display(): void {
        console.log(`Đây là một hình có diện tích là ${this.getArea()}`);
    }
}

class Square extends Shape {
    constructor(public side: number) {
        super();
    }

    getArea(): number {
        return this.side * this.side;
    }
}

class Circle extends Shape {
    constructor(public radius: number) {
        super();
    }

    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

const mySquare = new Square(5);
const myCircle = new Circle(3);
mySquare.display();
myCircle.display();
console.log("-----------------------\n");

class Employee {
    constructor(public name: string, public salary: number) { }
    work(): void {
        console.log(`${this.name} đang làm việc chung.`);
    }
}

class Manager extends Employee {
    override work(): void {
        console.log(`Quản lý ${this.name} đang quản lý dự án.`);
    }

    manage(): void {
        console.log(`${this.name} đang tổ chức cuộc họp.`);
    }
}

class Developer extends Employee {
    override work(): void {
        console.log(`Lập trình viên ${this.name} đang viết code.`);
    }

    code(): void {
        console.log(`${this.name} đang tập trung lập trình...`);
    }
}
const mgr = new Manager("Tiến", 80000);
const dev = new Developer("Henry", 60000);
mgr.work();
mgr.manage();
dev.work();
dev.code();
console.log("-----------------------\n");


class Library {
    private books: Book[] = [];
    private members: User[] = [];

    addBook(book: Book): void {
        this.books.push(book);
        console.log(`Đã thêm sách: ${book.title}`);
    }

    addMember(user: User): void {
        this.members.push(user);
        console.log(`Đã thêm thành viên: ${user.name}`);
    }

    listBooks(): void {
        console.log("--- Sách trong thư viện ---");
        this.books.forEach(book => book.showBookInfo());
    }
}
const lib = new Library();
lib.addMember(user1); // Dùng lại user1 từ Bài 7
lib.addBook(book1); // Dùng lại book1 từ Bài 6
lib.addBook(new Book("Clean Code", "Robert C. Martin", 2008));
lib.listBooks();
console.log("-----------------------\n");


class Box<T> {
    private value: T;

    constructor(initialValue: T) {
        this.value = initialValue;
    }

    getValue(): T {
        return this.value;
    }
}
const boxOfString = new Box<string>("Xin chào");
const boxOfNumber = new Box<number>(123);
const boxOfProduct = new Box<Product>(new Product("Phone", 800));
console.log(boxOfString.getValue());
console.log(boxOfNumber.getValue());
boxOfProduct.getValue().display();
console.log("-----------------------\n");


class Logger {
    private static instance: Logger;

    private constructor() {
        console.log("Khởi tạo Logger (chỉ chạy 1 lần)");
    }

    public static getInstance(): Logger {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }

    log(message: string): void {
        console.log(`[LOG] ${new Date().toLocaleTimeString()}: ${message}`);
    }
}
const logger1 = Logger.getInstance();
const logger2 = Logger.getInstance();
logger1.log("Tin nhắn 1");
logger2.log("Tin nhắn 2");
console.log(logger1 === logger2 ? "Logger1 và Logger2 là MỘT" : "Lỗi Singleton");
console.log("-----------------------\n");


class MathUtil {
    public static add(a: number, b: number): number {
        return a + b;
    }
    public static subtract(a: number, b: number): number {
        return a - b;
    }
    public static multiply(a: number, b: number): number {
        return a * b;
    }
    public static divide(a: number, b: number): number {
        if (b === 0) {
            console.log("Lỗi: Không thể chia cho 0");
            return NaN;
        }
        return a / b;
    }
}
console.log(`5 + 3 = ${MathUtil.add(5, 3)}`);
console.log(`10 / 2 = ${MathUtil.divide(10, 2)}`);
console.log(`10 / 0 = ${MathUtil.divide(10, 0)}`);
console.log("-----------------------\n");


const myZoo: AnimalBase[] = [
    new AnimalBase("Động vật"),
    new DogFromBase("Milo"),
    new CatFromBase("Luna")
];

myZoo.forEach(animal => {
    animal.eat();
});
console.log("-----------------------\n");


interface Vehicle {
    move(): void;
}

class Bike implements Vehicle {
    move(): void {
        console.log("Xe đạp đang chạy trên đường...");
    }
}

class Truck implements Vehicle {
    move(): void {
        console.log("Xe tải đang chạy trên đường...");
    }
}

const vehicles: Vehicle[] = [
    new Bike(),
    new Truck()
];
vehicles.forEach(v => v.move());
console.log("-----------------------\n");


class Repository<T> {
    private items: T[] = [];
    add(item: T): void {
        this.items.push(item);
        console.log("Đã thêm item vào repository.");
    }
    getAll(): T[] {
        return this.items;
    }
}

const productRepo = new Repository<Product>(); // Dùng Product từ Bài 8
productRepo.add(new Product("Phone", 800));
console.log(productRepo.getAll());
console.log("-----------------------\n");


class Stack<T> {
    private items: T[] = [];
    push(item: T): void { this.items.push(item); }
    pop(): T | undefined { return this.items.pop(); }
    peek(): T | undefined {
        return this.items[this.items.length - 1];
    }
    isEmpty(): boolean { return this.items.length === 0; }
}

const stringStack = new Stack<string>();
stringStack.push("A");
stringStack.push("C");
console.log(`Peek: ${stringStack.peek()}`);
console.log(`Pop: ${stringStack.pop()}`);
console.log(`isEmpty: ${stringStack.isEmpty()}`);
console.log("-----------------------\n");


interface Payment {
    pay(amount: number): void;
}

class CashPayment implements Payment {
    pay(amount: number): void {
        console.log(`Đã thanh toán $${amount} bằng tiền mặt.`);
    }
}

class CardPayment implements Payment {
    pay(amount: number): void {
        console.log(`Đã thanh toán $${amount} bằng thẻ.`);
    }
}

const myPayment: Payment = new CardPayment();
myPayment.pay(150);
const myNewPayment: Payment = new CashPayment();
myNewPayment.pay(150);
console.log("-----------------------\n");


abstract class Appliance {
    abstract turnOn(): void;
    turnOff(): void {
        console.log("Thiết bị đang tắt...");
    }
}
class Fan extends Appliance {
    turnOn(): void {
        console.log("Quạt bắt đầu quay...");
    }
}
class AirConditioner extends Appliance {
    turnOn(): void {
        console.log("Điều hòa bắt đầu làm mát...");
    }
}

const fan = new Fan();
fan.turnOn();
fan.turnOff();
console.log("-----------------------\n");


class ShapeInfo {
    public static describe(): void {
        console.log("Đây là một lớp tiện ích cho các hình dạng.");
    }
}

ShapeInfo.describe();
console.log("-----------------------\n");


class Order {
    private products: Product[] = [];
    constructor(initialProducts: Product[]) {
        this.products = initialProducts;
    }
    addProduct(product: Product): void {
        this.products.push(product);
    }
    getTotalPrice(): number {
        return this.products.reduce((total, product) => {
            return total + product.price;
        }, 0);
    }
}

const orderProducts = [
    new Product("Laptop", 1200), // Dùng Product từ Bài 8
    new Product("Mouse", 50),
];
const myOrder = new Order(orderProducts);
console.log(`Tổng giá trị đơn hàng: $${myOrder.getTotalPrice()}`);
console.log("-----------------------\n");


class Teacher extends Person {
    constructor(name: string, age: number, public subject: string) {
        super(name, age);
    }
    introduce(): void {
        console.log(`Xin chào, tôi là ${this.name}, giáo viên môn ${this.subject}.`);
    }
}

const teacher1 = new Teacher("Mr. Smith", 45, "Toán");
teacher1.displayInfo(); // Gọi từ lớp cha Person
teacher1.introduce();   // Gọi từ lớp Teacher
console.log("-----------------------\n");


class AnimalProtected {
    constructor(public name: string) { }
    protected makeSound(): void {
        console.log(`${this.name} tạo ra âm thanh... (từ lớp cha)`);
    }
    public speak(): void {
        this.makeSound();
    }
}
class DogProtected extends AnimalProtected {
    public override makeSound(): void {
        console.log(`${this.name} kêu: Gâu gâu! (từ lớp con)`);
    }
}

const dogP = new DogProtected("Spike");
dogP.speak();
console.log("-----------------------\n");


interface Movable {
    move(): void;
}

class Robot implements Movable {
    move(): void { console.log("Robot đang di chuyển..."); }
}

class newCar implements Movable {
    move(): void { console.log("Xe hơi đang di chuyển..."); }
}

const movables: Movable[] = [new Robot(), new newCar()];
movables.forEach(m => m.move());
console.log("-----------------------\n");


class School {
    private students: Student[] = [];
    private teachers: Teacher[] = [];

    addStudent(student: Student): void {
        this.students.push(student);
    }
    addTeacher(teacher: Teacher): void {
        this.teachers.push(teacher);
    }
    displayInfo(): void {
        console.log("\n--- Thông tin Trường học ---");
        console.log(`Tổng số học sinh: ${this.students.length}`);
        this.students.forEach(s => console.log(` - HS: ${s.name}, Lớp: ${s.grade}`));
        console.log(`Tổng số giáo viên: ${this.teachers.length}`);
        this.teachers.forEach(t => console.log(` - GV: ${t.name}, Môn: ${t.subject}`));
    }
}

const mySchool = new School();
mySchool.addStudent(s1);
mySchool.addStudent(new Student("Henry", 16, "Lớp 18B"));
mySchool.addTeacher(teacher1);
mySchool.displayInfo();
console.log("-----------------------\n");






