import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import chevronImg from '../../assets/chevron-collapse.png';
import './collapse.scss';

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState('0px');
  const contentRef = useRef(null);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      setHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setHeight('0px');
    }
  }, [isOpen]);

  return (
    <div className="collapse">
      <button
        className={`collapse-header ${isOpen ? 'open' : ''}`}
        onClick={toggleCollapse}
      >
        {title}
        <img
          className={`chevron ${isOpen ? 'open' : ''}`}
          src={chevronImg}
          alt="Chevron icon"
        />
      </button>
      <div
        ref={contentRef}
        className="collapse-content"
        style={{
          maxHeight: height,
        }}
      >
        <div className="collapse-inner">
          {children}
        </div>
      </div>
    </div>
  );
};

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Collapse;
