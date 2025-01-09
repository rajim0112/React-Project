import React, { useState } from 'react'

const Modal = () => {
    const [modalOpen, setModalOpen] = useState(false)

    const handleModal = () => {
        setModalOpen(true)
    }
    const handleClose = () => {
        setModalOpen(false)
    }
  return (
    <>
    <button onClick={handleModal}>Open</button>
    {modalOpen &&
        <div className='modalContainer'>
            <div className='modalCard'>
                <div className='closeBtn' onClick={handleClose}>X</div>
            </div>
        </div>
    }
    </>
  )
}

export default Modal