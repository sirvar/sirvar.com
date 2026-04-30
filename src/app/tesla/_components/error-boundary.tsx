"use client";

import { RefreshCw } from "lucide-react";
import React from "react";

type Props = { children: React.ReactNode };
type State = { hasError: boolean; error: Error | null };

class ErrorBoundary extends React.Component<Props, State> {
  state: State = { hasError: false, error: null };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    if (typeof console !== "undefined") {
      console.error("[tesla] dashboard crashed:", error, info);
    }
  }

  reload = () => {
    if (typeof window !== "undefined") window.location.reload();
  };

  render() {
    if (!this.state.hasError) return this.props.children;

    return (
      <div data-tesla-root className="tesla-root tesla-root--error">
        <div className="tesla-error">
          <h2 className="tesla-error__title">Something broke</h2>
          <p className="tesla-error__message">
            {this.state.error?.message ?? "Unexpected error"}
          </p>
          <button
            type="button"
            className="tesla-pill tesla-pill--primary"
            data-interactive="true"
            onClick={this.reload}
          >
            <span className="tesla-pill__icon" aria-hidden>
              <RefreshCw size={16} strokeWidth={2} />
            </span>
            Reload
          </button>
        </div>
      </div>
    );
  }
}

export default ErrorBoundary;
