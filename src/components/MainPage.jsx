import { useContext, useEffect, useState } from 'react';
import { startClock, stopClock } from '../utilites/clock';
import { MyContext } from '../contextProvider/context';
import { MainForm } from './Form';
import { Trig, TrigsBox } from './Trigs';
import { createSeq } from '../utilites/seq';
import { LengthSelector } from './LengthSelector';
import { sendMidiNote } from '../utilites/sendMidiNote';
import { Seq } from './Seq';

export const MainPage = () => {
  const [audioContext, setAudioContext] = useState(null);

  const { value, plusNote, resetNotes, setSeq } = useContext(MyContext);

  const items = Array.from({ length: 16 }, (v, i) => i);

  function startPlay() {
    startClock(audioContext, value.tempo, plusNote);
  }
  function stopPlay() {
    stopClock(audioContext);
    resetNotes();
  }

  const createAudioContext = () => {
    // Создаем AudioContext в ответ на действие пользователя
    const context = new (window.AudioContext || window.webkitAudioContext)();
    setAudioContext(context);
    console.log(context);
  };

  const createStuff = () => {
    const newStuff = createSeq(value.key);
    setSeq(newStuff);
    console.log(newStuff);
  };

  useEffect(() => {
    sendMidiNote(value.seq, value.sixteensNote);
    // console.log(value.sixteensNote);
  }, [value.seq, value.sixteensNote]);

  return (
    <>
      <MainForm />
      <button onClick={startPlay}>start midi</button>
      <button onClick={stopPlay}>stop midi</button>
      <button onClick={createAudioContext}>allow</button>
      <button onClick={createStuff}>create</button>
      <LengthSelector />
      <TrigsBox>
        {items.map((index) => {
          return <Trig key={index} position={index + 1} />;
        })}
      </TrigsBox>
      <Seq />
    </>
  );
};
