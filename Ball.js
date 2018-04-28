"use strict";
exports.__esModule = true;
var Ball = /** @class */ (function () {
    function Ball(inColor, inSize) {
        this.color = inColor;
        this.size = inColor;
    }
    Ball.prototype.about = function () {
        return "Ball:   id=" + this.id + ",\n                        color=" + this.color + ",\n                        size=" + this.size;
    };
    return Ball;
}());
exports.Ball = Ball;
