export const makeArrayIndex = (count: number, rows: number) => {
  // want to return 1 2 3 2 1 2 3 2 1 2 3 2 but minus 1
  const adjustedCount = count + 1;
  const interval = rows * 2 - 2;
  let intervalPosition = adjustedCount % interval;
  intervalPosition = intervalPosition === 0 ? rows : intervalPosition;
  console.log(`interval position ${intervalPosition}`);

  if (intervalPosition > rows) {
    // count back
    console.log(`exceed IP: ${intervalPosition} rows ${rows}`);
    const correctionValue = intervalPosition - rows;
    console.log("correction value", correctionValue);
    intervalPosition -= correctionValue;
  }
  return intervalPosition - 1;
};

export const zigzag = (input: string, rows: number) => {
  console.log("rows", rows);
  const arrays: string[][] = [];
  arrays.length = rows;
  arrays.fill([], 0, rows);
  console.log("arrrays", arrays);

  const characters = input.split("");

  for (let count = 0; count < characters.length; count++) {
    const arrayIndex = makeArrayIndex(count, rows);
    console.log(`Array index is ${arrayIndex}`);
    arrays[arrayIndex].push(characters[count]);
  }

  return arrays.map((array) => array.join("")).join("");
};
