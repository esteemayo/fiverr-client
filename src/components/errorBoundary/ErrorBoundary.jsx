import { Component } from 'react';

import './ErrorBoundary.scss';

class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError(error) {
    return {
      hasError: error,
    };
  }

  componentDidCatch(error, info) {
    console.log(error, info);
  }

  render() {
    if (this.state.hasError) {
      return <main>Error</main>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
