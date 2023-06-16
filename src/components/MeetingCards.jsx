import React from "react";

const MeetingCards = ({ border, heading, time, location }) => {
  return (
    <div className={`border-l-4  p-3 my-3 ${border}`}>
      <h6 className="text-sm text-[#666666] ">{heading}</h6>
      <p className="text-xs text-[#999999]">{time}</p>
      <p className="text-xs text-[#999999]">{location}</p>
    </div>
  );
};

export default MeetingCards;
