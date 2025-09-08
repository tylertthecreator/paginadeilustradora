'use client';

import { Component, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { FaExclamationTriangle, FaRefresh } from 'react-icons/fa';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="min-h-screen flex items-center justify-center bg-creamy-white-50"
        >
          <div className="text-center max-w-md mx-auto px-4">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <FaExclamationTriangle className="text-red-600 text-3xl" />
            </motion.div>
            
            <h1 className="text-2xl font-serif text-dark-teal-800 mb-4">
              Oops! Something went wrong
            </h1>
            
            <p className="text-dark-teal-600 mb-6">
              We're sorry, but something unexpected happened. Please try refreshing the page.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={this.handleRetry}
              className="inline-flex items-center gap-2 bg-vibrant-pink-600 text-creamy-white-50 px-6 py-3 rounded-full hover:bg-vibrant-pink-700 transition-colors font-medium"
            >
              <FaRefresh />
              Try Again
            </motion.button>
            
            {this.state.error && (
              <details className="mt-6 text-left">
                <summary className="cursor-pointer text-sm text-dark-teal-500 hover:text-dark-teal-700">
                  Error Details
                </summary>
                <pre className="mt-2 p-4 bg-red-50 border border-red-200 rounded-lg text-xs text-red-700 overflow-auto">
                  {this.state.error.message}
                </pre>
              </details>
            )}
          </div>
        </motion.div>
      );
    }

    return this.props.children;
  }
}
