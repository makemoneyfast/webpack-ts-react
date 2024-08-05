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

interface LSprofile {
  name: leSserafimTeamMemberNames;
  favouriteFood: foods[];
  instagramPostCount: number;
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

  // console.log(
  //   `Write a function that takes the StarLordTeamMembers array as an argument and returns a
  //   new array of team members sorted by the number of instagram posts made by their Le Sserafim bias.`,
  //   One(starLordTeamMembers)
  // );

  function One(starLordTeamMembers: profile[]) {
    return starLordTeamMembers.sort((a: profile, b: profile) => {
      const aBias = a.leSserafimBias;
      const aBiasName = leSserafimMembers.find(
        (element) => element.name == aBias
      );
      const aInsta = aBiasName.instagramPostCount;
      const bBias = b.leSserafimBias;
      const bBiasName = leSserafimMembers.find(
        (element) => element.name == bBias
      );
      const bInsta = bBiasName.instagramPostCount;
      return bInsta - aInsta;
    });
  }

  console.log(
    `Write a function that takes a list of food items and returns a new array with all all items not 
    liked by at least one member of Le Sserafim removed, sorted in order of decreasing health star rating.`
  );

  // function Two(foodsToSort: fooditems[]) {
  //   const likedFoods = foodsToSort.filter((food) => {
  // get all the members
  // for each member in turn, get the list of foods for that member
  // for each food in the list, compare it to the food we're evaluating
  // if food matches, return true
  // else return false
  // let checkFood = leSserafimMembers.some()

  //   })
  // }

  // console.log(
  //   `Write a function that takes the StarLordTeamMembers array as an argument and returns a
  //   new array of team member objects with all members who lack a spotify subscription filtered out.
  //   The array of favourite foods should be modified to contain full descriptions of the foods including
  //   health star ratings.`,
  //   Three(starLordTeamMembers)
  // );
  function Three(allMembers: profile[]) {
    // get all the starlord members
    // check whether each members spotify subscription is true or false
    // if true, keep them in the list,
    // if false, filter them out
    const membersWithSubscriptions = allMembers.filter(
      (member) => member.spotifySubscription === true
    );
    console.log("memberswithsubscriptions", membersWithSubscriptions);
    const modifiedMembers = membersWithSubscriptions.map((member) => {
      member.favouriteFood = member.favouriteFood.map((afoods) => {
        const foodWithStars = foodHealthStarRatings[afoods];
        console.log(foods[afoods]);
        return {
          food: foods[afoods],
          stars: foodWithStars.stars,
        };
      }) as unknown as any;
      console.log("member fav food", member.favouriteFood);
      return member;
    });
    return modifiedMembers;
    // for each of the remaining members:
    // get their array of favourite foods
    // look at the each food's description (health star rating) and add it into the favourite foods part of the member profile
  }

  // Cheat notes:

  // These are test functions - they say yes or no to something:

  const isBiggerThanFive = (x: number) => x > 5;
  const hasAtLeastFourItems = (list: number[]) => list.length >= 4;
  const isEven = (x: number) => x % 2 === 0;

  // With a test, you can filter a list (just tell it what to keep in or leave out)

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const filteredNumbers = numbers.filter(isBiggerThanFive);
  console.log("filtered numbers", filteredNumbers);

  // You can look for things in it.

  const firstNumberBiggerThanFive = numbers.find(isBiggerThanFive);
  console.log("first number bigger than five", firstNumberBiggerThanFive);

  // You can just see if the list contains something or not

  const hasANumberBiggerThanFive = numbers.some(isBiggerThanFive);
  console.log(
    "does it have a number bigger than five?",
    hasANumberBiggerThanFive
  );

  // This is a conversion function - it takes in one thing and returns something else

  const makeSandwich = (filling: string) => `Here is your ${filling} sandwich`;

  // You can map over a list and convert each item in it

  const ingredients = ["ham", "cheese", "pickle", "mayo"];
  const sandwiches = ingredients.map(makeSandwich);
  console.log("this is hopefully a list of sandwiches", sandwiches);

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

  console.log(
    `Write a function that takes the foodHealthStarRatings array as an argument and returns an array of starLordTeamMembers 
    who have favourite foods with a health star rating of three and order them in order of the sum of their 
    lesserafim bias' favourite food health stars ratings.`
  );

  console.log("what is going on. I have to write a function.");

  const aFunction: (input: fooditems[]) => profile[] = (input: fooditems[]) => {
    console.log("I am a function this is my input", input);

    console.log("I need to return an array. ");
    console.log("I have to return the starlord team members changed a bit");
    console.log(
      "I have to delete every team member who doesn't ahve a food favourite with three stars.."
    );

    const theTeamMembers = starLordTeamMembers;
    console.log("gonna try filtering this list", theTeamMembers);
    const theFilteredTeamMembers = theTeamMembers.filter((member) => {
      // console.log(
      //   "here we are inside the filter function, this is what we ahve to play with",
      //   member
      // );
      // console.log(
      //   "I have to eliminate this team member if they don't have a three star food item"
      // );
      // console.log(
      //   "🥨 this is what's in the food items array",
      //   member.favouriteFood
      // );
      // console.log(
      //   "I can't work with these as they are. Going to map to get something useful hopefully"
      // );
      const hopefullyUsefulRemappedFoods = member.favouriteFood.map(
        (itemToRemap) =>
          foodHealthStarRatings.find((item) => item.food === itemToRemap)
      );
      // console.log(
      //   "🌏 done mapping, this is what we got",
      //   hopefullyUsefulRemappedFoods
      // );
      // console.log(
      //   "Is there a three star item in this list? Going to try find again."
      // );
      const searchedForThreeStarItem = hopefullyUsefulRemappedFoods.find(
        (item) => {
          //console.log("⭐ We are examining this, is it three stars", item);
          const isItThreeStars = item.stars === 3;
          //console.log("🌟 is it three stars?", isItThreeStars);
          return isItThreeStars;
        }
      );
      console.log(
        "💀 we searched for three star items and we got",
        searchedForThreeStarItem
      );

      const returnValue = searchedForThreeStarItem !== undefined;
      console.log("I am returning", returnValue);
      return returnValue;
    });
    console.log("the filtered team members", theFilteredTeamMembers);

    return theFilteredTeamMembers; // this is wrong but baby steps
  };

  const theResult = aFunction(foodHealthStarRatings); // call the function and save what we get back

  console.log("Here is what my function return:", theResult);

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
