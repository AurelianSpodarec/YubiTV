import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import HomeView from './Home';
import DiscoveryView from './Discovery';

import Header from './../components/Header';
import Footer from './../components/Footer';


class Container extends React.Component {
    render() {
        return (
            <div className="container">
                {this.props.children}
            </div>
        )
    }
}

class Layout extends React.Component {

    render() {
        return (
            <>

                <BrowserRouter>
                    <Header />
                    
                    <Container>
                        <Route path="/" exact component={HomeView} />
                        <Route path="/discovery" component={DiscoveryView} />
                    </Container>
                    
                    <Footer />
                </BrowserRouter>


            </>
        )
    }
}

export default Layout;