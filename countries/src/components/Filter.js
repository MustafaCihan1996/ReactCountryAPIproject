import React from 'react';

const Filter = ({ filter, handleFilter }) => (
  <div>
    <h2>Welcome to Countrypedia!</h2>
    <p>Enter a country name to get more info:</p>
    <form>
      <div>
        <input 
          value={filter} 
          onChange={handleFilter}
        />
      </div>
    </form>
  </div>
)

export default Filter;
