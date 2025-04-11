// // Basic console output
// console.log("come on your not hard")
// console.log("fkdofka", 55555)
// console.log(true)
// console.log("cake size ", {a})
// console.log(null)

// // Basic variables and string operations
// let username = 'cacaa, aujmmmm'
// let lastname = 'sssss'
// console.log(username, lastname)
// const Nickname = 'cake'
// console.log(Nickname, username, lastname)
// const API = 'http://localhost'
// const RED = '#ffff'
// let userName, firstName, password;

// // Basic string concatenation and template literals
// let fCake = 'salan'
// let lCake = 'ket'
// console.log(fCake + lCake + 'fdfdfd')
// console.log(`${5*6}`)

// // Basic operators and type checking
// console.log('6'/2)
// console.log(typeof 50)

// // Basic if-else conditions
// let a = 95
// if(a < 0 || a > 0) {
//     if(a >= 80 && a <= 100) {
//         console.log("u have grade A")
//     } else if(a >= 90 && a <= 100) {
//         console.log('cake A+')
//     }
//     if (a >= 70 && a <= 79) {
//         console.log("u have grade B ")    
//     }
//     if (a >= 60 && a <= 69) {
//         console.log("u have grade C ")    
//     }
//     if (a >= 50 && a <= 59) {
//         console.log("u have grade D ")    
//     }
//     if (a <= 49 || a > 100) {
//         console.log('u have grade F')
//     }
//     else {
//         console.log('fuck u  bitch')
//     }
// }

// // Variable declarations with var (older approach)
// var a = c+b
// var c = 5+1
// var b = 5-3

// // Basic functions
// function loveaum() {
//     console.log('hello aum i love u')
// }
// loveaum()

// function sum(a, b = 0) {
//     return a+b
// }
// const result = sum(5, 10)
// console.log(result)

// function cake(messageToAum='loveaum', messageToCake='lovecake') {
//     console.log(`${messageToAum}${messageToCake}`)
// }
// cake()

// // Functions with parameters
// function cakeLove(mes, sen, ger) {
//     console.log('hello' + mes + sen + ger)
//     console.log(`${mes}${sen} `)
// }
// cakeLove('aum', 'love', 'cake')
// cakeLove('aum')
// cakeLove('aum', 'ccc', 'cafdfdke')
// cakeLove('aum', 'lfdafove', 'cafdfdfke')

// // Basic arrow functions
// const aum = () => {
//     return 5+5
// }
// const result = aum()
// console.log(result)

// const aum = message => message
// console.log(aum())

// const cake = (mes) => {
//     console.log('cakeeeeeeeee' + mes)
// }
// cake("1222222222233333")

// // Simple conditional statements
// function aum() {
//     if (cake='cakehandsome') {
//         console.log('loveaum')
//     } else {
//         console.log('loveaumsomuch')
//     }
// }
// console.log(aum())

// // Ternary operators
// let role = 'admin'
// const people = role == 'admin' ? '/admin' : '/user'

// const role = 'superadmin'
// const redirect = role == 'admin' ? 'admin' : role == 'superadmin' ? 'superadmin' : 'admin'
// console.log(redirect)

// // Basic arrow functions with parameters
// const cake = message => message
// const result = cake('cakehandsome')
// console.log(result)

// const aumm = (message, sagemage) => message + sagemage
// const ready = aumm('cakeloveaum', "  " + 'ackeee')
// console.log(ready)

// // Arrays
// const fruits = ['banana', 'apple', 'papaya', 'mango']
// const fruitsArray = fruits.slice(0, 3)
// console.log(fruits[1])
// console.log(fruitsArray)

// // Array methods (map, filter)
// const b = ['1', '2', '3', '4', '5'];
// const result = b.filter((el, i, ar) => {
//     return el > 3
// })
// console.log(result)

// const result = b.map((el, i) => {
//     return el*2 + 'fdfdfadf'
// })
// console.log(result)

