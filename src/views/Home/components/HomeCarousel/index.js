import React from 'react';
import config from './../../../../services/network/config';

import Carousel from './../../../../components/Carousel';

import './styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'

class HomeCarousel extends React.Component {

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

 
    renderSlide(items) {        
        if(!items) return;
        // Extras
        // Autoplay
        // play
        // Speed
        // Slide

        // const { items } = this.props;
        // const { currentSlide } = this.state;

        // if(!items) return;

        // const selectedSlide = items[currentSlide];

        return (
      <div>{items[0].title}</div>
            // <div className="carousel__image" style={{backgroundImage: `url(${selectedSlide.backdrop_path ? config.images.secure_base_url + config.images.poster_sizes + items[currentSlide].backdrop_path : null})`}}>
            // <div className="carousel__inner">
             
            //         <div className="shadow"></div>
            //         <div className="carousel__caption">
            //             <div>
            //                 <div>
            //                     <h3 className="carousel__title">{selectedSlide.title || items[currentSlide].name}</h3>
                                
            //                     <span className="carousel__movie-info">
            //                         {/* <span>
            //                             {selectedSlide.genre_ids.map((genre, index )=> {
            //                                 return <p className="carousel__genre">{this.getGenreNamesById(genre)}{selectedSlide.genre_ids[index] === selectedSlide.genre_ids[selectedSlide.genre_ids.length - 1]  ? '' : ','  }</p> 
            //                             })}
            //                         </span>     */}
            //                         <span>{selectedSlide.release_date || selectedSlide.first_air_date}</span>
            //                         {selectedSlide.adult ? "Pegi 18" : ""}
            //                     </span>
            //                     <h4 className="carousel__sub-title">{selectedSlide.overview}</h4>
            //                 </div>

            //                 <div>
            //                     <button className="carousel__TEMP-button">
                                    
            //                         <FontAwesomeIcon icon={faPlay} />
            //                         <span style={{"marginLeft": "10px"}}>Play</span>
            //                     </button>
            //                     <button style={{"backgroundColor": "rgba(255, 255, 255, 0.44)", "color": "white"}} className="carousel__TEMP-button">More Info</button>
            //                 </div>
            //             </div>
                        
            //         </div>

            //         <div style={{"color": 'white', "position": "absolute", "right": "32px", "top": "50px", "fontSize": "2em"}}>
            //             <FontAwesomeIcon icon={faChevronLeft} style={{"marginRight": "32px"}} />
            //             <FontAwesomeIcon icon={faChevronRight} />
            //         </div>

            //         <ul className="carousel__thumbnail-list">
            //             {items.map((item, index) => {
            //                 return (
            //                     <li key={index} className={`carousel__thumbnail-item ${index === currentSlide ? 'is-active' : "" }`} onClick={()=> this.setState({ currentSlide: index })}>
            //                         <img className="carousel__thumbnail-image" src={`${item.poster_path ? config.images.secure_base_url + 'w500' + item.poster_path : null}`} />
            //                     </li>                    
            //                 )
            //             })}
            //         </ul>
                
                
            // </div>
            // </div>
        )
    }


    render() {
        const { items } = this.props;
        console.log(items)
        if(!items) return;
 
        return (
            <div>
                <Carousel items={items} slideItem={this.renderSlide} />
            </div>
        );
    }
}

export default HomeCarousel;