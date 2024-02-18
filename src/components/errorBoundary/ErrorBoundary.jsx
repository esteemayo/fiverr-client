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
      return (
        <main className='errorBoundary'>
          <div className='container'>
            <div className='wrapper'>
              <h1>Error</h1>
              <h2>Something went wrong</h2>
            </div>
          </div>
        </main>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
