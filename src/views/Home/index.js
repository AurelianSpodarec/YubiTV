import React from 'react';
import Carousel from './../../components/Carousel';


class HomeView extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            items: [],
            isLoading: true,
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {

        fetch('https://api.themoviedb.org/3/trending/all/day?api_key=305')
            .then( response => {
                return response.json();
            })
            .then( myJSON => {
                this.setState({
                    items: myJSON.results,
                    isLoading: false,
                })
            });
    }

    render() {
        const { items, isLoading } = this.state;

        return (
            <div>
                
                <Carousel 
                    items={items}
                    thumbnails
                />
                
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