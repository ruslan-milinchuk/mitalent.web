import { randomNumb } from "./randomNumb";

export const randomNumbList = (allListLength, qtyRandomNumbers) => {
  let arrRandomNumbers = [];
  for (let i = 0; arrRandomNumbers.length !== qtyRandomNumbers; i++) {
    const randNumber = randomNumb(0, allListLength - 1);
    if (arrRandomNumbers.indexOf(randNumber) === -1) {
      arrRandomNumbers.push(randNumber);
    }
  }
  return arrRandomNumbers;
};
