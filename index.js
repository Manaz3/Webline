// import cloneDeep from 'lodash.clonedeep'
// ! Практика со скобочками
// const bracels1 = '[{[[}]]}]';
// const bracels2 = '[[[{}]]]';



// function bracels(str) {
//     const open = ['[', '{', '('];
//     const close = [']', '}', ')'];
//     let openIndex;
//     let closeIndex;
//     const stack = [];
//     let arr = str.split('');

//     for (let i = 0; i < arr.length; i++) {
//         openIndex = open.indexOf(arr[i]);
//         if (openIndex !== -1) {
//             stack.push(openIndex);
//             console.log('openIndex:', openIndex);
//             continue;
//         }

//         closeIndex = close.indexOf(arr[i]);
//         if (closeIndex !== -1) {
//             openIndex = stack.pop();
//             console.log('closeIndex:', closeIndex,'openIndex:', openIndex)
//             if(openIndex !== closeIndex) return false;
//         }

//     }
//     if(stack.length !== 0) return false;

//     return true
// }

// console.log(bracels(bracels2));

//! CloneDeep из библиотеки lodash почему-то не работает
// const arr = [
//     undefined,
// ]

// const clone = cloneDeep(arr);

// console.log(clone)


//! toReversed из ECMAscript 2023 тоже не работает, остальные нововведения, я так понимаю, тоже. 
//! Как обновиться?
// const arr = ['apple', 'pussy', 'juice']

// const reversedArr = toReversed(arr);
// console.log(reversedArr);

//! Замыкания - простыми словами - это функция внутри другой функции, которая вызывается каждый раз при вызове основной
// function makeSomeCulc(n) {
//     return function() {
//         console.log(n * 100)
//     }
// }

// const culc = makeSomeCulc(55);
// culc()

// function createIncrementor(n) {
//     return function(num) {
//         return num + n;
//     }
// }

// const addtwo = createIncrementor(2);

// console.log(addtwo(5))

//? Тут при каждом новом вызове происходит увеличение счетчика
// function counter(n) {
//     let counter = 0;
//     return function() {
//        return n + counter++;
//     }
// }

// let startWithTwo = counter(2);
// console.log(startWithTwo())
// console.log(startWithTwo())
// console.log(startWithTwo())
// console.log(startWithTwo())
// console.log(startWithTwo())

//? Функция-генератор доменов
// function createURL(domain) {
//     return function(url){
//         return `https://www.${url}.${domain}`
//     }
// }

// let createRU = createURL('ru');
// let createCOM = createURL('com');
// console.log(createRU('Leningrad'))
// console.log(createRU('Rosneft'))
// console.log(createCOM('amazon'))

//? Пример задачи с собеса: написать свою функцию bind

// function bind(context, fn) {
//     return function(...args) {
//         fn.apply(context, args)
//     }
// }
// const person1 = {name: 'Maxim', age: '25', job:'frontend-developer'}
// const person2 = {name: 'Viktoria', age: '26', job:'manager'}

// function makePerson() {
//     console.log(`Person: ${this.name}, ${this.age}, ${this.job}`) 
// }

// bind(person1, makePerson)()

//? Задача, в которой первые N раз выводится ДА, а потом НЕТ

// function canGetCount(n){
//     let counter = 0;
//     return function() {
//         if (counter < n) {
//             console.log('yes');
//             counter++;
//         }
//         else console.log('no')
//     }
// }

// const getOne = canGetCount(2);

// getOne()
// getOne()
// getOne()
// getOne()
// getOne()

//? То же замыкание, но вызов функции осуществляется в массиве (с объяснением).
// function value() {
//     return function() {
//         return Math.random();
//     }
// }

// let num = value(); 
// // лексическое окружение удаляется из памяти вместе со всеми переменными после завершения
// // оно хранится в памяти только до тех пор, пока к нему можно обратиться
// //num.[[Enviroment]] хранит ссылку на лексическое окружение вызова функции value(), к нему можно обращаться по имени num 
// // следовательно лексическое окружение остается доступным даже после завершения работы анонимной функции функции

// const arr = [num(), num(), num()]
// console.log(arr);

// num = null; //Здесь ссылка на лексическое окружение удаляется из памяти, потому что в переменной больше нет вызова функции
// //а следовательно и нет обращения к лексическому окружению


