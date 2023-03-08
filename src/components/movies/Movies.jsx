import React from 'react'
import "./style.css"
function Movies(pro) {

    return (
        <div className='movie'>
            <div>
                <div>
                    <img src={pro.val.Poster} alt="" /><br />
                </div>
                <p><span>Name : </span>{pro.val.Title}</p>
            </div>


        </div>
    )
}

export default Movies