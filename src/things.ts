export let input: string = "smart";
export let output: string = "easy";
export const one = () => "output";

export const two = (input: string) => input;

export const three = (inputValue: string) => input;

export const four = (input: string) => output;

export const five = (input: string) => (output = input);

export const six = (input: string) => {
  output = input;
  return "rising";
};

export const seven = (input: string) => {
  input = "girls never die";
  return output;
};

export const eight = (input: string, output: string) => {
  output = input;
  output = output.toUpperCase();
  return output;
};

export const nine = (input: string, callback: (input: string) => string) => {
  let output = callback(input);
  output = output.toUpperCase();
  return output;
};

export const ten = (input: string) => {
  let output = input;
  const get = () => output;
  const set = (input: string) => (output = input);
  return { get, set };
};

export const eleven = () => {
  const get = () => output;
  const set = (input: string) => (output = input);
  return { get, set };
};
