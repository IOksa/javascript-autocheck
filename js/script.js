// function findLongestWord(string) {
//     // Change code below this line
//     const words=string.split(" ");
//     console.log(words);
//     let indexMaxLength=0;
//     for (let i=1; i<words.length; i+=1){
//       console.log("i=",i);
//       console.log("words[indexMaxLength].length=", words[indexMaxLength].length);
//       console.log("words[i].length=", words[i].length);
//       console.log("indexMaxLength=", indexMaxLength);

//       indexMaxLength = words[indexMaxLength].length>words[i].length ? indexMaxLength : i;
     
//     }
//     console.log("maxWords=", words[indexMaxLength]);
//     return words[indexMaxLength];
  
    // Change code above this line
 // }

 // findLongestWord("May the force be with you");

//  const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//   const arrayPropName=[];
//   console.log("arrayPropName=", arrayPropName);

//   for (const product of products){
//     if(product[propName]===undefined){
//       return arrayPropName;
//     }
//      console.log("product=", product);
//      arrayPropName.push(product[propName]);
//      console.log("for product[propName]=", product[propName]);
//      console.log("for arrayPropName=", arrayPropName);
//   }
//   return arrayPropName;
  // Change code above this line
//}
//console.log(getAllPropValues("quantity"));

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line
// const {
//   yesterday:highYesterday,
//   today:highToday,
//   tomorrow:highTomorrow,
//   highIcon="https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"
// }
//   =highTemperatures;
// Change code above this line
//const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;
// console.log("highYesterday=", highYesterday);
// console.log("highToday=", highToday);
// console.log("highTomorrow=", highTomorrow);
// console.log("highIcon=", highIcon);

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line
//     const index=this.potions.indexOf(potionName);
//     console.log("index=", index);
//     this.potions.splice(index, 1);


//     // Change code above this line
//   },
// };

// console.log("1=", atTheOldToad.potions);
// atTheOldToad.removePotion('Dragon breath');
// console.log("2=", atTheOldToad.potions);
// atTheOldToad.removePotion('Speed potion');
// console.log("3=", atTheOldToad.potions);

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
  // Change code below this line
//   getPotions() {
//       return this.potions;
//   },
//   addPotion(newPotion) {
//     console.log("this.potions=", this.potions);
//     console.log("newPotion=", newPotion);
//     for (const potion of this.potions){
//       console.log("potion=", potion);
//       if (potion.name===newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       } 
//     }
//     this.potions.push(newPotion); 
//     console.log("this.potions=", this.potions);
//   },
//   removePotion(potionName) {
//     let potionIndex=-1;
//     console.log("potionName=", potionName);
//     console.log("potionIndex=", potionIndex);
//     for(const potion of this.potions){
//       // const potionIndex = this.potions.indexOf(potionName);
//         console.log("potion=", potion);
//         if(potion.name===potionName){
//           potionIndex+=1;
//           break;
//         }
//     }
//     console.log("potionIndex=", potionIndex);
//     if (potionIndex === -1) {
//       return `Potion ${potionName} is not in inventory!`;
//     }
//     this.potions.splice(potionIndex, 1);
//     console.log(this.potions);
//   },
//   updatePotionName(oldName, newName) {
//     // const potionIndex = this.potions.indexOf(oldName);
//     let potionIndex=-1;
//     for(const potion of this.potions){
//         console.log("potion=", potion);
//         if(potion.name===oldName){
//           potionIndex+=1;
//           potion.name=newName;
//           break;
//         }
//     }
//     console.log("potionIndex=", potionIndex);
//     if (potionIndex === -1) {
//       return `Potion ${oldName} is not in inventory!`;
//     }

//     console.log(this.potions);
//   },
//   // Change code above this line
// };

// console.log(atTheOldToad);
// console.log(atTheOldToad.getPotions());
// atTheOldToad.addPotion({name: "Invisibility", price: 620});
// console.log(atTheOldToad.addPotion({name: "Stone skin", price: 240}));
// atTheOldToad.removePotion("Speed potion");
// atTheOldToad.removePotion("Dragon breath");
//atTheOldToad.updatePotionName('Dragon breath', 'Polymorth');
// atTheOldToad.updatePotionName('Stone skin', 'Invulnerability potion');
//////////////////////////////////////////////////////////////////////////////
// function deliverPizza(pizzaName) {
//   console.log("deliverPizza",pizzaName);
//   console.log(`Delivering ${pizzaName} pizza.`);
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   console.log("makePizza",pizzaName);
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// Chande code below this line
// function makeMessage(pizzaName, callback) {
//   console.log("makeMessage",pizzaName);
//   // console.log("callback=",callback);
//   const message=callback(pizzaName);
//   return message;
// }

