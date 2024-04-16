import Link from '@docusaurus/Link';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './CardGrid.modules.css';

const CardGrid = ({ cardData }) => {
    return (
        <div className={styles.cardGrid}>
            {cardData.map((cardGridProps, i) => (
                <div className={styles.cardElement} key={i}>
                    {cardGridProps.url ? (
                        <Link to={cardGridProps.url} className={styles.cardLink}>
                            <img className={styles.cardIcon} src={cardGridProps.icon} alt={cardGridProps.title} />
                            <h2 className={styles.cardTitle}>{cardGridProps.title}</h2>
                            <p className={styles.cardDescription}>{cardGridProps.description}</p>
                        </Link>
                    ) : (
                        <>
                            <img className={styles.cardIcon} src={cardGridProps.icon} />
                            <h2>{cardGridProps.title}</h2>
                            <p>{cardGridProps.description}</p>
                        </>
                    )}
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
            url: PropTypes.string,
        })
    ).isRequired,
};

export default CardGrid;
