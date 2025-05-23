import css from "./ImageModal.module.css";
import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");
export default function ImageModal({ isOpen, onClose, photo }) {
  if (!photo) return null;
  return (
    <Modal
      className={css.modal}
      overlayClassName={css.overlay}
      isOpen={isOpen}
      onRequestClose={onClose}
      shouldCloseOnOverlayClick={true}
      ariaHideApp={false}
    >
      <img
        src={photo.urls.regular}
        alt={photo.description}
        className={css.photoRegular}
      />
    </Modal>
  );
}
