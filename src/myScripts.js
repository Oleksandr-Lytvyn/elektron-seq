export function sendMiddleC() {
  let portID = '';
  navigator
    .requestMIDIAccess()
    .then(function (midiAccess) {
      // Получение доступных выходных портов
      const outputs = midiAccess.outputs.values();
      for (let output of outputs) {
        console.log('Идентификатор порта:', output.id);
        portID = output.id;
      }
      const noteOnMessage = [0x90, 60, 0x7f]; // note on, middle C, full velocity
      const output = midiAccess.outputs.get(portID);
      output.send(noteOnMessage); // sends the message.
      console.log('piu!!!');
    })
    .catch(function (error) {
      console.log('MIDI доступ недоступен: ' + error);
    });
}
