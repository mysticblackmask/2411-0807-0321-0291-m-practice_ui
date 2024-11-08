export const randomNumber = (limit: number, plus?: number) => {
  return Math.floor(Math.random() * limit) + (plus || 0);
};

export const ArrayNumbers = (limit: number, count: number, plus?: number) => {
  let randomNumbers = [];
  for (let i = 0; i < count; i++) {
    randomNumbers.push(randomNumber(limit, plus));
  }
  return randomNumbers;
};
