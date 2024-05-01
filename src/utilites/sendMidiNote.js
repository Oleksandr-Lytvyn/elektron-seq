export function sendMidiNote(seq, sixteens) {
  // делаем счётчик на 16 шагов
  let count = 0;
  if (count === 16) {
    count = 0;
  }

  //  высчитываем обьект(ноту) для следующего шага
  let note = {};
  seq.forEach((element, index) => {
    if (sixteens === 1) {
      note = element;
      // console.log(sixteens, element);
      return;
    }
    if (element.length === 16) {
      count += 1;
      // console.log(element.length);
    }
    if (element.length === 8) {
      count += 2;
      // console.log(element.length);
    }
    if (count === sixteens) {
      note = element;
      // console.log(count, sixteens);
    }
    // console.log(index, count, element.note, element.length);
  });

  console.log(note);

  const onMessage = [0x90, note.note, 0x7f];
  console.log(sixteens, onMessage);

  let portID = '';
  if (onMessage[1] !== undefined) {
    // console.log(sixteens, message);
  }
  navigator
    .requestMIDIAccess()
    .then(function (midiAccess) {
      // Получение доступных выходных портов
      const outputs = midiAccess.outputs.values();
      for (let output of outputs) {
        // console.log('Идентификатор порта:', output.id);
        portID = output.id;
      }
      // const noteOnMessage = [0x90, 60, 0x7f]; // note on, middle C, full velocity
      const output = midiAccess.outputs.get(portID);
      output.send(onMessage);
    })
    .catch(function (error) {
      // console.log('MIDI доступ недоступен: ' + error);
    });
}
