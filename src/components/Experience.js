import React, { useState } from 'react'
import { FaStar } from "react-icons/fa";

const colors = {
    teal: "#11C4B0",
    grey: "#D3D3D3"
  }

const Experience = () => {

    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    return (
        <div className="Experience">

            <p className="Experience-Header">
            Rate your experience from 0 to 5 stars:
            </p>

            <div className='Experience-Stars-Group'>

                {[ ...Array(5)].map((star, i) => {
                    const ratingValue = i + 1;

                    return (
                    <label>

                        <input 
                        type="radio" 
                        name='rating' 
                        value={ratingValue} 
                        onClick={() => setRating(ratingValue)}
                        />

                        <FaStar 
                        className="Star-Experience"
                        color={ratingValue <= (hover || rating) ? colors.teal : colors.grey}
                        onMouseEnter={()=> setHover(ratingValue)}
                        onMouseLeave={()=> setHover(null)}
                        />

                    </label>
                    );
                })}

            </div>

            {/* <p>The rating is {rating}</p> */}

            <hr className='Line-Experience' />

        </div>
    )
}

export default Experience;
