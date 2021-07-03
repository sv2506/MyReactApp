import React, { useState, useEffect} from 'react'
import ListItems from '../ListItems/ListItems'

function GetTrendingList(props){
    // Generate the url based on what list we want to retrieve - Movie or TV
    const url = process.env.REACT_APP_MOVIEDB_URL + props.type + "/day?api_key=" + process.env.REACT_APP_API_KEY
    const [dataList, setDataList] = useState([])

    // Function that requests the API for the trending movie list for the day
    const getData = async () => {
        const response = await fetch(url)
        const results = await response.json()
        // Iterate over the results and retrieve only the information that we want to display
        const myList = results.results.map((item) => {
            const url = process.env.REACT_APP_POSTER_URL + item.poster_path
            const name= item.title || item.name
            const rating = item.vote_average
            const genre = item.genre_ids
            const id = item.id
            return {url, name, rating, genre, id}
        })
        // This hook sets the dataList that we need
        setDataList(myList)
    }

    // This hook will invoke the getMovies function on initial page load
    useEffect(() => {
        getData()
    }, [])

    return <React.Fragment>
        {/* Call another component to display the list of movies/tv */}
        <ListItems itemList={dataList} type={props.type}/>
    </React.Fragment>
}

export default GetTrendingList