import React from 'react';


const OptionModal = (props) => (

    <Modal
        isOpen={!!props.selectedOption}
        contentLabel="Selected Option" 
        onRequestClose={props.handleCloseModal}
        closeTimeoutMS={200}
        className="opt-modal"
    >
        <h3 className="opt-modal__title">Hello Modal</h3>
        {props.selectedOption && <p className="opt-modal__body">{props.selectedOption}</p>}
        <button className="button" onClick={props.handleCloseModal}>Close</button>
    </Modal>
)

export default OptionModal;