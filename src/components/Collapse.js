import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import '../styles/collapse.scss';

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSection = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <div className="sectionHeader" onClick={toggleSection}>
        {title}
        <FontAwesomeIcon
          icon={faChevronUp}
          className={`arrow ${isOpen ? 'rotate' : ''}`}
        />
      </div>
      <div
        className={`sectionContent ${isOpen ? 'expanded' : ''}`}
        style={{
          maxHeight: isOpen ? '300px' : '0',
          padding: isOpen ? '10px' : '0 10px',
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Collapse;
