import React, { useState } from 'react';

const minutesToMilliseconds = (minutes) => minutes * 1000 * 60;
const formatTime = (time) => time < 10 ? `0${time}` : time;

const Countdown = ({
  minutes = 0.25
}) => {
  const [ milliseconds ] = useState(minutesToMilliseconds(minutes));

  const minute = Math.floor(milliseconds / 1000 / 60) % 60;
  const second = Math.floor(milliseconds / 1000) % 60;

  return (
        <div>
        {formatTime(minute)}
        :
        {formatTime(second)}
        </div>
    );
};

export default Countdown;