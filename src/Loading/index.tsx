import * as React from "react";
import "./index.css";

export interface ILoadingProps {
  isLoading: boolean;
  pastDelay: boolean;
  timedOut: boolean;
  error: any;
  retry: () => void;
}

export interface ILoadingStates {
  width: number | string;
  height: number | string;
}

class Loading extends React.Component<ILoadingProps, ILoadingStates> {
  _el: HTMLDivElement | null = null;
  state: ILoadingStates = { width: 40, height: 40 };
  componentDidMount() {
    if (this._el) {
      let width = this._el.offsetWidth,
        height = this._el.offsetHeight;
      if (width === 0) {
        this.setState({ width: "40%", height: "auto" });
      } else {
        if (width > height) {
          height = height * 0.8;
          width = height;
        } else {
          width = width * 0.4;
          height = width;
        }
        if (width > 100) {
          width = height = 100;
        }
        this.setState({ width, height });
      }
    }
  }

  render() {
    const { error, pastDelay, retry } = this.props;
    if (error) {
      console.log(error);
      return (
        <span className="rb-loading" onClick={retry}>
          加载组件出错！点击重试!
        </span>
      );
    } else if (pastDelay) {
      const { width, height } = this.state;
      return (
        <div ref={el => (this._el = el)} className="rb-loading">
          <img src="/img/load.gif" alt="" style={{ width, height }} />
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Loading;
