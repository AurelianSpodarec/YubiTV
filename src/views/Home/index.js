import React from 'react';
import Carousel from './../../components/Carousel';


class HomeView extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            trending: [],
            topRated: [],
            airingToday: [],
            isLoading: true,
        }
    }

    componentDidMount() {
        this.fetchTopRated();
        this.fetchTrending();
        this.fetchAiringToday();
    }

    componentWillUpdate() {
         
    }

    
    fetchAiringToday = async () => {
        const response = await fetch('https://api.themoviedb.org/3/tv/airing_today?api_key=b087ad0af2324ccd0d4269ba88a1a305&language=en-US&page=1')
            .then( response => {
                return response.json();
            })
            console.log("Airing Today", response)
           
            this.setState({ ...this.state, airingToday: response.results })
           
    }

    fetchTrending = async () => {
        const response = await fetch('https://api.themoviedb.org/3/trending/movies/day?api_key=b087ad0af2324ccd0d4269ba88a1a305')
            .then( response => {
                return response.json();
            })
             
            this.setState({ ...this.state, trending: response.results })
           
    }

    fetchTopRated = async () => {
        const response = await fetch('https://api.themoviedb.org/3/tv/top_rated?api_key=b087ad0af2324ccd0d4269ba88a1a305&language=en-US&page=1')
            .then( response => {
                return response.json();
            })
            console.log(response);
            this.setState({ ...this.state, topRated: response.results })
    }

    render() {
        const { trending, topRated, isLoading } = this.state;
        
        return (
            <div> 


                {/* MAIN CAROUSEL */}
                 
                 {/* {trending.length === 0 ? "Loading" 
                 : 
                <Carousel items={trending} thumbnails/>} */}

                <Carousel items={trending} />
              
                <Carousel items={topRated} />


                {/* TOP RATED */}
               
                    <div>
                        <h3>Top Rated</h3>
                        <ul>
                            {topRated && topRated.map(x => {
                                return (
                                <li>
                                    <img />
                                    <h5>Name: {x.name}</h5>
                                </li>
                                )
                            })}
                        </ul>
                    </div>
                
                 {/* <Carousel multiline /> */}

                {/* TV Schedule for Friday, June 21st */}
               
                            <div>
                                <h3>TV Schedule for Friday, June 21st</h3>
                            </div>


                {/* Just Aired */}


            </div>
        )
    }
}

export default HomeView;








// WITH HOOKS
// import React, { useState, useEffect } from 'react';
// import Carousel from './../../components/Carousel';


// const HomeView = () => {
//     const [items, setItems] = useState([]);
//     const [isLoading, setIsLoading] = useState(true);
    
//     useEffect(() => {
//     fetch('https://api.themoviedb.org/3/trending/all/day?api_key=305')
//             .then( response => {
//                 return response.json();
//             })
//             .then( myJSON => {
//                 setItems(myJSON)
//                 setIsLoading(false);
//             })
//     }, [])
//     return (
//         <div>
//             <Carousel 
//                 items={items.results}
//                 thumbnails
//             />
//          </div>
//     )
// }

// export default HomeView;