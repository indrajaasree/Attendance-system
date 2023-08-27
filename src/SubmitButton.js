import React from 'react';
import './index.css';

function SubmitButton(props) {
  // Define a function to handle the click event
  const handleClick = () => {
    // Call the onSubmit prop function that is passed from the App component
    props.onSubmit();
  };

  return (
    <div className="button-container">
      <button className="submit-button" onClick={handleClick}>
        Submit
      </button>
    </div>
  );
}

export default SubmitButton;
