import React from 'react';
import styles from './styles.scss';
import { Link } from 'react-router-dom';

class Layout extends React.Component {

    render() {
        return (
            <>
            <header className="header">
                 
                    <div>
                        <div>YubiTV</div>
                    </div>

                    <div>
                        <input placeholder="Search" />
                    </div>

                    <div className="header__user-wrap">
                        <span className="header__user-name">Aurelian</span>
                        <img className="header__user-avatar" src="http://aurelianspodarec.co.uk/wp-content/uploads/2018/03/aurepic.jpg" />
                    </div>
               

                {/* Actors
                TV Seasons

                <ul className="header__nav-list">
                    <li>Movies</li>
                    <li>Actors</li>
                    <li>Top 100</li>
                    <li>Add film</li>
                    {/* <Link to="/">Home</Link> */}
                    {/* <Link to="/discovery">Discovery</Link> */}
                {/* </ul> */}
           
            </header>
 
            </>
        )
    }
}

export default Layout;