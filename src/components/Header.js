import React from 'react';
import "../styles/Header.css";

function Header () {
    return (
      <div className="header">
        <h1>Employee Directory</h1>
        <p>Click on name of columns to filter by heading or use the search box to narrow your results.</p>
      </div>
    )
  }

export default Header;