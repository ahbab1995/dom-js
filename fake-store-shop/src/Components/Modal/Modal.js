import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const ModalDetails = ({product}) => {
    const {image,title,price,description,category} = product;
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
                <>
                <Button variant="primary" onClick={handleShow}>
               Details
                </Button>
        
                <Modal show={show} onHide={handleClose}>
                <img className='w-50 mx-auto' src={image} alt="" />
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body><h5>Price: ${price}</h5></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                    Close
                    </Button>
                   
                </Modal.Footer>
                </Modal>
            </>
         )
      
};

export default ModalDetails;