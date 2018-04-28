"use strict";
exports.__esModule = true;
var Ball_1 = require("./Ball");
var ball_service_1 = require("./ball.service");
var BallComponent = /** @class */ (function () {
    function BallComponent(bSvc) {
        this.ballSvc = new ball_service_1.BallService();
        console.log("BallTest initialized");
    }
    return BallComponent;
}());
exports.BallComponent = BallComponent;
var ballComp = new BallComponent(new ball_service_1.BallService());
var b1 = new Ball_1.Ball("red", "small");
ballComp.ballSvc.add(b1);
var b2 = new Ball_1.Ball("blue", "large");
ballComp.ballSvc.add(b2);
var b3 = new Ball_1.Ball("green", "medium");
ballComp.ballSvc.add(b3);
for (var _i = 0, _a = ballComp.ballSvc.list(); _i < _a.length; _i++) {
    var ball = _a[_i];
    console.log(ball.about());
}
console.log("remove an item...");
ballComp.ballSvc.remove(b2.id);
for (var _b = 0, _c = ballComp.ballSvc.list(); _b < _c.length; _b++) {
    var ball = _c[_b];
    console.log(ball.about());
}
