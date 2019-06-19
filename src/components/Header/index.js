import React from 'react';
import styles from './styles.scss';
import { Link } from 'react-router-dom';

class Layout extends React.Component {

    render() {
        return (
            <>
            <header className="header">
                <div>
                    <div>
                        <div>YubiTV</div>
                    </div>
                </div>

                <ul className="header__nav-list">
                    <li>Movies</li>
                    <li>Actors</li>
                    <li>Top 100</li>
                    <li>Add film</li>
                    {/* <Link to="/">Home</Link> */}
                    {/* <Link to="/discovery">Discovery</Link> */}
                </ul>
           
            </header>
 
            </>
        )
    }
}

export default Layout;