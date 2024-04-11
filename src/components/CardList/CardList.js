import PropTypes from 'prop-types';
import React from 'react';

import styles from './CardList.module.css';

const CardList = ({ cardData }) => {
    return (
        <div className={styles.cardListContainer}>
            {cardData.map((imageProps, i) => (
                <div className={styles.cardList} key={i}>
                    <h2>{imageProps.title}</h2>
                    <p>{imageProps.description}</p>
                    <img className={styles.cardListContent} src={imageProps.src} />
                </div>
            ))}
        </div>
    );
};

CardList.propTypes = {
    cardData: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default CardList;
