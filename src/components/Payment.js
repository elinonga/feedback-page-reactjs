import React, { useState } from 'react'
import { FaStar } from "react-icons/fa";

const colors = {
    teal: "#11C4B0",
    grey: "#D3D3D3"
  }

const Payment = () => {

    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    return (
        <div className='Payment'>

            <p className="Payment-Header">
            How satisfied are you with the payment process?
            </p>

            <div className='Payment-Stars-Group'>

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
                        className="Star-Payment"
                        color={ratingValue <= (hover || rating) ? colors.teal : colors.grey}
                        onMouseEnter={()=> setHover(ratingValue)}
                        onMouseLeave={()=> setHover(null)}
                        />

                    </label>
                    );
                })}

            </div>

            <hr className='Line-Payment' />

        </div>
    )
}

export default Payment;
