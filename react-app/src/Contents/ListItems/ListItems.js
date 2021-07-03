import React from 'react'
import Genre from './Genre'
import ReactTooltip from 'react-tooltip'
import './ListItems.css'

function ListItems(props){
    const data = props.itemList

    // Use the url to get details of particular show or movie
    const getDetails = async (url, type) => {
        const response = await fetch(url)
        const results = await response.json()
        // Only movie has imdb page id, so we go to imdb only for movie; and go to the tv network for the tv shows
        if(type === "movie"){
            window.open(process.env.REACT_APP_IMDB_URL + results.imdb_id)
        }
        else{
            window.open(results.homepage)
        }
    }

    // Function that gets called when name or poster is clicked
    const handleClick = (id, type) => {
        // Generate URL depending on movie or tv
        const detailsUrl = process.env.REACT_APP_MOVIEDB_DETAIL_URL + type + "/" + id + "?api_key=" + process.env.REACT_APP_API_KEY
        getDetails(detailsUrl, type)
    }

    // Function that takes the user to the youtube search page for the trailer
    const searchTrailer = (query) => {
        const searchUrl = process.env.REACT_APP_YOUTUBE_URL + query + " trailer"
        window.open(searchUrl)
    }

    return <React.Fragment>
        {/* Iterate over the items in our data one by one and render the desired result */}
        {data.map((item) => {
            return <React.Fragment>
                <div class="item-container" >
                    <div class="item-img" style={{backgroundImage:'url('+ item.url + ')'}} 
                    onClick={() => handleClick(item.id, props.type)}
                    data-tip data-for={item.name}></div>
                    <ReactTooltip key={item.id} id={item.name} place="top">
                        <span>Click for more information</span>
                    </ReactTooltip>
                    <div class="item-info">
                        <div class="item-name">
                            <h4 value={item.id} onClick={() => handleClick(item.id, props.type)} data-tip data-for={item.name}>{item.name}</h4>
                            <ReactTooltip key={item.id} id={item.name} place="top">
                                <span>Click for more information</span>
                            </ReactTooltip>
                        </div>
                        <div class="item-rating">
                            <h5>Rating : {item.rating} / 10</h5>
                        </div>
                        {/* Since item.genre is an array, we call another component to render the genres */}
                        <div class="item-genre">
                            <Genre data={item.genre} />
                            <button onClick={() => {searchTrailer(item.name)}}>Watch Trailer</button>
                            {props.type === "tv" && <button style={{marginLeft:"20px"}} onClick={() => handleClick(item.id, props.type)}>Watch Now</button>}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        })}
    </React.Fragment>
}

export default ListItems