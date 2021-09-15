import './App.css';
import { useState, useEffect } from 'react';
import Options from './components/options/Options';
import Notification from './components/notification/Notification';
import Statistics from './components/statistics/Statistics';

function App() {
  const [countGood, setCountGood] = useState(0);
  const [countBad, setCountBad] = useState(0);
  const [countNeutral, setCountNeutral] = useState(0);
  const [total, setTotal] = useState(0);
  const [percentage, setPercentage] = useState(0);

  const countGoodFB = () => {
    setCountGood(state => state + 1);
  };

  const countBadFB = () => {
    setCountBad(state => state + 1);
  };

  const countNeutralFB = () => {
    setCountNeutral(state => state + 1);
  };

  useEffect(() => {
    setTotal(state => countGood + countBad + countNeutral);
  }, [countGood, countBad, countNeutral]);

  useEffect(() => {
    setPercentage(state => Math.round((countGood / total) * 100));
  }, [countGood, countBad, countNeutral, total]);

  return (
    <section className="section">
      <h2>Leave feedback</h2>
      <Options
        onLeaveGoodFB={countGoodFB}
        onLeaveNeutralFB={countNeutralFB}
        onLeaveBadFB={countBadFB}
      />
      {total === 0 ? (
        <Notification message="No feedback given" />
      ) : (
        <Statistics
          good={countGood}
          neutral={countNeutral}
          bad={countBad}
          total={total}
          percentage={percentage}
        />
      )}
    </section>
  );
}

export default App;
