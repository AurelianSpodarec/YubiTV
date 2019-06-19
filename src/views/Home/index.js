import React from 'react';
import Carousel from './../../components/Carousel';


class HomeView extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            trending: [],
            isLoading: true,
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        fetch('https://api.themoviedb.org/3/trending/all/day?api_key=b087ad0af2324ccd0d4269ba88a1a305')
            .then( response => {
                return response.json();
            })
            .then( myJSON => {
                this.setState({
                    trending: myJSON.results,
                    isLoading: false,
                })
            });
    }

    render() {
        const { trending, isLoading } = this.state;

        return (
            <div> 
                {trending.length === 0 ? 
               "Loading"
                 : 
                 <Carousel 
                items={trending}
                thumbnails/>}
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