import './FilterPanel.css'

const FilterPanel = ({ handleStatus, handleType }) => {
  return (
    <div>
      <div className="select">
        <select name="gender"
         className="filterGender"
          onChange={handleStatus}>
          <option  value="all">All</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <select name='type'
        className='filterType'
          onChange={handleType}>
          <option  value="all">All</option>
          <option value="sweather">Sweather</option>
          <option value="pants">Pants</option>
          <option value="dress">Dress</option>
          <option value="skirt">Skirt</option>
        </select>
      </div>
    </div>
  );
}

export default FilterPanel;