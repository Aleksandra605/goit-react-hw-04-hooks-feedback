import PropTypes from 'prop-types';
import s from './options.module.css';

export default function FeedbackOptions({
  onLeaveGoodFB,
  onLeaveNeutralFB,
  onLeaveBadFB,
}) {
  return (
    <div>
      <button onClick={onLeaveGoodFB} className={s.good}>
        Good
      </button>
      <button onClick={onLeaveNeutralFB} className={s.neutral}>
        Neutral
      </button>
      <button onClick={onLeaveBadFB} className={s.bad}>
        Bad
      </button>
    </div>
  );
}

FeedbackOptions.propTypes = {
  onLeaveGoodFB: PropTypes.func,
  onLeaveNeutralFB: PropTypes.func,
  onLeaveBadFB: PropTypes.func,
};