//? Задача на лексическое обращение, что выведет функция?
// function makeWorker() {
//     let name = "Pete";
  
//     return function() {
//       alert(name);
//     };
//   }
  
//   let name = "John";
  
//   // создаём функцию
//   let work = makeWorker();
  
//   // вызываем её
//   work(); // что будет показано?

//   // Будет показано имя Pete, т.к. Функция work() 
//   //получает name из места его происхождения через ссылку на внешнее лексическое окружение
  
// //? Задача на сумму через sum(a)(b)
// function sum(a) {
//     return function(b) {
//         return a + b;
//     }
// }

// console.log(sum(2)(3))

//? Видна ли переменная?
// {
// let x = 1;

// function func() {
//   console.log(x); // ?

//   let x = 2; // В таком виде выдаст ошибку 'Cannot access 'x' before initialization
//   //движок видит переменную х, но она находится в статусе uninitialized, следовательно обращаться к ней нельзя
// }

// func();
// }

// {
// let x = 1;

// function func() {
//   console.log(x); // в этом случае код заработает, потому что функция обратится к внешнему окружению
// }

// func();
// }

//? Фильтрация с помощью функции

// let arr = [1, 2, 3, 4, 5, 6, 7];

// function inBetween(a, b) {
//     return function(x) {
//         return x >= a && x <= b
//     }
// }

// function inArray(array) {
//     return function(x) {
//         return array.includes(x)
//     }
// }
// console.log( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

// console.log( arr.filter(inArray([1, 2, 10])) ); // 1,2

//? Сортировка с помощью функции
// let users = [
//     { name: "John", age: 20, surname: "Johnson" },
//     { name: "Pete", age: 18, surname: "Peterson" },
//     { name: "Ann", age: 19, surname: "Hathaway" }
//   ];

// function byField(field) {
//     return function (a, b) {
//        return a[field] > b[field] ? 1 : -1;
//     }
// }

// console.log(users.sort(byField('name')));
// console.log(users.sort(byField('age')));

//! Function declartion & function expression

// function getAnswer(question, yes, no) {
//     if (confirm(question)) yes()
//     else no(); 
// }

// function showOk() {
//     alert('Прекрасно!');
// }

// function showNo() {
//     alert('Ну и ладно.');
// }

// getAnswer('Заходить будешь?', showOk, showNo);

//? Более лаконичная версия с анонимными функциями

// function getAnswer(question, yes, no) {
//     if (confirm(question)) yes()
//     else no(); 
// }

// getAnswer(
//     'Заходить будешь?',
//     function() { alert('Ну заходи') },
//     function() { alert('Тогда уходи') }
// )

//! Промисы

//? Задача на запрос юзеров из ГИТхаба

// async function getUsers(names) { //Принимает массив имен и проверяет, есть ли такие пользователи в ГИТЕ
//     let gitNames = names.map((name) => (
//       fetch(`https://api.github.com/users/${name}`) // Делаем параметризированный запрос по имени
//       .then(response => {
//         if(!response.ok) {
//           return 'expired';
//         } else {
//           return response.json()
//         }
//       },
//         reject => {
//           return null;
//         })
      
//     ))
//     let result = await Promise.all(gitNames)
//     return result;
//   }

// console.log(await getUsers(['iliakan', 'remy', 'no.such.users']));

//! Классы: наследование и полиморфизм, примеры
// class Person {
//   constructor(name, cock) {
//     this.name = name;
//     this.cock = cock;
//   }

//   shout(str) {
//     console.log(`Person shouts ${str.toUpperCase()}`)
//   }
// }

// class Student extends Person {
  
//   constructor(name, cock, age, sex) {
//     super(name, cock)
//     this.age = age;
//     this.sex = sex
//   }

//   askMeSmth(smth) {
//     console.log(smth);
//   }

//   shout(str) {
//     console.log(`Student shouts ${str.toUpperCase()}`)
//   }
// }

// let person1 = new Person('Whoy', false);
// let student1 = new Student('BOB', true, 18, 'male');

// console.log(student1)

// student1.askMeSmth('Y R U GAY?')

// person1.shout('whoooooooy')
// student1.shout('noooooooooo')

// ! Задачи на рекурсию
// ? Факториал числа

// function factorial(num) {
//     if (num === 1) return num
//     else return num *= factorial(num-1);
// }

// console.log(factorial(5))

