import React, { use, useEffect, useState } from "react";
import zaWarudo from "../assets/za-warudo.gif";


function Time()
 {
  const [time, setTime] = useState(0);
  const [timeReached, setTimeReached] = useState(false);
useEffect(() => {
    if (time < 5){

    
    const interval = setInterval(addOneTime, 1000);

   
    return () => {clearInterval(interval);
    };
}
    }, [time]); 
 

  function addOneTime() {
    setTime(time + 1);
    if (time === 4) {
      setTimeReached(true);
const body = document.querySelector("body");
body.classList.remove("default-color");
body.classList.add("alt-color");

    }
  }

  return (
    <section>
      <p>Compteur test : temps écoulé {time} </p>
        {timeReached && (
<>
<h2>Le temps est écoulé !</h2>
<img src={zaWarudo} alt="zaWarudo" />
</>
        )}
    </section>
  );
}

export default Time;
