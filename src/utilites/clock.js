const MidiClock = require('midi-clock');
let clock;

export const startClock = (context, tempo, plusNote) => {
  if (clock === undefined) clock = MidiClock(context); // Создаем новый экземпляр clock только если он еще не был создан

  clock.start();

  clock.on('position', function (position) {
    var microPosition = position % 96; // В такте 96 шестнадцатых нот

    if (microPosition % 24 === 0) {
      // console.log('Beat:', position / 96); // Выводим номер текущей четвертной ноты
      plusNote('Beat');
    }

    if (microPosition % 12 === 0) {
      // console.log('8th:', position / 96); // Выводим номер текущей восьмой ноты
      plusNote('8th');
    }

    if (microPosition % 6 === 0) {
      // console.log('16-th:', position / 96); // Выводим номер текущей 16-й ноты
      plusNote('16-th');
    }

    clock.setTempo(70);
  });

  // setTimeout(function () {
  //   clock.setTempo(tempo);
  // }, 10000);
};

export const stopClock = () => {
  clock.removeAllListeners();
  clock.stop();
};
