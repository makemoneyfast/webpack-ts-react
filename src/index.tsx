import { createRoot } from "react-dom/client";
import React, { useState } from "react";
import "./style.css";

enum leSserafimTeamMemberNames {
  Sakura,
  Chaewon,
  Yunjin,
  Kazuha,
  Eunchae,
}
enum foods {
  pringles,
  onigiri,
  cucumbers,
  bagels,
  ramen,
  sushi,
  curry,
  pizza,
  burgers,
  fries,
  iceCream,
  cake,
  cookies,
  chocolate,
  candy,
  fruit,
  vegetables,
  salad,
  soup,
  bread,
  pasta,
  rice,
  noodles,
  dumplings,
  tacos,
  burritos,
  sandwiches,
  wraps,
}
interface profile {
  name: string;
  leSserafimBias: leSserafimTeamMemberNames;
  spotifySubscription: boolean;
  favouriteFood: foods[];
}

const Container = () => {
  const starLordTeamMembers = [
    {
      name: "Elysia",
      leSserafimBias: leSserafimTeamMemberNames.Kazuha,
      spotifySubscription: true,
      favouriteFood: [
        foods.curry,
        foods.pringles,
        foods.dumplings,
        foods.sandwiches,
      ],
    },
    {
      name: "Alex",
      leSserafimBias: leSserafimTeamMemberNames.Sakura,
      spotifySubscription: true,
      favouriteFood: [foods.bagels, foods.ramen, foods.chocolate],
    },
    {
      name: "Ken",
      leSserafimBias: leSserafimTeamMemberNames.Eunchae,
      spotifySubscription: true,
      favouriteFood: [foods.ramen, foods.vegetables, foods.pasta],
    },
    {
      name: "RJ",
      leSserafimBias: leSserafimTeamMemberNames.Chaewon,
      spotifySubscription: true,
      favouriteFood: [foods.cucumbers, foods.rice, foods.curry],
    },
    {
      name: "Marco",
      leSserafimBias: leSserafimTeamMemberNames.Sakura,
      spotifySubscription: false,
      favouriteFood: [foods.tacos, foods.burritos, foods.sushi],
    },
    {
      name: "Willy",
      leSserafimBias: leSserafimTeamMemberNames.Yunjin,
      spotifySubscription: false,
      favouriteFood: [foods.burgers, foods.noodles, foods.wraps],
    },
  ];

  const leSserafimMembers = [
    {
      name: leSserafimTeamMemberNames.Sakura,
      favouriteFood: [foods.cake, foods.pasta, foods.pringles],
      instagramPostCount: 604,
    },
    {
      name: leSserafimTeamMemberNames.Chaewon,
      favouriteFood: [foods.curry, foods.ramen, foods.vegetables],
      instagramPostCount: 995,
    },
    {
      name: leSserafimTeamMemberNames.Kazuha,
      favouriteFood: [foods.burgers, foods.pizza],
      instagramPostCount: 501,
    },
    {
      name: leSserafimTeamMemberNames.Eunchae,
      favouriteFood: [
        foods.dumplings,
        foods.noodles,
        foods.rice,
        foods.onigiri,
        foods.salad,
      ],
      instagramPostCount: 114,
    },
    {
      name: leSserafimTeamMemberNames.Yunjin,
      favouriteFood: [foods.candy],
      instagramPostCount: 1366,
    },
  ];

  interface fooditems {
    food: foods;
    stars: number;
  }

  const foodHealthStarRatings = [
    { food: foods.pringles, stars: 1 },
    { food: foods.onigiri, stars: 4 },
    { food: foods.cucumbers, stars: 5 },
    { food: foods.bagels, stars: 3 },
    { food: foods.ramen, stars: 3 },
    { food: foods.sushi, stars: 3 },
    { food: foods.curry, stars: 2 },
    { food: foods.pizza, stars: 2 },
    { food: foods.burgers, stars: 2 },
    { food: foods.fries, stars: 1 },
    { food: foods.iceCream, stars: 1 },
    { food: foods.cake, stars: 1 },
    { food: foods.cookies, stars: 1 },
    { food: foods.chocolate, stars: 1 },
    { food: foods.candy, stars: 1 },
    { food: foods.fruit, stars: 5 },
    { food: foods.vegetables, stars: 5 },
    { food: foods.salad, stars: 5 },
    { food: foods.soup, stars: 4 },
    { food: foods.bread, stars: 3 },
    { food: foods.pasta, stars: 3 },
    { food: foods.rice, stars: 3 },
    { food: foods.noodles, stars: 3 },
    { food: foods.dumplings, stars: 3 },
    { food: foods.tacos, stars: 3 },
    { food: foods.burritos, stars: 3 },
    { food: foods.sandwiches, stars: 4 },
    { food: foods.wraps, stars: 4 },
  ];

  console.log("* - ".repeat(10));

  // What input does it take?
  // What does it return?
  // What side effects does it have?

  let input: string = "smart";
  let output: string = "easy";

  const one = () => "output";

  const two = (input: string) => input;
  console.log("two:", two('two'));

  const three = (inputValue: string) => input;
  console.log("three:", three('input'));

  const four = (input: string) => output;
  console.log("four:", four('four'));

  console.log("output start", output);
  const five = (input: string) => (output = input);
  console.log("five:", five('five'));
  console.log("output end", output);

  console.log("output start2:", output);
  const six = (input: string) => {
    output = input;
    return "rising";
  };
  console.log("six:", six('six'));
  console.log("output end2", output);


  console.log("output start7:", input);
  const seven = (input: string) => {
    input = "girls never die";
    return output;
  };
  console.log("seven:", seven("seven"));
  console.log("output end7:", input, output);

  console.log("output start8:", input);
  const eight = (input: string, output: string) => {
    output = input;
    output = output.toUpperCase();
    return output;
  };
  console.log("eight", eight('hello', 'goodbye'));
  console.log("output end8:", input, output);

  const nine = (input: string, callback: (input: string) => string) => {
    let output = callback(input);
    console.log("here", output);
    output = output.toUpperCase();
    return output;
  };
  console.log("nine:", nine("hello", two))


  const ten = (input: string) => {
    let output = input;
    const get = () => output;
    const set = (input: string) => (output = input);
    return { get, set };
  };
  const lala = ten('apple');
  const lolo = ten('pear');
  // console.log("ten", ten("apple"), lala.set('watermelon'));
  console.log(lala.get(), lala.set('watermelon'), lala.get())


  const eleven = () => {
    const get = () => output;
    const set = (input: string) => (output = input);
    return { get, set };
  };

  console.log("* - ".repeat(10));
  return (
    <div className="container">
      <h3>Arrays</h3>
    </div>
  );
};
const domNode = document.getElementsByTagName("body");
const root = createRoot(domNode[0]);
root.render(<Container />);
