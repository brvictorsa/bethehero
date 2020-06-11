import React, { useState } from 'react';

import './styles.css';

export default function Alert({ id = 'alert', message='', show = false }) {
  const [openModal, setOpenModal] = useState(show);  

  return (
    <>
    {openModal && (
      <div className="overlay">
        <div className="overlay-content">
          <div>
            <button className="button" onClick={() => setOpenModal(false)}>X</button>
            <p>{message}</p>
          </div>
        </div>
      </div>
    )}
    </>
  );
}
