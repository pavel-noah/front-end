import React from 'react';
import PropTypes from 'prop-types';

export default function Search({ searchInput, onChange, submitSearch }) {
    return (<>
            <form onSubmit={event => submitSearch(event, searchInput)}>
                Search For A Dog By Name: <input type="text" name="searchInput" value={searchInput} onChange={onChange}></input>
                <button>Search</button>
            </form>
        </>
    );
}

Search.propTypes = {
    searchInput: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    submitSearch: PropTypes.func.isRequired
};
