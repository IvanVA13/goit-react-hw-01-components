import styles from './Statistics.module.scss';
import React from 'react';
import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
  const widthItem = 270 / stats.length;
  const bgcolorGen = function () {
    return `rgb(${Math.trunc(240 * Math.random())},${Math.trunc(
      240 * Math.random(),
    )},${Math.trunc(240 * Math.random())})`;
  };
  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles['stat-list']}>
        {stats.map(({ id, label, percentage }) => (
          <li
            className={styles.item}
            key={id}
            style={{
              width: widthItem,
              height: widthItem,
              backgroundColor: bgcolorGen(),
            }}
          >
            <span className={styles.label}>{label}</span>
            <span className={styles.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
Statistics.defaultProps = {
  title: '',
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};
