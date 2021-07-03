import React from 'react'
// Generate genre as a string with all genres separated by commas
function Genre(props){
    let result = ''
    for(let i = 0; i < props.data.length; i++){
        if(i === 0){
            result += props.data[i]
        }
        else{
            result = result + ", " + props.data[i]
        }
    }
    return <h4>Genre : {result}</h4>
}
export default Genre