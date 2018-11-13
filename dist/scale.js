define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Scale = /** @class */ (function () {
        function Scale(listenDom, scaleDom) {
            if (listenDom === void 0) { listenDom = null; }
            if (scaleDom === void 0) { scaleDom = null; }
            var _this = this;
            this.listenDom = listenDom;
            this.scaleDom = scaleDom;
            this._scale = 1;
            this._maxScale = 2;
            this._minScale = 0.5;
            this._step = 0.05;
            this._originH = 0;
            this._originW = 0;
            this.scrollFunc = function ($event) {
                if ($event.wheelDelta > 0) {
                    _this.add();
                }
                else {
                    _this.reduce();
                }
            };
            if (listenDom !== null) {
                this.init();
            }
        }
        Object.defineProperty(Scale.prototype, "minScale", {
            get: function () {
                return this._minScale;
            },
            set: function (value) {
                this._minScale = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Scale.prototype, "maxScale", {
            get: function () {
                return this._maxScale;
            },
            set: function (value) {
                this._maxScale = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Scale.prototype, "scale", {
            get: function () {
                return this._scale;
            },
            set: function (value) {
                this._scale = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Scale.prototype, "step", {
            get: function () {
                return this._step;
            },
            enumerable: true,
            configurable: true
        });
        Scale.prototype.initData = function (listenDom, scaleDom) {
            if (scaleDom === void 0) { scaleDom = null; }
            if (this.listenDom) {
                this.dispose();
            }
            this.scale = 1;
            this.listenDom = listenDom;
            this.scaleDom = scaleDom;
            this.init();
        };
        Scale.prototype.init = function () {
            this._originH = this.scaleDom.clientHeight;
            this._originW = this.scaleDom.clientWidth;
            if (this.scaleDom == null) {
                this.scaleDom = this.listenDom;
            }
            this.dispose();
            this.listenDom.addEventListener('mousewheel', this.scrollFunc, false);
        };
        Scale.prototype.reset = function () {
            this.scale = 1;
            this.changeView();
        };
        Scale.prototype.changeView = function () {
            var canvasW = 0;
            var canvasH = 0;
            canvasH = this._originH * this.scale;
            canvasW = this._originW * this.scale;
            this.scaleDom.style.width = canvasW + "px";
            this.scaleDom.style.height = canvasH + "px";
        };
        Scale.prototype.changeScale = function (scale) {
            this.scale = scale;
            this.changeView();
        };
        Scale.prototype.dispose = function () {
            // this.listenDom.removeEventListener('mousewheel',this.scrollFunc, false); 
        };
        Scale.prototype.reduce = function () {
            if (this.scale < this.minScale)
                return;
            this.scale -= this._step;
            this.changeView();
        };
        Scale.prototype.add = function () {
            if (this.scale > this.maxScale)
                return;
            this.scale += this._step;
            this.changeView();
        };
        return Scale;
    }());
    exports.Scale = Scale;
});