// // Objects
// const userData = {
//     firstName: 'cake',
//     lastName: "aaaaa",
//     age: 19,
//     'filling': 'bad',
//     address: {
//         no: 25,
//         tambon: "klong luang",
//     },
//     help() {
//         console.log("help me pls")
//     }
// }
// console.log(`${userData.firstName} ${userData.lastName} ${userData.age}`);
// userData.help()
// console.log(userData.age)
// console.log(userData.address.no)
// console.log(userData.filling)

// // Callback functions
// const cake = (msg) => {
//     console.log('lllllllllll', msg)
// }
// const aum = (love, callback) => {
//     console.log('sfdfdfdafd', love)
//     const msg = "loveaum"
//     callback(msg)
// }
// aum('cake', cake)

// // Destructuring arrays
// const cake = ['naey', 'cheese']
// console.log(cake[0])
// const [firstName, lastName] = cake
// console.log(firstName)
// console.log(lastName)

// // Destructuring objects
// const obj = {
//     nickName: 'cake',
//     fName: 'satorn',
//     lName: 'ket'
// }
// const {nickName, fName, lName} = obj
// console.log(nickName + ' ' + fName + ' ' + lName)

//เหมือนว่าถ้า role เป็น 1 ก็จะใช้ caaacac
// const role = 'caaacac'
// const admin = role ?? 'admin'
// console.log(admin)

// .  ? เปลี่ยนจาก error เป็น undefined
// const user = {}
// console.log(user?.adderss?.province)

const cake = [1,2,3,4,5,6]
const aum = [4,1,5]
const love = [...cake,...aum]
console.log(love)












































// ============================================================
// 1. ES6+ CLASS - สร้างต้นแบบของ Object ที่มีโครงสร้างเหมือนกัน
// ============================================================

// Class คือเหมือนพิมพ์เขียวสำหรับสร้าง object 
// - constructor เป็นฟังก์ชันที่จะรันเมื่อเราสร้าง object ใหม่
// - method คือฟังก์ชันที่อยู่ใน class
class Person {
    constructor(name, age) {
      // this หมายถึงตัว object ที่จะถูกสร้าง
      this.name = name;  // สร้าง property ชื่อ name และให้ค่าเท่ากับ parameter name
      this.age = age;    // สร้าง property ชื่อ age และให้ค่าเท่ากับ parameter age
    }
    
    // เมธอดใน class สามารถเรียกใช้ properties ด้วย this
    greet() {
      return `สวัสดี ฉันชื่อ ${this.name} อายุ ${this.age} ปี`;
    }
    
