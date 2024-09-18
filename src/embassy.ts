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
      food: "",
    };

    let dinnerTime = "1200";

    const diplomat = (breakfast: string, lunch: string, dinner: string) => {
      console.log(`Breakfast is ${breakfast.food} at ${breakfast}`);
      console.log(`Lunch is ${breakfast.food} at ${lunch}`);
      console.log(`Dinner is ${dinner.food} at ${dinner}`);
    };

    setTimeout(() => diplomat(breakfastTime, lunchTime, dinnerTime));
  };
};