// console.log(makeMessage("Royal Grand", makePizza));
// console.log(makeMessage("Ultracheese", deliverPizza));
//////////////////////////////////////////////////////////////////

// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });
// Change code below this line

// makePizza("Ultracheese", function eatPizza (pizzaName){
//   console.log(`Eating pizza ${pizzaName}`);
// });
//////////////////////////////////////////////////////////////////
// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, onSuccess, onError) {
//     if (this.pizzas.includes(pizzaName)){
//       return onSuccess(pizzaName);
//     }
//     return onError(`There is no pizza with a name ${pizzaName} in the assortment.`);
//   },
// };
// Change code above this line

// Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// Method calls with callbacks
// console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));
// pizzaPalace.order("Four meats", makePizza, onOrderError);
// pizzaPalace.order("Big Mike", makePizza, onOrderError);
// pizzaPalace.order("Vienna", makePizza, onOrderError);

///////////////////////////////////////////////////////////////
// function filterArray(numbers, value) {
//   const filteredNumbers = [];
  // Change code below this line

  
  // numbers.forEach(function (number){
  //   if (number > value) {
  //     filteredNumbers.push(number);
  //     console.log("number=", number);
  //   }
  // });
  // Change code above this line
//   return filteredNumbers;
// }


// console.log(filterArray([1,2,3,4,5,6,7],3));
// //////////////////////////////////////////////////////////////////////
// const users=[
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39
//   }
// ];

// const getUsersWithFriend = (users, friendName) => {
//   return users.filter(user=>user.friends.includes(friendName));
// };

// console.log(getUsersWithFriend(users,"Briana Decker"));

// const getFriends = (users) => {
//   const allFriends=users.flatMap(user=>user.friends);
//   console.log(allFriends);
//   return allFriends.filter((friend,index,array)=>array.indexOf(friend)===index);
// };

// console.log(getFriends(users));

// const gletTotaBalanceByGender = (users, gender) => {
//   console.log("filter=", users.filter(user=>user.gender===gender));
//   const filter=users.filter(user=>user.gender===gender);
//   const reduce=users.reduce((totalBalance, user)=>totalBalance+user.balance,0);


//   console.log("reduce=", reduce);
//   return reduce;
// };
// console.log("return=", gletTotaBalanceByGender(users, 'female'));

// const pizzaPalace = {
//   pizzas: ["Supercheese", "Smoked", "Four meats"],
//   // Change code below this line
//   checkPizza(pizzaName) {
//     console.log("checkPizza pizzaName=",pizzaName)
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);
//     console.log("order isPizzaAvailable=", isPizzaAvailable);
//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`;
  // },
  // Change code above this line
// };

// console.log(pizzaPalace.order('Smoked'));
///////////////////////////////////////////////////////////////////////////////////
// const historyService = {
//   orders: [
//     { email: "jacob@hotmail.com", dish: "Burrito" },
//     { email: "solomon@topmail.net", dish: "Burger" },
//     { email: "artemis@coldmail.net", dish: "Pizza" },
//     { email: "solomon@topmail.net", dish: "Apple pie" },
//     { email: "jacob@hotmail.com", dish: "Taco" },
//   ],
//   // Change code below this line
//   getOrdersLog() {
//     return this.orders
//       .map(order => `email: ${order.email} dish: ${order.dish}`)
//       .join(" - ");
//   },
//   getEmails() {
//     const emails = this.orders.map(order => order.email);
//     const uniqueEmails = new Set(emails);
//     return [...uniqueEmails];
//   },
//   getOrdersByEmail(email) {
//     return this.orders.filter(order => order.email === email);
//   },
  // Change code above this line
// };

