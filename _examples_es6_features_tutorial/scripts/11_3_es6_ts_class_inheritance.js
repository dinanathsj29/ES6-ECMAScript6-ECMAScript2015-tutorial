"use strict";
// export {};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    // simple constructor method
    /* constructor() {
      console.log('Car constructor');
    } */
    // parameterized constructor method
    function Car(_name) {
        console.log('Car constructor', _name);
    }
    // prototype method
    Car.prototype.getModelNumber = function () {
        return 101;
    };
    return Car;
}());
// console.log('// ------------------------------');
var TataCars = /** @class */ (function (_super) {
    __extends(TataCars, _super);
    function TataCars(_name1) {
        var _this = _super.call(this, _name1) || this;
        console.log('TataCars constructor', _name1);
        return _this;
    }
    // prototype method - If same method present in child than it overwrite/override parent method
    /* getModelNumber() {
      return 1001;
    } */
    // to call same method from parent use super keyword
    TataCars.prototype.getModelNumber = function () {
        return _super.prototype.getModelNumber.call(this);
    };
    return TataCars;
}(Car));
// simple constructor method
// let Nexon = new TataCars();
// parameterized constructor method
var Nexon = new TataCars('Tata Nexon');
// prototype method
console.log('Nexon.getModelNumber:', Nexon.getModelNumber());
//# sourceMappingURL=11_3_es6_ts_class_inheritance.js.map