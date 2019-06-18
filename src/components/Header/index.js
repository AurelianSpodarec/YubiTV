import React from 'react';
import { Link } from 'react-router-dom';

class Layout extends React.Component {

    render() {
        return (
            <>
            <header>
                <div>
                    <div>YubiTV</div>
                </div>

                <ul>
                    <Link to="/">Home</Link>
                    <Link to="/discovery">Discovery</Link>
                </ul>
           
            </header>
 
            </>
        )
    }
}

export default Layout;