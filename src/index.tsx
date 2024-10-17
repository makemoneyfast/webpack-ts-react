import { createRoot } from "react-dom/client";
import "./style.css";
import { useState } from "react";

// Let's try this first
const noticeMe = () => alert("notice me senpai");
// And then this one
const noticeMeHarder = () => confirm("notice me senpai");

const noticeMeTimed = () => setTimeout(noticeMe, 5000);

const noticeMeInt = () => (intervalID = setInterval(noticeMe, 5000));

const stopNoticingMe = () => clearInterval(intervalID);

let intervalID: any;

const Container = () => {
  const [noticed, setNoticed] = useState(false);

  console.log('noticemeharder', noticeMeHarder());
  // Use noticeMeHarder to check whether senpai actually noticed you or not and

  const senpaiNoticedMe = () => {
      setNoticed(noticeMeHarder());
    };
  console.log('noticed', noticed);
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
      <input type="button" value="send" onClick={senpaiNoticedMe} />
    </div>
  );
};
const domNode = document.getElementsByTagName("body");
const root = createRoot(domNode[0]);
root.render(<Container />);
// noticeMe();
noticeMeHarder();
