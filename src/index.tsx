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

  console.log("Arrays 2");
  console.log("* - ".repeat(10));

  console.log(
    `Write a function that takes the StarLordTeamMembers array as an argument and returns a 
    new array of team members sorted by the number of instagram posts made by their Le Sserafim bias.`
  );

  console.log(
    `Write a function that takes a list of food items and returns a new array with all all items not 
    liked by at least one member of Le Sserafim removed, sorted in order of decreasing health star rating.`
  );

  console.log(
    `Write a function that takes the StarLordTeamMembers array as an argument and returns a 
    new array of team member objects with all members who lack a spotify subscription filtered out.
    The array of favourite foods should be modified to contain full descriptions of the foods including 
    health star ratings.`
  );

  console.log(
    `Write a function that takes the StarLordTeamMembers array as an argument and returns a 
    new array of objects that contain the only team member name and a list of favourite foods
    that combines their own preferences with those of their favourite Le Sserafim member, with
    duplicates removed.`
  );

  console.log(
    `Write a function that does what the previous question does, but that also adds a property containing
    the average health star rating of all the food items.`
  );

  console.log(
    `Write a function that takes a list of food items and filters out all items not liked by at least one
    member of Le Sserafim.`
  );
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
