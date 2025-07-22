export const makeArrayIndex2 = (count: number, rows: number) => {
  // want to return 1 2 3 2 1 2 3 2 1 2 3 2 but minus 1

  // Range here is 1 to rows and back
  const adjustedCount = count + 1; // convert from zero-indexed
  console.log("adjustedCount", adjustedCount);
  const interval = rows * 2 - 2; // this is the number of unique values we return. 1 2 3 4 3 2
  console.log("interval", interval);
  // This simple calculation is fine for values up to rows
  let intervalPosition = adjustedCount % interval;
  console.log("adjustedPosition", adjustedCount);
  intervalPosition = intervalPosition === 0 ? rows : intervalPosition; // if count is rows we return rows
  console.log("intervalPosition", intervalPosition);

  console.log("at least we ran");

  if (intervalPosition > rows) {
    // count back
    console.log(`interval position is ${intervalPosition} and rows is ${rows}`);
    const correctionValue = intervalPosition - rows;
    console.log("interval position minus rows is ", correctionValue);
    intervalPosition = rows - correctionValue;
    console.log(
      `interval position ${intervalPosition} is rows ${rows} minus the correction value ${correctionValue}`,
      intervalPosition
    );
  }
  return intervalPosition - 1;
};

export const makeArrayIndex = (count: number, rows: number) => {
  // modulo arithmetic to get the right count value

  const interval = rows * 2 - 2; // this is the number of unique values we return. 1 2 3 4 3 2
  count = count % interval;

  if (count >= rows) {
    const ceilingValue = rows - 1;
    console.log(`count ${count} rows ${rows}`);
    const extra = count - ceilingValue;
    console.log(`extra ${extra}`);
    return ceilingValue - extra;
  }
  return count;
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
