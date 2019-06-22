import React from 'react';
import styles from './styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'

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
            isLoading: false,
            currentSlide: 0,
            genres: [],
            isPlaying: false,
        }
    }

    // This can be put in React Context API
    async fetchGenreNames() {
        const response = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=b087ad0af2324ccd0d4269ba88a1a305&language=en-US')
            .then( response => {
                return response.json();
            })
        this.setState({ ...this.state, genres: response.genres });
    }

    getGenreNameById(id) {
        const { genres } = this.state;
        if(!genres) return;

        console.log("sdsddddddsds", genres);

        const filtered = genres.find(genre => genre.id === id);

        if (!filtered) return;
        return filtered.name;
    }
 
    componentDidMount() {
        this.fetchGenreNames();
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
                                    <span>
                                        {selectedSlide.genre_ids.map((genre, index )=> {
                                            return <p className="carousel__genre">{this.getGenreNameById(genre)}{selectedSlide.genre_ids[index] === selectedSlide.genre_ids[selectedSlide.genre_ids.length - 1]  ? '' : ','  }</p> 
                                        })}
                                    </span>    
                                    <span>{selectedSlide.release_date || selectedSlide.first_air_date}</span>
                                    {selectedSlide.adult ? "Pegi 18" : ""}
                                </span>
                                <h4 className="carousel__sub-title">{selectedSlide.overview}</h4>
                            </div>

                            <div>
                                <button className="carousel__TEMP-button">
                                    
                                    <FontAwesomeIcon icon={faPlay} />
                                    <span style={{"margin-left": "10px"}}>Play</span>
                                </button>
                                <button style={{"background-color": "rgba(255, 255, 255, 0.44)", "color": "white"}} className="carousel__TEMP-button">More Info</button>
                            </div>
                        </div>
                        
                    </div>
                    <div style={{"color": 'white',
    "position": "absolute",
    "right": "32px",
    "top": "50px",
    "font-size": "2em"}}>
                            <FontAwesomeIcon icon={faChevronLeft} style={{"margin-right": "32px"}} />
                            
                            <FontAwesomeIcon icon={faChevronRight} />
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