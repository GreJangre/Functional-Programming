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