//? Сумма чисел массива
// let array = [1,2,3,4,5];

// function sum(arr) {
//     if (arr.length === 1) return arr[0]
//     else return arr.pop() + sum(arr);
// }

// console.log(sum(array))

//? Первые n чисел Фибоначчи

// function fibonacci(n) {
//     if (n === 1) return [0, 1];
//     else {
//         let s = fibonacci(n - 1);
//         s.push(s[s.length - 1] + s[s.length - 2])
//         return s;
//     }
 
// }

// console.log(fibonacci(8));

//? Рекурсивный обход объектов, сумма зарплат работников, пиздец полный

// let company = { // тот же самый объект, сжатый для краткости
//     sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600 }],
//     development: {
//       sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
//       internals: [{name: 'Jack', salary: 1300}]
//     }
//   };
 
//   function salarySum(dept) {
//     if (Array.isArray(dept)) {
//         return dept.reduce((acc, value) => acc + value.salary, 0);
//     }
//     else {
//         let sum = 0
//         for (let subDept of Object.values(dept)) {
//             sum += salarySum(subDept);
//         }
//         return sum;
//     }
//   }

//   console.log(salarySum(company))


//? Фибоначчи, вывод нужного члена
// function fibonacci(n) {
//     return n <= 1? n : fibonacci(n - 1) + fibonacci(n - 2);
// }

// console.log(fibonacci(10))

//! Методы массивов
//? toCamelCase
// let str = "background-color";

// function camelize(str) {
//     return str
//         .split('-')
//         .map((el,i) => {
//            return i == 0 ? el : el[0].toUpperCase() + el.slice(1);
//         })
//         .join('')
// }


// console.log(camelize(str));

//? Фильтрация по диапазону
//? без мутации массива
// function filtered(arr, a, b) {
//     return arr.filter((num) => num >= a && num <= b)
// }

// const arr = [5, 3, 8, 1, 6, 2, 3, 4, 8, 3, 5, 2, 6];

// console.log(filtered(arr, 1, 4))
// console.log(arr)

//? С мутацией массива
// function filteredMut(arr, a, b) {
//   for (let i = 0; i < arr.length; i++) {
//     let num = arr[i];
//     if (num < a || num > b) {
//         arr.splice(i, 1)
//         i--
        
//     }
//   }
   
// }

// filteredMut(arr, 1, 4);
// console.log(arr)

//? Сортировка по убыванию с мутацией
// const arr = [5, 6, 2, 7, 8, 2]

// function sortArr (arr) {
//      arr.sort((a, b) => b - a);
// }

// sortArr(arr)
// console.log(arr)

//? Сортировка без мутации
// function nonMutSort(arr) {
//     return [...arr].sort()
// }

// const strArr = ["HTML", "JavaScript", "CSS"];

// console.log(nonMutSort(strArr));
// console.log(strArr)

//? Калькулятор

// function Calculator() {
//     this.methods = {
//         "+": (a, b) => a + b,
//     }
    
//     this.calculate = function(str) {
//         const arr = str.split(' ');
//         return  this.methods[arr[1]](Number(arr[0]), Number(arr[2]))
//     }

//     this.addMethod = function(name, func) {
//         this.methods[name] = func;
//     }
// }

// let calc = new Calculator;

// console.log(calc.calculate("3 + 7") );

// let powerCalc = new Calculator;
// powerCalc.addMethod("*", (a, b) => a * b) // Можно добавлять методы

// console.log(powerCalc.methods)

// let result = powerCalc.calculate("2 * 3")

// console.log(result)

//? Массив имен из объекта

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [ vasya, petya, masha ];

// let names = users.map(name => name.name);
// console.log(names)

//? Трансформировать в массив новых объектов

// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [ vasya, petya, masha ];

// let usersMapped = users.map((user) => ({
//     fullname: `${user.name} ${user.surname}`, id: user.id}))

// /*
// usersMapped = [
//   { fullName: "Вася Пупкин", id: 1 },
//   { fullName: "Петя Иванов", id: 2 },
//   { fullName: "Маша Петрова", id: 3 }
// ]
// */

// console.log(usersMapped)

//? Массив уникальных строк, удаление повторяющихся
//? С помощью объекта
// let strings = ["кришна", "кришна", "харе", "харе",
//   "харе", "харе", "кришна", "кришна", ":-O"
// ];

