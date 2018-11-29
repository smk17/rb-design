import * as React from "react";
export interface IDYIconPropTypes {
    type?: string;
    className?: string;
    title?: string;
    onClick?: React.MouseEventHandler<HTMLElement>;
    component?: React.ComponentType<ICustomIconComponentProps>;
    twoToneColor?: string;
    viewBox?: string;
    spin?: boolean;
    style?: React.CSSProperties;
    prefixCls?: string;
}
export interface ICustomIconOptions {
    scriptUrl?: string;
    extraCommonProps?: {
        [key: string]: any;
    };
}
export interface ICustomIconComponentProps {
    width: string | number;
    height: string | number;
    fill: string;
    viewBox?: string;
    className?: string;
    style?: React.CSSProperties;
    ["aria-hidden"]?: string;
    focusable?: string;
}
export declare const svgBaseProps: {
    width: string;
    height: string;
    fill: string;
    ["aria-hidden"]: string;
    focusable: string;
};
export interface IconComponent<P> extends React.SFC<P> {
}
declare function createFromIconfontCN(options?: ICustomIconOptions): React.SFC<IDYIconPropTypes>;
export default createFromIconfontCN;
//# sourceMappingURL=Icon.d.ts.map