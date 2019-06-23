import React from 'react';

import { getTopRated, getAiringToday } from '../../services/network/api/tv';
import { getTrending } from '../../services/network/api/trending';

import HomeCarousel from './components/HomeCarousel'

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
        console.log(this.state)
        this.fetchData();
    }

    async fetchData() {
        const topRated = await getTopRated();
        const trending = await getTrending();
        const airingToday = await getAiringToday();
        
        this.setState({
            ...this.state, 
                topRated: topRated.results,
                trending: trending.results,
                airingToday: airingToday.results
        })
    }

    render() {
        const { trending, topRated, isLoading } = this.state;

        return (
            <div> 

                <HomeCarousel items={topRated} />


                {/* MAIN CAROUSEL */}
                 
                {/*
                    {trending.length === 0 ? "Loading" 
                    : 
                    <Carousel items={trending} thumbnails/>} 
                */}

                {/* 
                <Carousel items={trending} />
                <Carousel items={topRated} />


                {/* TOP RATED */}
               
                    <div>
                        <h3>Top Rated</h3>
                        <ul>
                            {topRated && topRated.map(x => {
                                return (
                                <li key={x.name}>
                                    <img />
                                    <h5>Name: {x.name}</h5>
                                </li>
                                )
                            })}
                        </ul>
                    </div>
                
                 {/* <Carousel multiline /> */}

                {/* TV Schedule for Friday, June 21st */}

                {/*                
                <div>
                    <h3>TV Schedule for Friday, June 21st</h3>
                </div>
                */}

                {/* Just Aired */} 


            </div>
        )
    }
}

export default HomeView;