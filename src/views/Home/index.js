import React from 'react';
import Carousel from './../../components/Carousel';

// Can be put in one index
import { getTopRated, getAiringToday } from './../../config/api/tv';
import { getTrending } from './../../config/api/trending';


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
        
        this.fetchData();
    }

    async fetchData() {
        const topRated = await getTopRated().results;
        const trending = await getTrending().results;
        const airingToday = await getAiringToday().results;
        console.log("Fetch", topRated)
        this.setState({
            ...this.state, 
                topRated,
                trending,
                airingToday
        })
    }

    render() {
        const { trending, topRated, isLoading } = this.state;
        console.log(trending, topRated)
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