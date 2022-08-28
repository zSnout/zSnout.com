// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

export function shuffle<T>(array: readonly T[]): T[] {
  const _array = [...array];
  let currentIndex = _array.length;
  let randomIndex: number;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [_array[currentIndex], _array[randomIndex]] = [
      _array[randomIndex],
      _array[currentIndex],
    ];
  }

  return _array;
}
