import React from "react";
import ErrorBoundary from "./ErrorBoundary";

interface IWrapperComponentProps {
    children?: React.ReactNode;
    className?: string;
    text: string;
    bgColor: string;
    shouldCauseError?: boolean;
}

const WrapperComponent = (props: IWrapperComponentProps) => {
    return (
        <ErrorBoundary>
            <div style={{
                padding: '10px',
                backgroundColor: props.bgColor,
            }}>
                {props.shouldCauseError && (() => {
                    throw new Error('Throwing a bomb 💣🔥');
                })()}
                <h3>Hi, I'm {props.text}! 👋</h3>
                {props.children}
            </div>
        </ErrorBoundary>
    );
};

export default WrapperComponent;