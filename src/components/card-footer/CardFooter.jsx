import React from 'react'
import "./CardFooter.css";

const CardFooter = () => {
    return (
        <div className="card-footer">
            <hr></hr>
            <p className="textauthor">
                <img className="imagefooter" src="././images/image-avatar.png" loading='lazy' width="25" height="25" />
                Creation of <span className="card-footer_author">Jules Wivern</span> </p>
        </div>
    )
}

export default CardFooter