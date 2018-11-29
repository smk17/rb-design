import * as React from "react";
import classNames from "classnames";
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

class RbImage extends React.Component<ImagePropTypes> {
  private Icon: React.ReactNode;
  renderImg() {
    const {
      width,
      height,
      src,
      background,
      children,
      style,
      className,
      onClick,
      alt
    } = this.props;
    if (background) {
      return (
        <div
          className={classNames(["rb-image-container", className])}
          onClick={onClick}
          style={{
            ...style,
            width,
            height,
            backgroundImage: src ? `url(${src})` : undefined
          }}
        >
          {children}
        </div>
      );
    } else {
      return (
        <img
          className={classNames(["rb-image-cover", className])}
          src={src}
          alt={alt}
          style={{ ...style, width, height }}
          onClick={onClick}
        />
      );
    }
  }

  render() {
    const { src } = this.props;
    if (src) {
      return this.renderImg();
    } else {
      return this.Icon;
    }
  }
}

export default RbImage;
