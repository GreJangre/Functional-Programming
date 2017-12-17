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
    for (var i = 0, len = list.length; i < len; i++) {
        if (predicate(list[i])) { new_list.push(list[i]) }
    }
    return new_list;
}

var temp_users = [];
for (var i = 0, len = users.length; i < len; i++) {
    if (users[i].age < 30) { temp_users.push(users[i]); }
}
console.log(temp_users.length);
// 4

var users_under_30 = filter(users, function(user) { return user.age < 30 });
console.log(users_under_30.length);
// 4

var ages = [];
for (var i = 0, len = users_under_30.length; i < len; i++) {
    ages.push(users_under_30[i].age);
}
console.log(ages);
// [25, 28, 27, 24]

var temp_users = [];
for (var i = 0, len = users.length; i < len; i++) {
    if (users[i].age >= 30) { temp_users.push(users[i]); }
}
console.log(temp_users.length);
// 3

var users_over_30 = filter(users, function(user) { return user.age >= 30 });
console.log(users_over_30.length);
// 3

var names = [];
for (var i = 0, len = users_over_30.length; i < len; i++) {
    names.push(users_over_30[i].name);
}
console.log(names);
// ["ID", "JM", "JE"]