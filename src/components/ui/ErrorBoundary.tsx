import { Component } from 'react';
import type { ErrorInfo, ReactNode } from 'react';
import { AlertCircle, RefreshCw, Home } from 'lucide-react';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

/**
 * Global React Error Boundary
 *
 * Protects the application from unexpected rendering errors.
 *
 * Catches errors from:
 * - React rendering
 * - Lifecycle methods
 * - Constructors
 * - Lazy-loaded React components
 *
 * Provides:
 * - User-friendly fallback screen
 * - Development-only error details
 * - Optional external error reporting hook
 * - Reload recovery
 * - Home-page recovery
 */
export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);

    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  /**
   * React calls this when a child component throws during rendering.
   */
  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return {
      hasError: true,
      error,
    };
  }

  /**
   * Runs after an error has been caught.
   *
   * Useful for:
   * - Console debugging
   * - Sentry
   * - LogRocket
   * - Other monitoring services
   */
  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    this.setState({
      error,
      errorInfo,
    });

    console.error(
      '[ErrorBoundary] React application error:',
      error,
      errorInfo
    );

    this.props.onError?.(error, errorInfo);
  }

  /**
   * Perform a complete browser reload.
   *
   * This is intentionally a hard reload because it can recover from:
   * - stale lazy-loaded chunks
   * - temporary runtime state problems
   * - deployment/version mismatches
   */
  handleReload = (): void => {
    window.location.reload();
  };

  /**
   * Return to the homepage using a clean navigation.
   *
   * We deliberately do not depend on React Router here because
   * the router itself may be inside the failed React tree.
   */
  handleGoHome = (): void => {
    window.location.assign('/');
  };

  render() {
    const { children, fallback } = this.props;
    const { hasError, error, errorInfo } = this.state;

    if (!hasError) {
      return children;
    }

    /**
     * Allow specific parts of the application to provide
     * their own fallback UI if required.
     */
    if (fallback) {
      return fallback;
    }

    return (
      <main
        role="alert"
        aria-live="assertive"
        className="min-h-screen bg-[#000131] flex items-center justify-center px-6 py-12"
      >
        <div className="w-full max-w-2xl">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 shadow-2xl md:p-12">

            {/* Error Icon */}
            <div className="mb-6 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-500/10">
                <AlertCircle
                  className="h-8 w-8 text-red-400"
                  aria-hidden="true"
                />
              </div>
            </div>

            {/* Heading */}
            <h1 className="mb-4 text-center text-[26px] font-semibold text-white md:text-[32px]">
              Something went wrong
            </h1>

            {/* Description */}
            <p className="mx-auto mb-8 max-w-lg text-center text-[15px] leading-7 text-white/70">
              An unexpected error prevented this page from loading correctly.
              Please reload the page or return to the homepage.
            </p>

            {/* Development-only debugging information */}
            {import.meta.env.DEV && error && (
              <div className="mb-8 overflow-hidden rounded-xl border border-red-500/20 bg-black/20 p-5">
                <p className="mb-3 text-[13px] font-semibold text-red-400">
                  Development Error
                </p>

                <pre className="overflow-x-auto whitespace-pre-wrap break-words text-[12px] leading-6 text-white/70">
                  {error.message || error.toString()}
                </pre>

                {errorInfo?.componentStack && (
                  <details className="mt-4">
                    <summary className="cursor-pointer text-[13px] text-white/60 transition-colors hover:text-white">
                      View component stack
                    </summary>

                    <pre className="mt-3 max-h-72 overflow-auto whitespace-pre-wrap break-words text-[11px] leading-5 text-white/50">
                      {errorInfo.componentStack}
                    </pre>
                  </details>
                )}
              </div>
            )}

            {/* Recovery Actions */}
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <button
                type="button"
                onClick={this.handleReload}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#ffb300] px-6 py-3 text-[14px] font-semibold text-[#000131] transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#ffb300] focus:ring-offset-2 focus:ring-offset-[#000131]"
              >
                <RefreshCw
                  className="h-4 w-4"
                  aria-hidden="true"
                />

                Reload Page
              </button>

              <button
                type="button"
                onClick={this.handleGoHome}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-[#000131]"
              >
                <Home
                  className="h-4 w-4"
                  aria-hidden="true"
                />

                Go to Homepage
              </button>
            </div>

          </div>
        </div>
      </main>
    );
  }
}

export default ErrorBoundary;