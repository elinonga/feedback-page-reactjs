import React, { useState } from 'react'
import phone from '../images/phone.png';

const PopUp = () => {

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
      };

      
    return (
        <div className='PopUp'>

          <button onClick={toggleModal} className="btn-modal">
          Send feedback
          </button>
    
          {modal && (
            <div className="modal">
              <div onClick={toggleModal} className="overlay"></div>
              <div className="modal-content">
              <img src={phone} className="Phone-Modal" alt="phone" />
                <p className="Text-Modal">
                Thank you for your message! <br />
                We will be in contact soon.
                </p>
                <button className="close-modal" onClick={toggleModal}>
                  CLOSE
                </button>
              </div>
            </div>
          )}
        
        </div>
      )
}

export default PopUp;
