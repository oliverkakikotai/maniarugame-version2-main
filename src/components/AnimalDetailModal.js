import React from 'react';
import { useParams } from 'react-router-dom';

const AnimalDetailModal = ({ animal, onClose }) => {
  if (!animal) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        <h2>{animal.name}</h2>
        <p>{animal.description}</p>
      </div>
    </div>
  );
};

export default AnimalDetailModal;
