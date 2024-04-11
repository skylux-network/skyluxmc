import PropTypes from 'prop-types';
import React from 'react';

import styles from './CardGrid.modules.css';

const CardGrid = ({ cardData }) => {
    return (
        <div className={styles.cardGridGrid}>
            {cardData.map((cardGridProps, i) => (
                <div className={styles.cardGrid} key={i}>
                    <img className={styles.cardGridIcon} src={cardGridProps.icon} />
                    <h2>{cardGridProps.title}</h2>
                    <p>{cardGridProps.description}</p>
                </div>
            ))}
        </div>
    );
};

CardGrid.propTypes = {
    cardData: PropTypes.arrayOf(
        PropTypes.shape({
            icon: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default CardGrid;