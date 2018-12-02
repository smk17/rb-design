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
declare class Loading extends React.Component<ILoadingProps, ILoadingStates> {
    _el: HTMLDivElement | null;
    state: ILoadingStates;
    componentDidMount(): void;
    render(): JSX.Element | null;
}
export default Loading;
//# sourceMappingURL=index.d.ts.map