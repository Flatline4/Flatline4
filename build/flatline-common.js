(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 74);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
var DomElement_1 = __webpack_require__(1);
var DomElementParent = (function (_super) {
    __extends(DomElementParent, _super);
    function DomElementParent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.children = [];
        return _this;
    }
    return DomElementParent;
}(DomElement_1.DomElement));
exports.DomElementParent = DomElementParent;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Styles_1 = __webpack_require__(73);
var DomElement = (function () {
    function DomElement() {
        this.style = new Styles_1.default();
    }
    return DomElement;
}());
exports.DomElement = DomElement;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
var DomElementParent_1 = __webpack_require__(0);
var Body = (function (_super) {
    __extends(Body, _super);
    function Body() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Body.prototype.generate = function () {
        var eles = document.getElementsByTagName("body");
        if (eles.length != 1)
            throw new Error("There can only be 1 body element");
        var element = eles[0];
        var i = 0;
        while (element.children.length > i) {
            if (element.children[i].tagName.toLowerCase() === 'script') {
                i += 1;
                continue;
            }
            element.removeChild(element.children[i]);
        }
        if (this.id)
            element.id = this.id;
        var styleString = this.style.generateCSS();
        if (styleString) {
            element.setAttribute('style', styleString);
        }
        if (this.className) {
            element.className = this.className;
        }
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var child = _a[_i];
            element.appendChild(child.generate());
        }
        return element;
    };
    return Body;
}(DomElementParent_1.DomElementParent));
exports.default = Body;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
var DomElementParent_1 = __webpack_require__(0);
var A = (function (_super) {
    __extends(A, _super);
    function A() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    A.prototype.generate = function () {
        var _this = this;
        var element = document.createElement("a");
        if (this.id)
            element.id = this.id;
        if (this.className) {
            element.className = this.className;
        }
        if (this.href)
            element.href = this.href;
        if (this.download)
            element.download = "";
        if (this.hreflang)
            element.hreflang = this.hreflang;
        if (this.rel)
            element.rel = this.rel;
        if (this.target)
            element.target = this.target;
        if (this.type)
            element.type = this.type;
        if (this.media)
            element.setAttribute("media", this.media);
        if (this.click) {
            if (!this.style.cursor)
                this.style.cursor = 'pointer';
            element.onclick = function () { return _this.click(); };
        }
        var styleString = this.style.generateCSS();
        if (styleString) {
            element.setAttribute('style', styleString);
        }
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var child = _a[_i];
            element.appendChild(child.generate());
        }
        return element;
    };
    return A;
}(DomElementParent_1.DomElementParent));
exports.default = A;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
var DomElementParent_1 = __webpack_require__(0);
var B = (function (_super) {
    __extends(B, _super);
    function B() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    B.prototype.generate = function () {
        var element = document.createElement("b");
        if (this.id)
            element.id = this.id;
        var styleString = this.style.generateCSS();
        if (styleString) {
            element.setAttribute('style', styleString);
        }
        if (this.className) {
            element.className = this.className;
        }
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var child = _a[_i];
            element.appendChild(child.generate());
        }
        return element;
    };
    return B;
}(DomElementParent_1.DomElementParent));
exports.default = B;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
var DomElement_1 = __webpack_require__(1);
var Br = (function (_super) {
    __extends(Br, _super);
    function Br() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Br.prototype.generate = function () {
        var element = document.createElement("br");
        if (this.id)
            element.id = this.id;
        var styleString = this.style.generateCSS();
        if (styleString) {
            element.setAttribute('style', styleString);
        }
        if (this.className) {
            element.className = this.className;
        }
        return element;
    };
    return Br;
}(DomElement_1.DomElement));
exports.default = Br;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
var DomElementParent_1 = __webpack_require__(0);
var Button = (function (_super) {
    __extends(Button, _super);
    function Button() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = 'button';
        return _this;
    }
    Button.prototype.generate = function () {
        var _this = this;
        var element = document.createElement("button");
        if (this.click) {
            element.onclick = function () { return _this.click(); };
        }
        if (this.id) {
            element.id = this.id;
        }
        var styleString = this.style.generateCSS();
        if (styleString) {
            element.setAttribute('style', styleString);
        }
        if (this.className) {
            element.className = this.className;
        }
        if (this.autofocus) {
            element.autofocus = this.autofocus;
        }
        if (this.disabled) {
            element.disabled = this.disabled;
        }
        if (this.formaction) {
            element.formAction = this.formaction;
        }
        if (this.formenctype) {
            element.formEnctype = this.formenctype;
        }
        if (this.formmethod) {
            element.formMethod = this.formmethod;
        }
        if (this.formnovalidate) {
            element.formNoValidate = this.formnovalidate;
        }
        if (this.formtarget) {
            element.formTarget = this.formtarget;
        }
        if (this.name) {
            element.name = this.name;
        }
        if (this.type) {
            element.type = this.type;
        }
        if (this.value) {
            element.value = this.value;
        }
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var child = _a[_i];
            element.appendChild(child.generate());
        }
        return element;
    };
    return Button;
}(DomElementParent_1.DomElementParent));
exports.default = Button;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
var DomElementParent_1 = __webpack_require__(0);
var Code = (function (_super) {
    __extends(Code, _super);
    function Code() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Code.prototype.generate = function () {
        var element = document.createElement("code");
        if (this.id) {
            element.id = this.id;
        }
        var styleString = this.style.generateCSS();
        if (styleString) {
            element.setAttribute('style', styleString);
        }
        if (this.className) {
            element.className = this.className;
        }
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var child = _a[_i];
            element.appendChild(child.generate());
        }
        return element;
    };
    return Code;
}(DomElementParent_1.DomElementParent));
exports.default = Code;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
var DomElementParent_1 = __webpack_require__(0);
var Col = (function (_super) {
    __extends(Col, _super);
    function Col() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Col.prototype.generate = function () {
        var element = document.createElement("col");
        if (this.id) {
            element.id = this.id;
        }
        var styleString = this.style.generateCSS();
        if (styleString) {
            element.setAttribute('style', styleString);
        }
        if (this.className) {
            element.className = this.className;
        }
        if (this.align) {
            element.align = this.align;
        }
        if (this.char) {
            element.setAttribute('char', this.char);
        }
        if (this.charoff) {
            element.setAttribute('charoff', this.charoff);
        }
        if (this.span) {
            element.span = this.span;
        }
        if (this.valign) {
            element.vAlign = this.valign;
        }
        if (this.width) {
            element.width = this.width;
        }
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var child = _a[_i];
            element.appendChild(child.generate());
        }
        return element;
    };
    return Col;
}(DomElementParent_1.DomElementParent));
exports.default = Col;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
var DomElementParent_1 = __webpack_require__(0);
var Div = (function (_super) {
    __extends(Div, _super);
    function Div() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Div.prototype.generate = function () {
        var element = document.createElement("div");
        if (this.id) {
            element.id = this.id;
        }
        var styleString = this.style.generateCSS();
        if (styleString) {
            element.setAttribute('style', styleString);
        }
        if (this.className) {
            element.className = this.className;
        }
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var child = _a[_i];
            element.appendChild(child.generate());
        }
        return element;
    };
    return Div;
}(DomElementParent_1.DomElementParent));
exports.default = Div;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
var DomElementParent_1 = __webpack_require__(0);
var Em = (function (_super) {
    __extends(Em, _super);
    function Em() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Em.prototype.generate = function () {
        var element = document.createElement("em");
        if (this.id) {
            element.id = this.id;
        }
        var styleString = this.style.generateCSS();
        if (styleString) {
            element.setAttribute('style', styleString);
        }
        if (this.className) {
            element.className = this.className;
        }
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var child = _a[_i];
            element.appendChild(child.generate());
        }
        return element;
    };
    return Em;
}(DomElementParent_1.DomElementParent));
exports.default = Em;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
var DomElementParent_1 = __webpack_require__(0);
var Form = (function (_super) {
    __extends(Form, _super);
    function Form() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Form.prototype.generate = function () {
        var element = document.createElement("form");
        if (this.id) {
            element.id = this.id;
        }
        var styleString = this.style.generateCSS();
        if (styleString) {
            element.setAttribute('style', styleString);
        }
        if (this.className) {
            element.className = this.className;
        }
        if (this.acceptCharset) {
            element.acceptCharset = this.acceptCharset;
        }
        if (this.action) {
            element.action = this.action;
        }
        if (this.autocomplete) {
            element.autocomplete = this.autocomplete;
        }
        if (this.enctype) {
            element.enctype = this.enctype;
        }
        if (this.method) {
            element.method = this.method;
        }
        if (this.name) {
            element.name = this.name;
        }
        if (this.novalidate) {
            element.noValidate = this.novalidate;
        }
        if (this.target) {
            element.target = this.target;
        }
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var child = _a[_i];
            element.appendChild(child.generate());
        }
        return element;
    };
    return Form;
}(DomElementParent_1.DomElementParent));
exports.default = Form;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
var DomElementParent_1 = __webpack_require__(0);
var Head = (function (_super) {
    __extends(Head, _super);
    function Head() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Head.prototype.generate = function () {
        var element = document.createElement("head");
        if (this.id) {
            element.id = this.id;
        }
        var styleString = this.style.generateCSS();
        if (styleString) {
            element.setAttribute('style', styleString);
        }
        if (this.className) {
            element.className = this.className;
        }
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var child = _a[_i];
            element.appendChild(child.generate());
        }
        return element;
    };
    return Head;
}(DomElementParent_1.DomElementParent));
exports.default = Head;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
var DomElement_1 = __webpack_require__(1);
var Hr = (function (_super) {
    __extends(Hr, _super);
    function Hr() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Hr.prototype.generate = function () {
        var element = document.createElement("hr");
        if (this.id) {
            element.id = this.id;
        }
        var styleString = this.style.generateCSS();
        if (styleString) {
            element.setAttribute('style', styleString);
        }
        if (this.className) {
            element.className = this.className;
        }
        return element;
    };
    return Hr;
}(DomElement_1.DomElement));
exports.default = Hr;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
var DomElementParent_1 = __webpack_require__(0);
var Img = (function (_super) {
    __extends(Img, _super);
    function Img() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Img.prototype.generate = function () {
        var element = document.createElement("img");
        if (this.id) {
            element.id = this.id;
        }
        var styleString = this.style.generateCSS();
        if (styleString) {
            element.setAttribute('style', styleString);
        }
        if (this.className) {
            element.className = this.className;
        }
        if (this.alt) {
            element.alt = this.alt;
        }
        if (this.crossorigin) {
            element.crossOrigin = this.crossorigin;
        }
        if (this.height) {
            element.height = this.height;
        }
        if (this.ismap) {
            element.isMap = this.ismap;
        }
        if (this.longdesc) {
            element.longDesc = this.longdesc;
        }
        if (this.sizes) {
            element.sizes = this.sizes;
        }
        if (this.src) {
            element.src = this.src;
        }
        if (this.srcset) {
            element.srcset = this.srcset;
        }
        if (this.usemap) {
            element.useMap = this.usemap;
        }
        if (this.width) {
            element.width = this.width;
        }
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var child = _a[_i];
            element.appendChild(child.generate());
        }
        return element;
    };
    return Img;
}(DomElementParent_1.DomElementParent));
exports.default = Img;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
var DomElementParent_1 = __webpack_require__(0);
var Input = (function (_super) {
    __extends(Input, _super);
    function Input() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = 'text';
        return _this;
    }
    Input.prototype.generate = function () {
        var element = document.createElement("input");
        if (this.id) {
            element.id = this.id;
        }
        var styleString = this.style.generateCSS();
        if (styleString) {
            element.setAttribute('style', styleString);
        }
        if (this.className) {
            element.className = this.className;
        }
        if (this.accept) {
            element.accept = this.accept;
        }
        if (this.alt) {
            element.alt = this.alt;
        }
        if (this.autocomplete) {
            element.autocomplete = this.autocomplete;
        }
        if (this.autofocus) {
            element.autofocus = this.autofocus;
        }
        if (this.checked) {
            element.checked = this.checked;
        }
        if (this.dirname) {
            element.setAttribute('dirname', this.dirname);
        }
        if (this.disabled) {
            element.disabled = this.disabled;
        }
        if (this.formaction) {
            element.formAction = this.formaction;
        }
        if (this.formenctype) {
            element.formEnctype = this.formenctype;
        }
        if (this.formmethod) {
            element.formMethod = this.formmethod;
        }
        if (this.formnovalidate) {
            element.formNoValidate = this.formnovalidate;
        }
        if (this.formtarget) {
            element.formTarget = this.formtarget;
        }
        if (this.height) {
            element.height = this.height;
        }
        if (this.max) {
            element.max = this.max;
        }
        if (this.maxlength) {
            element.maxLength = this.maxlength;
        }
        if (this.min) {
            element.min = this.min;
        }
        if (this.multiple) {
            element.multiple = this.multiple;
        }
        if (this.name) {
            element.name = this.name;
        }
        if (this.pattern) {
            element.pattern = this.pattern;
        }
        if (this.placeholder) {
            element.placeholder = this.placeholder;
        }
        if (this.readonly) {
            element.readOnly = this.readonly;
        }
        if (this.required) {
            element.required = this.required;
        }
        if (this.size) {
            element.size = this.size;
        }
        if (this.src) {
            element.src = this.src;
        }
        if (this.step) {
            element.step = this.step;
        }
        if (this.type) {
            element.type = this.type;
        }
        if (this.value) {
            element.value = this.value;
        }
        if (this.width) {
            element.width = this.width;
        }
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var child = _a[_i];
            element.appendChild(child.generate());
        }
        return element;
    };
    return Input;
}(DomElementParent_1.DomElementParent));
exports.default = Input;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
var DomElementParent_1 = __webpack_require__(0);
var Label = (function (_super) {
    __extends(Label, _super);
    function Label() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Label.prototype.generate = function () {
        var element = document.createElement("label");
        if (this.id) {
            element.id = this.id;
        }
        var styleString = this.style.generateCSS();
        if (styleString) {
            element.setAttribute('style', styleString);
        }
        if (this.className) {
            element.className = this.className;
        }
        if (this.for) {
            element.setAttribute('for', this.for);
        }
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var child = _a[_i];
            element.appendChild(child.generate());
        }
        return element;
    };
    return Label;
}(DomElementParent_1.DomElementParent));
exports.default = Label;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
var DomElementParent_1 = __webpack_require__(0);
var Li = (function (_super) {
    __extends(Li, _super);
    function Li() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Li.prototype.generate = function () {
        var element = document.createElement("li");
        if (this.id) {
            element.id = this.id;
        }
        var styleString = this.style.generateCSS();
        if (styleString) {
            element.setAttribute('style', styleString);
        }
        if (this.className) {
            element.className = this.className;
        }
        if (this.value) {
            element.value = this.value;
        }
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var child = _a[_i];
            element.appendChild(child.generate());
        }
        return element;
    };
    return Li;
}(DomElementParent_1.DomElementParent));
exports.default = Li;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
var DomElementParent_1 = __webpack_require__(0);
var Link = (function (_super) {
    __extends(Link, _super);
    function Link() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Link.prototype.generate = function () {
        var element = document.createElement("link");
        if (this.id) {
            element.id = this.id;
        }
        var styleString = this.style.generateCSS();
        if (styleString) {
            element.setAttribute('style', styleString);
        }
        if (this.className) {
            element.className = this.className;
        }
        if (this.crossorigin) {
            element.setAttribute('crossorigin', this.crossorigin);
        }
        if (this.href) {
            element.href = this.href;
        }
        if (this.hreflang) {
            element.hreflang = this.hreflang;
        }
        if (this.media) {
            element.media = this.media;
        }
        if (this.rel) {
            element.rel = this.rel;
        }
        if (this.sizes) {
            element.setAttribute('sizes', this.sizes);
        }
        if (this.type) {
            element.type = this.type;
        }
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var child = _a[_i];
            element.appendChild(child.generate());
        }
        return element;
    };
    return Link;
}(DomElementParent_1.DomElementParent));
exports.default = Link;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
var DomElementParent_1 = __webpack_require__(0);
var Map = (function (_super) {
    __extends(Map, _super);
    function Map() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Map.prototype.generate = function () {
        var element = document.createElement("map");
        if (this.id) {
            element.id = this.id;
        }
        var styleString = this.style.generateCSS();
        if (styleString) {
            element.setAttribute('style', styleString);
        }
        if (this.className) {
            element.className = this.className;
        }
        if (this.name) {
            element.name = this.name;
        }
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var child = _a[_i];
            element.appendChild(child.generate());
        }
        return element;
    };
    return Map;
}(DomElementParent_1.DomElementParent));
exports.default = Map;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
var DomElementParent_1 = __webpack_require__(0);
var Menu = (function (_super) {
    __extends(Menu, _super);
    function Menu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Menu.prototype.generate = function () {
        var element = document.createElement("menu");
        if (this.id) {
            element.id = this.id;
        }
        var styleString = this.style.generateCSS();
        if (styleString) {
            element.setAttribute('style', styleString);
        }
        if (this.className) {
            element.className = this.className;
        }
        if (this.label) {
            element.setAttribute('label', this.label);
        }
        if (this.type) {
            element.type = this.type;
        }
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var child = _a[_i];
            element.appendChild(child.generate());
        }
        return element;
    };
    return Menu;
}(DomElementParent_1.DomElementParent));
exports.default = Menu;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
var DomElementParent_1 = __webpack_require__(0);
var Meta = (function (_super) {
    __extends(Meta, _super);
    function Meta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Meta.prototype.generate = function () {
        var element = document.createElement("meta");
        if (this.id) {
            element.id = this.id;
        }
        var styleString = this.style.generateCSS();
        if (styleString) {
            element.setAttribute('style', styleString);
        }
        if (this.className) {
            element.className = this.className;
        }
        if (this.charset) {
            element.charset = this.charset;
        }
        if (this.content) {
            element.content = this.content;
        }
        if (this.httpEquiv) {
            element.httpEquiv = this.httpEquiv;
        }
        if (this.name) {
            element.name = this.name;
        }
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var child = _a[_i];
            element.appendChild(child.generate());
        }
        return element;
    };
    return Meta;
}(DomElementParent_1.DomElementParent));
exports.default = Meta;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
var DomElementParent_1 = __webpack_require__(0);
var Ol = (function (_super) {
    __extends(Ol, _super);
    function Ol() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Ol.prototype.generate = function () {
        var element = document.createElement("ol");
        if (this.id) {
            element.id = this.id;
        }
        var styleString = this.style.generateCSS();
        if (styleString) {
            element.setAttribute('style', styleString);
        }
        if (this.className) {
            element.className = this.className;
        }
        if (this.reversed) {
            element.setAttribute('reversed', this.reversed);
        }
        if (this.start) {
            element.start = this.start;
        }
        if (this.type) {
            element.type = this.type;
        }
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var child = _a[_i];
            element.appendChild(child.generate());
        }
        return element;
    };
    return Ol;
}(DomElementParent_1.DomElementParent));
exports.default = Ol;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
var DomElementParent_1 = __webpack_require__(0);
var P = (function (_super) {
    __extends(P, _super);
    function P() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    P.prototype.generate = function () {
        var element = document.createElement("p");
        if (this.id) {
            element.id = this.id;
        }
        var styleString = this.style.generateCSS();
        if (styleString) {
            element.setAttribute('style', styleString);
        }
        if (this.className) {
            element.className = this.className;
        }
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var child = _a[_i];
            element.appendChild(child.generate());
        }
        return element;
    };
    return P;
}(DomElementParent_1.DomElementParent));
exports.default = P;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
var DomElementParent_1 = __webpack_require__(0);
var Q = (function (_super) {
    __extends(Q, _super);
    function Q() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Q.prototype.generate = function () {
        var element = document.createElement("q");
        if (this.id) {
            element.id = this.id;
        }
        var styleString = this.style.generateCSS();
        if (styleString) {
            element.setAttribute('style', styleString);
        }
        if (this.className) {
            element.className = this.className;
        }
        if (this.cite) {
            element.cite = this.cite;
        }
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var child = _a[_i];
            element.appendChild(child.generate());
        }
        return element;
    };
    return Q;
}(DomElementParent_1.DomElementParent));
exports.default = Q;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
var DomElementParent_1 = __webpack_require__(0);
var Script = (function (_super) {
    __extends(Script, _super);
    function Script() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Script.prototype.generate = function () {
        var element = document.createElement("q");
        if (this.id) {
            element.id = this.id;
        }
        var styleString = this.style.generateCSS();
        if (styleString) {
            element.setAttribute('style', styleString);
        }
        if (this.className) {
            element.className = this.className;
        }
        if (this.charset) {
            element.setAttribute('charset', this.charset);
        }
        if (this.defer) {
            element.setAttribute('defer', '');
        }
        if (this.src) {
            element.setAttribute('src', this.src);
        }
        if (this.type) {
            element.setAttribute('type', this.type);
        }
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var child = _a[_i];
            element.appendChild(child.generate());
        }
        return element;
    };
    return Script;
}(DomElementParent_1.DomElementParent));
exports.default = Script;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
var DomElementParent_1 = __webpack_require__(0);
var Small = (function (_super) {
    __extends(Small, _super);
    function Small() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Small.prototype.generate = function () {
        var element = document.createElement("small");
        if (this.id) {
            element.id = this.id;
        }
        var styleString = this.style.generateCSS();
        if (styleString) {
            element.setAttribute('style', styleString);
        }
        if (this.className) {
            element.className = this.className;
        }
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var child = _a[_i];
            element.appendChild(child.generate());
        }
        return element;
    };
    return Small;
}(DomElementParent_1.DomElementParent));
exports.default = Small;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
var DomElementParent_1 = __webpack_require__(0);
var Span = (function (_super) {
    __extends(Span, _super);
    function Span() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Span.prototype.generate = function () {
        var element = document.createElement("span");
        if (this.id) {
            element.id = this.id;
        }
        var styleString = this.style.generateCSS();
        if (styleString) {
            element.setAttribute('style', styleString);
        }
        if (this.className) {
            element.className = this.className;
        }
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var child = _a[_i];
            element.appendChild(child.generate());
        }
        return element;
    };
    return Span;
}(DomElementParent_1.DomElementParent));
exports.default = Span;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
var DomElementParent_1 = __webpack_require__(0);
var Strong = (function (_super) {
    __extends(Strong, _super);
    function Strong() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Strong.prototype.generate = function () {
        var element = document.createElement("strong");
        if (this.id) {
            element.id = this.id;
        }
        var styleString = this.style.generateCSS();
        if (styleString) {
            element.setAttribute('style', styleString);
        }
        if (this.className) {
            element.className = this.className;
        }
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var child = _a[_i];
            element.appendChild(child.generate());
        }
        return element;
    };
    return Strong;
}(DomElementParent_1.DomElementParent));
exports.default = Strong;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
var DomElementParent_1 = __webpack_require__(0);
var Style = (function (_super) {
    __extends(Style, _super);
    function Style() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Style.prototype.generate = function () {
        var element = document.createElement("style");
        if (this.id) {
            element.id = this.id;
        }
        var styleString = this.style.generateCSS();
        if (styleString) {
            element.setAttribute('style', styleString);
        }
        if (this.className) {
            element.className = this.className;
        }
        if (this.media) {
            element.media = this.media;
        }
        if (this.scoped) {
            element.setAttribute('scoped', this.scoped);
        }
        if (this.type) {
            element.type = this.type;
        }
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var child = _a[_i];
            element.appendChild(child.generate());
        }
        return element;
    };
    return Style;
}(DomElementParent_1.DomElementParent));
exports.default = Style;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
var DomElementParent_1 = __webpack_require__(0);
var Table = (function (_super) {
    __extends(Table, _super);
    function Table() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Table.prototype.generate = function () {
        var element = document.createElement("table");
        if (this.id) {
            element.id = this.id;
        }
        var styleString = this.style.generateCSS();
        if (styleString) {
            element.setAttribute('style', styleString);
        }
        if (this.className) {
            element.className = this.className;
        }
        if (this.sortable) {
            element.setAttribute('sortable', this.sortable);
        }
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var child = _a[_i];
            element.appendChild(child.generate());
        }
        return element;
    };
    return Table;
}(DomElementParent_1.DomElementParent));
exports.default = Table;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
var DomElement_1 = __webpack_require__(1);
var TextNode = (function (_super) {
    __extends(TextNode, _super);
    function TextNode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextNode.prototype.generate = function () {
        return document.createTextNode(this.text);
    };
    return TextNode;
}(DomElement_1.DomElement));
exports.default = TextNode;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
var DomElementParent_1 = __webpack_require__(0);
var Textarea = (function (_super) {
    __extends(Textarea, _super);
    function Textarea() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Textarea.prototype.generate = function () {
        var element = document.createElement("textarea");
        if (this.id) {
            element.id = this.id;
        }
        var styleString = this.style.generateCSS();
        if (styleString) {
            element.setAttribute('style', styleString);
        }
        if (this.className) {
            element.className = this.className;
        }
        if (this.autofocus) {
            element.autofocus = this.autofocus;
        }
        if (this.cols) {
            element.cols = this.cols;
        }
        if (this.dirname) {
            element.setAttribute('dirname', this.dirname);
        }
        if (this.disabled) {
            element.disabled = this.disabled;
        }
        if (this.maxlength) {
            element.maxLength = this.maxlength;
        }
        if (this.name) {
            element.name = this.name;
        }
        if (this.placeholder) {
            element.placeholder = this.placeholder;
        }
        if (this.readonly) {
            element.readOnly = this.readonly;
        }
        if (this.required) {
            element.required = this.required;
        }
        if (this.rows) {
            element.rows = this.rows;
        }
        if (this.wrap) {
            element.wrap = this.wrap;
        }
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var child = _a[_i];
            element.appendChild(child.generate());
        }
        return element;
    };
    return Textarea;
}(DomElementParent_1.DomElementParent));
exports.default = Textarea;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
var DomElementParent_1 = __webpack_require__(0);
var Title = (function (_super) {
    __extends(Title, _super);
    function Title() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Title.prototype.generate = function () {
        var element = document.createElement("title");
        if (this.id) {
            element.id = this.id;
        }
        var styleString = this.style.generateCSS();
        if (styleString) {
            element.setAttribute('style', styleString);
        }
        if (this.className) {
            element.className = this.className;
        }
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var child = _a[_i];
            element.appendChild(child.generate());
        }
        return element;
    };
    return Title;
}(DomElementParent_1.DomElementParent));
exports.default = Title;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var RouteUtils = (function () {
    function RouteUtils() {
    }
    RouteUtils.RouteName = function () {
        var fullUrl = document.URL;
        if (fullUrl.indexOf('#') === -1 ||
            fullUrl.indexOf('#') === fullUrl.length - 1) {
            return undefined;
        }
        var uri = document.URL.split('#')[1];
        if (uri.indexOf('?') === -1 ||
            uri.indexOf('?') === uri.length - 1) {
            return uri;
        }
        return uri.substr(0, uri.indexOf('?'));
    };
    RouteUtils.RouteParams = function () {
        var fullUrl = document.URL;
        if (fullUrl.indexOf('#') === -1 ||
            fullUrl.indexOf('#') === fullUrl.length - 1) {
            return undefined;
        }
        var uri = document.URL.split('#')[1];
        if (uri.indexOf('?') === -1 ||
            uri.indexOf('?') === uri.length - 1) {
            return undefined;
        }
        var params = uri.substr(uri.indexOf('?'));
        var decode = decodeURIComponent(params);
        return JSON.parse(decode);
    };
    RouteUtils.CreateParams = function (obj) {
        return encodeURIComponent(JSON.stringify(obj));
    };
    return RouteUtils;
}());
exports.default = RouteUtils;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var A_1 = __webpack_require__(3);
var Article_1 = __webpack_require__(41);
var Aside_1 = __webpack_require__(42);
var Audio_1 = __webpack_require__(43);
var B_1 = __webpack_require__(4);
var Br_1 = __webpack_require__(5);
var Button_1 = __webpack_require__(6);
var Canvas_1 = __webpack_require__(44);
var Code_1 = __webpack_require__(7);
var Col_1 = __webpack_require__(8);
var Details_1 = __webpack_require__(45);
var Dialog_1 = __webpack_require__(46);
var Div_1 = __webpack_require__(9);
var Em_1 = __webpack_require__(10);
var Embed_1 = __webpack_require__(47);
var Figcaption_1 = __webpack_require__(48);
var Figure_1 = __webpack_require__(49);
var Footer_1 = __webpack_require__(50);
var Form_1 = __webpack_require__(11);
var H1_1 = __webpack_require__(51);
var H2_1 = __webpack_require__(52);
var H3_1 = __webpack_require__(53);
var H4_1 = __webpack_require__(54);
var H5_1 = __webpack_require__(55);
var H6_1 = __webpack_require__(56);
var Head_1 = __webpack_require__(12);
var Header_1 = __webpack_require__(57);
var Hr_1 = __webpack_require__(13);
var Img_1 = __webpack_require__(14);
var Input_1 = __webpack_require__(15);
var Label_1 = __webpack_require__(16);
var Li_1 = __webpack_require__(17);
var Link_1 = __webpack_require__(18);
var Main_1 = __webpack_require__(58);
var Map_1 = __webpack_require__(19);
var Mark_1 = __webpack_require__(59);
var Menu_1 = __webpack_require__(20);
var Meta_1 = __webpack_require__(21);
var Nav_1 = __webpack_require__(60);
var Ol_1 = __webpack_require__(22);
var P_1 = __webpack_require__(23);
var Picture_1 = __webpack_require__(61);
var Q_1 = __webpack_require__(24);
var Script_1 = __webpack_require__(25);
var Section_1 = __webpack_require__(62);
var Small_1 = __webpack_require__(26);
var Source_1 = __webpack_require__(63);
var Span_1 = __webpack_require__(27);
var Strong_1 = __webpack_require__(28);
var Style_1 = __webpack_require__(29);
var Summary_1 = __webpack_require__(64);
var Table_1 = __webpack_require__(30);
var Tbody_1 = __webpack_require__(65);
var Td_1 = __webpack_require__(66);
var TextNode_1 = __webpack_require__(31);
var Textarea_1 = __webpack_require__(32);
var Th_1 = __webpack_require__(67);
var Thead_1 = __webpack_require__(68);
var Time_1 = __webpack_require__(69);
var Title_1 = __webpack_require__(33);
var Tr_1 = __webpack_require__(70);
var Ul_1 = __webpack_require__(71);
// import Var from './Elements/Var'
var Video_1 = __webpack_require__(72);
var Chain = (function () {
    function Chain(parent) {
        this.parent = parent;
        this.children = [];
        this.current = null;
    }
    Chain.prototype.a = function (children) {
        var ele = new A_1.default();
        var chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    };
    Chain.prototype.article = function (children) {
        var ele = new Article_1.default();
        var chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    };
    Chain.prototype.aside = function (children) {
        var ele = new Aside_1.default();
        var chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    };
    Chain.prototype.audio = function (children) {
        var ele = new Audio_1.default();
        var chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    };
    Chain.prototype.b = function (children) {
        var ele = new B_1.default();
        var chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    };
    Chain.prototype.br = function (children) {
        var ele = new Br_1.default();
        var chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        this.children.push(ele);
        return this;
    };
    Chain.prototype.button = function (children) {
        var ele = new Button_1.default();
        var chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    };
    Chain.prototype.canvas = function (children) {
        var ele = new Canvas_1.default();
        var chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    };
    Chain.prototype.code = function (children) {
        var ele = new Code_1.default();
        var chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    };
    Chain.prototype.col = function (children) {
        var ele = new Col_1.default();
        var chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    };
    Chain.prototype.details = function (children) {
        var ele = new Details_1.default();
        var chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    };
    Chain.prototype.dialog = function (children) {
        var ele = new Dialog_1.default();
        var chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    };
    Chain.prototype.div = function (children) {
        var ele = new Div_1.default();
        var chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    };
    Chain.prototype.em = function (children) {
        var ele = new Em_1.default();
        var chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    };
    Chain.prototype.embed = function (children) {
        var ele = new Embed_1.default();
        var chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    };
    Chain.prototype.figcaption = function (children) {
        var ele = new Figcaption_1.default();
        var chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    };
    Chain.prototype.figure = function (children) {
        var ele = new Figure_1.default();
        var chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    };
    Chain.prototype.footer = function (children) {
        var ele = new Footer_1.default();
        var chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    };
    Chain.prototype.form = function (children) {
        var ele = new Form_1.default();
        var chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    };
    Chain.prototype.h1 = function (children) {
        var ele = new H1_1.default();
        var chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    };
    Chain.prototype.h2 = function (children) {
        var ele = new H2_1.default();
        var chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    };
    Chain.prototype.h3 = function (children) {
        var ele = new H3_1.default();
        var chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    };
    Chain.prototype.h4 = function (children) {
        var ele = new H4_1.default();
        var chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    };
    Chain.prototype.h5 = function (children) {
        var ele = new H5_1.default();
        var chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    };
    Chain.prototype.h6 = function (children) {
        var ele = new H6_1.default();
        var chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    };
    Chain.prototype.head = function (children) {
        var ele = new Head_1.default();
        var chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    };
    Chain.prototype.header = function (children) {
        var ele = new Header_1.default();
        var chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    };
    Chain.prototype.hr = function (children) {
        var ele = new Hr_1.default();
        var chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        this.children.push(ele);
        return this;
    };
    Chain.prototype.img = function (children) {
        var ele = new Img_1.default();
        var chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    };
    Chain.prototype.input = function (children) {
        var ele = new Input_1.default();
        var chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    };
    Chain.prototype.label = function (children) {
        var ele = new Label_1.default();
        var chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    };
    Chain.prototype.li = function (children) {
        var ele = new Li_1.default();
        var chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    };
    Chain.prototype.link = function (children) {
        var ele = new Link_1.default();
        var chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    };
    Chain.prototype.main = function (children) {
        var ele = new Main_1.default();
        var chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    };
    Chain.prototype.map = function (children) {
        var ele = new Map_1.default();
        var chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    };
    Chain.prototype.mark = function (children) {
        var ele = new Mark_1.default();
        var chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    };
    Chain.prototype.menu = function (children) {
        var ele = new Menu_1.default();
        var chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    };
    Chain.prototype.meta = function (children) {
        var ele = new Meta_1.default();
        var chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    };
    Chain.prototype.nav = function (children) {
        var ele = new Nav_1.default();
        var chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    };
    /*
    object(children?: (element: ObjectNode, style: Styles, children: Chain<ObjectNode>) => void) {
        const ele = new ObjectNode();
        const chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    }
    */
    Chain.prototype.ol = function (children) {
        var ele = new Ol_1.default();
        var chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    };
    Chain.prototype.p = function (children) {
        var ele = new P_1.default();
        var chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    };
    Chain.prototype.picture = function (children) {
        var ele = new Picture_1.default();
        var chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    };
    Chain.prototype.q = function (children) {
        var ele = new Q_1.default();
        var chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    };
    Chain.prototype.script = function (children) {
        var ele = new Script_1.default();
        var chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    };
    Chain.prototype.section = function (children) {
        var ele = new Section_1.default();
        var chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    };
    Chain.prototype.small = function (children) {
        var ele = new Small_1.default();
        var chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    };
    Chain.prototype.source = function (children) {
        var ele = new Source_1.default();
        var chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    };
    Chain.prototype.span = function (children) {
        var ele = new Span_1.default();
        var chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    };
    Chain.prototype.strong = function (children) {
        var ele = new Strong_1.default();
        var chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    };
    Chain.prototype.style = function (children) {
        var ele = new Style_1.default();
        var chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    };
    Chain.prototype.summary = function (children) {
        var ele = new Summary_1.default();
        var chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    };
    Chain.prototype.table = function (children) {
        var ele = new Table_1.default();
        var chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    };
    Chain.prototype.tbody = function (children) {
        var ele = new Tbody_1.default();
        var chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    };
    Chain.prototype.td = function (children) {
        var ele = new Td_1.default();
        var chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    };
    Chain.prototype.text = function (value) {
        var ele = new TextNode_1.default();
        ele.text = value;
        this.children.push(ele);
        return this;
    };
    Chain.prototype.textarea = function (children) {
        var ele = new Textarea_1.default();
        var chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    };
    Chain.prototype.th = function (children) {
        var ele = new Th_1.default();
        var chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    };
    Chain.prototype.thead = function (children) {
        var ele = new Thead_1.default();
        var chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    };
    Chain.prototype.time = function (children) {
        var ele = new Time_1.default();
        var chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    };
    Chain.prototype.title = function (children) {
        var ele = new Title_1.default();
        var chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    };
    Chain.prototype.tr = function (children) {
        var ele = new Tr_1.default();
        var chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    };
    Chain.prototype.ul = function (children) {
        var ele = new Ul_1.default();
        var chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    };
    /*
    var(children?: (element: Var, style: Styles, children: Chain<Var>) => void) {
        const ele = new Var();
        const chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    }
    */
    Chain.prototype.video = function (children) {
        var ele = new Video_1.default();
        var chain = new Chain(ele);
        if (children) {
            children(ele, ele.style, chain);
        }
        ele.children = chain.getChildren();
        this.children.push(ele);
        return this;
    };
    Chain.prototype.getChildren = function () {
        return this.children;
    };
    return Chain;
}());
exports.default = Chain;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
var DomElementParent_1 = __webpack_require__(0);
var ObjectNode = (function (_super) {
    __extends(ObjectNode, _super);
    function ObjectNode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ObjectNode.prototype.generate = function () {
        var element = document.createElement("object");
        if (this.id) {
            element.id = this.id;
        }
        var styleString = this.style.generateCSS();
        if (styleString) {
            element.setAttribute('style', styleString);
        }
        if (this.className) {
            element.className = this.className;
        }
        if (this.data) {
            element.data = this.data;
        }
        if (this.height) {
            element.height = this.height;
        }
        if (this.name) {
            element.name = this.name;
        }
        if (this.type) {
            element.type = this.type;
        }
        if (this.usemap) {
            element.useMap = this.usemap;
        }
        if (this.width) {
            element.width = this.width;
        }
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var child = _a[_i];
            element.appendChild(child.generate());
        }
        return element;
    };
    return ObjectNode;
}(DomElementParent_1.DomElementParent));
exports.default = ObjectNode;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
var DomElementParent_1 = __webpack_require__(0);
var Var = (function (_super) {
    __extends(Var, _super);
    function Var() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Var.prototype.generate = function () {
        var element = document.createElement("var");
        if (this.id) {
            element.id = this.id;
        }
        var styleString = this.style.generateCSS();
        if (styleString) {
            element.setAttribute('style', styleString);
        }
        if (this.className) {
            element.className = this.className;
        }
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var child = _a[_i];
            element.appendChild(child.generate());
        }
        return element;
    };
    return Var;
}(DomElementParent_1.DomElementParent));
exports.default = Var;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Body_1 = __webpack_require__(2);
var Chain_1 = __webpack_require__(35);
function Entry(start) {
    var body = new Body_1.default();
    var chain = new Chain_1.default(body);
    start(chain);
    body.children = chain.getChildren();
    body.generate();
}
exports.Entry = Entry;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function get(url, successCb, failureCb) {
    nonebodyXhr(url, 'get', successCb, failureCb);
}
exports.get = get;
function head(url, success, fail) {
    nonebodyXhr(url, 'head', success, fail);
}
exports.head = head;
function options(url, success, fail) {
    nonebodyXhr(url, 'options', success, fail);
}
exports.options = options;
function del(url, success, fail) {
    nonebodyXhr(url, 'delete', success, fail);
}
exports.del = del;
function post(url, data, successCb, failureCb) {
    bodyXhr(url, 'post', data, successCb, failureCb);
}
exports.post = post;
function put(url, data, success, fail) {
    bodyXhr(url, 'put', data, success, fail);
}
exports.put = put;
function baseXhr(url, method, onfinish, success, fail) {
    try {
        var xhr = new XMLHttpRequest();
        xhr.open(method, url, true);
        xhr.onload = function () {
            var statusText = xhr.statusText;
            // From Angular source:
            // responseText is the old-school way of retrieving response (supported by IE9)
            // response/responseType properties were introduced in XHR Level2 spec (supported by IE10)
            var response = ('response' in xhr) ? xhr.response : xhr.responseText;
            // normalize IE9 bug (http://bugs.jquery.com/ticket/1450)
            var status = xhr.status === 1223 ? 204 : xhr.status;
            try {
                // Check status code and parse JSON if request succeeded
                if (status >= 200 && status < 300) {
                    if (success) {
                        success(JSON.parse(response));
                    }
                }
                else {
                    // Return an error if status code is not in successful range
                    if (fail) {
                        fail(new Error("Server responded with status code " + status + ": " + statusText));
                    }
                }
            }
            catch (e) {
                if (fail) {
                    fail(new Error('Error parsing response JSON'));
                }
            }
        };
        xhr.onerror = xhr.onabort = xhr.ontimeout = function () {
            if (fail) {
                fail(new Error('Error processing AJAX request'));
            }
        };
        onfinish(xhr);
    }
    catch (e) {
        if (fail) {
            fail(e);
        }
    }
}
exports.baseXhr = baseXhr;
function nonebodyXhr(url, method, success, fail) {
    baseXhr(url, method, function (xhr) {
        xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
        xhr.setRequestHeader('Access-Control-Allow-Methods', 'GET, POST, HEAD');
        xhr.setRequestHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        xhr.send();
    }, success, fail);
}
exports.nonebodyXhr = nonebodyXhr;
function bodyXhr(url, method, data, success, fail) {
    baseXhr(url, method, function (xhr) {
        xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
        xhr.setRequestHeader('Access-Control-Allow-Methods', 'GET, POST, HEAD');
        xhr.setRequestHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.send(JSON.stringify(data));
    }, success, fail);
}
exports.bodyXhr = bodyXhr;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Chain_1 = __webpack_require__(35);
var Body_1 = __webpack_require__(2);
var RouteUtils_1 = __webpack_require__(34);
function DefaultRoute(start) {
    RouteHandling.DefaultRoute(start);
}
exports.DefaultRoute = DefaultRoute;
function Route(name, start) {
    RouteHandling.Route(name, start);
}
exports.Route = Route;
var RouteHandling = (function () {
    function RouteHandling(Route, View) {
        this.Route = Route;
        this.View = View;
        this._paramsSet = false;
        this.View = View;
    }
    Object.defineProperty(RouteHandling.prototype, "Params", {
        get: function () {
            if (this._paramsSet) {
                return this._params;
            }
            return false;
        },
        set: function (val) {
            if (!val) {
                this._paramsSet = false;
            }
            this._paramsSet = true;
            this._params = val;
        },
        enumerable: true,
        configurable: true
    });
    RouteHandling.RouteExists = function (name) {
        name = name.replace('\\', '').replace('/', '');
        for (var i = 0; i < RouteHandling.All.length; i++) {
            var r = RouteHandling.All[i];
            if (r.Route.replace('\\', '').replace('/', '') === name) {
                return r;
            }
        }
        return undefined;
    };
    RouteHandling.DefaultRoute = function (start) {
        var route = new RouteHandling(null, start);
        RouteHandling.Def = route;
        window.onhashchange = function () { return RouteHandling.FigureRoute(); };
        if (!RouteHandling.RouteInPlace) {
            RouteHandling.FigureRoute();
        }
    };
    RouteHandling.Route = function (name, start) {
        var route = new RouteHandling(name, start);
        RouteHandling.All.push(route);
    };
    RouteHandling.FigureRoute = function (params) {
        if (!RouteHandling.Def) {
            throw new Error('Default Route is not defined.');
        }
        var uri = RouteUtils_1.default.RouteName();
        if (typeof uri === 'undefined') {
            if (params) {
                RouteHandling.Def.Params = params;
            }
            RouteHandling.Def.build();
            RouteHandling.RouteInPlace = true;
            return;
        }
        var route = RouteHandling.RouteExists(uri);
        if (route) {
            if (params) {
                route.Params = params;
            }
            route.build();
            RouteHandling.RouteInPlace = true;
            return;
        }
        if (!RouteHandling.RouteInPlace) {
            if (params) {
                RouteHandling.Def.Params = params;
            }
            RouteHandling.Def.build();
            RouteHandling.RouteInPlace = true;
        }
    };
    RouteHandling.prototype.reroute = function (name, parameters) {
        var route = name ? RouteHandling.RouteExists(name) : RouteHandling.Def;
        if (!route) {
            return false;
        }
        if (parameters) {
            route.Params = parameters;
        }
        route.build();
        RouteHandling.RouteInPlace = true;
        window.location.href += name;
        return true;
    };
    RouteHandling.prototype.build = function () {
        var body = new Body_1.default();
        var chain = new Chain_1.default(body);
        var params = RouteUtils_1.default.RouteParams();
        if (typeof params !== 'undefined') {
            this.Params = params;
        }
        this.View(body, body.style, chain, this);
        body.children = chain.getChildren();
        body.generate();
    };
    return RouteHandling;
}());
RouteHandling.RouteInPlace = false;
RouteHandling.All = [];
exports.RouteHandling = RouteHandling;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
var DomElementParent_1 = __webpack_require__(0);
var Article = (function (_super) {
    __extends(Article, _super);
    function Article() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Article.prototype.generate = function () {
        var element = document.createElement("article");
        if (this.id) {
            element.id = this.id;
        }
        var styleString = this.style.generateCSS();
        if (styleString) {
            element.setAttribute('style', styleString);
        }
        if (this.className) {
            element.className = this.className;
        }
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var child = _a[_i];
            element.appendChild(child.generate());
        }
        return element;
    };
    return Article;
}(DomElementParent_1.DomElementParent));
exports.default = Article;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
var DomElementParent_1 = __webpack_require__(0);
var Aside = (function (_super) {
    __extends(Aside, _super);
    function Aside() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Aside.prototype.generate = function () {
        var element = document.createElement("aside");
        if (this.id) {
            element.id = this.id;
        }
        var styleString = this.style.generateCSS();
        if (styleString) {
            element.setAttribute('style', styleString);
        }
        if (this.className) {
            element.className = this.className;
        }
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var child = _a[_i];
            element.appendChild(child.generate());
        }
        return element;
    };
    return Aside;
}(DomElementParent_1.DomElementParent));
exports.default = Aside;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
var DomElementParent_1 = __webpack_require__(0);
var Audio = (function (_super) {
    __extends(Audio, _super);
    function Audio() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Audio.prototype.generate = function () {
        var element = document.createElement("audio");
        if (this.id) {
            element.id = this.id;
        }
        var styleString = this.style.generateCSS();
        if (styleString) {
            element.setAttribute('style', styleString);
        }
        if (this.className) {
            element.className = this.className;
        }
        if (this.autoplay) {
            element.autoplay = this.autoplay;
        }
        if (this.controls) {
            element.controls = this.controls;
        }
        if (this.loop) {
            element.loop = this.loop;
        }
        if (this.muted) {
            element.muted = this.muted;
        }
        if (this.preload) {
            element.preload = this.preload;
        }
        if (this.src) {
            element.src = this.src;
        }
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var child = _a[_i];
            element.appendChild(child.generate());
        }
        return element;
    };
    return Audio;
}(DomElementParent_1.DomElementParent));
exports.default = Audio;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
var DomElementParent_1 = __webpack_require__(0);
var Canvas = (function (_super) {
    __extends(Canvas, _super);
    function Canvas() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Canvas.prototype.generate = function () {
        var element = document.createElement("canvas");
        if (this.id) {
            element.id = this.id;
        }
        var styleString = this.style.generateCSS();
        if (styleString) {
            element.setAttribute('style', styleString);
        }
        if (this.className) {
            element.className = this.className;
        }
        if (this.height) {
            element.height = this.height;
        }
        if (this.width) {
            element.width = this.width;
        }
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var child = _a[_i];
            element.appendChild(child.generate());
        }
        return element;
    };
    return Canvas;
}(DomElementParent_1.DomElementParent));
exports.default = Canvas;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
var DomElementParent_1 = __webpack_require__(0);
var Details = (function (_super) {
    __extends(Details, _super);
    function Details() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Details.prototype.generate = function () {
        var element = document.createElement("details");
        if (this.id) {
            element.id = this.id;
        }
        var styleString = this.style.generateCSS();
        if (styleString) {
            element.setAttribute('style', styleString);
        }
        if (this.className) {
            element.className = this.className;
        }
        if (this.open) {
            element.setAttribute('open', this.open);
        }
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var child = _a[_i];
            element.appendChild(child.generate());
        }
        return element;
    };
    return Details;
}(DomElementParent_1.DomElementParent));
exports.default = Details;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
var DomElementParent_1 = __webpack_require__(0);
var Dialog = (function (_super) {
    __extends(Dialog, _super);
    function Dialog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dialog.prototype.generate = function () {
        var element = document.createElement("dialog");
        if (this.id) {
            element.id = this.id;
        }
        var styleString = this.style.generateCSS();
        if (styleString) {
            element.setAttribute('style', styleString);
        }
        if (this.className) {
            element.className = this.className;
        }
        if (this.open) {
            element.setAttribute('open', this.open);
        }
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var child = _a[_i];
            element.appendChild(child.generate());
        }
        return element;
    };
    return Dialog;
}(DomElementParent_1.DomElementParent));
exports.default = Dialog;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
var DomElementParent_1 = __webpack_require__(0);
var Embed = (function (_super) {
    __extends(Embed, _super);
    function Embed() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Embed.prototype.generate = function () {
        var element = document.createElement("embed");
        if (this.id) {
            element.id = this.id;
        }
        var styleString = this.style.generateCSS();
        if (styleString) {
            element.setAttribute('style', styleString);
        }
        if (this.className) {
            element.className = this.className;
        }
        if (this.height) {
            element.height = this.height;
        }
        if (this.src) {
            element.src = this.src;
        }
        if (this.type) {
            element.setAttribute('type', this.type);
        }
        if (this.width) {
            element.width = this.width;
        }
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var child = _a[_i];
            element.appendChild(child.generate());
        }
        return element;
    };
    return Embed;
}(DomElementParent_1.DomElementParent));
exports.default = Embed;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
var DomElementParent_1 = __webpack_require__(0);
var Figcaption = (function (_super) {
    __extends(Figcaption, _super);
    function Figcaption() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Figcaption.prototype.generate = function () {
        var element = document.createElement("figcaption");
        if (this.id) {
            element.id = this.id;
        }
        var styleString = this.style.generateCSS();
        if (styleString) {
            element.setAttribute('style', styleString);
        }
        if (this.className) {
            element.className = this.className;
        }
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var child = _a[_i];
            element.appendChild(child.generate());
        }
        return element;
    };
    return Figcaption;
}(DomElementParent_1.DomElementParent));
exports.default = Figcaption;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
var DomElementParent_1 = __webpack_require__(0);
var Figure = (function (_super) {
    __extends(Figure, _super);
    function Figure() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Figure.prototype.generate = function () {
        var element = document.createElement("figure");
        if (this.id) {
            element.id = this.id;
        }
        var styleString = this.style.generateCSS();
        if (styleString) {
            element.setAttribute('style', styleString);
        }
        if (this.className) {
            element.className = this.className;
        }
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var child = _a[_i];
            element.appendChild(child.generate());
        }
        return element;
    };
    return Figure;
}(DomElementParent_1.DomElementParent));
exports.default = Figure;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
var DomElementParent_1 = __webpack_require__(0);
var Footer = (function (_super) {
    __extends(Footer, _super);
    function Footer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Footer.prototype.generate = function () {
        var element = document.createElement("footer");
        if (this.id) {
            element.id = this.id;
        }
        var styleString = this.style.generateCSS();
        if (styleString) {
            element.setAttribute('style', styleString);
        }
        if (this.className) {
            element.className = this.className;
        }
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var child = _a[_i];
            element.appendChild(child.generate());
        }
        return element;
    };
    return Footer;
}(DomElementParent_1.DomElementParent));
exports.default = Footer;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
var DomElementParent_1 = __webpack_require__(0);
var H1 = (function (_super) {
    __extends(H1, _super);
    function H1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    H1.prototype.generate = function () {
        var element = document.createElement("h1");
        if (this.id) {
            element.id = this.id;
        }
        var styleString = this.style.generateCSS();
        if (styleString) {
            element.setAttribute('style', styleString);
        }
        if (this.className) {
            element.className = this.className;
        }
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var child = _a[_i];
            element.appendChild(child.generate());
        }
        return element;
    };
    return H1;
}(DomElementParent_1.DomElementParent));
exports.default = H1;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
var DomElementParent_1 = __webpack_require__(0);
var H2 = (function (_super) {
    __extends(H2, _super);
    function H2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    H2.prototype.generate = function () {
        var element = document.createElement("h2");
        if (this.id) {
            element.id = this.id;
        }
        var styleString = this.style.generateCSS();
        if (styleString) {
            element.setAttribute('style', styleString);
        }
        if (this.className) {
            element.className = this.className;
        }
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var child = _a[_i];
            element.appendChild(child.generate());
        }
        return element;
    };
    return H2;
}(DomElementParent_1.DomElementParent));
exports.default = H2;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
var DomElementParent_1 = __webpack_require__(0);
var H3 = (function (_super) {
    __extends(H3, _super);
    function H3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    H3.prototype.generate = function () {
        var element = document.createElement("h3");
        if (this.id) {
            element.id = this.id;
        }
        var styleString = this.style.generateCSS();
        if (styleString) {
            element.setAttribute('style', styleString);
        }
        if (this.className) {
            element.className = this.className;
        }
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var child = _a[_i];
            element.appendChild(child.generate());
        }
        return element;
    };
    return H3;
}(DomElementParent_1.DomElementParent));
exports.default = H3;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
var DomElementParent_1 = __webpack_require__(0);
var H4 = (function (_super) {
    __extends(H4, _super);
    function H4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    H4.prototype.generate = function () {
        var element = document.createElement("h4");
        if (this.id) {
            element.id = this.id;
        }
        var styleString = this.style.generateCSS();
        if (styleString) {
            element.setAttribute('style', styleString);
        }
        if (this.className) {
            element.className = this.className;
        }
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var child = _a[_i];
            element.appendChild(child.generate());
        }
        return element;
    };
    return H4;
}(DomElementParent_1.DomElementParent));
exports.default = H4;


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
var DomElementParent_1 = __webpack_require__(0);
var H5 = (function (_super) {
    __extends(H5, _super);
    function H5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    H5.prototype.generate = function () {
        var element = document.createElement("h5");
        if (this.id) {
            element.id = this.id;
        }
        var styleString = this.style.generateCSS();
        if (styleString) {
            element.setAttribute('style', styleString);
        }
        if (this.className) {
            element.className = this.className;
        }
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var child = _a[_i];
            element.appendChild(child.generate());
        }
        return element;
    };
    return H5;
}(DomElementParent_1.DomElementParent));
exports.default = H5;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
var DomElementParent_1 = __webpack_require__(0);
var H6 = (function (_super) {
    __extends(H6, _super);
    function H6() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    H6.prototype.generate = function () {
        var element = document.createElement("h6");
        if (this.id) {
            element.id = this.id;
        }
        var styleString = this.style.generateCSS();
        if (styleString) {
            element.setAttribute('style', styleString);
        }
        if (this.className) {
            element.className = this.className;
        }
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var child = _a[_i];
            element.appendChild(child.generate());
        }
        return element;
    };
    return H6;
}(DomElementParent_1.DomElementParent));
exports.default = H6;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
var DomElementParent_1 = __webpack_require__(0);
var Header = (function (_super) {
    __extends(Header, _super);
    function Header() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Header.prototype.generate = function () {
        var element = document.createElement("header");
        if (this.id) {
            element.id = this.id;
        }
        var styleString = this.style.generateCSS();
        if (styleString) {
            element.setAttribute('style', styleString);
        }
        if (this.className) {
            element.className = this.className;
        }
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var child = _a[_i];
            element.appendChild(child.generate());
        }
        return element;
    };
    return Header;
}(DomElementParent_1.DomElementParent));
exports.default = Header;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
var DomElementParent_1 = __webpack_require__(0);
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Main.prototype.generate = function () {
        var element = document.createElement("main");
        if (this.id) {
            element.id = this.id;
        }
        var styleString = this.style.generateCSS();
        if (styleString) {
            element.setAttribute('style', styleString);
        }
        if (this.className) {
            element.className = this.className;
        }
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var child = _a[_i];
            element.appendChild(child.generate());
        }
        return element;
    };
    return Main;
}(DomElementParent_1.DomElementParent));
exports.default = Main;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
var DomElementParent_1 = __webpack_require__(0);
var Mark = (function (_super) {
    __extends(Mark, _super);
    function Mark() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Mark.prototype.generate = function () {
        var element = document.createElement("mark");
        if (this.id) {
            element.id = this.id;
        }
        var styleString = this.style.generateCSS();
        if (styleString) {
            element.setAttribute('style', styleString);
        }
        if (this.className) {
            element.className = this.className;
        }
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var child = _a[_i];
            element.appendChild(child.generate());
        }
        return element;
    };
    return Mark;
}(DomElementParent_1.DomElementParent));
exports.default = Mark;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
var DomElementParent_1 = __webpack_require__(0);
var Nav = (function (_super) {
    __extends(Nav, _super);
    function Nav() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Nav.prototype.generate = function () {
        var element = document.createElement("nav");
        if (this.id) {
            element.id = this.id;
        }
        var styleString = this.style.generateCSS();
        if (styleString) {
            element.setAttribute('style', styleString);
        }
        if (this.className) {
            element.className = this.className;
        }
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var child = _a[_i];
            element.appendChild(child.generate());
        }
        return element;
    };
    return Nav;
}(DomElementParent_1.DomElementParent));
exports.default = Nav;


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
var DomElementParent_1 = __webpack_require__(0);
var Picture = (function (_super) {
    __extends(Picture, _super);
    function Picture() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Picture.prototype.generate = function () {
        var element = document.createElement("picture");
        if (this.id) {
            element.id = this.id;
        }
        var styleString = this.style.generateCSS();
        if (styleString) {
            element.setAttribute('style', styleString);
        }
        if (this.className) {
            element.className = this.className;
        }
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var child = _a[_i];
            element.appendChild(child.generate());
        }
        return element;
    };
    return Picture;
}(DomElementParent_1.DomElementParent));
exports.default = Picture;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
var DomElementParent_1 = __webpack_require__(0);
var Section = (function (_super) {
    __extends(Section, _super);
    function Section() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Section.prototype.generate = function () {
        var element = document.createElement("section");
        if (this.id) {
            element.id = this.id;
        }
        var styleString = this.style.generateCSS();
        if (styleString) {
            element.setAttribute('style', styleString);
        }
        if (this.className) {
            element.className = this.className;
        }
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var child = _a[_i];
            element.appendChild(child.generate());
        }
        return element;
    };
    return Section;
}(DomElementParent_1.DomElementParent));
exports.default = Section;


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
var DomElementParent_1 = __webpack_require__(0);
var Source = (function (_super) {
    __extends(Source, _super);
    function Source() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Source.prototype.generate = function () {
        var element = document.createElement("source");
        if (this.id) {
            element.id = this.id;
        }
        var styleString = this.style.generateCSS();
        if (styleString) {
            element.setAttribute('style', styleString);
        }
        if (this.className) {
            element.className = this.className;
        }
        if (this.src) {
            element.src = this.src;
        }
        if (this.srcSet) {
            element.srcset = this.srcSet;
        }
        if (this.media) {
            element.media = this.media;
        }
        if (this.sizes) {
            element.sizes = this.sizes;
        }
        if (this.type) {
            element.type = this.type;
        }
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var child = _a[_i];
            element.appendChild(child.generate());
        }
        return element;
    };
    return Source;
}(DomElementParent_1.DomElementParent));
exports.default = Source;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
var DomElementParent_1 = __webpack_require__(0);
var Summary = (function (_super) {
    __extends(Summary, _super);
    function Summary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Summary.prototype.generate = function () {
        var element = document.createElement("summary");
        if (this.id) {
            element.id = this.id;
        }
        var styleString = this.style.generateCSS();
        if (styleString) {
            element.setAttribute('style', styleString);
        }
        if (this.className) {
            element.className = this.className;
        }
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var child = _a[_i];
            element.appendChild(child.generate());
        }
        return element;
    };
    return Summary;
}(DomElementParent_1.DomElementParent));
exports.default = Summary;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
var DomElementParent_1 = __webpack_require__(0);
var Tbody = (function (_super) {
    __extends(Tbody, _super);
    function Tbody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tbody.prototype.generate = function () {
        var element = document.createElement("tbody");
        if (this.id) {
            element.id = this.id;
        }
        var styleString = this.style.generateCSS();
        if (styleString) {
            element.setAttribute('style', styleString);
        }
        if (this.className) {
            element.className = this.className;
        }
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var child = _a[_i];
            element.appendChild(child.generate());
        }
        return element;
    };
    return Tbody;
}(DomElementParent_1.DomElementParent));
exports.default = Tbody;


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
var DomElementParent_1 = __webpack_require__(0);
var Td = (function (_super) {
    __extends(Td, _super);
    function Td() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Td.prototype.generate = function () {
        var element = document.createElement("td");
        if (this.id) {
            element.id = this.id;
        }
        var styleString = this.style.generateCSS();
        if (styleString) {
            element.setAttribute('style', styleString);
        }
        if (this.className) {
            element.className = this.className;
        }
        if (this.colspan) {
            element.colSpan = this.colspan;
        }
        if (this.headers) {
            element.headers = this.headers;
        }
        if (this.rowspan) {
            element.rowSpan = this.rowspan;
        }
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var child = _a[_i];
            element.appendChild(child.generate());
        }
        return element;
    };
    return Td;
}(DomElementParent_1.DomElementParent));
exports.default = Td;


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
var DomElementParent_1 = __webpack_require__(0);
var Th = (function (_super) {
    __extends(Th, _super);
    function Th() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Th.prototype.generate = function () {
        var element = document.createElement("th");
        if (this.id) {
            element.id = this.id;
        }
        var styleString = this.style.generateCSS();
        if (styleString) {
            element.setAttribute('style', styleString);
        }
        if (this.className) {
            element.className = this.className;
        }
        if (this.abbr) {
            element.abbr = this.abbr;
        }
        if (this.colspan) {
            element.colSpan = this.colspan;
        }
        if (this.headers) {
            element.headers = this.headers;
        }
        if (this.rowspan) {
            element.rowSpan = this.rowspan;
        }
        if (this.scope) {
            element.scope = this.scope;
        }
        if (this.sorted) {
            element.setAttribute("sorted", this.sorted);
        }
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var child = _a[_i];
            element.appendChild(child.generate());
        }
        return element;
    };
    return Th;
}(DomElementParent_1.DomElementParent));
exports.default = Th;


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
var DomElementParent_1 = __webpack_require__(0);
var Thead = (function (_super) {
    __extends(Thead, _super);
    function Thead() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Thead.prototype.generate = function () {
        var element = document.createElement("thead");
        if (this.id) {
            element.id = this.id;
        }
        var styleString = this.style.generateCSS();
        if (styleString) {
            element.setAttribute('style', styleString);
        }
        if (this.className) {
            element.className = this.className;
        }
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var child = _a[_i];
            element.appendChild(child.generate());
        }
        return element;
    };
    return Thead;
}(DomElementParent_1.DomElementParent));
exports.default = Thead;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
var DomElementParent_1 = __webpack_require__(0);
var Time = (function (_super) {
    __extends(Time, _super);
    function Time() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Time.prototype.generate = function () {
        var element = document.createElement("time");
        if (this.id) {
            element.id = this.id;
        }
        var styleString = this.style.generateCSS();
        if (styleString) {
            element.setAttribute('style', styleString);
        }
        if (this.className) {
            element.className = this.className;
        }
        if (this.datetime) {
            element.dateTime = this.datetime;
        }
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var child = _a[_i];
            element.appendChild(child.generate());
        }
        return element;
    };
    return Time;
}(DomElementParent_1.DomElementParent));
exports.default = Time;


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
var DomElementParent_1 = __webpack_require__(0);
var Tr = (function (_super) {
    __extends(Tr, _super);
    function Tr() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tr.prototype.generate = function () {
        var element = document.createElement("tr");
        if (this.id) {
            element.id = this.id;
        }
        var styleString = this.style.generateCSS();
        if (styleString) {
            element.setAttribute('style', styleString);
        }
        if (this.className) {
            element.className = this.className;
        }
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var child = _a[_i];
            element.appendChild(child.generate());
        }
        return element;
    };
    return Tr;
}(DomElementParent_1.DomElementParent));
exports.default = Tr;


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
var DomElementParent_1 = __webpack_require__(0);
var Ul = (function (_super) {
    __extends(Ul, _super);
    function Ul() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Ul.prototype.generate = function () {
        var element = document.createElement("ul");
        if (this.id) {
            element.id = this.id;
        }
        var styleString = this.style.generateCSS();
        if (styleString) {
            element.setAttribute('style', styleString);
        }
        if (this.className) {
            element.className = this.className;
        }
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var child = _a[_i];
            element.appendChild(child.generate());
        }
        return element;
    };
    return Ul;
}(DomElementParent_1.DomElementParent));
exports.default = Ul;


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
var DomElementParent_1 = __webpack_require__(0);
var Video = (function (_super) {
    __extends(Video, _super);
    function Video() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Video.prototype.generate = function () {
        var element = document.createElement("video");
        if (this.id) {
            element.id = this.id;
        }
        var styleString = this.style.generateCSS();
        if (styleString) {
            element.setAttribute('style', styleString);
        }
        if (this.className) {
            element.className = this.className;
        }
        if (this.autoplay) {
            element.autoplay = this.autoplay;
        }
        if (this.controls) {
            element.controls = this.controls;
        }
        if (this.height) {
            element.height = this.height;
        }
        if (this.loop) {
            element.loop = this.loop;
        }
        if (this.muted) {
            element.muted = this.muted;
        }
        if (this.poster) {
            element.poster = this.poster;
        }
        if (this.preload) {
            element.preload = this.preload;
        }
        if (this.src) {
            element.src = this.src;
        }
        if (this.width) {
            element.width = this.width;
        }
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var child = _a[_i];
            element.appendChild(child.generate());
        }
        return element;
    };
    return Video;
}(DomElementParent_1.DomElementParent));
exports.default = Video;


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Styles = (function () {
    function Styles() {
    }
    Styles.prototype.generateCSS = function () {
        var styling;
        styling = '';
        if (this.color) {
            styling += 'color:' + this.color + ';';
        }
        if (this.opacity) {
            styling += 'opacity:' + this.opacity + ';';
        }
        if (this.background) {
            styling += 'background:' + this.background + ';';
        }
        if (this.backgroundAttachment) {
            styling += 'background-attachment:' + this.backgroundAttachment + ';';
        }
        if (this.backgroundBlendMode) {
            styling += 'background-blend-mode:' + this.backgroundBlendMode + ';';
        }
        if (this.backgroundColor) {
            styling += 'background-color:' + this.backgroundColor + ';';
        }
        if (this.backgroundImage) {
            styling += 'background-image:' + this.backgroundImage + ';';
        }
        if (this.backgroundPosition) {
            styling += 'background-position :' + this.backgroundPosition + ';';
        }
        if (this.backgroundRepeat) {
            styling += 'background-repeat :' + this.backgroundRepeat + ';';
        }
        if (this.backgroundClip) {
            styling += 'background-clip :' + this.backgroundClip + ';';
        }
        if (this.backgroundOrigin) {
            styling += 'background-origin :' + this.backgroundOrigin + ';';
        }
        if (this.backgroundSize) {
            styling += 'background-size :' + this.backgroundSize + ';';
        }
        if (this.border) {
            styling += 'border:' + this.border + ';';
        }
        if (this.borderBottom) {
            styling += 'border-bottom:' + this.borderBottom + ';';
        }
        if (this.borderBottomColor) {
            styling += 'border-bottom-color:' + this.borderBottomColor + ';';
        }
        if (this.borderBottomLeftRadius) {
            styling += 'border-bottom-left-radius:' + this.borderBottomLeftRadius + ';';
        }
        if (this.borderBottomRightRadius) {
            styling += 'border-bottom-right-radius:' + this.borderBottomRightRadius + ';';
        }
        if (this.borderBottomStyle) {
            styling += 'border-bottom-style:' + this.borderBottomStyle + ';';
        }
        if (this.borderBottomWidth) {
            styling += 'border-bottom-width:' + this.borderBottomWidth + ';';
        }
        if (this.borderColor) {
            styling += 'border-color:' + this.borderColor + ';';
        }
        if (this.borderImage) {
            styling += 'border-image:' + this.borderImage + ';';
        }
        if (this.borderImageOutset) {
            styling += 'border-image-outset:' + this.borderImageOutset + ';';
        }
        if (this.borderImageRepeat) {
            styling += 'border-image-repeat:' + this.borderImageRepeat + ';';
        }
        if (this.borderImageSlice) {
            styling += 'border-image-slice:' + this.borderImageSlice + ';';
        }
        if (this.borderImageSource) {
            styling += 'border-image-source:' + this.borderImageSource + ';';
        }
        if (this.borderImageWidth) {
            styling += 'border-image-width:' + this.borderImageWidth + ';';
        }
        if (this.borderLeft) {
            styling += 'border-left:' + this.borderLeft + ';';
        }
        if (this.borderLeftColor) {
            styling += 'border-left-color:' + this.borderLeftColor + ';';
        }
        if (this.borderLeftStyle) {
            styling += 'border-left-style:' + this.borderLeftStyle + ';';
        }
        if (this.borderLeftWidth) {
            styling += 'border-left-width:' + this.borderLeftWidth + ';';
        }
        if (this.borderRadius) {
            styling += 'border-radius:' + this.borderRadius + ';';
        }
        if (this.borderRight) {
            styling += 'border-right:' + this.borderRight + ';';
        }
        if (this.borderRightColor) {
            styling += 'border-right-color:' + this.borderRightColor + ';';
        }
        if (this.borderRightStyle) {
            styling += 'border-right-style:' + this.borderRightStyle + ';';
        }
        if (this.borderRightWidth) {
            styling += 'border-right-width:' + this.borderRightWidth + ';';
        }
        if (this.borderStyle) {
            styling += 'border-style:' + this.borderStyle + ';';
        }
        if (this.borderTop) {
            styling += 'border-top:' + this.borderTop + ';';
        }
        if (this.borderTopColor) {
            styling += 'border-top-color:' + this.borderTopColor + ';';
        }
        if (this.borderTopLeftRadius) {
            styling += 'border-top-left-radius:' + this.borderTopLeftRadius + ';';
        }
        if (this.borderTopRightRadius) {
            styling += 'border-top-right-radius:' + this.borderTopRightRadius + ';';
        }
        if (this.borderTopStyle) {
            styling += 'border-top-style:' + this.borderTopStyle + ';';
        }
        if (this.borderTopWidth) {
            styling += 'border-top-width:' + this.borderTopWidth + ';';
        }
        if (this.borderWidth) {
            styling += 'border-width:' + this.borderWidth + ';';
        }
        if (this.boxDecorationBreak) {
            styling += 'box-decoration-break:' + this.boxDecorationBreak + ';';
        }
        if (this.boxShadow) {
            styling += 'box-shadow:' + this.boxShadow + ';';
        }
        if (this.bottom) {
            styling += 'bottom:' + this.bottom + ';';
        }
        if (this.clear) {
            styling += 'clear:' + this.clear + ';';
        }
        if (this.clip) {
            styling += 'clip:' + this.clip + ';';
        }
        if (this.display) {
            styling += 'display:' + this.display + ';';
        }
        if (this.float) {
            styling += 'float:' + this.float + ';';
        }
        if (this.height) {
            styling += 'height:' + this.height + ';';
        }
        if (this.left) {
            styling += 'left:' + this.left + ';';
        }
        if (this.margin) {
            styling += 'margin:' + this.margin + ';';
        }
        if (this.marginBottom) {
            styling += 'margin-bottom:' + this.marginBottom + ';';
        }
        if (this.marginLeft) {
            styling += 'margin-left:' + this.marginLeft + ';';
        }
        if (this.marginRight) {
            styling += 'margin-right:' + this.marginRight + ';';
        }
        if (this.marginTop) {
            styling += 'margin-top:' + this.marginTop + ';';
        }
        if (this.maxHeight) {
            styling += 'max-height:' + this.maxHeight + ';';
        }
        if (this.maxWidth) {
            styling += 'max-width:' + this.maxWidth + ';';
        }
        if (this.minHeight) {
            styling += 'min-height:' + this.minHeight + ';';
        }
        if (this.minWidth) {
            styling += 'min-width:' + this.minWidth + ';';
        }
        if (this.overflow) {
            styling += 'overflow:' + this.overflow + ';';
        }
        if (this.overflowX) {
            styling += 'overflow-x:' + this.overflowX + ';';
        }
        if (this.overflowY) {
            styling += 'overflow-y:' + this.overflowY + ';';
        }
        if (this.padding) {
            styling += 'padding:' + this.padding + ';';
        }
        if (this.paddingBottom) {
            styling += 'padding-bottom:' + this.paddingBottom + ';';
        }
        if (this.paddingLeft) {
            styling += 'padding-left:' + this.paddingLeft + ';';
        }
        if (this.paddingRight) {
            styling += 'padding-right:' + this.paddingRight + ';';
        }
        if (this.paddingTop) {
            styling += 'padding-top:' + this.paddingTop + ';';
        }
        if (this.position) {
            styling += 'position:' + this.position + ';';
        }
        if (this.right) {
            styling += 'right:' + this.right + ';';
        }
        if (this.top) {
            styling += 'top:' + this.top + ';';
        }
        if (this.visibility) {
            styling += 'visibility:' + this.visibility + ';';
        }
        if (this.width) {
            styling += 'width:' + this.width + ';';
        }
        if (this.verticalAlign) {
            styling += 'vertical-align:' + this.verticalAlign + ';';
        }
        if (this.zIndex) {
            styling += 'z-index:' + this.zIndex + ';';
        }
        if (this.alignContent) {
            styling += 'align-content:' + this.alignContent + ';';
        }
        if (this.alignItems) {
            styling += 'align-items:' + this.alignItems + ';';
        }
        if (this.alignSelf) {
            styling += 'align-self:' + this.alignSelf + ';';
        }
        if (this.flex) {
            styling += 'flex:' + this.flex + ';';
        }
        if (this.flexBasis) {
            styling += 'flex-basis:' + this.flexBasis + ';';
        }
        if (this.flexDirection) {
            styling += 'flex-direction:' + this.flexDirection + ';';
        }
        if (this.flexFlow) {
            styling += 'flex-flow:' + this.flexFlow + ';';
        }
        if (this.flexGrow) {
            styling += 'flex-grow:' + this.flexGrow + ';';
        }
        if (this.flexShrink) {
            styling += 'flex-shrink:' + this.flexShrink + ';';
        }
        if (this.flexWrap) {
            styling += 'flex-wrap:' + this.flexWrap + ';';
        }
        if (this.justifyContent) {
            styling += 'justify-content:' + this.justifyContent + ';';
        }
        if (this.order) {
            styling += 'order:' + this.order + ';';
        }
        if (this.hangingPunctuation) {
            styling += 'hanging-punctuation:' + this.hangingPunctuation + ';';
        }
        if (this.hyphens) {
            styling += 'hyphens:' + this.hyphens + ';';
        }
        if (this.letterSpacing) {
            styling += 'letter-spacing:' + this.letterSpacing + ';';
        }
        if (this.lineBreak) {
            styling += 'line-break:' + this.lineBreak + ';';
        }
        if (this.lineHeight) {
            styling += 'line-height:' + this.lineHeight + ';';
        }
        if (this.overflowWrap) {
            styling += 'overflow-wrap:' + this.overflowWrap + ';';
        }
        if (this.tabSize) {
            styling += 'tab-size:' + this.tabSize + ';';
        }
        if (this.textAlign) {
            styling += 'text-align:' + this.textAlign + ';';
        }
        if (this.textAlignLast) {
            styling += 'text-align-last:' + this.textAlignLast + ';';
        }
        if (this.textCombineUpright) {
            styling += 'text-combine-upright:' + this.textCombineUpright + ';';
        }
        if (this.textIndent) {
            styling += 'text-indent:' + this.textIndent + ';';
        }
        if (this.textJustify) {
            styling += 'text-justify:' + this.textJustify + ';';
        }
        if (this.textTransform) {
            styling += 'text-transform:' + this.textTransform + ';';
        }
        if (this.whiteSpace) {
            styling += 'white-space:' + this.whiteSpace + ';';
        }
        if (this.wordBreak) {
            styling += 'word-break:' + this.wordBreak + ';';
        }
        if (this.wordSpacing) {
            styling += 'word-spacing:' + this.wordSpacing + ';';
        }
        if (this.wordWrap) {
            styling += 'word-wrap:' + this.wordWrap + ';';
        }
        if (this.textDecoration) {
            styling += 'text-decoration:' + this.textDecoration + ';';
        }
        if (this.textDecorationColor) {
            styling += 'text-decoration-color:' + this.textDecorationColor + ';';
        }
        if (this.textDecorationLine) {
            styling += 'text-decoration-line:' + this.textDecorationLine + ';';
        }
        if (this.textDecorationStyle) {
            styling += 'text-decoration-style:' + this.textDecorationStyle + ';';
        }
        if (this.textShadow) {
            styling += 'text-shadow:' + this.textShadow + ';';
        }
        if (this.textUnderlinePosition) {
            styling += 'text-underline-position:' + this.textUnderlinePosition + ';';
        }
        if (this.fontFace) {
            styling += 'font-face:' + this.fontFace + ';';
        }
        if (this.fontFeatureValues) {
            styling += 'font-feature-values:' + this.fontFeatureValues + ';';
        }
        if (this.font) {
            styling += 'font:' + this.font + ';';
        }
        if (this.fontFamily) {
            styling += 'font-family:' + this.fontFamily + ';';
        }
        if (this.fontFeatureSettings) {
            styling += 'font-feature-settings:' + this.fontFeatureSettings + ';';
        }
        if (this.fontKerning) {
            styling += 'font-kerning:' + this.fontKerning + ';';
        }
        if (this.fontLanguageOverride) {
            styling += 'font-language-override:' + this.fontLanguageOverride + ';';
        }
        if (this.fontSize) {
            styling += 'font-size:' + this.fontSize + ';';
        }
        if (this.fontSizeAdjust) {
            styling += 'font-size-adjust:' + this.fontSizeAdjust + ';';
        }
        if (this.fontStretch) {
            styling += 'font-stretch:' + this.fontStretch + ';';
        }
        if (this.fontStyle) {
            styling += 'font-style:' + this.fontStyle + ';';
        }
        if (this.fontSynthesis) {
            styling += 'font-synthesis:' + this.fontSynthesis + ';';
        }
        if (this.fontVariant) {
            styling += 'font-variant:' + this.fontVariant + ';';
        }
        if (this.fontVariantAlternates) {
            styling += 'font-variant-alternates:' + this.fontVariantAlternates + ';';
        }
        if (this.fontVariantCaps) {
            styling += 'font-variant-caps:' + this.fontVariantCaps + ';';
        }
        if (this.fontVariantEastAsian) {
            styling += 'font-variant-east-asian:' + this.fontVariantEastAsian + ';';
        }
        if (this.fontVariantLigatures) {
            styling += 'font-variant-ligatures:' + this.fontVariantLigatures + ';';
        }
        if (this.fontVariantNumeric) {
            styling += 'font-variant-numeric:' + this.fontVariantNumeric + ';';
        }
        if (this.fontVariantPosition) {
            styling += 'font-variant-position:' + this.fontVariantPosition + ';';
        }
        if (this.fontWeight) {
            styling += 'font-weight:' + this.fontWeight + ';';
        }
        if (this.direction) {
            styling += 'direction:' + this.direction + ';';
        }
        if (this.textOrientation) {
            styling += 'text-orientation:' + this.textOrientation + ';';
        }
        if (this.unicodeBidi) {
            styling += 'unicode-bidi:' + this.unicodeBidi + ';';
        }
        if (this.userSelect) {
            styling += 'user-select:' + this.userSelect + ';';
        }
        if (this.writingMode) {
            styling += 'writing-mode:' + this.writingMode + ';';
        }
        if (this.borderCollapse) {
            styling += 'border-collapse:' + this.borderCollapse + ';';
        }
        if (this.borderSpacing) {
            styling += 'border-spacing:' + this.borderSpacing + ';';
        }
        if (this.captionSide) {
            styling += 'caption-side:' + this.captionSide + ';';
        }
        if (this.emptyCells) {
            styling += 'empty-cells:' + this.emptyCells + ';';
        }
        if (this.tableLayout) {
            styling += 'table-layout:' + this.tableLayout + ';';
        }
        if (this.counterIncrement) {
            styling += 'counter-increment:' + this.counterIncrement + ';';
        }
        if (this.counterReset) {
            styling += 'counter-reset:' + this.counterReset + ';';
        }
        if (this.listStyle) {
            styling += 'list-style:' + this.listStyle + ';';
        }
        if (this.listStyleImage) {
            styling += 'list-style-image:' + this.listStyleImage + ';';
        }
        if (this.listStylePosition) {
            styling += 'list-style-position:' + this.listStylePosition + ';';
        }
        if (this.listStyleType) {
            styling += 'list-style-type:' + this.listStyleType + ';';
        }
        if (this.keyframes) {
            styling += 'keyframes:' + this.keyframes + ';';
        }
        if (this.animation) {
            styling += 'animation:' + this.animation + ';';
        }
        if (this.animationDelay) {
            styling += 'animation-delay:' + this.animationDelay + ';';
        }
        if (this.animationDirection) {
            styling += 'animation-direction:' + this.animationDirection + ';';
        }
        if (this.animationDuration) {
            styling += 'animation-duration:' + this.animationDuration + ';';
        }
        if (this.animationFillMode) {
            styling += 'animation-fill-mode:' + this.animationFillMode + ';';
        }
        if (this.animationIterationCount) {
            styling += 'animation-iteration-count:' + this.animationIterationCount + ';';
        }
        if (this.animationName) {
            styling += 'animation-name:' + this.animationName + ';';
        }
        if (this.animationPlayState) {
            styling += 'animation-play-state:' + this.animationPlayState + ';';
        }
        if (this.animationTimingFunction) {
            styling += 'animation-timing-function:' + this.animationTimingFunction + ';';
        }
        if (this.backfaceVisibility) {
            styling += 'backface-visibility:' + this.backfaceVisibility + ';';
        }
        if (this.perspective) {
            styling += 'perspective:' + this.perspective + ';';
        }
        if (this.perspectiveOrigin) {
            styling += 'perspective-origin:' + this.perspectiveOrigin + ';';
        }
        if (this.transform) {
            styling += 'transform:' + this.transform + ';';
        }
        if (this.transformOrigin) {
            styling += 'transform-origin:' + this.transformOrigin + ';';
        }
        if (this.transformStyle) {
            styling += 'transform-style:' + this.transformStyle + ';';
        }
        if (this.transition) {
            styling += 'transition:' + this.transition + ';';
        }
        if (this.transitionProperties) {
            styling += 'transition-properties:' + this.transitionProperties + ';';
        }
        if (this.transitionDuration) {
            styling += 'transition-duration:' + this.transitionDuration + ';';
        }
        if (this.transitionTimingFunction) {
            styling += 'transition-timing-function:' + this.transitionTimingFunction + ';';
        }
        if (this.transitionDelay) {
            styling += 'transition-delay:' + this.transitionDelay + ';';
        }
        if (this.boxSizing) {
            styling += 'box-sizing:' + this.boxSizing + ';';
        }
        if (this.content) {
            styling += 'content:' + this.content + ';';
        }
        if (this.cursor) {
            styling += 'cursor:' + this.cursor + ';';
        }
        if (this.imeMode) {
            styling += 'ime-mode:' + this.imeMode + ';';
        }
        if (this.navDown) {
            styling += 'nav-down:' + this.navDown + ';';
        }
        if (this.navIndex) {
            styling += 'nav-index:' + this.navIndex + ';';
        }
        if (this.navLeft) {
            styling += 'nav-left:' + this.navLeft + ';';
        }
        if (this.navRight) {
            styling += 'nav-right:' + this.navRight + ';';
        }
        if (this.navUp) {
            styling += 'nav-up:' + this.navUp + ';';
        }
        if (this.outline) {
            styling += 'outline:' + this.outline + ';';
        }
        if (this.outlineColor) {
            styling += 'outline-color:' + this.outlineColor + ';';
        }
        if (this.outlineOffset) {
            styling += 'outline-offset:' + this.outlineOffset + ';';
        }
        if (this.outlineStyle) {
            styling += 'outline-style:' + this.outlineStyle + ';';
        }
        if (this.outlineWidth) {
            styling += 'outline-width:' + this.outlineWidth + ';';
        }
        if (this.resize) {
            styling += 'resize:' + this.resize + ';';
        }
        if (this.textOverflow) {
            styling += 'text-overflow:' + this.textOverflow + ';';
        }
        if (this.breakAfter) {
            styling += 'break-after:' + this.breakAfter + ';';
        }
        if (this.breakBefore) {
            styling += 'break-before:' + this.breakBefore + ';';
        }
        if (this.breakInside) {
            styling += 'break-inside:' + this.breakInside + ';';
        }
        if (this.columnCount) {
            styling += 'column-count:' + this.columnCount + ';';
        }
        if (this.columnFill) {
            styling += 'column-fill:' + this.columnFill + ';';
        }
        if (this.columnGap) {
            styling += 'column-gap:' + this.columnGap + ';';
        }
        if (this.columnRule) {
            styling += 'column-rule:' + this.columnRule + ';';
        }
        if (this.columnRuleColor) {
            styling += 'column-rule-color:' + this.columnRuleColor + ';';
        }
        if (this.columnRuleStyle) {
            styling += 'column-rule-style:' + this.columnRuleStyle + ';';
        }
        if (this.columnRuleWidth) {
            styling += 'column-rule-width:' + this.columnRuleWidth + ';';
        }
        if (this.columnSpan) {
            styling += 'column-span:' + this.columnSpan + ';';
        }
        if (this.columnWidth) {
            styling += 'column-width:' + this.columnWidth + ';';
        }
        if (this.columns) {
            styling += 'columns:' + this.columns + ';';
        }
        if (this.widows) {
            styling += 'widows:' + this.widows + ';';
        }
        if (this.orphans) {
            styling += 'orphans:' + this.orphans + ';';
        }
        if (this.pageBreakAfter) {
            styling += 'page-break-after:' + this.pageBreakAfter + ';';
        }
        if (this.pageBreakBefore) {
            styling += 'page-break-before:' + this.pageBreakBefore + ';';
        }
        if (this.pageBreakInside) {
            styling += 'page-break-inside:' + this.pageBreakInside + ';';
        }
        if (this.marks) {
            styling += 'marks:' + this.marks + ';';
        }
        if (this.quotes) {
            styling += 'quotes:' + this.quotes + ';';
        }
        if (this.filter) {
            styling += 'filter:' + this.filter + ';';
        }
        if (this.imageOrientation) {
            styling += 'image-orientation:' + this.imageOrientation + ';';
        }
        if (this.imageRendering) {
            styling += 'image-rendering:' + this.imageRendering + ';';
        }
        if (this.imageResolution) {
            styling += 'image-resolution:' + this.imageResolution + ';';
        }
        if (this.objectFit) {
            styling += 'object-fit:' + this.objectFit + ';';
        }
        if (this.objectPosition) {
            styling += 'object-position:' + this.objectPosition + ';';
        }
        if (this.mask) {
            styling += 'mask:' + this.mask + ';';
        }
        if (this.maskType) {
            styling += 'mask-type:' + this.maskType + ';';
        }
        if (this.mark) {
            styling += 'mark:' + this.mark + ';';
        }
        if (this.markAfter) {
            styling += 'mark-after:' + this.markAfter + ';';
        }
        if (this.markBefore) {
            styling += 'mark-before:' + this.markBefore + ';';
        }
        if (this.phonemes) {
            styling += 'phonemes:' + this.phonemes + ';';
        }
        if (this.rest) {
            styling += 'rest:' + this.rest + ';';
        }
        if (this.restAfter) {
            styling += 'rest-after:' + this.restAfter + ';';
        }
        if (this.restBefore) {
            styling += 'rest-before:' + this.restBefore + ';';
        }
        if (this.voiceBalance) {
            styling += 'voice-balance:' + this.voiceBalance + ';';
        }
        if (this.voiceDuration) {
            styling += 'voice-duration:' + this.voiceDuration + ';';
        }
        if (this.voicePitch) {
            styling += 'voice-pitch:' + this.voicePitch + ';';
        }
        if (this.voicePitchRange) {
            styling += 'voice-pitch-range:' + this.voicePitchRange + ';';
        }
        if (this.voiceRate) {
            styling += 'voice-rate:' + this.voiceRate + ';';
        }
        if (this.voiceStress) {
            styling += 'voice-stress:' + this.voiceStress + ';';
        }
        if (this.voiceVolume) {
            styling += 'voice-volume:' + this.voiceVolume + ';';
        }
        if (this.marqueeDirection) {
            styling += 'marquee-direction:' + this.marqueeDirection + ';';
        }
        if (this.marqueePlayCount) {
            styling += 'marquee-play-count:' + this.marqueePlayCount + ';';
        }
        if (this.marqueeSpeed) {
            styling += 'marquee-speed:' + this.marqueeSpeed + ';';
        }
        if (this.marqueeStyle) {
            styling += 'marquee-style:' + this.marqueeStyle + ';';
        }
        return styling;
    };
    return Styles;
}());
exports.default = Styles;


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
// all export go in this file
__export(__webpack_require__(1));
__export(__webpack_require__(0));
__export(__webpack_require__(38));
__export(__webpack_require__(3));
__export(__webpack_require__(4));
__export(__webpack_require__(2));
__export(__webpack_require__(5));
__export(__webpack_require__(6));
__export(__webpack_require__(7));
__export(__webpack_require__(8));
__export(__webpack_require__(9));
__export(__webpack_require__(10));
__export(__webpack_require__(11));
__export(__webpack_require__(12));
__export(__webpack_require__(13));
__export(__webpack_require__(14));
__export(__webpack_require__(15));
__export(__webpack_require__(16));
__export(__webpack_require__(17));
__export(__webpack_require__(18));
__export(__webpack_require__(19));
__export(__webpack_require__(20));
__export(__webpack_require__(21));
__export(__webpack_require__(36));
__export(__webpack_require__(22));
__export(__webpack_require__(23));
__export(__webpack_require__(24));
__export(__webpack_require__(25));
__export(__webpack_require__(26));
__export(__webpack_require__(27));
__export(__webpack_require__(28));
__export(__webpack_require__(29));
__export(__webpack_require__(30));
__export(__webpack_require__(31));
__export(__webpack_require__(32));
__export(__webpack_require__(33));
__export(__webpack_require__(37));
__export(__webpack_require__(39));
__export(__webpack_require__(40));
__export(__webpack_require__(34));


/***/ })
/******/ ])));