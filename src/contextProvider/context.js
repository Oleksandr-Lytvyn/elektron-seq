import { createContext, useState } from 'react';

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [quarterNote, setQuarterNote] = useState(1);
  const [eighthNote, setEighthNote] = useState(1);
  const [sixteensNote, setSixteensNote] = useState(1);
  const [tempo, setTempo] = useState(97);
  const [lengthNote, setLengthNote] = useState('16');
  const [key, setKey] = useState('tonic');
  const [seq, setSeq] = useState([]);

  const resetNotes = () => {
    setQuarterNote(1);
    setEighthNote(1);
    setSixteensNote(1);
  };

  if (quarterNote > 4) {
    resetNotes();
  }

  const plusNote = (length) => {
    switch (length) {
      case 'Beat':
        setQuarterNote((prevQuarterNote) => prevQuarterNote + 1);
        break;
      case '8th':
        setEighthNote((prevEighthNote) => prevEighthNote + 1);
        break;
      case '16-th':
        setSixteensNote((prevSixteensNote) => prevSixteensNote + 1);
        break;
      default:
    }
  };

  const getTempo = (t) => {
    setTempo(t.toString());
  };

  const value = {
    quarterNote,
    eighthNote,
    sixteensNote,
    tempo,
    lengthNote,
    seq,
    key,
  };

  return (
    <MyContext.Provider value={{ value, plusNote, getTempo, resetNotes, setLengthNote, setSeq, setKey }}>
      {children}
    </MyContext.Provider>
  );
};