// console.log(historyService.getOrdersLog());
//////////////////////////////////////////////////////////////////////////////////////
// class StringBuilder{
//   constructor(initialValue) {
//    this.value=initialValue;
//   }
//   getValue(){
//     //console.log(" getValue() this.value=",this.value);
//     return this.value;
//   }
//   padEnd(str){
//     //console.log("this.value+str=",this.value+str);
//     this.value=this.value+str;
//     return this.value;
//   }
//   padStart(str){
//     // console.log("str+this.value=",str+this.value);
//     this.value=str+this.value;
//     return this.value;
//   }
//   padBoth(str){
//     this.padStart(str);
//     this.padEnd(str);
//     return str;
//   }
// }


// Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="

//////////////////////////////////////////////////////////////////////
// class Car {
//   // Change code below this line
//   #price;
//   static MAX_PRICE=50000;

//   constructor({price}) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice <= Car.MAX_PRICE) {
//        console.log("Car.MAX_PRICE",  Car.MAX_PRICE);
//         this.#price = newPrice;
//     }
//   }
  // Change code above this line
// }

// const audi = new Car({ price: 35000 });
// console.log("audi.price=", audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000
////////////////////////////////////////////////////////////
// const mySet = new Set([1, 2, 1, 4, 3, 2]);
// const result = [...mySet];
// console.log(result);


// const person = { name: 'Mango' };

// function sayHi(age) {
//   return `${this.name} is ${age}`;
// }

// console.log(sayHi.call(person, 18));
// console.log(sayHi.bind(person, 18)); 
////////////////////////////////////////////////////////
// const result = {
//   success: ["max-length", "no-amd", "prefer-arrow-functions"],
//   failure: ["no-var", "var-on-top", "linebreak"],
//   skipped: ["no-extra-semi", "no-dup-keys"]
// };
// function makeList(arr) {
  // Змініть код лише під цим рядком
  // const failureItems = [];
  // for (let i=0; i<3;i+=1){
  //   failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
  // }
  // Змініть код лише над цим рядком

//   return failureItems;
// }

// const failuresList = makeList(result.failure);
// console.log("failuresList=", failuresList);
//////////////////////////////////////////////////////////
// Змініть код лише під цим рядком
// class Thermostat{
//   constructor(fahrenheit) {
//     this._celsius = (5 / 9) * (fahrenheit - 32);
//   }
//   get temperature(){
//     return this._celsius;
//   }
//   set temperature(celsius){
//     this._celsius=celsius;
//   }
// }
// Змініть код лише над цим рядком

// const thermos = new Thermostat(76); // Налаштування у шкалі Фаренгейта
// let temp = thermos.temperature; 
// console.log("temp=",temp);// 24.44 градусів за Цельсієм
// thermos.temperature = 26;
// temp = thermos.temperature; // 26 градусів за Цельсієм
// console.log("temp=",temp);

////////////////////////////////////////////////////////////
// function zeroArray(m, n) {
  // Створіть 2-D масив із m-рядків m та n-стовпчиків нулів
  // let newArray = [];
  // let row = [];
  // for (let i = 0; i < m; i++) {
    // Додайте m-ий рядок до newArray

    // for (let j = 0; j < n; j++) {
      // Додає n нулів до поточного рядка, щоб створити стовпчики
    //   row.push(0);
    //   console.log("i=",i," j=",j," row[j]=", row[j]);
    // }
    // Штовхає поточний рядок, який тепер містить n нулів, до масиву
    //console.log("m=",m, " n=", n,"row=", row);
    // newArray.push(row);
    //console.log("i=",i," newArray[i]=", newArray[i]);
//     row=[];
//   }
//   return newArray;
// }

// let matrix = zeroArray(3, 2);
// console.log("matrix=", matrix);
///////////////////////////////////////////////
// function copyMachine(arr, num) {
//   let newArr = [];
//   while (num >= 1) {
    // Змініть код лише під цим рядком
    // newArr.push([...arr]);//Обратить внимание!!!!!
    // Змініть код лише над цим рядком
//     num--;
//   }
//   return newArr;
// }

// console.log(copyMachine([true, false, true], 2));
/////////////////////////////////////////////////////
// function quickCheck(arr, elem) {
//   // Змініть код лише під цим рядком
//   console.log("arr=",arr);
//   console.log('elem=', elem);
//   console.log(arr.indexOf(elem));
//   return arr.indexOf(elem)!==-1;
  // Змініть код лише над цим рядком
//}

// console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
/////////////////////////////////////////////////////////////////////////////
// function confirmEnding(str, target) {
//   console.log("str=", str, "target=", target);
 
