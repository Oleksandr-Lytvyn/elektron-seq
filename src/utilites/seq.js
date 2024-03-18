import { probability } from './probability';

//const gamma = массив булей с до-маж гаммой. Читая с выбранного элемента получим все лады:
// 0 - ионийский(МАЖОР), 1 - дорийский, 2 - фриийский, 3 - лидийский, 4 - миксолидийский, 5 - эолийский(МИНОР), 6 - локрийский
//
// let notes = массив нот в циферном обозначении соответствующий запросу gmm. Цифры получаем из индексов массива gamma
// let randomizedNotes = массив обьектов - нот со всеми нужными параметрами для секвенции
const gamma = [true, false, true, false, true, true, false, true, false, true, false, true];

export const createSeq = (gmm) => {
  let notes = [];
  let randomizedNotes = [];

  // create notes array
  notes = gamma
    .reduce((acc, note, index) => {
      switch (gmm) {
        case 'tonic':
          if (note === true) {
            return [...acc, index]; // Добавляем индекс в массив, если условие выполняется
          }
          return acc; // Возвращаем текущий массив без изменений, если условие не выполняется
        default:
          return [...acc, index]; // Всегда добавляем индекс в массив для других случаев
      }
    }, [])
    .map((index) => index + 1); // Преобразуем индексы в искомый формат
  // console.log(notes);

  // create seq
  let count = 0;
  for (let index = 0; index < 16; index++) {
    if (count >= 16) break;

    const randomLength = probability(2) ? 16 : 8;

    switch (randomLength) {
      case 16:
        count = count + 1;
        break;
      case 8:
        count = count + 2;
        break;
      default:
        break;
    }

    const randomIndex = Math.floor(Math.random() * notes.length);
    const randomNote = {
      isActive: probability(5) ? true : false,
      note: notes[randomIndex],
      length: randomLength,
      velocity: 127,
      shuuffle: 0,
    };
    randomizedNotes.push(randomNote);
  }
  return randomizedNotes;
};

// const gammaKey = notes.slice(3); // Получить подмассив начиная с третьего элемента
// gammaKey.push(...notes.slice(0, 3)); // Добавить элементы из начала исходного массива
// console.log(gammaKey);
