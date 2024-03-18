import React, { useState, useEffect, useContext } from 'react';
import { MyContext } from '../contextProvider/context';

const PulsatingCircle = ({ pulse }) => {
  const [radius, setRadius] = useState(30);
  const { value } = useContext(MyContext);

  useEffect(() => {
    setRadius(50);
    setTimeout(() => {
      setRadius(30);
    }, 100);
  }, [value.quarterNote]);

  return (
    <div>
      <svg width="200" height="200">
        <circle cx="100" cy="100" r={radius} fill="blue" />
      </svg>
    </div>
  );
};

export default PulsatingCircle;
