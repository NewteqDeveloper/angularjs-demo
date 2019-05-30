var test = "hello";
System.register("test", [], function (exports_1, context_1) {
    "use strict";
    var MyTest;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            MyTest = /** @class */ (function () {
                function MyTest() {
                }
                MyTest.prototype.test = function () {
                    console.log('yay!');
                };
                return MyTest;
            }());
            exports_1("MyTest", MyTest);
        }
    };
});
//# sourceMappingURL=script.js.map