//   const strSlice=str.slice(-target.length);
//   console.log(strSlice);
//   //return target.includes(strSlice);
//   return strSlice===target;
// }
 
// console.log(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification"));
////////////////////////////////////////////////////////////////////////////////
// function truncateString(str, num) {
//   if(num<str.length){
//     return str.slice(0,num)+"...";
//   }
//   return str;
// }

//console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
///////////////////////////////////////////////////////////////////////////////
// function findElement(arr, func) {
//    return arr.find(func);
// }

// console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));
////////////////////////////////////////////////////////////////////////////
// function titleCase(str) {
//   return str.split(' ').map(item=>item[0].toUpperCase()+item.slice(1).toLowerCase()).join(' ');
// }

// console.log(titleCase("I'm a little tea pot"));
////////////////////////////////////////////////////////////////////////////////
// function frankenSplice(arr1, arr2, n) {
//   let arr3=arr2.slice();
//   console.log("arr2=", arr2);
 
//   arr3.splice(n,0,...arr1);
//   console.log("arr3=", arr3);
//   return arr3;
// }

// frankenSplice([1, 2, 3], [4, 5, 6], 1);
// frankenSplice([1, 2, 3, 4], [], 0);
// frankenSplice([1, 2, 3], [4, 5], 1);// має повертати [4, 1, 2, 3, 5]
// frankenSplice([1, 2], ["a", "b"], 1);// має повертати ["a", 1, 2, "b"]
// frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2);// має повертати ["head", "shoulders", "claw", "tentacle", "knees", "toes"]
///////////////////////////////////////////////////////////////////////////////////
// function bouncer(arr) {
//   return arr.filter(value=>!!value);
// }

// console.log(bouncer([7, "ate", "", false, 9]));
// bouncer([7, "ate", "", false, 9]);// має повертати [7, "ate", 9].
// bouncer(["a", "b", "c"]);// має повертати ["a", "b", "c"].
// bouncer([false, null, 0, NaN, undefined, ""]);// має повертати [].
// bouncer([null, NaN, 1, 2, undefined]);// має повертати [1, 2].
///////////////////////////////////////////////////////////////////////

// Поверніть найменший індекс, при якому потрібно вставити значення (другий аргумент) в масив (перший аргумент), після того, як він був відсортований. Поверненим значенням повинне бути число.

// Наприклад, getIndexToIns([1,2,3,4], 1.5) має повертати 1, оскільки він більший за 1 (індекс 0), але менший за 2 (індекс 1).

// Аналогічно, getIndexToIns([20,3,5], 19) має повертати 2, оскільки після відсортування масиву він виглядатиме як [3,5,20], а 19 менше за 20 (індекс 2) та більше за 5 (індекс 1).
//Вариант 1
// function getIndexToIns(arr, num) {
//   return (arr.sort((a,b)=>a-b).findIndex(element=>element>=num)>=0)
//   ? arr.sort((a,b)=>a-b).findIndex(element=>element>=num)
//   :arr.length;
  
// }

//Вариант2!!!
// function getIndexToIns(arr, num) {
//   return arr.filter(val => num > val).length;
// }
//console.log(getIndexToIns([40, 60], 50));

// getIndexToIns([10, 20, 30, 40, 50], 35);// має повертати 3.
// getIndexToIns([10, 20, 30, 40, 50], 35);// має повертати число.
// getIndexToIns([10, 20, 30, 40, 50], 30);// має повертати 2.
// getIndexToIns([10, 20, 30, 40, 50], 30);// має повертати число.
// getIndexToIns([40, 60], 50);// має повертати 1.
// getIndexToIns([40, 60], 50);// має повертати число.
//console.log(getIndexToIns([3, 10, 5], 3));// має повертати 0.
// getIndexToIns([3, 10, 5], 3);// має повертати число.
// getIndexToIns([5, 3, 20, 3], 5);// має повертати 2.
// getIndexToIns([5, 3, 20, 3], 5);// має повертати число.
// getIndexToIns([2, 20, 10], 19);// має повертати 2.
// getIndexToIns([2, 20, 10], 19);// має повертати число.
//console.log(getIndexToIns([2, 5, 10], 15));// має повертати 3.
// getIndexToIns([2, 5, 10], 15);// має повертати число.
// getIndexToIns([], 1);// має повертати 0.
// getIndexToIns([], 1);// має повертати число.

