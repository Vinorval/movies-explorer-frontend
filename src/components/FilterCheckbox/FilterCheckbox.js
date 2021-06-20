import './FilterCheckbox.css';

function FilterCheckbox() {
    return (
        <label className="checkbox">
          <input type="checkbox" className="invisible-checkbox" />
          <span className="visible-checkbox"></span>
          <span className="checkbox__text">Короткометражки</span>
        </label>
    )
}

export default FilterCheckbox;