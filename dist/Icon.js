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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var _a;
import * as React from "react";
import classNames from "classnames";
export var svgBaseProps = (_a = {
        width: "1em",
        height: "1em",
        fill: "currentColor"
    },
    _a["aria-hidden"] = "true",
    _a.focusable = "false",
    _a);
var customCache = new Set();
var Icon = function (props) {
    var _a, _b;
    var 
    // affect outter <i>...</i>
    className = props.className, 
    // affect inner <svg>...</svg>
    type = props.type, Component = props.component, viewBox = props.viewBox, spin = props.spin, 
    // children
    children = props.children, restProps = __rest(props, ["className", "type", "component", "viewBox", "spin", "children"]);
    var classString = classNames((_a = {},
        _a["anticon"] = true,
        _a["anticon-" + type] = Boolean(type),
        _a), className);
    var svgClassString = classNames((_b = {},
        _b["anticon-spin"] = !!spin || type === "loading",
        _b));
    var innerNode;
    // component > children > type
    if (Component) {
        var innerSvgProps = __assign({}, svgBaseProps, { className: svgClassString, viewBox: viewBox });
        if (!viewBox) {
            delete innerSvgProps.viewBox;
        }
        innerNode = React.createElement(Component, __assign({}, innerSvgProps), children);
    }
    if (children) {
        var innerSvgProps = __assign({}, svgBaseProps, { className: svgClassString });
        innerNode = (React.createElement("svg", __assign({}, innerSvgProps, { viewBox: viewBox }), children));
    }
    return (React.createElement("i", __assign({}, restProps, { className: classString }), innerNode));
};
function createFromIconfontCN(options) {
    if (options === void 0) { options = {}; }
    var scriptUrl = options.scriptUrl, _a = options.extraCommonProps, extraCommonProps = _a === void 0 ? {} : _a;
    /**
     * DOM API required.
     * Make sure in browser environment.
     * The Custom Icon will create a <script/>
     * that loads SVG symbols and insert the SVG Element into the document body.
     */
    if (typeof document !== "undefined" &&
        typeof window !== "undefined" &&
        typeof document.createElement === "function" &&
        typeof scriptUrl === "string" &&
        scriptUrl.length &&
        !customCache.has(scriptUrl)) {
        var script = document.createElement("script");
        script.setAttribute("src", scriptUrl);
        script.setAttribute("data-namespace", scriptUrl);
        customCache.add(scriptUrl);
        document.body.appendChild(script);
    }
    var Iconfont = function (props) {
        var type = props.type, children = props.children, restProps = __rest(props, ["type", "children"]);
        // component > children > type
        var content = null;
        if (props.type) {
            content = React.createElement("use", { xlinkHref: "#" + type });
        }
        if (children) {
            content = children;
        }
        return (React.createElement(Icon, __assign({}, restProps, extraCommonProps), content));
    };
    Iconfont.displayName = "Iconfont";
    return Iconfont;
}
export default createFromIconfontCN;

//# sourceMappingURL=Icon.js.map
