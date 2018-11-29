import * as React from "react";
import classNames from "classnames";

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
  extraCommonProps?: { [key: string]: any };
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

export const svgBaseProps = {
  width: "1em",
  height: "1em",
  fill: "currentColor",
  ["aria-hidden"]: "true",
  focusable: "false"
};
const customCache = new Set<string>();
export interface IconComponent<P> extends React.SFC<P> {}
const Icon: IconComponent<IDYIconPropTypes> = props => {
  const {
    // affect outter <i>...</i>
    className,

    // affect inner <svg>...</svg>
    type,
    component: Component,
    viewBox,
    spin,

    // children
    children,

    ...restProps
  } = props;

  const classString = classNames(
    {
      [`anticon`]: true,
      [`anticon-${type}`]: Boolean(type)
    },
    className
  );

  const svgClassString = classNames({
    [`anticon-spin`]: !!spin || type === "loading"
  });

  let innerNode;

  // component > children > type
  if (Component) {
    const innerSvgProps: ICustomIconComponentProps = {
      ...svgBaseProps,
      className: svgClassString,
      viewBox
    };
    if (!viewBox) {
      delete innerSvgProps.viewBox;
    }

    innerNode = <Component {...innerSvgProps}>{children}</Component>;
  }

  if (children) {
    const innerSvgProps: ICustomIconComponentProps = {
      ...svgBaseProps,
      className: svgClassString
    };
    innerNode = (
      <svg {...innerSvgProps} viewBox={viewBox}>
        {children}
      </svg>
    );
  }

  return (
    <i {...restProps} className={classString}>
      {innerNode}
    </i>
  );
};
function createFromIconfontCN(
  options: ICustomIconOptions = {}
): React.SFC<IDYIconPropTypes> {
  const { scriptUrl, extraCommonProps = {} } = options;

  /**
   * DOM API required.
   * Make sure in browser environment.
   * The Custom Icon will create a <script/>
   * that loads SVG symbols and insert the SVG Element into the document body.
   */
  if (
    typeof document !== "undefined" &&
    typeof window !== "undefined" &&
    typeof document.createElement === "function" &&
    typeof scriptUrl === "string" &&
    scriptUrl.length &&
    !customCache.has(scriptUrl)
  ) {
    const script = document.createElement("script");
    script.setAttribute("src", scriptUrl);
    script.setAttribute("data-namespace", scriptUrl);
    customCache.add(scriptUrl);
    document.body.appendChild(script);
  }

  const Iconfont: React.SFC<IDYIconPropTypes> = props => {
    const { type, children, ...restProps } = props;

    // component > children > type
    let content: React.ReactNode = null;
    if (props.type) {
      content = <use xlinkHref={`#${type}`} />;
    }
    if (children) {
      content = children;
    }
    return (
      <Icon {...restProps} {...extraCommonProps}>
        {content}
      </Icon>
    );
  };

  Iconfont.displayName = "Iconfont";

  return Iconfont;
}
export default createFromIconfontCN;
