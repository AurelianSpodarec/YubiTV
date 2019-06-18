import React from 'react';

class Carousel extends React.Component {

    constructor(props) {
        super(props) 
        this.state = {
            items: [],
            currentSlide: 0,
            isLoading: false,
            isPlaying: false,
        }
    }

    componentDidMount() {
        this.setState({ isLoading: true });
    }

    getImage() {

    }

    getImages() {

    }

    renderSlide(item, index) {
        return (
            <div key={index}>{item.page}{item.title}</div>
        )
    }

    render() {
        const { items } = this.props;
        console.log(items)
        const { currentSlide, isPlaying, isLoading } = this.state;

        return (
            <div>
                {items.map((item, index) => this.renderSlide(item, index))}
            </div>
        );
    }
}

export default Carousel;