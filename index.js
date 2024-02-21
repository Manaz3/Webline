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

async function getUsers(names) { //Принимает массив имен и проверяет, есть ли такие пользователи в ГИТЕ
    let gitNames = names.map((name) => (
      fetch(`https://api.github.com/users/${name}`) // Делаем параметризированный запрос по имени
      .then(response => {
        if(!response.ok) {
          return 'expired';
        } else {
          return response.json()
        }
      },
        reject => {
          return null;
        })
      
    ))
    let result = await Promise.all(gitNames)
    return result;
  }

console.log(await getUsers(['iliakan', 'remy', 'no.such.users']));




