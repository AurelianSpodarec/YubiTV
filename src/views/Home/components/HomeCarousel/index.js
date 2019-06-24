import React from 'react';
import config from './../../../../services/network/config';

import'./styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'

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
    renderItem() {
    
    }

    renderSlide() {        
        const { items } = this.props;
        const { currentSlide } = this.state;

        if(!items.length) return null;

        const selectedSlide = items[currentSlide];

        return (
            <div className="carousel">
            <div className="carousel__image" style={{backgroundImage: `url(${selectedSlide.backdrop_path ? config.images.secure_base_url + config.images.poster_sizes + items[currentSlide].backdrop_path : null})`}}>
            <div className="carousel__inner">
             
                    <div className="shadow"></div>
                    <div className="carousel__caption">
                        <div>
                            <div>
                                <h3 className="carousel__title">{selectedSlide.title || items[currentSlide].name}</h3>
                                
                                <span className="carousel__movie-info">
                                    {/* <span>
                                        {selectedSlide.genre_ids.map((genre, index )=> {
                                            return <p className="carousel__genre">{this.getGenreNamesById(genre)}{selectedSlide.genre_ids[index] === selectedSlide.genre_ids[selectedSlide.genre_ids.length - 1]  ? '' : ','  }</p> 
                                        })}
                                    </span>     */}
                                    <span>{selectedSlide.release_date || selectedSlide.first_air_date}</span>
                                    {selectedSlide.adult ? "Pegi 18" : ""}
                                </span>
                                <h4 className="carousel__sub-title">{selectedSlide.overview}</h4>
                            </div>

                            <div>
                                <button className="carousel__TEMP-button">
                                    
                                    <FontAwesomeIcon icon={faPlay} />
                                    <span style={{"marginLeft": "10px"}}>Play</span>
                                </button>
                                <button style={{"backgroundColor": "rgba(255, 255, 255, 0.44)", "color": "white"}} className="carousel__TEMP-button">More Info</button>
                            </div>
                        </div>
                        
                    </div>

                    <div style={{"color": 'white', "position": "absolute", "right": "32px", "top": "50px", "fontSize": "2em"}}>
                        <FontAwesomeIcon onClick={this.onPrev} icon={faChevronLeft} style={{"marginRight": "32px"}} />
                        <FontAwesomeIcon onClick={this.onNext} icon={faChevronRight} />
                    </div>

                    <ul className="carousel__thumbnail-list">
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

    onNext = () => {
        if(this.state.currentSlide + 1 > this.props.items.length - 1) {
            this.setState({ currentSlide: 0})
        } else {
            this.setState({
                currentSlide: this.state.currentSlide + 1
            })
        }
    }

    onPrev = () => {
        if(this.state.currentSlide - 1 < 0) {
            this.setState({         
                currentSlide: this.props.items.length - 1
            })
        } else {
            this.setState({
                currentSlide: this.state.currentSlide - 1
            })
        }
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