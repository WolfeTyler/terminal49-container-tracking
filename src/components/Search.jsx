import React from 'react';
import { browserHistory as history } from 'react-router';
import { Jumbotron } from 'reactstrap';


class Search extends React.Component {
    constructor(props) {
        super(props);
        this._handleSubmit = this._handleSubmit.bind(this);
    }
    _handleSubmit(e) {
        e.preventDefault();
        history.push(`/bookings/${this.refs.userInput.value}`)
    }

    render() {
        return (
            <div className="search-page">
              <Jumbotron>
                <h2>Enter a B/L Number to Track:</h2>
                <p>Exclude the B/L prefix (i.e. TXG)</p>
                <form onSubmit={this._handleSubmit}>
                    <input ref="userInput" className="search-page__input" type="text" />
                    <button className="search-page__button">Search</button>
                </form>
              </Jumbotron>
            </div>
        );
    }
};

export default Search;
