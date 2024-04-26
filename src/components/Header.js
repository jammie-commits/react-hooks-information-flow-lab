import React from 'react'

function Header(props) {
  return (
    <header>
        <h1>Shopping List</h1>
        <button onClick={props.onDarkModeClick}>
            {props.isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
    </header>
  )
}

export default Header;