import { createRoot } from "react-dom/client";
import "./style.css";
import { useState } from "react";
import { NoticeMePromiseUtils, NoticeMeUtils } from "./noticeeMe.utils";

// Let's try this first
const noticeMe = () => alert("notice me senpai");
// And then this one
const noticeMeHarder = () => confirm("notice me senpai");

const noticeMeTimed = () => setTimeout(noticeMe, 5000);

// const noticeMeInt = () => (intervalID = setInterval(noticeMe, 5000));

const stopNoticingMe = () => clearInterval(intervalID);

let intervalID: any;

// Use NoticeMeUtils to:
// - Get senpai's phone number
// - Use senpai's phone number to clone his sim card and get his Apple ID password
// - Use senpai's Apple ID Password to clone his phone and find the location of his favourite restaurant
// - Use the coordinates to go to senpai's favourite restaurant. Hopefully he will notice you!

const noticeMeUtils = new NoticeMePromiseUtils();

// - Get senpai's phone number

const gotAppleIdPassword = (applePass: string) => {
  console.log('wee i got the Apple ID password:', applePass);
  // noticeMeUtils.clonePhone(applePass, gotRestaurantLocation);
}

// const cloneSim = (phoneNumber: number, gotAppleIdPassword: any) => {
//   noticeMeUtils.cloneSimCard(phoneNumber, gotAppleIdPassword) 
// }

const gotPhoneNumber = (phoneNumber: number) => {
  console.log('wee i got the phone number:', phoneNumber);
  const clonedSim = noticeMeUtils.cloneSimCard(phoneNumber)
  clonedSim.then(gotAppleIdPassword)
  // cloneSim(phoneNumber, gotAppleIdPassword)
  // noticeMeUtils.cloneSimCard(phoneNumber, gotAppleIdPassword);
}

// const getSenpaiPhoneNumber = () => {
//   noticeMeUtils.getPhoneNumber(gotPhoneNumber) 
// }

// const gotRestaurantLocation  = (location: { lat: number; long: number }) => {
//   console.log(`Wee, I got the restaurant's location: Latitude: ${location.lat}, Longitude: ${location.long}`);
// }

//Promise

// const getSenpaiPhoneNumberPromise = () => {
//   SenpaiPhoneNumber.then

// }

noticeMeUtils
  .getPhoneNumber()
  .then((phone) => noticeMeUtils.cloneSimCard(phone))
  .then((appleId) => noticeMeUtils.clonePhone(appleId))
  .then((location) => noticeMeUtils.goToRestaurant(location));

const SenpaiPhoneNumber = noticeMeUtils.getPhoneNumber()
SenpaiPhoneNumber.then(gotPhoneNumber)



const Container = () => {
  const [noticed, setNoticed] = useState(false);

  console.log("noticemeharder", noticeMeHarder());
  // Use noticeMeHarder to check whether senpai actually noticed you or not and

  const senpaiNoticedMe = () => {
    setNoticed(noticeMeHarder());
  };
  console.log("noticed", noticed);
  // execute setNoticed(true) if senpai did, in fact, notice you.

  return (
    <div className="container">
      {noticed ? (
        <h1 onClick={() => setNoticed(false)}>SENPAI NOTICED ME</h1>
      ) : undefined}
      <h2>Momo</h2>
      <img src="https://a.storyblok.com/f/178900/1060x596/4663a45721/dandadan-teaser-trailer-momo.jpg/m/filters:quality(95)format(webp)" />
      <p>
        Momo Ayase is a high school girl who believes in ghosts but not aliens,
        while her classmate Ken Takakura, whom Momo nicknames "Okarun", believes
        in aliens but not ghosts.
      </p>
      <label htmlFor="message">Say something to Momo</label>{" "}
      <input id="message" type="text" />
      <input type="button" value="send"/>
    </div>
  );
};
const domNode = document.getElementsByTagName("body");
const root = createRoot(domNode[0]);
root.render(<Container />);
// SenpaiPhoneNumber();
// cloneSim();
// noticeMe();
// noticeMeInt();
console.log('phoneno:',SenpaiPhoneNumber);