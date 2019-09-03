import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DogList from '../components/dogz/DogList';
import { getDogs, getName, getAge, getWeight, getSearchInput } from '../selectors/dogSelector';
import { fetchDogs, updateName, updateAge, updateWeight, createDog, updateSearchInput, searchDogs } from '../actions/dogActions';
import AddDogButton from '../components/dogz/AddDogButton';
import Search from '../components/dogz/Search';

class DogContainer extends Component {

    static propTypes = {
        fetchDogs: PropTypes.func.isRequired,
        submitForm: PropTypes.func.isRequired,
        handleChange: PropTypes.func.isRequired,
        dogs: PropTypes.array.isRequired,
        name: PropTypes.string.isRequired,
        age: PropTypes.string.isRequired,
        weight: PropTypes.string.isRequired,
        searchInput: PropTypes.string.isRequired,
        updateSearchInput: PropTypes.func.isRequired,
        submitSearch: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.fetchDogs();
    }

    render() {
        const { dogs } = this.props;
        return (<>
        <Search 
            onChange={this.props.handleChange} 
            searchInput={this.props.searchInput} 
            submitSearch={this.props.submitSearch} />
        <DogList dogs={dogs} />
        <AddDogButton 
            onChange={this.props.handleChange} 
            submitForm={this.props.submitForm} 
            name={this.props.name} 
            age={this.props.age} 
            weight={this.props.weight}/>
        </>);
    }
}

const handleChangeActionMap = {
    name: updateName,
    age: updateAge,
    weight: updateWeight,
    searchInput: updateSearchInput
};

const mapStateToProps = state => {
    return { 
        dogs: getDogs(state),
        name: getName(state),
        age: getAge(state),
        weight: getWeight(state),
        searchInput: getSearchInput(state) 
    };
};

const mapDispatchToProps = dispatch => ({
    fetchDogs() {
        dispatch(fetchDogs());
    },
  
    handleChange({ target }) {
        const action = handleChangeActionMap[target.name](target.value);
        dispatch(action);
    },

    submitForm(event, nameInput, ageInput, weightInput) {
        event.preventDefault();
        dispatch(createDog(nameInput, ageInput, weightInput));
    },

    submitSearch(event, searchInput) {
        event.preventDefault();
        dispatch(searchDogs(searchInput)); 
    }
});

export default connect(
    mapStateToProps, mapDispatchToProps)(DogContainer);
