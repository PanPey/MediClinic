import React from "react";
import JoyRide from "react-joyride";

const TOUR_STEPS = [
    {
      target: ".heading",
      content: "This is MediClinic",
      disableBeacon: true
    },
    {
      target: ".user-signup",
      content: "This is MediClinic",
      disableBeacon: true
    }
  ];

  const Tour = () => {
    return (
      <>
        <JoyRide
          steps={TOUR_STEPS}
          continuous={true}
          showSkipButton={true}
          locale={{
            last: "End tour",
            skip: "Close tour"
          }}
        />
      </>
    );
  };
  export default Tour;