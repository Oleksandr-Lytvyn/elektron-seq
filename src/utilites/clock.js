const MidiClock = require('midi-clock');
let clock;

export const startClock = (context, tempo, plusNote) => {
  if (clock === undefined) clock = MidiClock(context); // Создаем новый экземпляр clock только если он еще не был создан

  clock.start();

  clock.on('position', function (position) {
    console.log(position);
  });

  // setTimeout(function () {
  //   clock.setTempo(tempo);
  // }, 10000);
};

export const stopClock = () => {
  clock.removeAllListeners();
  clock.stop();
};
