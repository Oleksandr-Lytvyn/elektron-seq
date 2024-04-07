import React, { useState, useEffect, useContext } from 'react';
import { MyContext } from '../contextProvider/context';

export const Trig = ({ position }) => {
  const [color, setColor] = useState('red');
  const [bgColor] = useState('black');
  const { value } = useContext(MyContext);

  useEffect(() => {
    switch (value.lengthNote) {
      case '4':
        if (position % 4 === 1 && position === value.sixteensNote) setColor('red');
        setTimeout(() => {
          setColor('white');
        }, 100);
        break;
      case '8':
        if (position % 2 === 1 && position === value.sixteensNote) setColor('red');
        // setBgColor('red');
        setTimeout(() => {
          setColor('white');
          // setBgColor('black');
        }, 100);
        break;
      case '16':
        if (position === value.sixteensNote) setColor('red');
        // setBgColor('red');
        setTimeout(() => {
          setColor('white');
          // setBgColor('black');
        }, 100);
        break;
      default:
        // действие по умолчанию
        break;
    }
  }, [position, value.lengthNote, value.sixteensNote]);

  return (
    <>
      <div className="trig" style={{ color: color, backgroundColor: bgColor }}>
        {position}
      </div>
    </>
  );
};

export const TrigsBox = ({ children }) => {
  return <div className="trigs-box">{children}</div>;
};
