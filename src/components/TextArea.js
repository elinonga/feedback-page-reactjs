
import React from 'react'

const TextArea = () => {

    return (
        <div className='TextArea'>

            {/* Text Header */}
            <p className="TextArea-Header">
            Please leave a comment about your experience below:
            </p>


            {/* Feedback from customer */}
            <textarea className='Feedback-Box'
            placeholder="Type your comment here..."
            />

        </div>
    )
}

export default TextArea;
