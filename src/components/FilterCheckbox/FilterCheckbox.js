import React from "react";
import './FilterCheckbox.css';

function FilterCheckbox({ checkbox }) {
  const [isChange, setIsChange] = React.useState(true);

  function handleChange() {
    setIsChange(!isChange);
    checkbox(isChange)
    
  }
    return (
        <label className="checkbox">
          <input type="checkbox" className="invisible-checkbox" onChange={handleChange} />
          <span className="visible-checkbox"></span>
          <span className="checkbox__text">Короткометражки</span>
        </label>
    )
}

export default FilterCheckbox;