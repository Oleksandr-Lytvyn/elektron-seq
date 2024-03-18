import React, { useState, useEffect, useContext } from 'react';
import { MyContext } from '../contextProvider/context';

export const Trig = ({ position }) => {
  // console.log(position);

  const [color, setColor] = useState('red');
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
        setTimeout(() => {
          setColor('white');
        }, 100);
        break;
      case '16':
        if (position === value.sixteensNote) setColor('red');
        setTimeout(() => {
          setColor('white');
        }, 100);
        break;
      default:
        // Выполнить действие по умолчанию
        break;
    }
  }, [position, value.lengthNote, value.sixteensNote]);

  return (
    <>
      <div className="trig" style={{ color: color }}>
        {position}
      </div>
    </>
  );
};

export const TrigsBox = ({ children }) => {
  return <div className="trigs-box">{children}</div>;
};
