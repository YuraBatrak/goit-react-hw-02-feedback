import React from 'react';
import Proptypes from 'prop-types';
import shortid from 'shortid';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map(option => (
        <button
          className={s.buttons}
          type="button"
          name={option}
          key={shortid.generate()}
          onClick={onLeaveFeedback}
        >
          {option}
        </button>
      ))}
    </>
  );
};
FeedbackOptions.prototypes = {
  options: Proptypes.array.isRequired,
  onLeaveFeedback: Proptypes.func.isRequired,
};
export default FeedbackOptions;
