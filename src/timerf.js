import React, {useState} from 'react';

const CounterFunction = () => {
    const [seconds, setTime] = useState(0);


window.setTimeout( () => setTime(seconds + 1), 1000);

return (
    <div>
        <h2>Brace Yourself champion ... as You have wasted {seconds} seconds</h2>
    </div>
);
};

export default CounterFunction;