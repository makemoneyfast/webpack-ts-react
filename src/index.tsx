import { createRoot } from "react-dom/client";
import React, { useState } from "react";
import "./style.css";

const breakfast = {
  food: "ancient grains with organic yoghurt and artisanal fruit selection",
};

let breakfastTime = "0900";

const embassy = () => {
  const lunch = {
    food: "a selection of locally-sourced charcuterie",
  };

  let lunchTime = "1200";

  const bedroom = () => {
    let dinnerTime = "1200";

    const dinner = {
      food: "vegetarian lasagna from a farm",
    };

    // const theAssasin = (thePoison: string) => {
    //   dinner.food = thePoison;
    //   }
    //   theAssasin("Maccas fries");

    const diplomat = (b: string, l: string, d: string) => {
      console.log(`Breakfast is ${breakfast.food} at ${b}`);
      console.log(`Lunch is ${lunch.food} at ${l}`);
      console.log(`Dinner is ${dinner.food} at ${d}`);
    };

    setTimeout(() => diplomat(breakfastTime, lunchTime, dinnerTime));

    return {diplomat, dinner, dinnerTime};
  };
  let {diplomat, dinner, dinnerTime} = bedroom()


  const theAssasin = (thePoison: string) => {
    dinnerTime = "1900";
    }
    theAssasin("Maccas fries");

  return diplomat;
};

console.log("hi");

const theDiplomat = embassy();

theDiplomat("0900", "1200", "1800");

// const theAssasin = (thePoison: string) => {
// breakfast.food = thePoison;
// }
// theAssasin("Maccas fries");