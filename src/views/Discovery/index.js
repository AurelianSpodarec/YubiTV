import React from 'react';

class DiscoveryView extends React.Component {

    fetchActor(id) {
        fetch(`https://api.themoviedb.org/3/person/${id}?api_key=b087ad0af2324ccd0d4269ba88a1a305&language=en-US`)
            .then(response => {
                return console.log(response);
            })
    }


    render() {
        {console.log(this.fetchActor(1))}
        return (
            <div>
                
                  
                            
   DiscoveryView
            </div>
        )
    }
}

export default DiscoveryView;