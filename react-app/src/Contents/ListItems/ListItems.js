import React from 'react'
import Genre from './Genre'
import './ListItems.css'

function ListItems(props){
    const data = props.itemList
    return <React.Fragment>
        {/* Iterate over the items in our data one by one and render the desired result */}
        {data.map((item) => {
            return <React.Fragment>
                <div class="movie-container" >
                    <div class="movie-img" style={{backgroundImage:'url('+ item.url + ')'}}></div>
                    <div class="movie-info">
                        <div class="movie-name">
                            <h4 value={item.id}>{item.name}</h4>
                        </div>
                        <div class="movie-rating">
                            <h5>Rating : {item.rating} / 10</h5>
                        </div>
                        {/* Since item.genre is an array, we call another component to render the genres */}
                        <div class="movie-genre">
                            <Genre data={item.genre} />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        })}
    </React.Fragment>
}

export default ListItems