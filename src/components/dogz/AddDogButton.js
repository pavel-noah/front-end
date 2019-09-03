import React from 'react';
import PropTypes from 'prop-types';

export default function AddDogButton({ submitForm, onChange, name, age, weight }) {

    return (<>
            <form onSubmit={event => submitForm(event, name, age, weight)}>
                Name: <input onChange={onChange} type="text" name="name" value={name}></input>
                Age: <input onChange={onChange} type="text" name="age" value={age}></input>
                Weight: <input onChange={onChange} type="text" name="weight" value={weight}></input>
                <button>submit dog</button>
            </form>
        </>
    );
}

AddDogButton.propTypes = {
    submitForm: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired,
    weight: PropTypes.string.isRequired
};
