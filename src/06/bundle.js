"use strict";

alert(22);
(function () {
    var x = 2,
        y = 3;
    console.log(x + y);
    var c = { x: 2, y: 3 };
    console.log(Object.value(c));
    var d = [2, 3, 4];
    c.map(function (item) {
        return item = 2;
    });
})();
