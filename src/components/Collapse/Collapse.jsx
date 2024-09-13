import { useState } from 'react';
import PropTypes from 'prop-types';
import './collapse.scss';

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <button
        className={`collapse-header ${isOpen ? 'open' : ''}`}
        onClick={toggleCollapse}
      >
        {title}
        <span className="chevron"></span>
      </button>
      {isOpen && <div className="collapse-content">{children}</div>}
    </div>
  );
};

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Collapse;
