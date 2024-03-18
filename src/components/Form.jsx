import { useContext, useState } from 'react';
import { MyContext } from '../contextProvider/context';

export const MainForm = () => {
  const [inputTempo, setInputTempo] = useState(97);
  const { value, getTempo } = useContext(MyContext);
  function onChange(e) {
    setInputTempo(e.target.value);
    getTempo(e.target.value);
    console.log(value);
  }
  return (
    <form>
      <input type="text" name="tempo" value={inputTempo} onChange={onChange}></input>
    </form>
  );
};
