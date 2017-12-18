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
    { id: 1, name: 'ID', age: 32 },
    { id: 2, name: 'BJ', age: 25 },
    { id: 3, name: 'JM', age: 32 },
    { id: 4, name: 'PJ', age: 28 },
    { id: 5, name: 'HA', age: 27 },
    { id: 6, name: 'JE', age: 32 },
    { id: 7, name: 'JI', age: 24 }
];

function filter(list, predicate) {
    var new_list = [];
    for (var i = 0; i < list.length; i++) {
        if (predicate(list[i])) { new_list.push(list[i]) }
    }
    return new_list;
}

function map(list, iterate) {
    var new_list = [];
    for (var i = 0; i < list.length; i++) {
        new_list.push(iterate(list[i]));
    }
    return new_list;
}

function log_length(value) {
    console.log(value.length);
    return value;
}

function bvalue(key) {
    return function(obj) {
        return obj[key];
    }
}

console.log(bvalue('a')({ a: 'hi', b: 'hello' }));
// hi

var temp_users = [];
for (var i = 0; i < users.length; i++) {
    if (users[i].age < 30) { temp_users.push(users[i]); }
}
// 4

var users_under_30 = filter(users, function(user) { return user.age < 30 });
// 4

var ages = [];
for (var i = 0; i < users_under_30.length; i++) {
    ages.push(users_under_30[i].age);
}
// [25, 28, 27, 24]

var ages = map(users_under_30, function(user) { return user.age; });
// [25, 28, 27, 24]

// 함수 중첩
console.log(log_length(
    map(
    filter(users, function(user) { return user.age < 30 }),
    bvalue('age'))));

// 4
// [25, 28, 27, 24]

//----------
var temp_users = [];
for (var i = 0; i < users.length; i++) {
    if (users[i].age >= 30) { temp_users.push(users[i]); }
}
// 3

var users_over_30 = filter(users, function(user) { return user.age >= 30 });
// 3

var names = [];
for (var i = 0; i < users_over_30.length; i++) {
    names.push(users_over_30[i].name);
}
// ["ID", "JM", "JE"]

var names = map(users_over_30, function(user) { return user.name});
// ["ID", "JM", "JE"]

// 함수 중첩
console.log(log_length(
    map(
    filter(users, function(user) { return user.age >= 30; }),
    bvalue('name'))));
// 3
// ["ID", "JM", "JE"]

// ES6
console.log(log_length(
    map(filter(users, u => u.age < 30), user => user.age)));

console.log(log_length(
    map(filter(users, u => u.age >= 30), user => user.name)));

