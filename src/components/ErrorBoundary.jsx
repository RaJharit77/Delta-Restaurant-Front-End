import React from 'react';
import PropTypes from 'prop-types';
import Error from './Error';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
        this.handleReset = this.handleReset.bind(this);
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, info) {
        console.error('Erreur capturée par ErrorBoundary :', error, info);
    }

    handleReset() {
        this.setState({ hasError: false, error: null });
        window.location.reload();
    }

    render() {
        if (this.state.hasError) {
            return (
                <Error
                    title="Une erreur inattendue est survenue"
                    message="L'application a rencontré un problème. Vous pouvez recharger la page pour réessayer."
                    details={this.state.error?.message ?? null}
                    onRetry={this.handleReset}
                    fullScreen
                />
            );
        }
        return this.props.children;
    }
}

ErrorBoundary.propTypes = {
    children: PropTypes.node,
};

export default ErrorBoundary;