    // เมธอดที่เริ่มด้วย # จะเป็น private method (เรียกใช้ได้แค่ในคลาสเท่านั้น)
    #calculateBirthYear() {
      const currentYear = new Date().getFullYear();
      return currentYear - this.age;
    }
    
    // เมธอดนี้เรียกใช้เมธอด private ข้างใน
    getBirthYear() {
      return this.#calculateBirthYear();
    }
  }
  
  // การสร้าง object จาก class (เรียกว่า instance)
  const john = new Person('John', 30);
  console.log(john.greet());  // สวัสดี ฉันชื่อ John อายุ 30 ปี
  console.log(john.getBirthYear());  // 1995 (ขึ้นอยู่กับปีปัจจุบัน)
  
  
  // ============================================================
  // 2. การสืบทอดจาก CLASS (INHERITANCE) - การสร้าง class ใหม่โดยต่อยอดจาก class เดิม
  // ============================================================
  
  // Student สืบทอดจาก Person (Student มีทุกความสามารถของ Person และเพิ่มเติมพิเศษ)
  class Student extends Person {
    constructor(name, age, studentId) {
      // super() เรียกใช้ constructor ของ class แม่ (Person)
      super(name, age);
      this.studentId = studentId;
    }
    
    // เพิ่มเมธอดใหม่
    study() {
      return `${this.name} กำลังเรียนอยู่ รหัสนักศึกษา: ${this.studentId}`;
    }
    
    // Override เมธองเดิมจาก class แม่
    greet() {
      // เรียกใช้เมธอด greet จาก class แม่ และเพิ่มข้อความ
      return `${super.greet()} และฉันเป็นนักเรียน`;
    }
  }
  
  const lisa = new Student('Lisa', 20, 'S12345');
  console.log(lisa.greet());  // สวัสดี ฉันชื่อ Lisa อายุ 20 ปี และฉันเป็นนักเรียน
  console.log(lisa.study());  // Lisa กำลังเรียนอยู่ รหัสนักศึกษา: S12345
  
  
  // ============================================================
  // 3. PROMISES - จัดการกับโค้ดที่ต้องรอผลลัพธ์ (ASYNCHRONOUS)
  // ============================================================
  
  // Promise คือวัตถุที่แทนการทำงานที่จะสำเร็จหรือล้มเหลวในอนาคต
  // - มีสถานะ 3 สถานะ: pending (กำลังทำงาน), fulfilled (สำเร็จ), rejected (ล้มเหลว)
  // - .then() ใช้รับค่าเมื่อสำเร็จ
  // - .catch() ใช้จัดการเมื่อเกิดข้อผิดพลาด
  
  // สร้าง Promise ที่จำลองการดึงข้อมูลจากเซิร์ฟเวอร์
  const fetchUserData = new Promise((resolve, reject) => {
    // จำลองการรอข้อมูลจากเซิร์ฟเวอร์ 2 วินาที
    setTimeout(() => {
      // สมมติว่าดึงข้อมูลสำเร็จ
      const userData = { id: 1, name: 'Aum', role: 'Admin' };
      
      // เราจะสมมติว่าถ้า role เป็น Admin ถือว่าสำเร็จ
      if (userData.role === 'Admin') {
        // ส่งข้อมูลกลับเมื่อสำเร็จ
        resolve(userData);
      } else {
        // ส่งข้อความข้อผิดพลาดเมื่อล้มเหลว
        reject('ไม่มีสิทธิ์เข้าถึงข้อมูล');
      }
    }, 2000);
  });
  
  // การใช้งาน Promise
  console.log('กำลังดึงข้อมูล...');
  
  fetchUserData
    .then(data => {
      // ทำงานเมื่อ Promise สำเร็จ (resolve)
      console.log('ดึงข้อมูลสำเร็จ:', data);
      return `ชื่อผู้ใช้: ${data.name}`;  // ส่งค่าไปยัง .then() ถัดไป
    })
    .then(formattedData => {
      // รับค่าจาก .then() ก่อนหน้า
      console.log('ข้อมูลที่จัดรูปแบบ:', formattedData);
    })
    .catch(error => {
      // ทำงานเมื่อ Promise ล้มเหลว (reject) หรือมีข้อผิดพลาดใน .then()
      console.error('เกิดข้อผิดพลาด:', error);
    })
    .finally(() => {
      // ทำงานเมื่อเสร็จสิ้นไม่ว่าจะสำเร็จหรือล้มเหลว
      console.log('เสร็จสิ้นการทำงาน');
    });
  
  
  // ============================================================
  // 4. ASYNC/AWAIT - วิธีการจัดการ PROMISES แบบอ่านง่ายกว่า
  // ============================================================
  
  // async/await ทำให้โค้ด asynchronous อ่านง่ายเหมือนโค้ด synchronous
  // - ฟังก์ชันที่มี async นำหน้า จะรีเทิร์นค่าเป็น Promise เสมอ
  // - await ใช้รอให้ Promise ทำงานเสร็จก่อนทำบรรทัดถัดไป
  // - ต้องอยู่ในฟังก์ชันที่มี async นำหน้าเท่านั้น
  
  // ฟังก์ชันจำลองการดึงข้อมูลที่ return Promise
  function fetchData(url) {
    return new Promise((resolve, reject) => {
      // จำลองการรอข้อมูลจากเซิร์ฟเวอร์ 1 วินาที
      setTimeout(() => {
        // สมมติถ้า URL มีคำว่า 'users' ถือว่าสำเร็จ
        if (url.includes('users')) {
          resolve({ id: 1, name: 'Cake', role: 'Developer' });
        } else {
          reject('URL ไม่ถูกต้อง');
        }
      }, 1000);
    });
  }
  
  // ฟังก์ชัน async สามารถใช้ await ได้
  async function getUserData() {
    try {
      console.log('เริ่มต้นดึงข้อมูล...');
      
      // await จะรอให้ Promise ทำงานเสร็จก่อน แล้วค่อยไปบรรทัดถัดไป
      // เหมือนกับการเขียนโค้ดปกติที่ทำงานทีละบรรทัด
      const userData = await fetchData('https://api.example.com/users');
      console.log('ข้อมูลผู้ใช้:', userData);
      
      // จำลองการดึงข้อมูลโพสต์ของผู้ใช้
      const userPosts = await fetchData(`https://api.example.com/users/${userData.id}/posts`);
      console.log('โพสต์ของผู้ใช้:', userPosts);
      
      return { user: userData, posts: userPosts };
    } catch (error) {
      // จัดการข้อผิดพลาดได้ง่ายกว่าใช้ .catch()
      console.error('เกิดข้อผิดพลาด:', error);
      return null;
    } finally {
      console.log('เสร็จสิ้นการทำงาน');
    }
  }
  
  // เรียกใช้ฟังก์ชัน async
  getUserData()
    .then(result => {
      if (result) {
        console.log('ได้ข้อมูลทั้งหมดแล้ว', result);
      }
    });
  
  
  // ============================================================
  // 5. ARRAY METHODS ขั้นสูง (สำคัญมากสำหรับ React)
  // ============================================================
  
  const users = [
    { id: 1, name: 'Aum', age: 25, role: 'admin', active: true },
    { id: 2, name: 'Cake', age: 30, role: 'user', active: false },
    { id: 3, name: 'Bank', age: 28, role: 'user', active: true },
    { id: 4, name: 'Dome', age: 22, role: 'editor', active: true },
    { id: 5, name: 'Earth', age: 35, role: 'admin', active: false },
  ];
  
  // 1. map - สร้างอาร์เรย์ใหม่โดยแปลงข้อมูลจากอาร์เรย์เดิมทุกตัว (ใช้บ่อยมากใน React)
  // ใช้แสดงข้อมูลในรูปแบบที่ต้องการ เช่น แสดงรายชื่อผู้ใช้
  const userNames = users.map(user => {
    return {
      id: user.id,  // เก็บ ID ไว้เป็น key (สำคัญมากใน React)
      fullName: `${user.name} (${user.role})`,
      isActive: user.active ? 'ออนไลน์' : 'ออฟไลน์'
    };
  });
  console.log('รายชื่อผู้ใช้:', userNames);
  
  // 2. filter - สร้างอาร์เรย์ใหม่เฉพาะข้อมูลที่ผ่านเงื่อนไข
  // ใช้กรองข้อมูลที่ต้องการแสดง เช่น แสดงเฉพาะผู้ใช้ที่ออนไลน์
  const activeUsers = users.filter(user => user.active);
  console.log('ผู้ใช้ที่ออนไลน์:', activeUsers);
  
  // 3. find - หาข้อมูลตัวแรกที่ตรงเงื่อนไข (เหมือน filter แต่คืนค่าอ็อบเจ็กต์เดี่ยว)
  // ใช้หาข้อมูลแบบเฉพาะเจาะจง เช่น หาผู้ใช้จาก ID
  const adminUser = users.find(user => user.role === 'admin');
  console.log('ผู้ใช้ที่เป็นแอดมิน:', adminUser);
  
  // 4. reduce - รวมข้อมูลในอาร์เรย์เป็นค่าเดียว (มีความยืดหยุ่นสูงมาก)
  // เช่น คำนวณผลรวม, แปลงเป็นรูปแบบใหม่, จัดกลุ่มข้อมูล
  const totalAge = users.reduce((sum, user) => sum + user.age, 0);
  console.log('ผลรวมอายุทั้งหมด:', totalAge);
  
  // จัดกลุ่มผู้ใช้ตาม role ด้วย reduce
  const usersByRole = users.reduce((groups, user) => {
    // ถ้ายังไม่มีกลุ่มนี้ให้สร้างอาร์เรย์ใหม่
    if (!groups[user.role]) {
      groups[user.role] = [];
    }
    // เพิ่มผู้ใช้ลงในกลุ่มที่ตรงกับ role
    groups[user.role].push(user);
    return groups;
  }, {});
  console.log('ผู้ใช้แยกตามบทบาท:', usersByRole);
  
  // 5. some - ตรวจสอบว่ามีข้อมูลใดๆ ที่ตรงเงื่อนไขหรือไม่ (boolean)
  const hasYoungUser = users.some(user => user.age < 25);
  console.log('มีผู้ใช้อายุน้อยกว่า 25 ปี:', hasYoungUser);
  
  // 6. every - ตรวจสอบว่าทุกข้อมูลตรงเงื่อนไขหรือไม่ (boolean)
  const allAdults = users.every(user => user.age >= 18);
  console.log('ผู้ใช้ทุกคนเป็นผู้ใหญ่:', allAdults);
  
  
  // ============================================================
  // 6. DESTRUCTURING สำหรับ OBJECTS และ ARRAYS (ใช้มากใน React)
  // ============================================================
  
  // Object Destructuring ขั้นสูง
  const apiResponse = {
    status: 'success',
    code: 200,
    data: {
      user: {
        id: 123,
        name: 'Cake',
        profile: {
          avatar: 'cake.jpg',
          theme: 'dark'
        }
      },
      posts: [
        { id: 1, title: 'Hello' },
        { id: 2, title: 'World' }
      ]
    }
  };
  
  // การแตกโครงสร้าง (Destructuring) พร้อมกับตั้งชื่อใหม่และค่าเริ่มต้น
  const { 
    status, 
    data: { 
      user: { 
        name: userName,  // ตั้งชื่อใหม่จาก name เป็น userName
        profile: { theme = 'light' }  // กำหนดค่าเริ่มต้นเป็น 'light' ถ้าไม่มีค่า
      },
      posts = []  // กำหนดค่าเริ่มต้นเป็นอาร์เรย์ว่างถ้าไม่มีค่า
    } 
  } = apiResponse;
  
  console.log('สถานะ:', status);            // success
  console.log('ชื่อผู้ใช้:', userName);       // Cake
  console.log('ธีม:', theme);                // dark
  console.log('จำนวนโพสต์:', posts.length);  // 2
  
  // ทำงานกับ Optional Chaining (?.) และ Nullish Coalescing (??)
  const response = {
    meta: {
      pagination: null
    }
  };
  
  // Optional Chaining (?.) ช่วยป้องกัน error เมื่อพยายามเข้าถึง property ของ undefined
  // Nullish Coalescing (??) ให้ใช้ค่าทางขวาเมื่อค่าทางซ้ายเป็น null หรือ undefined
  const pageSize = response.meta?.pagination?.size ?? 10;
  console.log('pageSize:', pageSize);  // 10 (เพราะ pagination เป็น null)
  
  
  // ============================================================
  // 7. MODULE SYSTEM - การแบ่งโค้ดเป็นไฟล์ย่อยๆ (สำคัญมากสำหรับ React)
  // ============================================================
  
  // ในไฟล์ utils.js
  export function formatDate(date) {
    return new Date(date).toLocaleDateString('th-TH');
  }
  
  export const TAX_RATE = 0.07;
  
  export default class Calculator {
    add(a, b) {
      return a + b;
    }
  }
  
  // ในไฟล์หลัก app.js
  import Calculator, { formatDate, TAX_RATE } from './utils.js';
  
  const calc = new Calculator();
  console.log(calc.add(5, 10));          // 15
  console.log(formatDate('2023-04-01')); // 1/4/2566
  console.log('อัตราภาษี:', TAX_RATE);    // 0.07
  
  
  // ============================================================
  // 8. REACT HOOKS พื้นฐาน (จำลองการทำงานใน JavaScript ธรรมดา)
  // ============================================================
  
  // จำลองการทำงานของ React Hooks แบบง่ายๆ
  // useState - เก็บและอัพเดตสถานะ (state)
  function useState(initialValue) {
    let state = initialValue;
    
    // ฟังก์ชันสำหรับอัพเดตค่า state
    const setState = (newValue) => {
      state = newValue;
      console.log('State updated:', state);
      // ในโลกของ React จริงๆ จะ re-render component ด้วย
    };
    
    // return เป็น array [ค่าปัจจุบัน, ฟังก์ชันสำหรับอัพเดต]
    return [state, setState];
  }
  
  // จำลองการใช้งาน useState ใน Component
  function Counter() {
    // สร้าง state count เริ่มต้นที่ 0
    const [count, setCount] = useState(0);
    
    // ฟังก์ชันสำหรับเพิ่มค่า count
    function increment() {
      setCount(count + 1);
    }
    
    console.log('Current count:', count);
    
    // ในโลกของ React จริงๆ จะ return JSX
    return {
      count,
      increment
    };
  }
  
  // จำลองการใช้งาน Component
  const counterComponent = Counter();
  console.log(counterComponent.count);  // 0
  counterComponent.increment();         // State updated: 1
  console.log(counterComponent.count);  // ยังคงเป็น 0 เพราะนี่เป็นแค่การจำลอง
                                       // ใน React จริงๆ จะอัพเดตและ re-render
  
  
  // ============================================================
  // 9. ความรู้พื้นฐานเกี่ยวกับ JSX (HTML ใน JavaScript)
  // ============================================================
  
  // JSX คือ JavaScript XML - การเขียน HTML-like syntax ใน JavaScript
  // เมื่อใช้ JSX จะเป็นประมาณนี้:
  
  /*
  function Welcome(props) {
    return <h1>สวัสดี, {props.name}</h1>;
  }
  
  // การใช้งาน Component
  const element = <Welcome name="Cake" />;
  */
  
  // โค้ดข้างบนจะถูกแปลงเป็น:
  function Welcome(props) {
    return React.createElement('h1', null, 'สวัสดี, ', props.name);
  }
  
  // การใช้งาน Component
  const element = React.createElement(Welcome, { name: 'Cake' });
  
  // นี่คือตัวอย่างการจำลอง React.createElement อย่างง่าย
  const React = {
    createElement: (type, props, ...children) => {
      return {
        type,
        props: { ...props, children }
      };
    }
  };
  
  console.log('JSX Element:', element);
  
  
  // ============================================================
  // 10. FUNCTIONAL PROGRAMMING PRINCIPLES - หลักการเขียนโค้ดที่ดี
  // ============================================================
  
  // 1. Pure Function - ฟังก์ชันที่ไม่มีผลข้างเคียง และ input เดียวกันจะได้ output เดียวกันเสมอ
  // ดี: ใช้เฉพาะข้อมูลที่รับเข้ามา
  function calculateTotal(items) {
    return items.reduce((total, item) => total + item.price, 0);
  }
  
  // ไม่ดี: มีผลข้างเคียง (เปลี่ยนแปลงข้อมูลภายนอก)
  let cartTotal = 0;
  function addToTotal(price) {
    cartTotal += price;  // มีผลกระทบกับตัวแปรภายนอก
    return cartTotal;
  }
  
  // 2. Immutability - ไม่แก้ไขข้อมูลต้นฉบับ แต่สร้างข้อมูลใหม่เสมอ
  // ดี: สร้างอาร์เรย์ใหม่โดยไม่แก้ไขอาร์เรย์เดิม
  function addItem(cart, newItem) {
    // สร้างอาร์เรย์ใหม่โดยนำทุกอย่างจากอาร์เรย์เดิม + item ใหม่
    return [...cart, newItem];
  }
  
  // ไม่ดี: แก้ไขอาร์เรย์เดิม
  function addItemMutable(cart, newItem) {
    cart.push(newItem);  // แก้ไขอาร์เรย์เดิม
    return cart;
  }
  
  // 3. Function Composition - การนำฟังก์ชันมาต่อกัน
  function double(x) { return x * 2; }
  function addFive(x) { return x + 5; }
  
  // นำฟังก์ชันมาต่อกัน
  const doubleThenAddFive = (x) => addFive(double(x));
  console.log(doubleThenAddFive(10));  // (10 * 2) + 5 = 25
  
  // ทั้งหมดนี้เป็นพื้นฐานสำคัญของ React 
  // React ชอบ Pure Functions, Immutability และ Composition