export const midiListener = () => {
  navigator.requestMIDIAccess().then(onMIDISuccess);

  function onMIDISuccess(midiAccess) {
    console.log('then');
    for (var input of midiAccess.inputs.values()) input.onmidimessage = getMIDIMessage;
  }
};

function getMIDIMessage(msg) {
  console.log(msg.data);
}
