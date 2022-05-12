import React, { useState } from 'react';

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  if (total === 0) {
    return <h2>No feedback given</h2>;
  }
  const average = (good - bad) / total;
  const positive = (good / total) * 100;
  return (
    <>
      <h1>Statistics: </h1>
      <StatisticsLine text="Good" value={good} />
      <StatisticsLine text="Neutral" value={neutral} />
      <StatisticsLine text="Bad" value={bad} />
      <StatisticsLine text="All" value={total} />
      <StatisticsLine text="Average" value={average} />
      <StatisticsLine text="Positive" value={positive} />
    </>
  );
};

const StatisticsLine = ({ text, value }) => {
  return (
    <>
      <table>
        <tbody>
          <tr>
            <td>{text}</td>
            <td>{value}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

const Button = ({ good, setGood, neutral, setNeutral, bad, setBad }) => {
  const handleGood = () => {
    setGood(good + 1);
  };
  const handleNeutral = () => {
    setNeutral(neutral + 1);
  };
  const handleBad = () => {
    setBad(bad + 1);
  };
  return (
    <div>
      <h1>Give feedback: </h1>
      <button onClick={handleGood}>Good</button>
      <button onClick={handleNeutral}>Neutral</button>
      <button onClick={handleBad}>Bad</button>
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  return (
    <>
      <Button good={good} setGood={setGood} neutral={neutral} setNeutral={setNeutral} bad={bad} setBad={setBad} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  );
};

export default App;
