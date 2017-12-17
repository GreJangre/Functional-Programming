function addMaker(a) {
    return function(b) {
        return a + b;
    }
}
addMaker(10)(5); // 15

var add5 = addMaker(5);
add5(3); // 8
add5(4); // 9

// 값으로서의 함수
var v1 = 100;
var v2 = function() {};
function f1() { return 100; }
function f2() { return function() {}; }

var users = [
    { id: 1, name: 'ID', age: 36 },
    { id: 2, name: 'BJ', age: 32 },
    { id: 3, name: 'JM', age: 32 },
    { id: 4, name: 'PJ', age: 27 },
    { id: 5, name: 'HA', age: 25 },
    { id: 6, name: 'JE', age: 26 },
    { id: 7, name: 'JI', age: 31 },
    { id: 8, name: 'MP', age: 23 }
];

var temp_users = [];
for (var i = 0, len = users.length; i < len; i++) {
    if (users[i].age < 30) { temp_users.push(users[i]); }
}
console.log(temp_users.length);
// 4

var ages = [];
for (var i = 0, len = temp_users.length; i < len; i++) {
    ages.push(temp_users[i].age);
}
console.log(ages);
// [27, 25, 26, 23]

var temp_users = [];
for (var i = 0, len = users.length; i < len; i++) {
    if (users[i].age >= 30) { temp_users.push(users[i]); }
}
// 3

var names = [];
for (var i = 0, len = temp_users.length; i < len; i++) {
    names.push(temp_users[i].name);
}
console.log(names);
// ["ID", "BJ", "JM", "JI"]