import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DogList from '../components/dogz/DogList';
import { getDogs } from '../selectors/dogSelector';
import { fetchDogs } from '../actions/dogActions';

class DogContainer extends Component {

    static propTypes = {
        // loading: PropTypes.bool.isRequired,
        fetchDogs: PropTypes.func.isRequired,
        dogs: PropTypes.array.isRequired
    }

    componentDidMount() {
        this.props.fetchDogs();
    }

    render() {
        const { dogs } = this.props;
        // if(loading) return <h1>WAIT A SECOND, JEEZ</h1>;
        return (<>
        <DogList dogs={dogs} />
        {/* <Load onClick={fetch}/> */}
        </>);
    }

}

const mapStateToProps = state => {
    // loading: getLoading(state),\
    return { dogs: getDogs(state) };

};

const mapDispatchToProps = dispatch => ({
    fetchDogs() {
        dispatch(fetchDogs());
    }
});

export default connect(
    mapStateToProps, mapDispatchToProps)(DogContainer);
