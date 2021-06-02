import React from 'react';

import { Modal } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

const ModalDiamond = ({ handleClose, currentImage, show, loadingImg, loading }) => {

    return (
        <>
            < Modal
                dialogClassName="modal-landing"
                show={show}
                onHide={handleClose}
                size="sm"
                centered
            >
                <Modal.Body>
                    {currentImage !== "" && (
                        <div className="container-image">
                            <Image onLoad={loadingImg} fluid src={currentImage} alt="Image art" />
                            {   (!loading) &&
                                <button className="btn-close" onClick={handleClose}>
                                    <i className="fa fa-remove btn-close-icon"></i>
                                </button>
                            }
                        </div>
                    )}

                </Modal.Body>
            </Modal >
        </>
    );
}

export default ModalDiamond;