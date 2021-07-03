import React from 'react'
import GetTrendingList from './GetTrendingList/GetTrendingList'
import './Contents.css'

function Content(){
    return <React.Fragment>
        <div class="content-container">
            <div class="movies">
                <h4>TRENDING MOVIES</h4>
                {/* Component to get list of movies and display it */}
                <GetTrendingList type={"movie"} />
            </div>
            <div class="tv">
                <h4>TRENDING TV SHOWS</h4>
                {/* Component to get list of TV shows and display it */}
                <GetTrendingList type={"tv"} />
            </div>    
        </div>
    </React.Fragment>
}

export default Content