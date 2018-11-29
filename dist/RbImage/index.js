var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import * as React from "react";
import classNames from "classnames";
import "./index.css";
var RbImage = /** @class */ (function (_super) {
    __extends(RbImage, _super);
    function RbImage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RbImage.prototype.renderImg = function () {
        var _a = this.props, width = _a.width, height = _a.height, src = _a.src, background = _a.background, children = _a.children, style = _a.style, className = _a.className, onClick = _a.onClick, alt = _a.alt;
        if (background) {
            return (React.createElement("div", { className: classNames(["rb-image-container", className]), onClick: onClick, style: __assign({}, style, { width: width,
                    height: height, backgroundImage: src ? "url(" + src + ")" : undefined }) }, children));
        }
        else {
            return (React.createElement("img", { className: classNames(["rb-image-cover", className]), src: src, alt: alt, style: __assign({}, style, { width: width, height: height }), onClick: onClick }));
        }
    };
    RbImage.prototype.render = function () {
        var src = this.props.src;
        if (src) {
            return this.renderImg();
        }
        else {
            return this.Icon;
        }
    };
    return RbImage;
}(React.Component));
export default RbImage;

//# sourceMappingURL=index.js.map
