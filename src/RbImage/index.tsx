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
  objectFit: "contain" | "cover";
}

class RbImage extends React.Component<ImagePropTypes> {
  public static defaultProps: ImagePropTypes = {
    src: "",
    objectFit: "cover"
  };
  private Icon: React.ReactNode = <React.Fragment />;
  renderImg() {
    const {
      width,
      height,
      src,
      background,
      children,
      objectFit,
      className,
      onClick,
      alt
    } = this.props;
    const style: React.CSSProperties = { ...this.props.style };
    if (width) style.width = width;
    if (height) style.height = height;
    if (background) {
      return (
        <div
          className={classNames(["rb-image-container", className])}
          onClick={onClick}
          style={{
            ...style,
            backgroundImage: src ? `url(${src})` : undefined
          }}
        >
          {children}
        </div>
      );
    } else {
      const classes: IDictionary<boolean> = {
        "rb-image-cover": objectFit === "cover",
        "rb-image-contain": objectFit === "contain"
      };
      if (className) classes[className] = true;
      return (
        <img
          className={classNames(classes)}
          src={src}
          alt={alt}
          style={style}
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
