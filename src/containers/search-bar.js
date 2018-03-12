import React ,{ Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import fetchWeather from '../actions/index';

export  default class SearchBar extends Component {
    constructor(props) {
        super(props);
        // this is a component level state 
        this.state = { term: '' };
        // bind this context to the callback onInputChange
        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event) {
        this.setState({ term: event.target.value });
    }

    onFormSubmit(event) {        
        // event.preventDefault();
        console.log('test');
    }
    render() {
        return (
            <from  onSubmit={this.onFormSubmit} >
                <input
                    placeholder="Get a five day forcast in your favourite cities"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </from>
        );
    }
}

// function mapDispatchToProps(dispatch){
//     return bindActionCreators({fetchWeather},dispatch);
// }

// export default connect(null,mapDispatchToProps)(SearchBar);