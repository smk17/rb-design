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
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Icon = React.createElement(React.Fragment, null);
        return _this;
    }
    RbImage.prototype.renderImg = function () {
        var _a = this.props, width = _a.width, height = _a.height, src = _a.src, background = _a.background, children = _a.children, objectFit = _a.objectFit, className = _a.className, onClick = _a.onClick, alt = _a.alt;
        var style = __assign({}, this.props.style);
        if (width)
            style.width = width;
        if (height)
            style.width = height;
        if (background) {
            return (React.createElement("div", { className: classNames(["rb-image-container", className]), onClick: onClick, style: __assign({}, style, { backgroundImage: src ? "url(" + src + ")" : undefined }) }, children));
        }
        else {
            var classes = {
                "rb-image-cover": objectFit === "cover",
                "rb-image-contain": objectFit === "contain"
            };
            if (className)
                classes[className] = true;
            return (React.createElement("img", { className: classNames(classes), src: src, alt: alt, style: style, onClick: onClick }));
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
    RbImage.defaultProps = {
        src: "",
        objectFit: "cover"
    };
    return RbImage;
}(React.Component));
export default RbImage;

//# sourceMappingURL=index.js.map