////////////////////////////////////////////////////////////

// Мутації
// Поверніть true, якщо рядок у першому елементі масиву містить усі літери рядка у другому елементі масиву.

// Наприклад, ["hello", "Hello"] має повертати true, оскільки всі літери другого рядка наявні у першому, незважаючи на регістр.

// Аргументи ["hello", "hey"] мають повертати false, оскільки рядок hello не містить y.

// ["Alien", "line"] має повертати true, оскільки всі літери в line наявні в Alien.

// function mutation(arr) {
//   const str=arr[0].toLowerCase();
//   const arrLetter=arr[1].toLowerCase();
//   // const result=[...arrLetter].every(element=>str.includes(element));//вариант1
//   const result=arrLetter.split('').every(element=>str.includes(element));//вариант2
//   console.log(result);
//   return result;
// }

// mutation(["hello", "hey"]);
// mutation(["hello", "Hello"]);// має повертати true.
// mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]);// має повертати true.
// mutation(["Mary", "Army"]);// має повертати true.
// mutation(["Mary", "Aarmy"]);// має повертати true.
// mutation(["Alien", "line"]);// має повертати true.
// mutation(["floor", "for"]);// має повертати true.
// mutation(["hello", "neo"]);// має повертати false.
// mutation(["voodoo", "no"]);// має повертати false.
// mutation(["ate", "date"]);// має повертати false.
// mutation(["Tiger", "Zebra"]);// має повертати false.
// mutation(["Noel", "Ole"]);// має повертати true
////////////////////////////////////////////////////////////////////
// Напишіть функцію, яка ділить масив (перший аргумент) на групи довжиною size (другий аргумент) та повертає їх як двовимірний масив.

// function chunkArrayInGroups(arr, size) {
//   let array=[];
//   for(let i=0; i<arr.length;i+=size){
//     // if(i+size<arr.length){
//       array.push(arr.slice(i,i+size));
//     //}
//     // else{
//     //   array.push(arr.slice(i));
//     // }
    
//   }
//   //console.log(array);
//   return array;
// }

//chunkArrayInGroups(["a", "b", "c", "d"], 2);// має повертати [["a", "b"], ["c", "d"]].
//chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3);// має повертати [[0, 1, 2], [3, 4, 5]].
//chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);// має повертати [[0, 1], [2, 3], [4, 5]].
//chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);// має повертати [[0, 1, 2, 3], [4, 5]].
//chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3);// має повертати [[0, 1, 2], [3, 4, 5], [6]].
//chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4);// має повертати [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
//chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2);// має повертати [[0, 1], [2, 3], [4, 5], [6, 7], [8]].
//////////////////////////////////////////////////////////////////////////////////

// let arr=[];

// let object={};

// object.a=0;
// object.b=1;
// object.c=3;

// console.log('arr=', arr);
// console.log('object=', object);

// arr.push({...object});
// console.log('arr=', arr);


// object.a=4;
// object.b=5;
// object.c=6;

// console.log('arr=', arr);
// console.log('object=', object);
// arr.push({...object});
// console.log('arr=', arr);
// console.log('object=', object);
////////////////////////////////////////////////////////////////////////////////////////////////////
//console.log(Number(null))
// const value = 5;
// const value = 'bunny';
// console.log(value);
// const value;
// value = 10;
// console.log(value);
// const min = Math.min (... [1, 5, -1, -10]);
// console.log(min);
// const name = 'bob';
// const age = 20;
// const obj = {
//   name,
//   age
// };

// console.log(obj);
// const piece = {
//   x: 0,
//   y: 0,
//   move(x, y) {
//     this.x = x;
//     this.y = y;
//   },
// };

// piece.move(10, 10);
// console.log(piece);
// const [a, ,b] = 'JavaScript is awesome'.split(' ');
// console.log(a, b);
// const { name, age, gender = 'm', hairColor: color } = {
//   name: 'Jacob',
//   age: 20,
//   hairColor: 'blue',
//  };
 
//  console.log(name, age, gender, color);
// const dog = {name: 'Poly'};

// function showDogName() {
//   console.log(this.name);
// }

// const boundShowDogName = showDogName.bind(dog);
// boundShowDogName();
const userA = {
  name: 'Mango',
  age: 5,
};

const userB = {
  ...userA,
  age: 10,
  happy: true,
};

console.log(userB);