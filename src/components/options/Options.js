import PropTypes from 'prop-types';

export default function FeedbackOptions({
  onLeaveGoodFB,
  onLeaveNeutralFB,
  onLeaveBadFB,
}) {
  return (
    <div>
      <button onClick={onLeaveGoodFB}>Good</button>
      <button onClick={onLeaveNeutralFB}>Neutral</button>
      <button onClick={onLeaveBadFB}>Bad</button>
    </div>
  );
}

FeedbackOptions.propTypes = {
  onLeaveGoodFB: PropTypes.func,
  onLeaveNeutralFB: PropTypes.func,
  onLeaveBadFB: PropTypes.func,
};
