import React from 'react';
import PropTypes from 'prop-types';
import Dog from './Dog';

export default function DogList({ dogs }) {
    const dogElement = dogs.map(dog => {
        return (
            <li key={dog._id} style={{ listStyle: 'none' }}>
                <Dog dogName={dog.name} dogAge={dog.age} dogWeight={dog.weight} />
            </li>
        );
    });

    return (<>
            <ul>
                {dogElement}
            </ul>
        </>
    );
}

DogList.propTypes = {
    dogs: PropTypes.array.isRequired
};
