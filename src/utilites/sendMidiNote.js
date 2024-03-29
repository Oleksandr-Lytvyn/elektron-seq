export function sendMidiNote(seq, sixteens) {
  // делаем счётчик на 16 шагов
  let count = 0;
  if (count === 16) {
    count = 0;
  }

  //  высчитываем обьект(ноту) для следующего шага
  let note = {};
  seq.forEach((element) => {
    if (sixteens === 1) {
      note = element;
      return;
    }
    if (element.length === 16) {
      count += 1;
    }
    if (element.length === 8) {
      count += 2;
    }
    if (count === sixteens) {
      note = element;
    }
  });

  // console.log(note);

  let portID = '';
  navigator
    .requestMIDIAccess()
    .then(function (midiAccess) {
      // Получение доступных выходных портов
      const outputs = midiAccess.outputs.values();
      for (let output of outputs) {
        // console.log('Идентификатор порта:', output.id);
        portID = output.id;
      }
      const noteOnMessage = [0x90, 60, 0x7f]; // note on, middle C, full velocity
      const output = midiAccess.outputs.get(portID);
      output.send(noteOnMessage); // sends the message.
      // console.log('piu!!!');
    })
    .catch(function (error) {
      console.log('MIDI доступ недоступен: ' + error);
    });
}
