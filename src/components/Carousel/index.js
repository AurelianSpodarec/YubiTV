import React from 'react';
import './styles.scss';

class Carousel extends React.Component {

    constructor(props) {
        super(props) 
        this.state = {
            currentSlide: 0,
            isLoading: false,
            isPlaying: false,
        }
    }

    componentDidMount() {

    }

    //TODO: Build Basic Carousel Functionality that can be customised for other use cases.

    render() {
        // const { items } = this.props;
        const { currentSlide, isPlaying, isLoading } = this.state;
        const { items, slideItem } = this.props;
        console.log("Crousel", items)
        return (
            <div className="carousel">
                {slideItem ? slideItem(items = []) : "No Slide Item"}
            </div>
        );
    }
}

export default Carousel;