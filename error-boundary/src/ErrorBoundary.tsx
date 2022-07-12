import React, { ErrorInfo } from "react";

interface IErrorBoundaryProps {
    children: React.ReactNode;
}

interface IState {
    hasError: boolean;
    errorMessage?: string;
}

export default class ErrorBoundary extends React.Component<IErrorBoundaryProps, IState> {
    constructor(props: IErrorBoundaryProps) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error: any) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }
  
    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
      this.setState(p => ({
        ...p,
        errorMessage: 'An error has been occurred while rendering the child. Error: ' + error.message,
      }));
    }
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return <div>{this.state.errorMessage}</div>
      }
  
      return this.props.children; 
    }
  }