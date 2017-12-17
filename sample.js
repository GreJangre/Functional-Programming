function addMaker(a) {
    return function(b) {
        return a + b;
    }
}
addMaker(10)(5); // 15

var add5 = addMaker(5);
add5(3); // 8
add5(4); // 9