import React from 'react';
import './Book.css';

function Book({ image, title, description, characters, onButtonClick }) {
  const handleClick = () => {
    console.log('წიგნის სათაური:', title);
    console.log('პერსონაჟები:', characters.join(', '));
    
    // Call the function passed as prop
    if (onButtonClick) {
      onButtonClick(title, characters);
    }
  };

  return (
    <div className="book-card">
      <div className="book-image-container">
        <img src={image} alt={title} className="book-image" />
      </div>
      <div className="book-content">
        <h2 className="book-title">{title}</h2>
        <p className="book-description">{description}</p>
        <div className="book-characters">
          <h3>პერსონაჟები:</h3>
          <ul className="characters-list">
            {characters.map((character, index) => (
              <li key={index}>{character}</li>
            ))}
          </ul>
        </div>
        <button className="book-button" onClick={handleClick}>
          ინფორმაციის ჩვენება
        </button>
      </div>
    </div>
  );
}

export default Book;

