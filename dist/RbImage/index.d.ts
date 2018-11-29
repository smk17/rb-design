import * as React from "react";
import "./index.css";
export interface ImagePropTypes {
    style?: React.CSSProperties;
    className?: string;
    alt?: string;
    width?: number;
    height?: number;
    background?: boolean;
    onClick?: () => void;
    name?: string;
    src: string;
}
declare class RbImage extends React.Component<ImagePropTypes> {
    private Icon;
    renderImg(): JSX.Element;
    render(): {} | null | undefined;
}
export default RbImage;
//# sourceMappingURL=index.d.ts.map