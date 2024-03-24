import ReactModal from 'react-modal';

const Modal = ({ isOpen, onRequestClose, children }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="modal-content relative flex justify-end"
      overlayClassName="modal-overlay"
    >
      {children}
    </ReactModal>
  );
};

export default Modal;