// function unique(str) {
//     let obj = {};
//     for(let item of str) {
//         obj[item] = item;
//     }
//     return Object.keys(obj)
// }

// console.log(unique(strings))

//? С помощью коллекции Set

// let strings = ["кришна", "кришна", "харе", "харе",
//   "харе", "харе", "кришна", "кришна", ":-O"
// ];

// function unique(str) {
//     return Array.from(new Set(str));
// }

// console.log(unique(strings))

//? Создать объект из массива

// let users = [
//     {id: 'john', name: "John Smith", age: 20},
//     {id: 'ann', name: "Ann Smith", age: 24},
//     {id: 'pete', name: "Pete Peterson", age: 31},
//   ];
  
// function groupById(users) {
//     let obj = {}
//     users.reduce((acc, value) => obj[value.id] = value, users[0])
//     return obj
// }

//   let usersById = groupById(users);
//   console.log(usersById)
  
  /*
  // после вызова у нас должно получиться:
  
  usersById = {
    john: {id: 'john', name: "John Smith", age: 20},
    ann: {id: 'ann', name: "Ann Smith", age: 24},
    pete: {id: 'pete', name: "Pete Peterson", age: 31},
  }
  */


  //! Map и Set
  //? Отфильтровать анаграммы
//   let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

//   function anaFilter(arr) {
//     let annagrams = new Map();

//     for (let item of arr) {
//         let sorted = item
//         .toLowerCase()
//         .split('')
//         .sort()
//         .join('');
//         annagrams.set(sorted, item)
//     }

//     return Array.from(annagrams.values());

//   }

//   console.log(anaFilter(arr))

// BEGIN (write your solution here)
// function getHiddenCard(card, stars) {
//   return '*'.repeat(stars) + card.slice(12, card.length)
// }
// // END

// console.log(getHiddenCard('1234123412341234', 3))

//? Проверка анаграмм
// function filterAnagrams(word, arr) {
//   const sortedWord = word.split('').sort().join('');
//   let copiedArr = [...arr]
  
//   return copiedArr.filter((x) => x.split('').sort().join('') === sortedWord )
//   }
  
//   console.log(filterAnagrams('laser', ['lazing', 'lazy',  'lacer']))

//? Создание объекта из параметризированного поиска с помощью reduce
// function getParams(str) {
//   const obj = {}
//   const arr = str.split('&')
//   arr.reduce((acc, pair) => {
//       const [key, value] = pair.split('=')
//       acc[key] = value
//       return acc;
//   }, obj)
//   return obj;
// }


// console.log(getParams('name=hexlet&count=3&order=asc'))

//? Определить, содержит ли название компании заданный домен, метод строки endsWith - запомнить

// export function isEmployeeEmail(email, companyDomain) {

//   console.log(email.indexOf('@'))
//   return Boolean(email.indexOf(companyDomain, email.indexOf('@')) + 1)
// }

// let email = 'hexlet.io@example.com'

// console.log(isEmployeeEmail(email, 'hexlet.io'))

// export function isEmployeeEmail(email, companyDomain) {

//   return email.endsWith(`@${companyDomain}`);
// }

// let email = 'hexlet.io@example.com'

// console.log(isEmployeeEmail(email, 'hexlet.io'))

//? Вернуть массив без повторений
//* С помощью Set

// const arr = [1, 1, 3, 'oops!'];

// function unique(arr) {
//   const set = new Set(arr);
//   return Array.from(set)
// }

// console.log(unique(arr))

//* С помощью Reduce

// function unique(coll) {
//   const init = [];

//   return coll.reduce(
//     (acc, curr) => (acc.includes(curr) ? acc : [...acc, curr]),
//     init,
//   );
// }

// console.log(unique(arr))

//? Создать поле для игры в шахматы заданного размера

// function getField(size) {
//   const field = Array(size).fill(null).map(() => Array(size).fill(null));
//   return field;
// }

// console.log(getField(3))

//? Проверка двух массивов на соответствие через метод every
// const p1 = [1, 2, 3];
// const p2 = [1, 2, 3];
// const p3 = [0, 2, 3];

// function isTheSamePoint(p1, p2) {
//   return p1.every((n, i) => n === p2[i])
// }

// console.log(isTheSamePoint(p1, p2))
// console.log(isTheSamePoint(p1, p3))




















