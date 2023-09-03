import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css'; 

const Statistics = ({ title, stats }) => (
  <section className={styles.statistics}>
    {title && <h2 className={styles.title}>{title}</h2>}
    {stats.map(({ id, label, percentage }) => (
      <div key={id} className={styles.item}>
        <p className={styles.label}>{label}</p>
        <p className={styles.percentage}>{percentage}%</p>
      </div>
    ))}
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
