// React library
import React from 'react';

// Axios of Ajax
import Axios from 'axios';

// AppContainer class
class AppContainer extends React.Component {
    // AppContainer constructor
    constructor(props) {
        super(props);
    }

    // componentDidMount lifecycle method. Called once a component is loaded
    componentDidMount() {
        this.randomTrack();
    }

    // Render method
    render () {
        return (
        <div className="scotch_music">

        </div>
        );
    }
}

// Export AppContainer Component
export default AppContainer
