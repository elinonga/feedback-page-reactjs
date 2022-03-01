import React, { useState } from 'react'
import { FaStar } from "react-icons/fa";

const colors = {
    teal: "#11C4B0",
    grey: "#D3D3D3"
  }

const CustomerService = () => {

    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    return (
        <div className='CustomerService'>

            <p className="CustomerService-Header">
            How satisfied are you with our customer service?
            </p>

            <div className='CustomerService-Stars-Group'>

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
                        className="Star-CustomerService"
                        color={ratingValue <= (hover || rating) ? colors.teal : colors.grey}
                        onMouseEnter={()=> setHover(ratingValue)}
                        onMouseLeave={()=> setHover(null)}
                        />

                    </label>
                    );
                })}

            </div>

            <hr className='Line-CustomerService' />

        </div>
    )
}

export default CustomerService;
