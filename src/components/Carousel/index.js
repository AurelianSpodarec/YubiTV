import React from 'react';
import styles from './styles.scss';

const config = {
    apiKey: 'b087ad0af2324ccd0d4269ba88a1a305',
    images: {
        secure_base_url: 'https://image.tmdb.org/t/p/',
        poster_sizes: 'original', // w500

    }
}

class Carousel extends React.Component {

    constructor(props) {
        super(props) 
        this.state = {
            currentSlide: 0,
            isPlaying: false,
        }
    }

    getImage() {
        const { items } = this.props;
        return items.poster_path;
    }

    getImages() {

    }

    renderSlide() {
        const { items } = this.props;
        const { currentSlide } = this.state;

        const selectedSlide = items[currentSlide];

        return (
            <div className="carousel">
            <div className="carousel__image" style={{backgroundImage: `url(${selectedSlide.poster_path ? config.images.secure_base_url + config.images.poster_sizes + items[currentSlide].poster_path : null})`}}>
            <div className="carousel__inner">
                {/* <img src={`$selectedSlide.poster_path ? config.images.secure_base_url + config.images.poster_sizes + items[currentSlide].poster_path : null}`}/> */}
                    <div class="shadow"></div>
                    <div className="carousel__caption">
                        <div>
                            <h3 className="carousel__title">{selectedSlide.title || items[currentSlide].name}</h3>
                            <h4 className="carousel__sub-title">{selectedSlide.overview}</h4>
                            <span className="carousel__release-date">
                                <span>{selectedSlide.genre_ids.map((genre, index) => {
                                    return <p key={index}>{genre}</p>})
                                }</span>    
                                <span>Release date: {selectedSlide.release_date}</span>
                            </span>
                        </div>
                        <button className="carousel__TEMP-button">See it now!</button>
                    </div>

                    <ul className="carousel__thumbnail-list">

                        {/* Check if item contains 'title' - if it doesn't, don't render the movie */}
                        {items.map((item, index) => {
                            return (
                                <li key={index} className={`carousel__thumbnail-item ${index === currentSlide ? 'is-active' : "" }`} onClick={()=> this.setState({ currentSlide: index })}>
                                    <img className="carousel__thumbnail-image" src={`${item.poster_path ? config.images.secure_base_url + 'w500' + item.poster_path : null}`} />
                                </li>                    
                            )
                        })}
                    </ul>
                
                
            </div>
            </div>
            </div>
        )
    }


    render() {
        // const { items } = this.props;
        const { currentSlide, isPlaying, isLoading } = this.state;

        return (
            <div>
                {this.renderSlide()}
            </div>
        );
    }
}

export default Carousel;