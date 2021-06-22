import { useState, useEffect } from 'react';

// css
import './switch.scss';

// icons
import { ReactComponent as Moon } from '../../../assets/icons/Moon.svg';

export default function Switch() {
  let [darkMode, setDarkMode] = useState(true);

  const swithcMode = () => {
    setDarkMode((currDark) => !currDark);
    document.body.classList.toggle('light');
  };
  useEffect(() => {
    localStorage.setItem('darkMode', darkMode ? 'true' : 'false');
  }, [darkMode]);

  return (
    <div className="switch-mode" onClick={swithcMode}>
      <div className="icon">
        <Moon
          fill={darkMode ? 'hsl(0, 0%, 100%)' : 'none'}
          stroke={darkMode ? 'none' : 'hsl(200, 15%, 8%)'}
        />
      </div>
      <div className="mode-name">Dark Mode</div>
    </div>
  );
}
