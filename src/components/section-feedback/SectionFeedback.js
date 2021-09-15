import React from 'react';
import Notification from '../notification/Notification';
import Statistics from '../statistics/Statistics';
import Options from '../options/Options';

export default function Section({
  title,
  countGoodFB,
  countNeutralFB,
  countBadFB,
  total,
  good,
  neutral,
  bad,
  percentage,
}) {
  return (
    <section>
      <h2>{title}</h2>
      <Options
        onLeaveGoodFB={countGoodFB}
        onLeaveNeutralFB={countNeutralFB}
        onLeaveBadFB={countBadFB}
      />
      {total === 0 ? (
        <Notification message="No feedback given" />
      ) : (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          percentage={percentage}
        />
      )}
    </section>
  );
}
