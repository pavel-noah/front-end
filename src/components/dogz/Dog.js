import React from 'react';
import PropTypes from 'prop-types';

export default function Dog({ dogName, dogAge, dogWeight }) {
    return (<>
            <h1>{dogName}</h1>
            <ul style={{ listStyle: 'none' }}>
                <li>Age: {dogAge} </li>
                <li>Weight: {dogWeight} </li>
            </ul>
        </>
    );
}

Dog.propTypes = {
    dogName: PropTypes.string.isRequired,
    dogAge: PropTypes.string.isRequired,
    dogWeight: PropTypes.string.isRequired
};
