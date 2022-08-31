import React from "react";

const PopupWithForm = ({name, isOpen, onClose, title, children, buttonText, onSubmit}) => {
  return (
    <div
      className={`popup popup_type_${name} ${
        isOpen ? "popup_opened" : ""
      }`}
      onClick={() => {
        onClose();
      }}
    >
      <div className="popup__content" onClick={(e) => e.stopPropagation()}>
        <button
          aria-label="close"
          type="button"
          className="popup__clouse-button"
          onClick={() => {
            onClose();
          }}
        ></button>
        <form
          className="popup__form"
          name={`${name}`}
          onSubmit={onSubmit}
        >
          <h2 className="popup__title">{`${title}`}</h2>
          {children}
          <button type="submit" className="popup__save-button">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopupWithForm;
