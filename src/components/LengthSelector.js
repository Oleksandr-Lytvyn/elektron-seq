import { MyContext } from '../contextProvider/context';
import { useContext } from 'react';

export const LengthSelector = () => {
  const { setLengthNote } = useContext(MyContext);

  const onChange = (e) => {
    console.log(e.target.value);
    setLengthNote(e.target.value);
  };

  return (
    <div>
      <label htmlFor="positionSelector">note length</label>
      <select id="positionSelector" onChange={onChange}>
        <option value="4">4</option>
        <option value="8">8</option>
        <option value="16">16</option>
      </select>
    </div>
  );
};
