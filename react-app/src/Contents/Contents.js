import React, { useState } from 'react'
import GetTrendingList from './GetTrendingList/GetTrendingList'
import './Contents.css'

function Content(){
    const [showDay, setShowDay] = useState(true)
    const [pageMovie, setPageMovie] = useState(1)
    const [pageTv, setPageTv] = useState(1)
    const forWindow = showDay ? "DAY" : "WEEK"
    const handleClick = () => {
        setShowDay(!showDay)
        setPageMovie(1)
        setPageTv(1)
    }
    return <React.Fragment>
        <div class="choice-bar">
            {!showDay && <button class="hoverable" id="day" onClick={() => handleClick()}>Get Trending Movies for the Day</button>}
            {showDay && <button class="hoverable" id="week" onClick={() => handleClick()}>Get Trending Movies for the Week</button>}
        </div>
        <div class="content-container">
            <div class="movies">
                <h4>TRENDING MOVIES OF THE {forWindow}</h4>
                {/* Component to get list of movies and display it */}
                <GetTrendingList type={"movie"} for={showDay} page={pageMovie}/>
                <div class="footer-class">
                    {(pageMovie !== 1) && <button onClick={() => setPageMovie(pageMovie - 1)}>Previous</button>}
                    {(pageMovie < 1000) && <button onClick={() => setPageMovie(pageMovie + 1)}>Next</button>}
                </div>
            </div>
            <div class="tv">
                <h4>TRENDING TV SHOWS OF THE {forWindow}</h4>
                {/* Component to get list of TV shows and display it */}
                <GetTrendingList type={"tv"} for={showDay} page={pageTv}/>
                <div class="footer-class">
                    {(pageTv !== 1) && <button onClick={() => setPageTv(pageTv - 1)}>Previous</button>}
                    {(pageTv < 1000) && <button onClick={() => setPageTv(pageTv + 1)}>Next</button>}
                </div>
            </div>    
        </div>
    </React.Fragment>
}

export default Content