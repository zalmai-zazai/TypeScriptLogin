import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const UseContextReducer = () => {
  const { state, dispatch } = useContext(ThemeContext);
  console.log(state);
  return (
    <div className="useContext">
      <button
        className="theme"
        onClick={() => dispatch({ type: 'CHANGE_THEME' })}
      >
        Change Theme
      </button>
      <button
        className="font"
        onClick={() => dispatch({ type: 'CHANGE_FONTSIZE', payload: 20 })}
      >
        Change Font Size
      </button>
    </div>
  );
};

export default UseContextReducer;
