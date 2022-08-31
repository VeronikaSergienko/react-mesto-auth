import React from "react";

function ImagePopup(props) {
  return (
    <div
      className={`popup popup_type_place-image ${
        props.card.isOpen ? "popup_opened" : ""
      }`}
      onClick={() => {
        props.onClose();
      }}
    >
      <div
        className="popup__content-image"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          aria-label="close"
          type="button"
          className="popup__clouse-button"
          onClick={() => {
            props.onClose();
          }}
        ></button>
        <img
          className="popup__place-image"
          src={`${props.card.card.link}`}
          alt={`${props.card.card.name}`}
        />
        <p className="popup__place-title">{`${props.card.card.name}`}</p>
      </div>
    </div>
  );
}

export default ImagePopup;
