import PropTypes from 'prop-types';
import s from './statistics.module.css';

export default function Statistics({ good, neutral, bad, total, percentage }) {
  return (
    <ul className={s.list}>
      <li className={s.item}>
        Good <span>{good}</span>
      </li>
      <li className={s.item}>
        Neutral <span>{neutral}</span>
      </li>
      <li className={s.item}>
        Bad <span>{bad}</span>
      </li>
      <li className={s.item}>
        Total<span>{total}</span>
      </li>
      <li className={s.item}>
        Positive feedback <span>{percentage}%</span>
      </li>
    </ul>
  );
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  percentage: PropTypes.number,
};
