// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

export function shuffle<T>(array: readonly T[]): T[] {
  const _array = [...array];
  shuffleInPlace([...array]);
  return _array;
}

export function shuffleInPlace<T>(array: T[]) {
  let currentIndex = array.length;
  let randomIndex: number;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
}
