import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ title, subtitle, icons, bgColor, navigateTo }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    if (navigateTo) {
      navigate(navigateTo); // Navigate to the specified route
    }
  };

  return (
    <div
      className="card flex items-center justify-between transform transition-transform duration-300 hover:scale-105"
      style={{
        backgroundColor: bgColor,
        padding: '10px',
        borderRadius: '12px',
        color: '#333',
        height: '8rem',
        cursor: 'pointer',
      }}
      onClick={handleCardClick} // Attach the click handler
    >
      {/* Left half: Text content */}
      <div className="text-content flex-1">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-600">{subtitle}</p>
      </div>

      {/* Right half: Icons */}
      <div className="icons flex h-32">
        {icons.map((icon, index) => (
          <img
            key={index}
            src={icon}
            alt={`${title} icon`}
            className="w-26 justify-center h-full"
          />
        ))}
      </div>
    </div>
  );
};

export default Card;
