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
        this.fetchTrending();
        this.fetchTopRated();
    }

    componentWillUpdate() {
         
    }

    async fetchAiringToday() {
        const response = await fetch('https://api.themoviedb.org/3/tv/airing_today?api_key=b087ad0af2324ccd0d4269ba88a1a305&language=en-US&page=1')
            .then( response => {
                return response.json();
            })
           
            this.setState({ airingToday: response.results })
           
    }

    fetchTrending = async () => {
        const response = await fetch('https://api.themoviedb.org/3/trending/movies/day?api_key=b087ad0af2324ccd0d4269ba88a1a305')
            .then( response => {
                return response.json();
            })
             
            this.setState({ trending: response.results })
           
    }

    async fetchTopRated() {
        await fetch('https://api.themoviedb.org/3/tv/top_rated?api_key=<<api_key>>&language=en-US&page=1')
            .then( response => {
                return response.json();
            })
            .then(myJSON => {
                this.setState({
                    topRated: myJSON.results,
                })
            })
    }

    render() {
        const { trending, topRated, isLoading } = this.state;

        return (
            <div> 


                {/* MAIN CAROUSEL */}
                 
                 {/* {trending.length === 0 ? "Loading" 
                 : 
                <Carousel items={trending} thumbnails/>} */}

                <Carousel items={trending} thumbnails/>
              

                {/* TOP RATED */}
                {topRated && topRated.length === 0 ? 
                    "Loading"
                :
                    <div>
                        <h3>Top Rated</h3>
                        <ul>
                            {topRated && topRated.map(x => {
                                return (
                                <li>
                                    <img />
                                    <h5>{x.name}</h5>
                                </li>
                                )
                            })}
                        </ul>
                    </div>
                }
                 {/* <Carousel multiline /> */}

                 {/* TV Schedule for Friday, June 21st */}

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