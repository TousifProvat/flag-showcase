// import { useState } from 'react';

// css
import './header.scss';

// components
import Switch from '../subComponents/switch/Switch';

//icons

export default function Header() {
  // let [darkMode, setDarkMode] = useState(true);

  return (
    <header>
      <div className="container">
        <nav className="navbar">
          <h2 className="title">Where in the world?</h2>
          <Switch />
        </nav>
      </div>
    </header>
  );
}
