import { useState } from 'react';

const backgrounds = {
  'Rome': 'https://images.unsplash.com/photo-1519681393784-d120267933ba',
  'Da Vinci Library': 'https://images.unsplash.com/photo-1600881769178-989f17e92824',
  'Space': 'https://images.unsplash.com/photo-1497493292307-31c376b6e479',
};

const setBackground = (backgroundUrl) => {
  document.body.style.backgroundImage = `url(${backgroundUrl})`;
};

const BackgroundSelector = () => {
  const [backgroundOption, setBackgroundOption] = useState('Rome');

  const handleBackgroundOptionChange = (e) => {
    setBackgroundOption(e.target.value);
  };

  const handleBackgroundChange = () => {
    if (backgroundOption === 'Customize') {
      const customBackgroundUrl = prompt('Enter the URL of your custom background image:');
      if (customBackgroundUrl) {
        setBackground(customBackgroundUrl);
      }
    } else {
      setBackground(backgrounds[backgroundOption]);
    }
  };

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex flex-col space-y-2">
        <label htmlFor="background-select">Choose a background:</label>
        <select id="background-select" value={backgroundOption} onChange={handleBackgroundOptionChange}>
          {Object.keys(backgrounds).map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
          <option value="Customize">Customize</option>
        </select>
      </div>
      <button onClick={handleBackgroundChange}>Set Background</button>
    </div>
  );
};

export default BackgroundSelector;
