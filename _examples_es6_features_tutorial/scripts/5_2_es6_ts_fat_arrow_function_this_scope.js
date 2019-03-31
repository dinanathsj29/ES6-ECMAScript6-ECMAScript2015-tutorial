"use strict";
// export {};
var EmployeeObj1 = {
    empId1: 111,
    greetings1: function () {
        console.log('this.empId1 : ' + this.empId1);
    }
};
EmployeeObj1.greetings1(); // empId1: 111,
// ------------------------------
//error - internal function 'this' scope created
/* var EmployeeObj2 = {
    empId2: 222,
    greetings2: function () {
        setTimeout(function () {
            console.log('this.empId2 : ' + this.empId2);
        }, 1000)
    }
}

EmployeeObj2.greetings2(); */
// ------------------------------
//internal function 'this' scope created, work around with 'self'
var EmployeeObj3 = {
    empId3: 333,
    greetings3: function () {
        var self = this;
        setTimeout(function () {
            console.log('self.empId3 : ' + self.empId3);
        }, 1000);
    }
};
EmployeeObj3.greetings3(); // empId3: 333,
// ------------------------------
//best work around with fat arrow function =>
var EmployeeObj4 = {
    empId4: 444,
    greetings4: function () {
        var _this = this;
        setTimeout(function () {
            console.log('this.empId4 : ' + _this.empId4);
        }, 1000);
    }
};
EmployeeObj4.greetings4(); // empId4: 444,
//# sourceMappingURL=5_2_es6_ts_fat_arrow_function_this_scope.js.map