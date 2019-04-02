"use strict";
//In ES6 we can use property names with space like 'first name' 
var _a;
var lastName = 'last name';
var Employee = (_a = {
        'first name': 'Dinanath'
    },
    _a[lastName] = 'Jayaswal',
    _a);
console.log(Employee['first name']);
console.log(Employee['last name']);
console.log(Employee);
//# sourceMappingURL=7_2_es6_ts_object_property_name_spacing.js.map